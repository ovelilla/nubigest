// Vendors
import { useMemo, useState } from "react";
import { useFormatter, useNow, useTranslations } from "next-intl";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@/i18n/navigation";
// API
import { listSessions } from "../api/list-sessions/list-sessions.api";
// Auth
import { authClient } from "@/lib/auth-client";
// Handlers
import { SessionsHandlers } from "../handlers/sessions.handlers";
// Types
import type { AlertDialogAction } from "../types/sessions.types";
// Utils
import { enrichSessions } from "../utils/enrich-sessions/enrich-sessions.util";
import { sortSessions } from "../utils/sort-sessions/sort-sessions.util";

const SessionsHook = () => {
  const [alertDialogAction, setAlertDialogAction] =
    useState<AlertDialogAction>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isRevokingOtherSessions, setIsRevokingOtherSessions] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [revokingToken, setRevokingToken] = useState<string | null>(null);

  const t = useTranslations("sessionsSettings");

  const format = useFormatter();
  const now = useNow();
  const router = useRouter();

  const { data: currentSession } = authClient.useSession();

  const queryClient = useQueryClient();

  const {
    data: sessions = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["sessions"],
    queryFn: listSessions,
    staleTime: 1000 * 60,
  });

  const sortedSessions = useMemo(
    () =>
      sortSessions({
        sessions,
        currentSession,
      }),
    [sessions, currentSession],
  );

  const enrichedSessions = useMemo(
    () =>
      enrichSessions({
        sessions: sortedSessions,
        currentSession,
      }),
    [sortedSessions, currentSession],
  );

  const isEmpty = enrichedSessions.length === 0;
  const hasOtherSessions = enrichedSessions.some(({ isCurrent }) => !isCurrent);

  const {
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleRefreshButtonClick,
    handleRevokeSessionButtonClick,
    handleRevokeOtherSessionsButtonClick,
    handleSignOutButtonClick,
  } = SessionsHandlers({
    alertDialogAction,
    queryClient,
    router,
    setAlertDialogAction,
    setAlertDialogOpen,
    setRevokingToken,
    setIsRefreshing,
    setIsRevokingOtherSessions,
    setIsSigningOut,
    t,
  });

  return {
    alertDialogAction,
    alertDialogOpen,
    enrichedSessions,
    format,
    handleAlertDialogAction,
    handleAlertDialogOpenChange,
    handleRefreshButtonClick,
    handleRevokeSessionButtonClick,
    handleRevokeOtherSessionsButtonClick,
    handleSignOutButtonClick,
    hasOtherSessions,
    isEmpty,
    isError,
    isLoading,
    isRefreshing,
    isRevokingOtherSessions,
    isSigningOut,
    now,
    revokingToken,
    t,
  };
};

export { SessionsHook };
