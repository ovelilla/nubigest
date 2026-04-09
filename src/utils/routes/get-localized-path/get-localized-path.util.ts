// Constants
import { DEFAULT_LOCALE, PATHNAMES } from "@/i18n/constants/i18n.constants";
// Types
import type { GetLocalizedPath } from "./types/get-localized-path.util.types";

const getLocalizedPath: GetLocalizedPath = ({ canonicalPath, locale }) => {
  const pathname = PATHNAMES[canonicalPath];

  if (typeof pathname === "string") {
    return pathname;
  }

  if (locale === DEFAULT_LOCALE) {
    return canonicalPath;
  }

  return pathname[locale] ?? canonicalPath;
};

export { getLocalizedPath };
