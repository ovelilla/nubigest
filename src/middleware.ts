// Vendors
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
// Config
import { auth } from "@/auth";
import { routing } from "@/i18n/routing";
// Routes
import {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
  SUPPORTED_LOCALES,
} from "@/constants";

const intlMiddleware = createMiddleware(routing);

const getPreferredLocale = (req: Request): string => {
  const acceptLanguage = req.headers.get("accept-language") || "";
  return (
    acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0])
      .find((lang) => new Set(SUPPORTED_LOCALES).has(lang)) ||
    routing.defaultLocale
  );
};

const getLocaleFromPath = (pathname: string): string | null => {
  const localeRegex = new RegExp(`^/(${routing.locales.join("|")})(?=/|$)`);
  const match = pathname.match(localeRegex);
  return match ? match[1] : null;
};

const removeLocaleFromPath = (pathname: string, locale: string): string =>
  pathname.replace(new RegExp(`^/${locale}`), "") || "/";

export default auth((req) => {
  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/_next/") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPath(pathname) || getPreferredLocale(req);
  const pathWithoutLocale = removeLocaleFromPath(pathname, locale);

  const isApiRoute = pathname.startsWith(API_PREFIX);
  const isAuthRoute = new Set(AUTH_ROUTES).has(pathWithoutLocale);
  const isPublicRoute = new Set(PUBLIC_ROUTES).has(pathWithoutLocale);
  const isLoggedIn = !!req.auth;

  if (isApiRoute) {
    const params = new URLSearchParams(search);
    const error = params.get("error");

    if (error) {
      return NextResponse.redirect(
        new URL(`/${locale}/login?error=${error}`, req.nextUrl),
      );
    }
    return NextResponse.next();
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(
      new URL(`/${locale}${DEFAULT_LOGIN_REDIRECT}`, req.nextUrl),
    );
  }

  if (isAuthRoute && !isLoggedIn) {
    return intlMiddleware(req);
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.nextUrl));
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
