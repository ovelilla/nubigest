// Constants
import { PATHNAMES } from "@/i18n/constants/i18n.constants";
// Types
import type { Locale } from "@/i18n/types/i18n.types";

type GetLocalizedPath = (props: {
  canonicalPath: keyof typeof PATHNAMES;
  locale: Locale;
}) => string;

export type { GetLocalizedPath };
