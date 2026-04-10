import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { organizationSchema, softwareSchema } from "@/components/SEO";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

const BASE_URL = "https://wholesalify.com";

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

  const title = "Wholesalify - Modern B2B Wholesale Ordering Platform";
  const description =
    "Manage wholesale orders, inventory, and purchasing in one simple system. Join early access today.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    manifest: "/manifest.json",
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "x-default": "/en",
        ...Object.fromEntries(locales.map((loc) => [loc, `/${loc}`])),
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locales.filter((l) => l !== locale) as any,
      url: `/${locale}`,
      siteName: "Wholesalify",
      title,
      description,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Wholesalify",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

  const hreflangLinks = locales
    .map((loc) => ({
      rel: "alternate",
      hreflang: loc === "en" ? "en" : loc,
      href: `${BASE_URL}/${loc}`,
    }))
    .concat([
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${BASE_URL}/en`,
      },
    ]);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {hreflangLinks.map((link, i) => (
          <link
            key={i}
            rel={link.rel}
            hrefLang={link.hreflang}
            href={link.href}
          />
        ))}
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
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
