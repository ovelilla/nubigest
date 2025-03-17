"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type {
  VerificationActionProps,
  VerificationActionReturn,
} from "./types/verifications.action.types";

const verificationAction = async ({
  token,
}: VerificationActionProps): Promise<VerificationActionReturn> => {
  if (!token) {
    return { error: "Falta el token" };
  }

  const existingToken = await prisma.verificationToken.findUnique({
    where: { token },
  });

  if (!existingToken) {
    return { error: "El token no existe" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "El token ha expirado" };
  }

  const existingUser = await prisma.user.findFirst({
    where: { email: existingToken.email },
  });

  if (!existingUser) {
    return { error: "El email no existe" };
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

  return { success: "Email verificado" };
};

export { verificationAction };
