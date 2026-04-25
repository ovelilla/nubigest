// Vendors
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { organization, twoFactor, username } from "better-auth/plugins";
import { passkey } from "@better-auth/passkey";
import { prismaAdapter } from "better-auth/adapters/prisma";
// Libs
import { prisma } from "@/lib/prisma";
// Utils
import { sendResetPasswordEmail } from "@/app/[locale]/(auth)/(pages)/forgot-password/services/send-reset-password-email.service";
import { sendTwoFactorOtpEmail } from "@/app/[locale]/(auth)/(pages)/two-factor/(pages)/email/services/send-two-factor-otp-email/send-two-factor-otp-email.service";
import { sendVerificationEmail } from "@/app/[locale]/(auth)/(pages)/signup/services/send-verification-email/send-verification-email.service";
import { sendDeleteAccountVerificationEmail } from "@/app/[locale]/(protected)/(pages)/user/settings/(pages)/profile/components/delete-account/services/send-delete-account-verification-email/send-delete-account-verification-email.service";

const auth = betterAuth({
  account: {
    accountLinking: {
      allowDifferentEmails: true,
    },
  },
  advanced: {
    ipAddress: {
      ipAddressHeaders: ["cf-connecting-ip"],
    },
  },
  appName: "Nubigest",
  baseURL: {
    allowedHosts: ["nubigest.com", "www.nubigest.com", "localhost:*"],
    protocol: "auto",
    fallback: "http://localhost:3000",
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const organization = await prisma.organization.findFirst({
            where: {
              members: {
                some: {
                  userId: session.userId,
                },
              },
            },
          });
          return {
            data: {
              ...session,
              activeOrganizationId: organization?.id ?? null,
            },
          };
        },
      },
    },
    user: {
      create: {
        after: async (user) => {
          await auth.api.createOrganization({
            body: {
              name: "My Organization",
              slug: `org-${crypto.randomUUID()}`,
              userId: user.id,
            },
          });
        },
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }, request) => {
      sendResetPasswordEmail({
        email: user.email,
        url,
      });
    },
  },
  emailVerification: {
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
    organization({
      requireEmailVerificationOnInvitation: true,
      teams: {
        enabled: true,
      },
    }),
    passkey({
      rpID: process.env.BETTER_AUTH_PASSKEY_RP_ID,
      rpName: "Nubigest",
      origin: process.env.BETTER_AUTH_PASSKEY_ORIGIN,
    }),
    twoFactor({
      issuer: "Nubigest",
      skipVerificationOnEnable: true,
      otpOptions: {
        sendOTP: async ({ user, otp }) => {
          sendTwoFactorOtpEmail({
            email: user.email,
            otp,
          });
        },
      },
    }),
    username(),
    nextCookies(),
  ],
  rateLimit: {
    customRules: {
      "/send-verification-email": {
        window: 60,
        max: 1,
      },
      "/two-factor/send-otp": {
        window: 60,
        max: 1,
      },
    },
    enabled: true,
    storage: "database",
  },
  session: {
    cookieCache: {
      enabled: false,
      maxAge: 5 * 60,
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  trustedOrigins: ["https://www.nubigest.com", "https://nubigest.com"],
  user: {
    changeEmail: {
      enabled: true,
    },
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async ({ user, url }) => {
        sendDeleteAccountVerificationEmail({
          email: user.email,
          url,
        });
      },
    },
  },
});

type SocialProviders = keyof typeof auth.options.socialProviders;

export { auth };

export type { SocialProviders };
