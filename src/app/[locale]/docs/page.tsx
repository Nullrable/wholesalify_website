import Link from "next/link";
import { getCategories, getArticles } from "@/lib/docs";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/components/SEO";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) return {};
  return generatePageMetadata(locale as Locale, {
    title: "Wholesalify Documentation",
    description:
      "Product documentation for Wholesalify — the B2B wholesale ordering platform. Set up your ordering portal, manage orders, inventory, and purchasing.",
    pathname: "/docs",
  });
}

export default async function DocsHomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("docs.home");
  const categories = getCategories(locale);
  const allArticles = getArticles(locale);

  return (
    <div className="max-w-4xl">
      <section className="mb-12">
        <div className="text-xs text-cta font-medium uppercase tracking-wider mb-3">
          {t("label")}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          {t("description")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href={`/${locale}/docs/get-started/quickstart`}
            className="inline-flex items-center gap-2 bg-cta text-white px-5 py-2.5 rounded-lg hover:bg-cta/90 transition-colors"
          >
            {t("startQuickstart")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link
            href={`/${locale}/docs/get-started/overview`}
            className="inline-flex items-center gap-2 border border-cta text-cta px-5 py-2.5 rounded-lg hover:bg-cta/10 transition-colors"
          >
            {t("readOverview")}
          </Link>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.slug} className="mb-10">
          <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-gray-100">
            <h2 className="text-xl font-bold text-primary">{category.title}</h2>
            <span className="text-[11px] text-gray-500 uppercase tracking-wider">
              {category.articles.length}{" "}
              {category.articles.length === 1 ? t("article") : t("articles")}
            </span>
          </div>
          <p className="text-secondary text-sm mb-4">{category.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {category.articles.map((article) => {
              const fullArticle = allArticles.find(
                (a) => a.href === article.href,
              );
              return (
                <Link
                  key={article.href}
                  href={`/${locale}${article.href}`}
                  className="block rounded-lg border border-gray-200 p-4 hover:border-cta/40 hover:bg-cta/5 transition-colors"
                >
                  <div className="font-semibold text-primary mb-1 group-hover:text-cta">
                    {article.title}
                  </div>
                  <p className="text-sm text-secondary">
                    {article.description}
                  </p>
                  {fullArticle && (
                    <div className="mt-2 text-[11px] text-gray-500">
                      {fullArticle.readingTime}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
