// Types
import type { Locale } from "@/i18n/types/i18n.types";

type GetCanonicalPath = (props: {
  localizedPath: string;
  locale: Locale;
}) => string;

export type { GetCanonicalPath };
