"use server";
// Vendors
import bcryptjs from "bcryptjs";
import { getTranslations } from "next-intl/server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { getSignUpSchema } from "../schemas/signup.schema";
// Types
import type {
  SignUpActionProps,
  SignUpActionReturn,
} from "./types/signup.action.types";
// Utils
import { generateVerificationToken } from "@/app/[locale]/(auth)/utils/token/generate-verification-token.util";
import { sendVerificationTokenEmail } from "@/app/[locale]/(auth)/utils/email/send-verification-token-email.util";

const signUpAction = async ({
  values,
}: SignUpActionProps): Promise<SignUpActionReturn> => {
  const t = await getTranslations("signup");

  const signUpSchema = getSignUpSchema(t);
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: t("actions.signup.error.invalidFields") };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (existingUser) {
    return { error: t("actions.signup.error.userAlreadyExists") };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationTokenEmail({
    email: verificationToken.email,
    token: verificationToken.token,
  });

  return { success: t("actions.signup.success.verificationEmail") };
};

export { signUpAction };
