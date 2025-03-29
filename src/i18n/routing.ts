// Vendors
import { defineRouting } from "next-intl/routing";
// Constants
import { DEFAULT_LOCALE, LOCALES, PATHNAMES } from "./constants/i18n.constants";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  pathnames: PATHNAMES,
});
