"use client";
// Components
import { Link } from "@/components/ui/link";
import { LocaleSwitcher } from "@/components/locale-switcher/locale-switcher.component";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher.component";
// Types
import { AuthLayoutProps } from "./types/auth.types";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex grow flex-col">
      <header className="bg-background border-b">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground text-lg font-semibold tracking-tight"
            >
              Nubigest
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="flex grow justify-center md:items-center">
        {children}
      </main>
    </div>
  );
};

export { AuthLayout };
