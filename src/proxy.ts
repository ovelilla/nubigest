// Vendors
import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
// Constants
import {
  AUTH_ROUTES,
  DEFAULT_REDIRECT,
  PROTECTED_ROUTES,
  TWO_FACTOR_ROUTES,
} from "@/constants/routes.constants";
// i18n
import { routing } from "./i18n/routing";
// Utils
import { getLocaleFromPath } from "@/utils/routes/get-locale-from-path/get-locale-from-path.util";
import { getPathWithoutLocale } from "@/utils/routes/get-path-without-locale/get-path-without-locale.util";

const handleI18nRouting = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  const pathname = request.nextUrl.pathname;

  const locale = getLocaleFromPath(pathname);
  const pathWithoutLocale = getPathWithoutLocale(pathname, locale);

  const isAuthRoute = AUTH_ROUTES.includes(pathWithoutLocale);
  const isProtectedRoute = PROTECTED_ROUTES.includes(pathWithoutLocale);
  const isTwoFactorRoute = TWO_FACTOR_ROUTES.includes(pathWithoutLocale);

  const sessionCookie = getSessionCookie(request);
  const twoFactorCookie = request.cookies.get("better-auth.two_factor");

  if (isTwoFactorRoute && !twoFactorCookie) {
    const signInUrl = new URL(`/${locale}/signin`, request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (isProtectedRoute && !sessionCookie) {
    const signInUrl = new URL(`/${locale}/signin`, request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (sessionCookie && isAuthRoute) {
    const redirectUrl = new URL(`/${locale}${DEFAULT_REDIRECT}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
