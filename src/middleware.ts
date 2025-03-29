// Vendors
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import NextAuth from "next-auth";
// Config
import authConfig from "@/lib/config/auth.config";
// Constants
import {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_SIGNIN_REDIRECT,
  PUBLIC_ROUTES,
} from "@/constants/middleware.constants";
// i18n
import { routing } from "@/i18n/routing";
// Utils
import {
  createOriginalPathMap,
  createTranslatedPathMap,
  getLocaleFromPath,
  getOriginalPath,
  getPreferredLocale,
  removeLocaleFromPath,
  resolvePathname,
} from "@/utils/middleware.utils";

const { auth } = NextAuth(authConfig);

const intlMiddleware = createMiddleware(routing);

const authRoutes = new Set(AUTH_ROUTES);
const publicRoutes = new Set(PUBLIC_ROUTES);

const originalPathMap = createOriginalPathMap();
const translatedPathMap = createTranslatedPathMap();

export default auth((req) => {
  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/_next/") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const locale =
    getLocaleFromPath(pathname) ||
    getPreferredLocale(req) ||
    routing.defaultLocale;
  const pathWithoutLocale = removeLocaleFromPath(pathname, locale);
  const originalPath =
    getOriginalPath(pathWithoutLocale, originalPathMap) ?? pathWithoutLocale;

  const isApiRoute = pathname.startsWith(API_PREFIX);
  const isAuthRoute = authRoutes.has(originalPath);
  const isPublicRoute = publicRoutes.has(pathWithoutLocale);
  const isLoggedIn = !!req.auth;

  if (isApiRoute) {
    const params = new URLSearchParams(search);
    const error = params.get("error");

    if (error) {
      return NextResponse.redirect(
        new URL(
          `/${locale}${resolvePathname("/signin", locale, translatedPathMap)}?error=${error}`,
          req.nextUrl,
        ),
      );
    }
    return NextResponse.next();
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(
      new URL(`/${locale}${DEFAULT_SIGNIN_REDIRECT}`, req.nextUrl),
    );
  }

  if (!isAuthRoute && !isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${resolvePathname("/signin", locale, translatedPathMap)}`,
        req.nextUrl,
      ),
    );
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
