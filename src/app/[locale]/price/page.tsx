import { setRequestLocale } from "next-intl/server";
import { generateTranslatedPageMetadata } from "@/components/SEO";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Price from "@/components/Price";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return generateTranslatedPageMetadata(locale as Locale, {
    namespace: "price",
    titleKey: "title",
    descriptionKey: "subtitle",
    pathname: "/price",
  });
}

export default async function PricePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20">
        <Price />
      </div>
    </main>
  );
}
