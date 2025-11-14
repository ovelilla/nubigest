// Vendors
import { betterAuth } from "better-auth";
import { twoFactor } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import slug from "slug";
// Libs
import { prisma } from "@/lib/prisma";
// Utils
import { sendVerificationTokenEmail } from "@/app/[locale]/(auth)/(pages)/signup/utils/send-verification-token-email/send-verification-token-email.util";
import { sendTwoFactorTokenEmail } from "@/app/[locale]/(auth)/(pages)/signin/utils/send-two-factor-token-email/send-two-factor-token-email.util";

const auth = betterAuth({
  appName: "Nubigest",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [
    "https://www.nubigest.com",
    "http://www.nubigest.com",
    "https://nubigest.com",
    "http://nubigest.com",
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    // async afterEmailVerification(user) {
    //   await prisma.workspace.create({
    //     data: {
    //       name: user.name,
    //       slug: slug(user.name),
    //       members: {
    //         create: {
    //           userId: user.id,
    //           role: "OWNER",
    //         },
    //       },
    //     },
    //   });
    // },
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
  plugins: [
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }) {
          await sendTwoFactorTokenEmail({
            email: user.email,
            token: otp,
          });
        },
      },
    }),
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});

export { auth };
