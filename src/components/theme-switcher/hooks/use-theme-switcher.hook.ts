// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "@wrksz/themes/client";
// Hooks
import { useIsMounted } from "@/hooks/use-is-mounted";
// Handlers
import { ThemeSwitcherHandlers } from "../handlers/theme-switcher.handlers";

const useThemeSwitcher = () => {
  const [open, setOpen] = useState(false);

  const { theme, resolvedTheme, setTheme } = useTheme();

  const isMounted = useIsMounted();
  const t = useTranslations("root.components.themeSwitcher");

  const { handleSetTheme } = ThemeSwitcherHandlers({ setOpen, setTheme });

  return {
    handleSetTheme,
    isMounted,
    open,
    resolvedTheme,
    setOpen,
    t,
    theme,
  };
};

export { useThemeSwitcher };
