// Vendors
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import slug from "slug";
// Libs
import { prisma } from "@/lib/prisma";
// Services
import { sendVerificationTokenEmail } from "@/app/[locale]/(auth)/(pages)/signup/actions/services/send-verification-token-email.service";

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    async afterEmailVerification(user) {
      await prisma.workspace.create({
        data: {
          name: user.name,
          slug: slug(user.name),
          members: {
            create: {
              userId: user.id,
              role: "OWNER",
            },
          },
        },
      });
    },
    autoSignInAfterVerification: true,
    sendOnSignIn: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerificationTokenEmail({
        email: user.email,
        url,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});

export { auth };
