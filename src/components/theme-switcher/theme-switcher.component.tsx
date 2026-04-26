"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import { THEMES } from "./constants/theme-switcher.constants";
// Hooks
import { useThemeSwitcher } from "./hooks/use-theme-switcher.hook";
// Icons
import { Loader2, Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { handleSetTheme, isMounted, open, resolvedTheme, setOpen, t, theme } =
    useThemeSwitcher();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
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
        <DropdownMenuRadioGroup value={theme} onValueChange={handleSetTheme}>
          {THEMES.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.value}>
              {t(`themes.${item.value}`)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
