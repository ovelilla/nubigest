// Vendors
import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
// Constants
import {
  AUTH_ROUTES,
  DEFAULT_REDIRECT,
  PROTECTED_ROUTE_PREFIXES,
  TWO_FACTOR_ROUTES,
} from "@/constants/routes.constants";
// i18n
import { routing } from "./i18n/routing";
// Utils
import { getCanonicalPath } from "@/utils/routes/get-canonical-path/get-canonical-path.util";
import { getIsProtectedRoute } from "@/utils/routes/get-is-protected-route/get-is-protected-route.util";
import { getLocaleFromPath } from "@/utils/routes/get-locale-from-path/get-locale-from-path.util";
import { getLocalizedPath } from "@/utils/routes/get-localized-path/get-localized-path.util";
import { getPathWithoutLocale } from "@/utils/routes/get-path-without-locale/get-path-without-locale.util";

const handleI18nRouting = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  const pathname = request.nextUrl.pathname;

  const locale = getLocaleFromPath(pathname);
  const pathWithoutLocale = getPathWithoutLocale({ pathname, locale });
  const canonicalPath = getCanonicalPath({
    localizedPath: pathWithoutLocale,
    locale,
  });

  const isAuthRoute = AUTH_ROUTES.includes(canonicalPath);
  const isProtectedRoute = getIsProtectedRoute({
    path: canonicalPath,
    protectedPrefixes: PROTECTED_ROUTE_PREFIXES,
  });
  const isTwoFactorRoute = TWO_FACTOR_ROUTES.includes(canonicalPath);

  const sessionCookie = getSessionCookie(request);
  const twoFactorCookie = request.cookies.get("better-auth.two_factor");

  if (isTwoFactorRoute && !twoFactorCookie) {
    const signInUrl = new URL(
      getLocalizedPath({
        canonicalPath: "/signin",
        locale,
      }),
      request.url,
    );
    return NextResponse.redirect(signInUrl);
  }

  if (isProtectedRoute && !sessionCookie) {
    const signInUrl = new URL(
      getLocalizedPath({
        canonicalPath: "/signin",
        locale,
      }),
      request.url,
    );
    return NextResponse.redirect(signInUrl);
  }

  if (sessionCookie && isAuthRoute) {
    const redirectUrl = new URL(
      getLocalizedPath({
        canonicalPath: DEFAULT_REDIRECT,
        locale,
      }),
      request.url,
    );
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
