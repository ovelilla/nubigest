// Auth
import { authClient } from "@/lib/auth-client";

const listAccounts = async () => {
  const [
    { data: accountsData, error: accountsError },
    { data: sessionData, error: sessionError },
  ] = await Promise.all([authClient.listAccounts(), authClient.getSession()]);

  if (accountsError) {
    throw new Error("Could not load accounts");
  }

  if (sessionError) {
    throw new Error("Could not load session");
  }

  const enrichedAccounts = await Promise.all(
    accountsData.map(async (account) => {
      if (account.providerId === "credential") {
        return {
          ...account,
          profile: { email: sessionData?.user?.email ?? null },
        };
      }

      const info = await authClient.accountInfo({
        query: { accountId: account.accountId },
      });

      return {
        ...account,
        profile: {
          email: info.data?.user?.email ?? null,
        },
      };
    }),
  );

  return enrichedAccounts;
};

type Account = Awaited<ReturnType<typeof listAccounts>>[number];

export { listAccounts };
export type { Account };
