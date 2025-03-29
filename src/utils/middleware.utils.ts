// Constants
import { LOCALES, PATHNAMES } from "@/i18n/constants/i18n.constants";
// Types
import type { Locale, Pathname } from "@/i18n/types/i18n.types";

const createOriginalPathMap = (): Map<string, string> => {
  const originalPathMap = new Map();

  Object.entries(PATHNAMES).forEach(([originalPath, translations]) => {
    Object.entries(translations).forEach(([, translatedPath]) => {
      originalPathMap.set(translatedPath, originalPath);
    });
  });

  return originalPathMap;
};

const createTranslatedPathMap = (): Map<string, Map<string, string>> => {
  const translatedPathMap = new Map();

  Object.entries(PATHNAMES).forEach(([originalPath, translations]) => {
    const localeMap = new Map();
    Object.entries(translations).forEach(([locale, translatedPath]) => {
      localeMap.set(locale, translatedPath);
    });
    translatedPathMap.set(originalPath, localeMap);
  });

  return translatedPathMap;
};

const getLocaleFromPath = (pathname: string): Locale | null => {
  const match = pathname.match(/^\/([^/]+)/);
  const supportedLocales = new Set(LOCALES);
  return match && supportedLocales.has(match[1] as Locale)
    ? (match[1] as Locale)
    : null;
};

const getOriginalPath = (
  translatedPath: string,
  originalPathMap: Map<string, string>,
): string | null => originalPathMap.get(translatedPath) || null;

const getPreferredLocale = (req: Request): Locale | null => {
  const supportedLocales = new Set(LOCALES);
  return (
    (req.headers
      .get("accept-language")
      ?.split(",")
      .map((lang) => lang.split(";")[0])
      .find((lang) => supportedLocales.has(lang as Locale)) as Locale) ?? null
  );
};

const removeLocaleFromPath = (pathname: string, locale: string): string =>
  pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1) || "/"
    : pathname;

const resolvePathname = (
  pathname: Pathname,
  locale: Locale,
  translatedPathMap: Map<string, Map<string, string>>,
): string => translatedPathMap.get(pathname)?.get(locale) ?? pathname;

export {
  createOriginalPathMap,
  createTranslatedPathMap,
  getLocaleFromPath,
  getOriginalPath,
  getPreferredLocale,
  removeLocaleFromPath,
  resolvePathname,
};
