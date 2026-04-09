// Types
import type { GetProvidersWithAccounts } from "./types/get-providers-with-accounts.util.types";

const getProvidersWithAccounts: GetProvidersWithAccounts = ({
  accounts,
  providers,
}) => {
  return providers.map((providerId) => {
    const providerAccounts = accounts
      .filter((account) => account.providerId === providerId)
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

    return {
      providerId,
      accounts: providerAccounts,
    };
  });
};

export { getProvidersWithAccounts };
