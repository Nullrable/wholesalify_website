import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  generateTranslatedPageMetadata,
  organizationSchema,
  softwareSchema,
} from "@/components/SEO";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const metadata = await generateTranslatedPageMetadata(locale as Locale, {
    namespace: "hero",
    titleKey: "subtitle",
    descriptionKey: "description",
  });

  return {
    ...metadata,
    manifest: "/manifest.json",
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </NextIntlClientProvider>
    </div>
  );
}
