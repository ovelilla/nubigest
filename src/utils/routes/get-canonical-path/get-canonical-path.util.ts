// Constants
import { DEFAULT_LOCALE, PATHNAMES } from "@/i18n/constants/i18n.constants";
// Types
import type { GetCanonicalPath } from "./types/get-canonical-path.util.types";

const getCanonicalPath: GetCanonicalPath = ({ localizedPath, locale }) => {
  if (locale === DEFAULT_LOCALE) {
    return localizedPath;
  }

  const entry = Object.entries(PATHNAMES).find(([, value]) => {
    if (typeof value === "string") {
      return value === localizedPath;
    }

    return value[locale] === localizedPath;
  });

  return entry?.[0] ?? localizedPath;
};

export { getCanonicalPath };
