"use client";
// Vendors
import { useTranslations } from "next-intl";
// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/components/ui/link";
import { LocaleSwitcher } from "@/components/locale-switcher/locale-switcher.component";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher.component";
// Types
import type { PublicLayoutProps } from "./types/public.types";

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const t = useTranslations("home.layout");
  const year = new Date().getFullYear();

  return (
    <div className="flex grow flex-col">
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground text-lg font-semibold tracking-tight"
            >
              Nubigest
            </Link>
            <nav
              className="hidden items-center gap-6 md:flex"
              aria-label="Main navigation"
            >
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("header.nav.features")}
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("header.nav.howItWorks")}
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("header.nav.faq")}
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link href="/signin" />}
            >
              {t("header.actions.signIn")}
            </Button>
            <Button
              size="sm"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              {t("header.actions.getStarted")}
            </Button>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          {/* <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex max-w-xs flex-col gap-2">
              <span className="text-foreground text-base font-semibold">
                Nubigest
              </span>
              <p className="text-muted-foreground text-sm">
                {t("footer.tagline")}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">
                  {t("footer.contact.label")}:{" "}
                </span>
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="text-foreground hover:underline"
                >
                  {t("footer.contact.email")}
                </a>
              </p>
            </div>
            <nav className="flex flex-col gap-3" aria-label="Legal navigation">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("footer.legal.privacy")}
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("footer.legal.terms")}
              </Link>
              <Link
                href="/refund-policy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("footer.legal.refund")}
              </Link>
              <Link
                href="/cancellation-policy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("footer.legal.cancellation")}
              </Link>
            </nav>
          </div> */}
          {/* <Separator className="my-8" /> */}
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright", { year })}
          </p>
        </div>
      </footer>
    </div>
  );
};

export { PublicLayout };
