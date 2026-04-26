// Vendors
import { useParams } from "next/navigation";
// Types
import type { TransitionStartFunction } from "react";
import type { usePathname, useRouter } from "@/i18n/navigation";

type LocaleSwitcherHandlersProps = {
  params: ReturnType<typeof useParams>;
  pathname: ReturnType<typeof usePathname>;
  router: ReturnType<typeof useRouter>;
  startTransition: TransitionStartFunction;
};

type HandleSwitchLocaleProps = Pick<
  LocaleSwitcherHandlersProps,
  "params" | "pathname" | "router" | "startTransition"
> & {
  locale: string;
};

export type { LocaleSwitcherHandlersProps, HandleSwitchLocaleProps };
