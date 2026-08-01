import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { generateTranslatedPageMetadata } from "@/components/SEO";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

const SECTION_COUNT = 10;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return generateTranslatedPageMetadata(locale as Locale, {
    namespace: "terms",
    titleKey: "title",
    descriptionKey: "intro",
    pathname: "/terms",
  });
}

export default async function TermsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("terms");

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">{t("title")}</h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="text-sm text-gray-500 not-prose">
              {t("lastUpdated", { date: new Date().toLocaleDateString() })}
            </p>
            <p>{t("intro")}</p>

            {Array.from({ length: SECTION_COUNT }, (_, i) => i + 1).map((n) => {
              const titleKey = `section${n}Title`;
              const descKey = `section${n}Desc`;
              const itemsKey = `section${n}Items`;
              const hasItems = t.has(itemsKey as never);
              const isLast = n === SECTION_COUNT;

              return (
                <section key={n}>
                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    {t(titleKey as never)}
                  </h2>
                  <p>
                    {t(descKey as never)}{" "}
                    {isLast && (
                      <a
                        href="mailto:wholesalify@hotmail.com"
                        className="text-cta hover:underline"
                      >
                        wholesalify@hotmail.com
                      </a>
                    )}
                  </p>
                  {hasItems && (
                    <ul>
                      {(t.raw(itemsKey as never) as string[]).map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
