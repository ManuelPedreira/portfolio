"use client";

import { locales } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();

  return (
    <div style={{ display: "flex", gap: 5 }}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => setUserLocale(locale)}
          style={{ fontWeight: locale === currentLocale ? "bold" : "normal" }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
