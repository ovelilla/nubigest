// Vendors
import crypto from "crypto";
// Libs
import { prisma } from "@/lib/prisma";
// Types
import type { GenerateTwoFactorTokenProps } from "./types/generate-two-factor-token.types";

const generateTwoFactorToken = async ({
  email,
}: GenerateTwoFactorTokenProps) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  // const existingToken = await prisma.twoFactorToken.findFirst({
  //   where: { email },
  //   select: { id: true },
  // });

  // if (existingToken) {
  //   await prisma.twoFactorToken.delete({
  //     where: {
  //       id: existingToken.id,
  //     },
  //   });
  // }

  // const twoFactorToken = await prisma.twoFactorToken.create({
  //   data: {
  //     email,
  //     token,
  //     expires,
  //   },
  // });

  // return twoFactorToken;
};

export { generateTwoFactorToken };
