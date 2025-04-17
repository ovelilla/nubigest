// Vendors
import { useParams } from "next/navigation";
// Types
import type { TransitionStartFunction } from "react";
// i18n
import { usePathname, useRouter } from "@/i18n/navigation";

type LocaleSwitcherHandlersProps = {
  params: ReturnType<typeof useParams>;
  pathname: ReturnType<typeof usePathname>;
  router: ReturnType<typeof useRouter>;
  startTransition: TransitionStartFunction;
};

type SwitchLocaleHandlerProps = Pick<
  LocaleSwitcherHandlersProps,
  "params" | "pathname" | "router" | "startTransition"
> & {
  locale: string;
};

export type { LocaleSwitcherHandlersProps, SwitchLocaleHandlerProps };
