// Vendors
import { UAParser } from "ua-parser-js";
// Types
import type { EnrichSessions } from "./types/enrich-sessions.util.types";

const enrichSessions: EnrichSessions = ({ sessions, currentSession }) => {
  return sessions.map((session) => {
    const userAgent = UAParser(session.userAgent ?? "");
    const isCurrent = session.token === currentSession?.session.token;

    return {
      isCurrent,
      session,
      userAgent,
    };
  });
};

export { enrichSessions };
