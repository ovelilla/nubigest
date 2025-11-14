// Constants
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

type Pathnames = keyof typeof routing.pathnames;

export type { Locale, Pathnames };
