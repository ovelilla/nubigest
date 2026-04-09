"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useTranslations } from "next-intl";
import { useTheme } from "@wrksz/themes/client";
import { Loader2, Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  const t = useTranslations("root.components.themeSwitcher");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("button.ariaLabel")}
          >
            {isMounted ? (
              resolvedTheme === "dark" ? (
                <Sun />
              ) : (
                <Moon />
              )
            ) : (
              <Loader2 className="animate-spin" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value)}
        >
          <DropdownMenuRadioItem value="light">
            {t("themes.light")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            {t("themes.dark")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            {t("themes.system")}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
