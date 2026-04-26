// Types
import type { Dispatch, SetStateAction } from "react";
import type { useRouter } from "@/i18n/navigation";

type HandleSignOut = (props: {
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
  router: ReturnType<typeof useRouter>;
}) => Promise<void>;

type UserNavHandlersProps = {
  router: ReturnType<typeof useRouter>;
  setIsSigningOut: Dispatch<SetStateAction<boolean>>;
};

type UserNavHandlersReturn = {
  handleSignOut: () => void;
};

export type { HandleSignOut, UserNavHandlersProps, UserNavHandlersReturn };
