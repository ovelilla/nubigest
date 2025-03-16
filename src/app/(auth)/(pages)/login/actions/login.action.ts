"use server";
// Vendors
import { AuthError } from "next-auth";
// Auth
import { signIn } from "../../../../../auth";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { loginSchema } from "../schemas/login.schema";
// Types
import type {
  LoginActionProps,
  LoginActionReturn,
} from "./types/login.action.types";
// Utils
import { generateVerificationToken } from "../../../utils/token/generate-verification-token.util";
import { sendVerificationTokenEmail } from "../../../utils/email/send-verification-token-email.util";

const loginAction = async ({
  values,
}: LoginActionProps): Promise<LoginActionReturn | undefined> => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Campos inválidos" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Credenciales inválidas" };
  }

  if (!existingUser.isAuthorized) {
    return { error: "Usuario no autorizado" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return { success: "Email de verificación enviado" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciales inválidas" };
        default:
          return { error: "Algo salió mal" };
      }
    }

    throw error;
  }
};

export { loginAction };
