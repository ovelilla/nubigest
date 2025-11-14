"use server";
// Vendors
import { getTranslations } from "next-intl/server";
// import bcryptjs from "bcryptjs";
// Libs
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
// Schemas
import { getSignUpSchema } from "../schemas/signup.schema";
// Services
// import { generateVerificationToken } from "./services/generate-verification-token.service";
// import { sendVerificationTokenEmail } from "./services/send-verification-token-email.service";
// Types
import type {
  SignUpActionProps,
  SignUpActionReturn,
} from "./types/signup.actions.types";

const signUpAction = async ({
  values,
}: SignUpActionProps): Promise<SignUpActionReturn> => {
  const t = await getTranslations("signup");

  const signUpSchema = getSignUpSchema(t);
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: t("actions.signup.error.invalidFields"),
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingUser) {
      return {
        status: "error",
        message: t("actions.signup.error.userAlreadyExists"),
      };
    }

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return {
      status: "success",
      message: t("actions.signup.success"),
    };
  } catch (error) {
    console.error("Error in signUpAction:", error);
    return {
      status: "error",
      message: t("actions.signup.error.generic"),
    };
  }
};

export { signUpAction };
