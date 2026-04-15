"use client";

import { useTranslations } from "next-intl";
import EmailForm from "./EmailForm";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          {t("title")}
          <br />
          <span className="text-cta">{t("subtitle")}</span>
        </h1>
        <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <div id="waitlist" className="flex justify-center mb-6 scroll-mt-24">
          <EmailForm />
        </div>
        <p className="text-sm text-gray-500">{t("joinList")}</p>
      </div>
    </section>
  );
}
