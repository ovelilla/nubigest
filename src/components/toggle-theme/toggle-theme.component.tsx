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
import { useTheme } from "next-themes";
import { useIsMounted } from "../../hooks/use-mounted";
// Icons
import { Loader2, Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useIsMounted();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ToggleTheme };
