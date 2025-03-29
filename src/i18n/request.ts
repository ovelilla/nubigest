// Vendors
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
// i18n
import { routing } from "./routing";
// Utils
import { getMessages } from "./utils/request.utils";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await getMessages(locale);

  return {
    locale,
    messages,
  };
});
