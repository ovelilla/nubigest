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

  // prettier-ignore
  const messages = {
  ...(await import(`@/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/signin/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/signup/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/two-factor/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/two-factor/(pages)/email/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/two-factor/(pages)/authenticator/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/two-factor/(pages)/backup/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/verify/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/forgot-password/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(auth)/(pages)/reset-password/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/account/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/appearance/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/notifications/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/privacy/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/profile/messages/${locale}.json`)).default,
  ...(await import(`@/app/[locale]/(protected)/(pages)/user/settings/(pages)/security/messages/${locale}.json`)).default,
};

  return {
    locale,
    messages,
  };
});
