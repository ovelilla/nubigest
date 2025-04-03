"use server";
// Vendors
import { getTranslations } from "next-intl/server";
import bcrypt from "bcryptjs";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { getResetPasswordSchema } from "../schemas/reset-password.schema";
// Types
import {
  ResetPasswordActionProps,
  ResetPasswordActionReturn,
} from "./types/reset-password.action.types";

const resetPasswordAction = async ({
  values,
  token,
}: ResetPasswordActionProps): Promise<ResetPasswordActionReturn> => {
  const t = await getTranslations("resetPassword");

  if (!token) {
    return {
      status: "error",
      message: t("actions.resetPassword.error.missingToken"),
    };
  }

  const resetPasswordSchema = getResetPasswordSchema(t);
  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: t("actions.resetPassword.error.invalidFields"),
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
      email: true,
      expires: true,
    },
  });

  if (!existingToken) {
    return {
      status: "error",
      message: t("actions.resetPassword.error.invalidToken"),
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return {
      status: "error",
      message: t("actions.resetPassword.error.expiredToken"),
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: existingToken.email,
    },
    select: {
      id: true,
    },
  });

  if (!existingUser) {
    return {
      status: "error",
      message: t("actions.resetPassword.error.userNotFound"),
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return {
    status: "success",
    message: t("actions.resetPassword.success"),
  };
};

export { resetPasswordAction };
