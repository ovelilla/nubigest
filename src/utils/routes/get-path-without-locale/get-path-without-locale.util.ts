// Types
import type { GetPathWithoutLocale } from "./types/get-path-without-locale.util.types";

const getPathWithoutLocale: GetPathWithoutLocale = (pathname, locale) => {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;

  const segments = normalized.split("/").filter(Boolean);

  if (segments[0] !== locale) {
    return normalized === "/" ? "/" : `/${segments.join("/")}`;
  }

  const withoutLocale = segments.slice(1);

  if (withoutLocale.length === 0) {
    return "/";
  }

  return `/${withoutLocale.join("/")}`;
};

export { getPathWithoutLocale };
