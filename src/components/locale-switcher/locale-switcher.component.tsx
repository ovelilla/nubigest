"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALES } from "./constants/locale-switcher.constants";
import { LocaleSwitcherHook } from "./hooks/locale-switcher.hook";
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
      />
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => handleSwitchLocale(value)}
        >
          {LOCALES.map((item) => (
            <DropdownMenuRadioItem
              key={item.value}
              value={item.value}
              disabled={isPending}
            >
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleSwitcher };
