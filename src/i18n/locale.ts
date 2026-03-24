import { cookies } from "next/headers";
import { Locale, defaultLocale, locales } from "@/i18n/config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

const getDefaulLocale = () : Locale => {
  const defaultBrowserLanguage = navigator.language?.substring(2, 0).toLocaleLowerCase();

  const locale = locales.includes(defaultBrowserLanguage as Locale)
    ? (defaultBrowserLanguage as Locale)
    : defaultLocale;

  return locale;
};

export const getUserLocale = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value || getDefaulLocale();
};

export const setUserLocale = async (locale: Locale) => {
  (await cookies()).set(COOKIE_NAME, locale);
};
