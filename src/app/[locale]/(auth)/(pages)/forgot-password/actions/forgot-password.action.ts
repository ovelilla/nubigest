"use server";
// Vendors
import { getTranslations } from "next-intl/server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { getForgotPasswordSchema } from "../schemas/forgot-password.schema";
// Types
import type {
  ForgotPasswordActionProps,
  ForgotPasswordActionReturn,
} from "./types/forgot-password.action.types";
// Utils
import { generatePasswordResetToken } from "./services/generate-password-reset-token.service";
import { sendPasswordResetTokenEmail } from "./services/send-password-reset-token-email.service";

const forgotPasswordAction = async ({
  values,
}: ForgotPasswordActionProps): Promise<ForgotPasswordActionReturn> => {
  const t = await getTranslations("forgotPassword");

  const forgotPasswordSchema = getForgotPasswordSchema(t);
  const validatedFields = forgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: t("actions.forgotPassword.error.invalidFields"),
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (!existingUser) {
    return {
      status: "error",
      message: t("actions.forgotPassword.error.userNotFound"),
    };
  }

  const passwordForgotPasswordToken = await generatePasswordResetToken({
    email,
  });

  await sendPasswordResetTokenEmail({
    email: passwordForgotPasswordToken.email,
    token: passwordForgotPasswordToken.token,
  });

  return {
    status: "success",
    message: t("actions.forgotPassword.success"),
  };
};

export { forgotPasswordAction };
