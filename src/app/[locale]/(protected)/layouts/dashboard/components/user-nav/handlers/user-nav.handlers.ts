// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  UserNavHandlersProps,
  UserNavHandlersReturn,
  SignOutHandler,
} from "./types/user-nav.handlers.types";

const signOutHandler: SignOutHandler = async ({
  event,
  setIsSigningOut,
  router,
}) => {
  event.preventDefault();
  setIsSigningOut(true);
  await authClient.signOut();
  setIsSigningOut(false);
  router.push("/signin");
};

const UserNavHandlers = ({
  router,
  setIsSigningOut,
}: UserNavHandlersProps): UserNavHandlersReturn => {
  return {
    handleSignOut: (event) =>
      signOutHandler({ event, setIsSigningOut, router }),
  };
};

export { UserNavHandlers };
