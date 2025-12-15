// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  UserNavHandlersProps,
  UserNavHandlersReturn,
  SignOutHandler,
} from "./types/user-nav.handlers.types";

const signOutHandler: SignOutHandler = async ({ setIsSigningOut, router }) => {
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
    handleSignOut: () => signOutHandler({ setIsSigningOut, router }),
  };
};

export { UserNavHandlers };
