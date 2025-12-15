"use server";
// Vendors
import { cookies } from "next/headers";

const setPendingVerificationCookie = async (email: string) => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "better-auth.pending_verification",
    value: encodeURIComponent(email),
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

export { setPendingVerificationCookie };
