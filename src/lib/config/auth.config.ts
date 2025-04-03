// Vendors
import { CredentialsSignin } from "next-auth";
import { getTranslations } from "next-intl/server";
import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { getSignInSchema } from "@/app/[locale]/(auth)/(pages)/signin/schemas/signin.schema";
// Types
import type { NextAuthConfig } from "next-auth";

class CustomAuthError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.message = code;
    this.stack = undefined;
  }
}

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const t = await getTranslations("signin");
        const loginSchema = getSignInSchema(t);

        const { email, password } = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !user.password) {
          throw new CustomAuthError("Invalid credentials");
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (!passwordMatch) {
          throw new CustomAuthError("Invalid credentials");
        }

        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
