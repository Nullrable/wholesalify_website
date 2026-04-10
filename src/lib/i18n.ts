import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = [
  "en",
  "zh",
  "vi",
  "th",
  "id",
  "ms",
  "ar",
  "tr",
  "es-MX",
  "pt-BR",
  "de",
  "fr",
  "it",
  "pl",
  "es-ES",
  "pt-PT",
] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  ar: "العربية",
  tr: "Türkçe",
  "es-MX": "Español (MX)",
  "pt-BR": "Português (BR)",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  pl: "Polski",
  "es-ES": "Español (ES)",
  "pt-PT": "Português (PT)",
};

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
