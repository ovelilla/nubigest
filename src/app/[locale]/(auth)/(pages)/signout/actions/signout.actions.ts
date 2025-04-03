"use server";
// Auth
import { signOut } from "@/lib/auth";

export const signOutAction = async () => {
  await signOut();
};
