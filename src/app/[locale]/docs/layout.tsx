import type { Metadata } from "next";
import DocsSidebar from "@/components/DocsSidebar";
import { getSections } from "@/lib/docs";
import { setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/lib/i18n";
import { generatePageMetadata } from "@/components/SEO";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Pick<Props, "params">): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) return {};
  return generatePageMetadata(locale as Locale, {
    title: "Wholesalify Documentation",
    description:
      "Product documentation for Wholesalify — the B2B wholesale ordering platform. Learn how to set up your ordering portal, manage orders, inventory, and purchasing.",
    pathname: "/docs",
  });
}

export default async function DocsLayout({
  children,
  params: { locale },
}: Props) {
  setRequestLocale(locale);
  const sections = getSections(locale);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex gap-8 xl:gap-12">
          <DocsSidebar
            sections={sections.map((section) => ({
              title: section.title,
              categories: section.categories.map((c) => ({
                slug: c.slug,
                title: c.title,
                href: `/${locale}${c.href}`,
                articles: c.articles.map((a) => ({
                  href: `/${locale}${a.href}`,
                  title: a.title,
                })),
              })),
            }))}
          />

          <main id="main" className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
