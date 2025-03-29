"use client";
// Components
import { LocaleSwitcher } from "@/components/locale-switcher/locale-switcher.component";
import { ToggleTheme } from "@/components/toggle-theme/toggle-theme.component";
// Types
import { AuthLayoutProps } from "./types/auth.types";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex grow flex-col">
      <header className="bg-background flex h-14 shrink-0 items-center justify-end px-2 sm:h-16 sm:px-4">
        <div className="flex gap-2">
          <LocaleSwitcher />
          <ToggleTheme />
        </div>
      </header>
      <main className="flex grow justify-center md:items-center">
        {children}
      </main>
    </div>
  );
};

export { AuthLayout };
