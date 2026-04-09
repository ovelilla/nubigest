// Types
import type { Account } from "../../../api/list-accounts/list-accounts.api";
import type { SocialProviders } from "@/lib/auth";

type GetProvidersWithAccounts = (props: {
  accounts: Account[];
  providers: SocialProviders[];
}) => { providerId: SocialProviders; accounts: Account[] }[];

export type { GetProvidersWithAccounts };
