"use server";
// Vendors
import { cookies, headers } from "next/headers";
// Auth
import { auth } from "@/lib/auth";
// Constants
import { OTP_COOLDOWN_MS } from "../../constants/email.constants";

type SendTwoFactorOtp = () => Promise<{ retryAfter: number; success: boolean }>;

const sendTwoFactorOtp: SendTwoFactorOtp = async () => {
  try {
    console.log("Sending two-factor OTP email...");
    const cookieStore = await cookies();

    const cookie = cookieStore.get("two_factor_otp_sent");

    if (cookie) {
      const lastSentAt = Number(cookie.value);
      if (Number.isFinite(lastSentAt)) {
        const elapsed = Date.now() - lastSentAt;
        if (elapsed < OTP_COOLDOWN_MS) {
          const remaining = OTP_COOLDOWN_MS - elapsed;
          return {
            success: true,
            retryAfter: Math.ceil(remaining / 1000),
          };
        }
      }
    }

    await auth.api.sendTwoFactorOTP({
      body: { trustDevice: false },
      headers: await headers(),
    });
    console.log("Two-factor OTP email sent successfully.");
    console.log(
      "process.env.NODE_ENV === 'production'",
      process.env.NODE_ENV === "production",
    );
    const now = Date.now();

    cookieStore.set("two_factor_otp_sent", String(now), {
      maxAge: OTP_COOLDOWN_MS / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true, retryAfter: OTP_COOLDOWN_MS / 1000 };
  } catch {
    return { success: false, retryAfter: 0 };
  }
};

export { sendTwoFactorOtp };
