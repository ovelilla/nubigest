// Vendors
import { headers } from "next/headers";
// Libs
import { auth } from "@/lib/auth";
// i18n
import { redirect } from "@/i18n/navigation";

type Session = typeof auth.$Infer.Session;

const getSession = async (locale: string): Promise<Session> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect({ href: "/signin", locale });
  }
  return session!;
};

export { getSession };
