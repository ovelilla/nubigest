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
    // @ts-expect-error
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
