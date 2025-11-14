// Types
import {
  LocaleSwitcherHandlersProps,
  SwitchLocaleHandlerProps,
} from "./types/locale-switcher.handlers.types";

const switchLocaleHandler = ({
  locale,
  params,
  pathname,
  router,
  startTransition,
}: SwitchLocaleHandlerProps) => {
  startTransition(() => {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale });
  });
};

const LocaleSwitcherHandlers = ({
  params,
  pathname,
  router,
  startTransition,
}: LocaleSwitcherHandlersProps) => ({
  handleSwitchLocale: (locale: string) =>
    switchLocaleHandler({
      locale,
      params,
      pathname,
      router,
      startTransition,
    }),
});

export { LocaleSwitcherHandlers };
