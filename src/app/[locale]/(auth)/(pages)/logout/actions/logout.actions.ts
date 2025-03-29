"use server";
// Auth
import { signOut } from "../../../../../../lib/auth";

export const logoutAction = async () => {
  await signOut();
};
