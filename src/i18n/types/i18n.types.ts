// Constants
import { LOCALES, PATHNAMES } from "@/i18n/constants/i18n.constants";

type Locale = (typeof LOCALES)[number];

type Pathname = keyof typeof PATHNAMES;

export type { Locale, Pathname };
