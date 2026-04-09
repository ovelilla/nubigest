"use server";
// Auth
import { auth } from "@/lib/auth";
// Types
import type { SocialProviders } from "@/lib/auth";

const getSocialProviders = async () =>
  Object.keys(auth.options.socialProviders) as SocialProviders[];

export { getSocialProviders };
