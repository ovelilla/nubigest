"use server";
// Vendors
import { headers } from "next/headers";
// Auth
import { auth } from "@/lib/auth";
// Types
import type { SetPasswordAction } from "./types/set-password.actions.types";

const setPasswordAction: SetPasswordAction = async ({ newPassword }) => {
  try {
    const result = await auth.api.setPassword({
      body: {
        newPassword,
      },
      headers: await headers(),
    });

    return result;
  } catch (error) {
    console.error("setPasswordAction error:", error);

    return {
      status: false,
    };
  }
};

export { setPasswordAction };
