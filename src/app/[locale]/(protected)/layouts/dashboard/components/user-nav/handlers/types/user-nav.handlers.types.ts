// Types
import type { Dispatch, SetStateAction } from "react";
import type { useRouter } from "@/i18n/navigation";

type SignOutHandler = (props: {
  event: Event;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
  router: ReturnType<typeof useRouter>;
}) => Promise<void>;

type UserNavHandlersProps = {
  router: ReturnType<typeof useRouter>;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
};

type UserNavHandlersReturn = {
  handleSignOut: (event: Event) => void;
};

export type { SignOutHandler, UserNavHandlersProps, UserNavHandlersReturn };
