// Types
import type { SortSessions } from "./types/sort-sessions.util.types";

const sortSessions: SortSessions = ({ sessions, currentSession }) => {
  return [...sessions].sort((a, b) => {
    const aIsCurrent = a.token === currentSession?.session.token;
    const bIsCurrent = b.token === currentSession?.session.token;

    if (aIsCurrent) return -1;
    if (bIsCurrent) return 1;

    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
};

export { sortSessions };
