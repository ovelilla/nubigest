import type { listAccounts } from "../api/list-accounts/list-accounts.api";

type Account = Awaited<ReturnType<typeof listAccounts>>[number];

type AlertDialogAction = "unlinkAccount" | null;

type PendingUnlinkAccount = {
  providerId: string;
  accountId?: string;
} | null;

export type { Account, AlertDialogAction, PendingUnlinkAccount };
