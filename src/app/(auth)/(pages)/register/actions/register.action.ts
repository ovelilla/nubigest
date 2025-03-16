"use server";
// Vendors
import bcryptjs from "bcryptjs";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { registerSchema } from "../schemas/register.schema";
// Types
import type {
  RegisterActionProps,
  RegisterActionReturn,
} from "./types/register.action.types";
// Utils
import { generateVerificationToken } from "../../../utils/token/generate-verification-token.util";
import { sendVerificationTokenEmail } from "../../../utils/email/send-verification-token-email.util";

const registerAction = async ({
  values,
}: RegisterActionProps): Promise<RegisterActionReturn> => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos" };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "El email ya está en uso" };
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

  return { success: "Email de verificación enviado" };
};

export { registerAction };
