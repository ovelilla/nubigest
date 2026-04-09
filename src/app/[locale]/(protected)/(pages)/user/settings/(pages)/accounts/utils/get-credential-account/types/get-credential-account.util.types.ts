// Types
import type { Account } from "../../../api/list-accounts/list-accounts.api";

type GetCredentialAccount = (props: { accounts: Account[] }) => Account | null;

export type { GetCredentialAccount };
