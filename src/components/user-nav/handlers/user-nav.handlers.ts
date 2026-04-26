// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  UserNavHandlersProps,
  UserNavHandlersReturn,
  HandleSignOut,
} from "./types/user-nav.handlers.types";

const handleSignOut: HandleSignOut = async ({ setIsSigningOut, router }) => {
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
    handleSignOut: () => handleSignOut({ setIsSigningOut, router }),
  };
};

export { UserNavHandlers };
