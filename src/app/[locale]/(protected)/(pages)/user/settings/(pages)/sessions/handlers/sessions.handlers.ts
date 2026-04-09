// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  HandleAlertDialogAction,
  HandleAlertDialogOpenChange,
  HandleRefreshButtonClick,
  HandleRevokeSessionButtonClick,
  HandleRevokeOtherSessions,
  HandleRevokeOtherSessionsButtonClick,
  HandleSignOut,
  HandleSignOutButtonClick,
  SessionsHandlersProps,
  SessionsHandlersReturn,
} from "./types/sessions.handlers.types";

const handleAlertDialogAction: HandleAlertDialogAction = async ({
  alertDialogAction,
  queryClient,
  router,
  setAlertDialogAction,
  setAlertDialogOpen,
  setIsRevokingOtherSessions,
  setIsSigningOut,
  t,
}) => {
  setAlertDialogOpen(false);
  setAlertDialogAction(null);

  if (alertDialogAction === "revokeOtherSessions") {
    await handleRevokeOtherSessions({
      queryClient,
      setIsRevokingOtherSessions,
      t,
    });
  } else if (alertDialogAction === "signOutCurrentSession") {
    await handleSignOut({
      router,
      setIsSigningOut,
      t,
    });
  }
};

const handleAlertDialogOpenChange: HandleAlertDialogOpenChange = ({
  open,
  setAlertDialogAction,
  setAlertDialogOpen,
}) => {
  setAlertDialogOpen(open);
  if (!open) {
    setAlertDialogAction(null);
  }
};

const handleRefreshButtonClick: HandleRefreshButtonClick = async ({
  queryClient,
  setIsRefreshing,
  t,
}) => {
  setIsRefreshing(true);

  try {
    await queryClient.refetchQueries({ queryKey: ["sessions"] });
  } catch (error) {
    console.error("Error refreshing sessions:", error);
    toast.error(t("handlers.refresh.error"));
  } finally {
    setIsRefreshing(false);
  }
};

const handleRevokeSessionButtonClick: HandleRevokeSessionButtonClick = async ({
  queryClient,
  setRevokingToken,
  t,
  token,
}) => {
  setRevokingToken(token);

  try {
    const { error } = await authClient.revokeSession({
      token,
    });

    if (error) {
      toast.error(t("handlers.revoke.error"));
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ["sessions"] });
    toast.success(t("handlers.revoke.success"));
  } catch (error) {
    console.error("Error revoking session:", error);
    toast.error(t("handlers.revoke.error"));
  } finally {
    setRevokingToken(null);
  }
};

const handleRevokeOtherSessions: HandleRevokeOtherSessions = async ({
  queryClient,
  setIsRevokingOtherSessions,
  t,
}) => {
  setIsRevokingOtherSessions(true);

  try {
    const { error } = await authClient.revokeOtherSessions();

    if (error) {
      toast.error(t("handlers.revokeOtherSessions.error"));
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ["sessions"] });
    toast.success(t("handlers.revokeOtherSessions.success"));
  } catch (error) {
    console.error("Error revoking other sessions:", error);
    toast.error(t("handlers.revokeOtherSessions.error"));
  } finally {
    setIsRevokingOtherSessions(false);
  }
};

const handleRevokeOtherSessionsButtonClick: HandleRevokeOtherSessionsButtonClick =
  ({ setAlertDialogAction, setAlertDialogOpen }) => {
    setAlertDialogAction("revokeOtherSessions");
    setAlertDialogOpen(true);
  };

const handleSignOut: HandleSignOut = async ({ router, setIsSigningOut, t }) => {
  setIsSigningOut(true);
  try {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/signin");
        },
        onError: () => {
          toast.error(t("handlers.signOut.error"));
        },
      },
    });
  } catch (error) {
    console.error("Error signing out:", error);
    toast.error(t("handlers.signOut.error"));
  } finally {
    setIsSigningOut(false);
  }
};

const handleSignOutButtonClick: HandleSignOutButtonClick = ({
  setAlertDialogAction,
  setAlertDialogOpen,
}) => {
  setAlertDialogAction("signOutCurrentSession");
  setAlertDialogOpen(true);
};

const SessionsHandlers = ({
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
}: SessionsHandlersProps): SessionsHandlersReturn => {
  return {
    handleAlertDialogAction: () =>
      handleAlertDialogAction({
        alertDialogAction,
        queryClient,
        router,
        setAlertDialogAction,
        setAlertDialogOpen,
        setIsRevokingOtherSessions,
        setIsSigningOut,
        t,
      }),
    handleAlertDialogOpenChange: (open) =>
      handleAlertDialogOpenChange({
        open,
        setAlertDialogAction,
        setAlertDialogOpen,
      }),
    handleRefreshButtonClick: () =>
      handleRefreshButtonClick({
        queryClient,
        setIsRefreshing,
        t,
      }),
    handleRevokeSessionButtonClick: (token) =>
      handleRevokeSessionButtonClick({
        queryClient,
        setRevokingToken,
        t,
        token,
      }),
    handleRevokeOtherSessionsButtonClick: () =>
      handleRevokeOtherSessionsButtonClick({
        setAlertDialogAction,
        setAlertDialogOpen,
      }),
    handleSignOutButtonClick: () =>
      handleSignOutButtonClick({
        setAlertDialogAction,
        setAlertDialogOpen,
      }),
  };
};

export { SessionsHandlers };
