"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { resetSchema } from "../schemas/reset.schema";
// Types
import type {
  ResetActionProps,
  ResetActionReturn,
} from "./types/reset.action.types";
// Utils
import { generatePasswordResetToken } from "../../../utils/token/generate-password-reset-token.util";
import { sendResetPasswordEmail } from "../../../utils/email/send-reset-password-email.util";

const resetAction = async ({
  values,
}: ResetActionProps): Promise<ResetActionReturn> => {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos" };
  }

  const { email } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    return { error: "El email no existe" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendResetPasswordEmail({
    email: passwordResetToken.email,
    token: passwordResetToken.token,
  });

  return { success: "Email de recuperación enviado" };
};

export { resetAction };
