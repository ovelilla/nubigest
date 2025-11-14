// i18n
import { routing } from "@/i18n/routing";
// Types
import type { GetLocaleFromPath } from "./types/get-locale-from-path.util.types";
import type { Locale } from "@/i18n/types/i18n.types";

const getLocaleFromPath: GetLocaleFromPath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);

  const maybeLocale = segments[0] as Locale;

  const hasLocale = routing.locales.includes(maybeLocale);

  return hasLocale ? maybeLocale : routing.defaultLocale;
};

export { getLocaleFromPath };
