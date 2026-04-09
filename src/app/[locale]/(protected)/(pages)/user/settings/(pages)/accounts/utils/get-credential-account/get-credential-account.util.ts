// Types
import type { GetCredentialAccount } from "./types/get-credential-account.util.types";

const getCredentialAccount: GetCredentialAccount = ({ accounts }) => {
  return (
    accounts.find((account) => account.providerId === "credential") ?? null
  );
};

export { getCredentialAccount };
