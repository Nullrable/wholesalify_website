import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface SEOProps {
  locale: Locale;
  title: string;
  description: string;
  pathname?: string;
  image?: string;
}

const BASE_URL = "https://wholesalify.com";
const DEFAULT_OG_IMAGE = "/og-image.svg";
const DEFAULT_LOCALE: Locale = "en";

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function buildLocalizedAlternates(locale: Locale, pathname: string) {
  const normalizedPath = normalizePathname(pathname);

  return {
    canonical: `/${locale}${normalizedPath}`,
    languages: {
      "x-default": `/${DEFAULT_LOCALE}${normalizedPath}`,
      ...Object.fromEntries(
        locales.map((supportedLocale) => [
          supportedLocale,
          `/${supportedLocale}${normalizedPath}`,
        ]),
      ),
    },
  };
}

export function generateMetadata({
  locale,
  title,
  description,
  pathname = "",
  image = DEFAULT_OG_IMAGE,
}: SEOProps): Metadata {
  const normalizedPath = normalizePathname(pathname);
  const canonical = `${BASE_URL}/${locale}${normalizedPath}`;
  const fullTitle = title === "Wholesalify" ? title : `${title} | Wholesalify`;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords: [
      "wholesale ordering platform",
      "B2B ecommerce",
      "inventory management",
      "order management",
      "wholesale software",
    ],
    alternates: {
      ...buildLocalizedAlternates(locale, normalizedPath),
    },
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locales.filter((l) => l !== locale),
      url: canonical,
      siteName: "Wholesalify",
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Wholesalify - Modern B2B Wholesale Ordering Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wholesalify",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Modern B2B Wholesale Ordering Platform for wholesalers and distributors.",
  sameAs: [
    "https://twitter.com/wholesalify",
    "https://linkedin.com/company/wholesalify",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@wholesalify.com",
  },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wholesalify",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free early access for wholesale businesses",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "126",
  },
};

export const breadcrumbSchema = (
  locale: Locale,
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}/${locale}${item.url}`,
  })),
});

export function generatePageMetadata(
  locale: Locale,
  page: {
    title: string;
    description: string;
    pathname?: string;
    image?: string;
  },
): Metadata {
  return generateMetadata({
    locale,
    title: page.title,
    description: page.description,
    pathname: page.pathname,
    image: page.image,
  });
}

export async function generateTranslatedPageMetadata(
  locale: Locale,
  page: {
    namespace: string;
    titleKey: string;
    descriptionKey: string;
    pathname?: string;
    image?: string;
  },
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: page.namespace,
  });

  return generatePageMetadata(locale, {
    title: t(page.titleKey),
    description: t(page.descriptionKey),
    pathname: page.pathname,
    image: page.image,
  });
}
