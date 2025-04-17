// Vendors
import { v4 as uuidv4 } from "uuid";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type { GenerateVerificationTokenProps } from "./types/generate-verification-token.types";

const generateVerificationToken = async ({
  email,
}: GenerateVerificationTokenProps) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await prisma.verificationToken.findFirst({
    where: { email },
    select: { id: true },
  });

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

export { generateVerificationToken };
