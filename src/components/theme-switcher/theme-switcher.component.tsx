"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Hooks
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
// Icons
import { Loader2, Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  const t = useTranslations("components.themeSwitcher");

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
              theme === "dark" ? (
                <Sun />
              ) : (
                <Moon />
              )
            ) : (
              <Loader2 className="animate-spin" />
            )}
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("themes.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("themes.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("themes.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
