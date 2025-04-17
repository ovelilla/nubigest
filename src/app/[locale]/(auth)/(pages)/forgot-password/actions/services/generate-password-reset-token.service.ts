// Vendors
import { v4 as uuidv4 } from "uuid";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type { GeneratePasswordResetTokenProps } from "./types/generate-password-reset-token.types";

const generatePasswordResetToken = async ({
  email,
}: GeneratePasswordResetTokenProps) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await prisma.passwordResetToken.findFirst({
    where: { email },
    select: { id: true },
  });

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export { generatePasswordResetToken };
