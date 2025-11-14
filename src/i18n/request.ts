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
    ...(await import(`../messages/${locale}.json`)).default,
    ...(await import(`../app/[locale]/messages/${locale}.json`)).default,
    ...(await import(`../app/[locale]/(auth)/messages/${locale}.json`)).default,
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
      await import(`../app/[locale]/(auth)/(pages)/2fa/messages/${locale}.json`)
    ).default,
    ...(await import(`../app/[locale]/(protected)/messages/${locale}.json`))
      .default,
  };

  return {
    locale,
    messages,
  };
});
