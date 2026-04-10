"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeNames } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale = (params.locale as string) || "en";

  function onLocaleChange(newLocale: string) {
    startTransition(() => {
      const currentPath = pathname.replace(`/${currentLocale}`, "") || "/";
      router.push(`/${newLocale}${currentPath}`);
    });
  }

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => onLocaleChange(e.target.value)}
        disabled={isPending}
        className="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cta/50"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500"
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
    </div>
  );
}
