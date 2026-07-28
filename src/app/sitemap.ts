import { MetadataRoute } from "next";
import { getArticles, getCategories } from "@/lib/docs";
import { locales, type Locale } from "@/lib/i18n";

const BASE_URL = "https://wholesalify.com";

const MARKETING_ROUTES = [
  "",
  "/about",
  "/contact",
  "/features",
  "/price",
  "/privacy",
  "/terms",
  "/docs",
] as const;

const ALL_LOCALES = locales;

function alternatesFor(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return {
    languages: {
      "x-default": `${BASE_URL}/en${normalized}`,
      ...Object.fromEntries(
        ALL_LOCALES.map((locale) => [
          locale,
          `${BASE_URL}/${locale}${normalized}`,
        ]),
      ) as Record<Locale, string>,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ---- Marketing routes for all locales ----
  const marketingEntries = MARKETING_ROUTES.flatMap((route) =>
    ALL_LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : route === "/docs" ? 0.9 : 0.8,
      alternates: alternatesFor(route),
    })),
  );

  // ---- Doc category landing pages for all locales ----
  const categoryEntries = ALL_LOCALES.flatMap((locale) =>
    getCategories(locale).map((category) => ({
      url: `${BASE_URL}/${locale}${category.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: alternatesFor(category.href),
    })),
  );

  // ---- Doc article pages for all locales that have translations ----
  const articleEntries = ALL_LOCALES.flatMap((locale) => {
    const articles = getArticles(locale);
    if (articles.length === 0) return [];
    return articles.map((article) => ({
      url: `${BASE_URL}/${locale}${article.href}`,
      lastModified: new Date(article.lastUpdated),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: alternatesFor(article.href),
    }));
  });

  return [...marketingEntries, ...categoryEntries, ...articleEntries];
}