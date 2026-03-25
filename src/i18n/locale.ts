"use server";

import { cookies } from "next/headers";
import { Locale } from "next-intl";
import { defaultLocale, locales } from "@/i18n/config";

const COOKIE_NAME = "locale";

const getDefaultLocale = (): Locale => {
  const defaultBrowserLanguage = navigator.language?.substring(0, 2).toLowerCase();

  return locales.includes(defaultBrowserLanguage as (typeof locales)[number])
    ? defaultBrowserLanguage
    : defaultLocale;
};

export const getUserLocale = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value || getDefaultLocale();
};

export const setUserLocale = async (locale: Locale) => {
  (await cookies()).set(COOKIE_NAME, locale);
};
