// Vendors
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
// Config
import authConfig from "@/lib/auth/config/auth.config";
// Libs
import { prisma } from "@/lib/db/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/signin",
    error: "/auth-error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          id: true,
          emailVerified: true,
          isTwoFactorEnabled: true,
        },
      });

      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }

      if (!existingUser.isTwoFactorEnabled) {
        return true;
      }

      const twoFactorConfirmation =
        await prisma.twoFactorConfirmation.findUnique({
          where: {
            userId: existingUser.id,
          },
          select: {
            id: true,
          },
        });

      if (!twoFactorConfirmation) {
        return false;
      }

      await prisma.twoFactorConfirmation.delete({
        where: { id: twoFactorConfirmation.id },
      });

      return true;
    },
    async session({ token, session }) {
      session.user.id = token.sub;
      session.user.role = token.role;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  ...authConfig,
});
