import { MetadataRoute } from "next";
import { getArticles } from "@/lib/docs";

const BASE_URL = "https://wholesalify.com";

const DOC_LOCALES = ["en", "zh"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/features",
    "/price",
    "/privacy",
    "/terms",
    "/docs",
  ];
  const allLocales = [
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
  ];

  // Marketing routes for all locales.
  const marketingEntries = routes.flatMap((route) =>
    allLocales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
  );

  // Documentation entries — emit for every locale that has translated content.
  const docEntries = DOC_LOCALES.flatMap((locale) =>
    getArticles(locale).map((article) => ({
      url: `${BASE_URL}/${locale}${article.href}`,
      lastModified: new Date(article.lastUpdated),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  return [...marketingEntries, ...docEntries];
}
