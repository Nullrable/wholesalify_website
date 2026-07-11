"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export default function DocsToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -75% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pl-6 border-l border-gray-100">
      <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-3">
        On this page
      </div>
      <ul className="space-y-1.5 text-[13px]">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              className={`block transition-colors ${
                activeId === item.id
                  ? "text-cta font-medium"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
