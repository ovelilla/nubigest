// Auth
import { authClient } from "@/lib/auth-client";

type AlertDialogAction = "revokeOtherSessions" | "signOutCurrentSession" | null;

type Session = (typeof authClient.$Infer.Session)["session"];

export type { AlertDialogAction, Session };
