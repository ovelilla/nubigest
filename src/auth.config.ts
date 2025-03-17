// Vendors
import bcryptjs from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
// Libs
import { prisma } from "./lib/prisma";
// Schemas
import { loginSchema } from "./app/[locale]/(auth)/(pages)/login/schemas/login.schema";

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
  ],
} satisfies NextAuthConfig;
