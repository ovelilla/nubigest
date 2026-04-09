// Types
import type { GetPathWithoutLocale } from "./types/get-path-without-locale.util.types";

const getPathWithoutLocale: GetPathWithoutLocale = ({ pathname, locale }) => {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);

  if (segments[0] === locale) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }

  return normalized;
};

export { getPathWithoutLocale };
