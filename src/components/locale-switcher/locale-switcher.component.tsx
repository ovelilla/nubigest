"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import { LOCALES } from "./constants/locale-switcher.constants";
// Hooks
import { LocaleSwitcherHook } from "./hooks/locale-switcher.hook";
// Icons
import { ChevronDown, Globe, Loader2 } from "lucide-react";

const LocaleSwitcher = () => {
  const { handleSwitchLocale, isPending, locale, t } = LocaleSwitcherHook();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            aria-label={t("button.ariaLabel")}
            disabled={isPending}
            variant="ghost"
          >
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Globe />
                {LOCALES.find((item) => item.value === locale)?.label}
                <ChevronDown />
              </>
            )}
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((locale) => (
          <DropdownMenuItem
            disabled={isPending}
            key={locale.value}
            onClick={() => handleSwitchLocale(locale.value)}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleSwitcher };
