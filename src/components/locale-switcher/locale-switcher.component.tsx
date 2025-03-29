"use client";
// Vendors
import { useLocale } from "next-intl";
import { useTransition } from "react";
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
// i18n
import { usePathname, useRouter } from "@/i18n/navigation";
// Icons
import { ChevronDown, Globe, Loader2 } from "lucide-react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitchLocale = (locale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Switch language"
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
      </DropdownMenuTrigger>
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
