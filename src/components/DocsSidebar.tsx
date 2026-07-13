"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface SidebarSection {
  title: string;
  categories: {
    slug: string;
    title: string;
    href: string;
    articles: { href: string; title: string }[];
  }[];
}

interface Props {
  sections: SidebarSection[];
}

function CategoryItem({
  category,
  pathname,
  onNavigate,
}: {
  category: SidebarSection["categories"][number];
  pathname: string;
  onNavigate?: () => void;
}) {
  const categoryActive = pathname.startsWith(category.href);
  // Always render expanded by default so users can see the full catalog.
  // The chevron allows collapsing it.
  const [open, setOpen] = useState(true);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((v) => !v);
  };

  return (
    <li key={category.slug}>
      <div
        className={`flex items-center justify-between rounded-md px-3 py-1.5 transition-colors ${
          categoryActive
            ? "bg-cta/10 text-cta font-semibold"
            : "text-secondary hover:bg-gray-100 hover:text-primary"
        }`}
      >
        <Link
          href={category.href}
          onClick={() => onNavigate?.()}
          className="flex-1 truncate"
        >
          {category.title}
        </Link>
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? "Collapse" : "Expand"}
          className="ml-2 p-0.5 rounded hover:bg-black/5"
        >
          <svg
            className={`w-3 h-3 transition-transform ${open ? "rotate-90" : ""}`}
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
        </button>
      </div>
      {open && (
        <ul className="mt-1 ml-2 border-l border-gray-200 pl-2 space-y-0.5">
          {category.articles.map((article) => {
            const articleActive = pathname === article.href;
            return (
              <li key={article.href}>
                <Link
                  href={article.href}
                  onClick={() => onNavigate?.()}
                  className={`block rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                    articleActive
                      ? "text-cta font-semibold bg-cta/5"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default function DocsSidebar({ sections }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navList = (
    <nav aria-label="Documentation" className="text-sm">
      {sections.map((section) => (
        <div key={section.title} className="mb-7">
          <div className="font-semibold text-primary mb-3 text-xs uppercase tracking-wider">
            {section.title}
          </div>
          <ul className="space-y-1">
            {section.categories.map((category) => (
              <CategoryItem
                key={category.slug}
                category={category}
                pathname={pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-primary bg-white"
        >
          <span>Documentation menu</span>
          <svg
            className={`w-4 h-4 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
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
        </button>
        {mobileOpen && (
          <div className="mt-2 rounded-lg border border-gray-200 bg-white p-4">
            {navList}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-4">
        {navList}
      </aside>
    </>
  );
}
