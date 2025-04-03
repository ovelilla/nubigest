// Vendors
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
// i18n
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/signin/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/signup/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/forgot-password/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/reset-password/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/verify-email/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/signout/messages/${locale}.json`
      )
    ).default,
    ...(
      await import(
        `../app/[locale]/(auth)/(pages)/auth-error/messages/${locale}.json`
      )
    ).default,
  };

  return {
    locale,
    messages,
  };
});
