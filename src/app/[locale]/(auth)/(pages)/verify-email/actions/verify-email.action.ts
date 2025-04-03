"use server";
// Vendors
import { getTranslations } from "next-intl/server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type {
  VerifyEmailActionProps,
  VerifyEmailActionReturn,
} from "./types/verify-emails.action.types";

const verifyEmailAction = async ({
  token,
}: VerifyEmailActionProps): Promise<VerifyEmailActionReturn> => {
  const t = await getTranslations("verifyEmail.actions.verifyEmail");

  if (!token) {
    return {
      status: "error",
      message: t("error.missingToken"),
    };
  }

  const existingToken = await prisma.verificationToken.findUnique({
    where: { token },
    select: { id: true, email: true, expires: true },
  });

  if (!existingToken) {
    return {
      status: "error",
      message: t("error.invalidToken"),
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return {
      status: "error",
      message: t("error.expiredToken"),
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: { email: existingToken.email },
    select: { id: true },
  });

  if (!existingUser) {
    return {
      status: "error",
      message: t("error.userNotFound"),
    };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return {
    status: "success",
    message: t("success"),
  };
};

export { verifyEmailAction };
