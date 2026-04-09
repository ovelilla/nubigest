// Types
import type { GetCanUnlinkAccount } from "./types/get-can-unlink-account.util.types";

const getCanUnlinkAccount: GetCanUnlinkAccount = ({
  credentialAccount,
  providersWithAccounts,
}) => {
  const credentialMethods = credentialAccount ? 1 : 0;

  const socialMethods = providersWithAccounts.reduce(
    (total, provider) => total + provider.accounts.length,
    0,
  );

  const totalMethods = credentialMethods + socialMethods;

  return totalMethods > 1;
};

export { getCanUnlinkAccount };
