import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/lib/i18n";
import { getArticleByPath, getCategories, getCategoryBySlug } from "@/lib/docs";
import DocsArticle from "@/components/DocsArticle";
import DocsToc from "@/components/DocsToc";
import { breadcrumbSchema, generatePageMetadata } from "@/components/SEO";
import type { Metadata } from "next";

interface PageProps {
  params: { locale: string; path: string[] };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, path } = params;
  if (!locales.includes(locale as Locale)) return {};
  const article = getArticleByPath(path, locale);

  if (!article) {
    return generatePageMetadata(locale as Locale, {
      title: "Documentation",
      description: "Wholesalify documentation.",
      pathname: `/docs/${path.join("/")}`,
    });
  }

  return generatePageMetadata(locale as Locale, {
    title: article.title,
    description: article.description,
    pathname: article.href,
  });
}

export default async function DocsPathPage({ params }: PageProps) {
  const { locale, path } = params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  // Path with no segments → already handled by docs/page.tsx, redirect for safety.
  if (path.length === 0) {
    redirect(`/${locale}/docs`);
  }

  // Single-segment path → category landing page.
  if (path.length === 1) {
    const categories = getCategories(locale);
    const category = categories.find((c) => c.slug === path[0]);
    if (!category) notFound();

    return (
      <div className="max-w-4xl">
        <div className="text-xs text-cta font-medium uppercase tracking-wider mb-3">
          {category.title}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {category.title}
        </h1>
        <p className="text-secondary mb-8">{category.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.articles.map((article) => (
            <Link
              key={article.href}
              href={`/${locale}${article.href}`}
              className="block rounded-lg border border-gray-200 p-4 hover:border-cta/40 hover:bg-cta/5 transition-colors"
            >
              <div className="font-semibold text-primary mb-1">
                {article.title}
              </div>
              <p className="text-sm text-secondary">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Two+ segment path → article page.
  const article = getArticleByPath(path, locale);
  if (!article) notFound();

  const breadcrumbItems = [
    { name: "Home", url: `/${locale}` },
    { name: "Documentation", url: `/${locale}/docs` },
    {
      name:
        getCategoryBySlug(article.category, locale)?.title ?? article.category,
      url: `/${locale}${`/docs/${article.category}`}`,
    },
    { name: article.title, url: article.href },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    inLanguage: locale,
    keywords: article.keywords.join(", "),
    datePublished: article.lastUpdated,
    dateModified: article.lastUpdated,
    image: "https://wholesalify.com/og-image.png",
    publisher: {
      "@type": "Organization",
      name: "Wholesalify",
      url: "https://wholesalify.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(locale as Locale, breadcrumbItems),
          ),
        }}
      />
      <div className="flex gap-10">
        <div className="flex-1 min-w-0 max-w-4xl">
          {/* Breadcrumb */}
          <nav
            className="flex items-center text-xs text-gray-500 mb-4"
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}/docs`} className="hover:text-primary">
              Documentation
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${locale}/docs/${article.category}`}
              className="hover:text-primary"
            >
              {getCategoryBySlug(article.category, locale)?.title ??
                article.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{article.title}</span>
          </nav>

          <DocsArticle article={article} />
        </div>

        <DocsToc items={article.toc} />
      </div>
    </>
  );
}
