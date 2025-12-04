// Vendors
import { betterAuth } from "better-auth";
import { twoFactor } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
// import slug from "slug";
// Libs
import { prisma } from "@/lib/prisma";
// Utils
import { sendResetPasswordEmail } from "@/app/[locale]/(auth)/(pages)/forgot-password/services/send-reset-password-email.service";
import { sendVerificationEmail } from "@/app/[locale]/(auth)/(pages)/signup/services/send-verification-email/send-verification-email.service";
import { sendTwoFactorOtpEmail } from "@/app/[locale]/(auth)/(pages)/two-factor/services/send-two-factor-otp-email/send-two-factor-otp-email.service";

const auth = betterAuth({
  advanced: {
    ipAddress: {
      ipAddressHeaders: ["cf-connecting-ip"],
    },
  },
  appName: "Nubigest",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  rateLimit: {
    customRules: {
      "/send-verification-email": {
        window: 30,
        max: 1,
      },
      "/sign-in/email": {
        window: 30,
        max: 5,
      },
      "/sign-up/email": {
        window: 60,
        max: 3,
      },
      "/two-factor/*": {
        window: 30,
        max: 1,
      },
    },
    enabled: true,
    storage: "database",
  },
  trustedOrigins: ["https://www.nubigest.com", "https://nubigest.com"],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      sendResetPasswordEmail({
        email: user.email,
        url,
      });
    },
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
      sendVerificationEmail({
        email: user.email,
        url,
      });
    },
  },
  plugins: [
    twoFactor({
      skipVerificationOnEnable: true,
      otpOptions: {
        sendOTP: async ({ user, otp }) => {
          sendTwoFactorOtpEmail({
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
