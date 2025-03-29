"use server";
// Vendors
import { AuthError } from "next-auth";
import { getTranslations } from "next-intl/server";
// Libs
import { prisma } from "@/lib/prisma";
import { signIn } from "@/lib/auth";
// Schemas
import { getSignInSchema } from "../schemas/signin.schema";
// Types
import type {
  SignInActionProps,
  SignInActionReturn,
} from "./types/signin.action.types";
// Utils
import { generateTwoFactorToken } from "@/app/[locale]/(auth)/utils/token/generate-two-factor-token.util";
import { generateVerificationToken } from "@/app/[locale]/(auth)/utils/token/generate-verification-token.util";
import { sendTwoFactorAuthenticationEmail } from "@/app/[locale]/(auth)/utils/email/send-two-factor-authentication-email.util";
import { sendVerificationTokenEmail } from "@/app/[locale]/(auth)/utils/email/send-verification-token-email.util";

const signInAction = async ({
  values,
}: SignInActionProps): Promise<SignInActionReturn | undefined> => {
  const t = {
    schema: await getTranslations("signin.schemas.signin"),
    action: await getTranslations("signin.actions.signin"),
  };

  const signInSchema = getSignInSchema(t.schema);
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: t.action("error.invalidFields") };
  }

  const { email, password, otp } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
      emailVerified: true,
      isTwoFactorEnabled: true,
    },
  });

  if (!existingUser?.email || !existingUser?.password) {
    return { error: t.action("error.invalidCredentials") };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: t.action("success.verificationEmail") };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && !otp) {
    const twoFactorToken = await generateTwoFactorToken(existingUser.email);

    await sendTwoFactorAuthenticationEmail({
      email: twoFactorToken.email,
      token: twoFactorToken.token,
    });

    return { twoFactor: true };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email && otp) {
    const twoFactorToken = await prisma.twoFactorToken.findFirst({
      where: { email: existingUser.email },
      select: { id: true, token: true, expires: true },
    });

    if (!twoFactorToken) {
      return { error: t.action("error.invalidOtp") };
    }

    if (twoFactorToken.token !== otp) {
      return { error: t.action("error.invalidOtp") };
    }

    const hasExpired = new Date(twoFactorToken.expires) < new Date();

    if (hasExpired) {
      return { error: t.action("error.expiredOtp") };
    }

    await prisma.twoFactorToken.delete({
      where: { id: twoFactorToken.id },
    });

    const existingConfirmation = await prisma.twoFactorConfirmation.findUnique({
      where: { userId: existingUser.id },
      select: { id: true },
    });

    if (existingConfirmation) {
      await prisma.twoFactorConfirmation.delete({
        where: { id: existingConfirmation.id },
      });
    }

    await prisma.twoFactorConfirmation.create({
      data: {
        userId: existingUser.id,
      },
    });
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: t.action("error.invalidCredentials") };
        default:
          return { error: t.action("error.generic") };
      }
    }

    throw error;
  }
};

export { signInAction };
