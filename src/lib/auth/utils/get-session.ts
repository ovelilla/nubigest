// Libs
import { auth } from "@/lib/auth/auth";
// i18n
import { redirect } from "@/i18n/navigation";
// Types
import type { Session } from "next-auth";

const getSession = async (locale: string): Promise<Session> => {
  const session = await auth();
  if (!session) {
    redirect({ href: "/signin", locale });
  }
  return session!;
};

export { getSession };
