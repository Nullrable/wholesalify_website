"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Period = "MONTHLY" | "YEARLY";
type Tier = "FREE" | "GO" | "PLUS";

interface TierConfig {
  id: Tier;
  nameKey: string;
  taglineKey: string;
  prices: { MONTHLY: number; YEARLY: number };
  featureKeys: string[];
  highlight: boolean;
}

const TIER_CONFIG: Record<Tier, TierConfig> = {
  FREE: {
    id: "FREE",
    nameKey: "billing_plan_free",
    taglineKey: "billing_plan_free_tagline",
    prices: { MONTHLY: 0, YEARLY: 0 },
    featureKeys: [
      "billing_feat_core_crm",
      "billing_feat_product_management",
      "billing_feat_basic_inventory",
      "billing_feat_sales_orders",
      "billing_feat_1_team_member",
      "billing_feat_20_orders_mo",
      "billing_feat_240_orders_yr",
      "billing_feat_email_support",
    ],
    highlight: false,
  },
  GO: {
    id: "GO",
    nameKey: "billing_plan_go",
    taglineKey: "billing_plan_go_tagline",
    prices: { MONTHLY: 40, YEARLY: 400 },
    featureKeys: [
      "billing_feat_everything_in_free",
      "billing_feat_5_team_members",
      "billing_feat_200_orders_mo",
      "billing_feat_2400_orders_yr",
    ],
    highlight: true,
  },
  PLUS: {
    id: "PLUS",
    nameKey: "billing_plan_plus",
    taglineKey: "billing_plan_plus_tagline",
    prices: { MONTHLY: 99, YEARLY: 990 },
    featureKeys: [
      "billing_feat_everything_in_go",
      "billing_feat_unlimited_team_members",
      "billing_feat_unlimited_orders",
    ],
    highlight: false,
  },
};

const TIERS: Tier[] = ["FREE", "GO", "PLUS"];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function Price() {
  const t = useTranslations("price");
  const [period, setPeriod] = useState<Period>("MONTHLY");

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setPeriod("MONTHLY")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                period === "MONTHLY"
                  ? "bg-primary text-white"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {t("billing_period_monthly")}
            </button>
            <button
              onClick={() => setPeriod("YEARLY")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-2 ${
                period === "YEARLY"
                  ? "bg-primary text-white"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {t("billing_period_yearly")}
              <span
                className={`text-xs px-1.5 py-0.5 rounded ${
                  period === "YEARLY"
                    ? "bg-white/20 text-white"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {t("billing_period_save_badge")}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - display only, no subscription button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TIERS.map((tier) => (
            <PricingCard key={tier} tier={tier} period={period} />
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            {t("billing_faq_title")}
          </h2>
          <div className="space-y-3">
            <FaqItem qKey="billing_faq_q1" aKey="billing_faq_a1" />
            <FaqItem qKey="billing_faq_q2" aKey="billing_faq_a2" />
            <FaqItem qKey="billing_faq_q3" aKey="billing_faq_a3" />
            <FaqItem qKey="billing_faq_q4" aKey="billing_faq_a4" />
            <FaqItem qKey="billing_faq_q5" aKey="billing_faq_a5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ tier, period }: { tier: Tier; period: Period }) {
  const t = useTranslations("price");
  const config = TIER_CONFIG[tier];
  const price = config.prices[period];
  const isYearly = period === "YEARLY";
  const monthlyEquivalent =
    isYearly && price > 0 ? Math.round(price / 12) : price;
  const monthlyDisplay = isYearly ? monthlyEquivalent : price;

  return (
    <div
      className={`relative bg-white rounded-xl p-6 flex flex-col border ${
        config.highlight
          ? "border-2 border-primary shadow-lg md:-mt-4 md:mb-4"
          : "border border-gray-200"
      }`}
    >
      {config.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            <SparkleIcon />
            {t("billing_most_popular")}
          </span>
        </div>
      )}

      <div className="mb-2">
        <h3 className="text-xl font-bold text-primary">{t(config.nameKey)}</h3>
        <p className="text-sm text-secondary mt-1">{t(config.taglineKey)}</p>
      </div>

      <div className="my-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-primary">
            ${monthlyDisplay}
          </span>
          <span className="text-sm text-secondary">
            {t("billing_per_month_short")}
          </span>
        </div>
        {isYearly && price > 0 && (
          <div className="text-xs text-secondary mt-1">
            ${price}
            {t("billing_per_year_short")} ·{" "}
            {t("billing_period_yearly").toLowerCase()}
          </div>
        )}
      </div>

      <ul className="space-y-2 text-sm mb-8 flex-1">
        {config.featureKeys.map((key) => (
          <li key={key} className="flex items-start gap-2">
            <CheckIcon />
            <span className="text-secondary">{t(key)}</span>
          </li>
        ))}
      </ul>

      {/* Display-only — no subscription button per requirement */}
    </div>
  );
}

function FaqItem({ qKey, aKey }: { qKey: string; aKey: string }) {
  const t = useTranslations("price");
  return (
    <details className="group bg-white rounded-lg border border-gray-200">
      <summary className="flex cursor-pointer list-none items-center justify-between p-4">
        <span className="text-sm font-medium text-primary">{t(qKey)}</span>
        <ChevronIcon className="w-4 h-4 text-secondary transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-4 text-sm text-secondary">{t(aKey)}</div>
    </details>
  );
}
