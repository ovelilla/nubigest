// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type { Session } from "../../../types/sessions.types";

type SortSessions = (props: {
  sessions: Session[];
  currentSession?: typeof authClient.$Infer.Session | null;
}) => Session[];

export type { SortSessions };
