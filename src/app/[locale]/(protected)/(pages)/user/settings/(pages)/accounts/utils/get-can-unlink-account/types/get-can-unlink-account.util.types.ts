// Types
import type { Account } from "../../../api/list-accounts/list-accounts.api";
import type { SocialProviders } from "@/lib/auth";

type GetCanUnlinkAccount = (props: {
  credentialAccount: Account | null;
  providersWithAccounts: { providerId: SocialProviders; accounts: Account[] }[];
}) => boolean;

export type { GetCanUnlinkAccount };
