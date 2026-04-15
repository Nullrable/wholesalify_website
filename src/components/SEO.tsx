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
const DEFAULT_OG_IMAGE = "/og-image.png";
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

const SEO_KEYWORDS: Record<string, string[]> = {
  en: [
    "wholesale ordering platform",
    "B2B ecommerce",
    "inventory management",
    "order management",
    "wholesale software",
    "small business wholesale software",
    "fruit wholesale software",
    "fresh produce wholesale software",
    "seafood wholesale software",
    "find fruit wholesale software",
  ],
  zh: [
    "批发订货平台",
    "B2B电商",
    "库存管理",
    "订单管理",
    "批发软件",
    "小型批发软件",
    "水果批发软件",
    "生鲜批发软件",
    "水产批发软件",
    "找一款水果批发软件",
  ],
  vi: [
    "nền tảng đặt hàng bán sỉ",
    "thương mại điện tử B2B",
    "quản lý hàng tồn kho",
    "quản lý đơn hàng",
    "phần mềm bán sỉ",
    "phần mềm bán sỉ cho doanh nghiệp nhỏ",
    "phần mềm bán sỉ trái cây",
    "phần mềm bán sỉ nông sản tươi",
    "phần mềm bán sỉ hải sản",
    "tìm phần mềm bán sỉ trái cây",
  ],
  th: [
    "แพลตฟอร์มสั่งซื้อค้าส่ง",
    "B2B อีคอมเมิร์ซ",
    "การจัดการสินค้าคงคลัง",
    "การจัดการคำสั่งซื้อ",
    "ซอฟต์แวร์ค้าส่ง",
    "ซอฟต์แวร์ค้าส่งสำหรับธุรกิจขนาดเล็ก",
    "ซอฟต์แวร์ค้าส่งผลไม้",
    "ซอฟต์แวร์ค้าส่งผลิตภัณฑ์สด",
    "ซอฟต์แวร์ค้าส่งอาหารทะเล",
    "ค้นหาซอฟต์แวร์ค้าส่งผลไม้",
  ],
  id: [
    "platform pemesanan grosir",
    "B2B ecommerce",
    "manajemen inventori",
    "manajemen pesanan",
    "perangkat lunak grosir",
    "perangkat lunak grosir bisnis kecil",
    "perangkat lunak grosir buah",
    "perangkat lunak grosir produk segar",
    "perangkat lunak grosir seafood",
    "cari perangkat lunak grosir buah",
  ],
  ms: [
    "platform pesanan borong",
    "B2B ecommerce",
    "pengurusan inventori",
    "pengurusan pesanan",
    "perisian borong",
    "perisian borong perniagaan kecil",
    "perisian borong buah",
    "perisian borong produk segar",
    "perisian borong makanan laut",
    "cari perisian borong buah",
  ],
  ar: [
    "منصة طلبات الجملة",
    "التجارة الإلكترونية B2B",
    "إدارة المخزون",
    "إدارة الطلبات",
    "برمجيات الجملة",
    "برمجيات جملة للشركات الصغيرة",
    "برمجيات جملة الفواكه",
    "برمجيات جملة المنتجات الطازجة",
    "برمجيات جملة المأكولات البحرية",
    "ابحث عن برمجيات جملة الفواكه",
  ],
  tr: [
    "toptan sipariş platformu",
    "B2B e-ticaret",
    "envanter yönetimi",
    "sipariş yönetimi",
    "toptan yazılım",
    "küçük işletme toptan yazılımı",
    "meyve toptan yazılımı",
    "taze ürün toptan yazılımı",
    "deniz ürünleri toptan yazılımı",
    "meyve toptan yazılımı bul",
  ],
  de: [
    "Großhandels-Bestellplattform",
    "B2B-E-Commerce",
    "Bestandsverwaltung",
    "Auftragsverwaltung",
    "Großhandelssoftware",
    "Großhandelssoftware für Kleinunternehmen",
    "Obst-Großhandelssoftware",
    "Frischwaren-Großhandelssoftware",
    "Meeresfrüchte-Großhandelssoftware",
    "Obst-Großhandelssoftware finden",
  ],
  fr: [
    "plateforme de commande en gros",
    "commerce électronique B2B",
    "gestion des stocks",
    "gestion des commandes",
    "logiciel de gros",
    "logiciel de gros pour petites entreprises",
    "logiciel de gros de fruits",
    "logiciel de gros de produits frais",
    "logiciel de gros de fruits de mer",
    "trouver un logiciel de gros de fruits",
  ],
  it: [
    "piattaforma di ordinazione all'ingrosso",
    "ecommerce B2B",
    "gestione dell'inventario",
    "gestione degli ordini",
    "software all'ingrosso",
    "software all'ingrosso per piccole imprese",
    "software all'ingrosso per frutta",
    "software all'ingrosso per prodotti freschi",
    "software all'ingrosso per frutti di mare",
    "trova software all'ingrosso per frutta",
  ],
  pl: [
    "platforma zamówień hurtowych",
    "e-commerce B2B",
    "zarządzanie zapasami",
    "zarządzanie zamówieniami",
    "oprogramowanie hurtowe",
    "oprogramowanie hurtowe dla małych firm",
    "oprogramowanie hurtowe owoców",
    "oprogramowanie hurtowe produktów świeżych",
    "oprogramowanie hurtowe owoców morza",
    "znajdź oprogramowanie hurtowe owoców",
  ],
  "es-ES": [
    "plataforma de pedidos al por mayor",
    "comercio electrónico B2B",
    "gestión de inventario",
    "gestión de pedidos",
    "software al por mayor",
    "software al por mayor para pequeñas empresas",
    "software al por mayor de frutas",
    "software al por mayor de productos frescos",
    "software al por mayor de mariscos",
    "buscar software al por mayor de frutas",
  ],
  "es-MX": [
    "plataforma de pedidos al por mayor",
    "comercio electrónico B2B",
    "gestión de inventario",
    "gestión de pedidos",
    "software al por mayor",
    "software al por mayor para pequeñas empresas",
    "software al por mayor de frutas",
    "software al por mayor de productos frescos",
    "software al por mayor de mariscos",
    "buscar software al por mayor de frutas",
  ],
  "pt-PT": [
    "plataforma de pedidos por grosso",
    "comércio eletrónico B2B",
    "gestão de inventário",
    "gestão de pedidos",
    "software por grosso",
    "software por grosso para pequenas empresas",
    "software por grosso de frutas",
    "software por grosso de produtos frescos",
    "software por grosso de mariscos",
    "encontrar software por grosso de frutas",
  ],
  "pt-BR": [
    "plataforma de pedidos por atacado",
    "commerce électronique B2B",
    "gestion des stocks",
    "gestion des commandes",
    "logiciel de gros",
    "logiciel de gros pour petites entreprises",
    "logiciel de gros de fruits",
    "logiciel de gros de produits frais",
    "logiciel de gros de fruits de mer",
    "trouver un logiciel de gros de fruits",
  ],
};

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

  const keywords = SEO_KEYWORDS[locale] || SEO_KEYWORDS["en"];

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords,
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
