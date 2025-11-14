"use server";
// Vendors
// import { AuthError } from "next-auth";
import { getLocale, getTranslations } from "next-intl/server";
// i18n
import { redirect } from "@/i18n/navigation";
// Libs
import { prisma } from "@/lib/prisma";
// import { signIn } from "@/lib/auth";
// Schemas
import { getSignInSchema } from "../schemas/signin.schema";
// Services
import { generateVerificationToken } from "@/app/[locale]/(auth)/(pages)/signup/actions/services/generate-verification-token.service";
import { sendVerificationTokenEmail } from "@/app/[locale]/(auth)/(pages)/signup/actions/services/send-verification-token-email.service";
import { generateTwoFactorToken } from "./services/generate-two-factor-token.service";
import { sendTwoFactorTokenEmail } from "./services/send-two-factor-token-email.service";
// Types
import type {
  SignInActionProps,
  SignInActionReturn,
} from "./types/signin.actions.types";

const signInAction = async ({
  values,
  // }: SignInActionProps): Promise<SignInActionReturn> => {
}: SignInActionProps) => {
  const locale = await getLocale();
  const t = await getTranslations("signin");

  const signInSchema = getSignInSchema(t);
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: t("actions.signin.error.invalidFields"),
    };
  }

  const { email, password, otp } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        // password: true,
        emailVerified: true,
        // isTwoFactorEnabled: true,
      },
    });

    // if (!existingUser || !existingUser.password) {
    if (!existingUser) {
      return {
        status: "error",
        message: t("actions.signin.error.invalidCredentials"),
      };
    }

    // if (!existingUser.emailVerified) {
    //   const verificationToken = await generateVerificationToken({ email });

    //   await sendVerificationTokenEmail({
    //     email: verificationToken.email,
    //     token: verificationToken.token,
    //   });

    //   return {
    //     status: "verificationRequired",
    //     message: t("actions.signin.intermediate.verificationRequired"),
    //   };
    // }

    // if (existingUser.isTwoFactorEnabled && existingUser.email && !otp) {
    //   const twoFactorToken = await generateTwoFactorToken({
    //     email: existingUser.email,
    //   });

    //   await sendTwoFactorTokenEmail({
    //     email: twoFactorToken.email,
    //     token: twoFactorToken.token,
    //   });

    //   return {
    //     status: "twoFactorRequired",
    //     message: t("actions.signin.intermediate.twoFactorRequired"),
    //   };
    // }

    // if (existingUser.isTwoFactorEnabled && existingUser.email && otp) {
    //   const twoFactorToken = await prisma.twoFactorToken.findFirst({
    //     where: { eºmail: existingUser.email },
    //     select: { id: true, token: true, expires: true },
    //   });

    //   if (!twoFactorToken) {
    //     return {
    //       status: "error",
    //       message: t("actions.signin.error.invalidOtp"),
    //     };
    //   }

    //   if (twoFactorToken.token !== otp) {
    //     return {
    //       status: "error",
    //       message: t("actions.signin.error.invalidOtp"),
    //     };
    //   }

    //   const hasExpired = new Date(twoFactorToken.expires) < new Date();

    //   if (hasExpired) {
    //     return {
    //       status: "error",
    //       message: t("actions.signin.error.expiredOtp"),
    //     };
    //   }

    //   await prisma.twoFactorToken.delete({
    //     where: { id: twoFactorToken.id },
    //   });

    //   const existingConfirmation =
    //     await prisma.twoFactorConfirmation.findUnique({
    //       where: { userId: existingUser.id },
    //       select: { id: true },
    //     });

    //   if (existingConfirmation) {
    //     await prisma.twoFactorConfirmation.delete({
    //       where: { id: existingConfirmation.id },
    //     });
    //   }

    //   await prisma.twoFactorConfirmation.create({
    //     data: {
    //       userId: existingUser.id,
    //     },
    //   });
    // }
  } catch (error) {
    console.error("Error in signInAction:", error);
    return {
      status: "error",
      message: t("actions.signin.error.generic"),
    };
  }

  // try {
  //   await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });

  //   return {
  //     status: "success",
  //     message: t("actions.signin.success"),
  //   };
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     return redirect({ href: "/auth-error", locale });
  //   }

  //   throw error;
  // }
};

export { signInAction };
