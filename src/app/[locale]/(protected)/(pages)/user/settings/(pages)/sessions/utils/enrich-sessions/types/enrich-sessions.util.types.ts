// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type { Session } from "../../../types/sessions.types";

type EnrichedSession = {
  session: Session;
  userAgent: UAParser.IResult;
  isCurrent: boolean;
};

type EnrichSessions = (props: {
  sessions: Session[];
  currentSession?: typeof authClient.$Infer.Session | null;
}) => EnrichedSession[];

export type { EnrichSessions, EnrichedSession };
