"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

const STORAGE_KEY = "wholesalify_cookie_consent";

export type CookieConsent = "accepted" | "declined";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setStoredConsent(value: CookieConsent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(
    new CustomEvent<CookieConsent>("cookieConsentChange", { detail: value }),
  );
}

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "en";

  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (getStoredConsent() === null) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: CookieConsent) => {
    setStoredConsent(value);
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("title")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-secondary">
          <p className="font-medium text-primary">{t("title")}</p>
          <p className="mt-1">
            {t("message")}{" "}
            <Link
              href={`/${locale}/privacy`}
              className="text-cta hover:underline"
            >
              {t("privacyLink")}
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-secondary hover:bg-gray-50 transition-colors"
          >
            {t("decline")}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-md bg-cta px-4 py-2 text-sm font-medium text-white hover:bg-cta/90 transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}