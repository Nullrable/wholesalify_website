import type { ReactNode } from "react";

type Variant = "info" | "warning" | "success";

const STYLES: Record<
  Variant,
  { wrap: string; icon: string; iconSvg: ReactNode }
> = {
  info: {
    wrap: "bg-cta/5 border-cta/20 text-foreground",
    icon: "text-cta",
    iconSvg: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v-4M12 8h.01"
        />
      </svg>
    ),
  },
  warning: {
    wrap: "bg-amber-50 border-amber-200 text-amber-950",
    icon: "text-amber-600",
    iconSvg: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    ),
  },
  success: {
    wrap: "bg-emerald-50 border-emerald-200 text-emerald-950",
    icon: "text-emerald-600",
    iconSvg: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
};

export default function DocsCallout({
  variant,
  title,
  text,
  action,
}: {
  variant: Variant;
  title?: string;
  text: string;
  action?: { href: string; label: string };
}) {
  const style = STYLES[variant];
  return (
    <div
      className={`my-6 flex gap-3 rounded-lg border px-4 py-3.5 ${style.wrap}`}
    >
      <div className={`shrink-0 mt-0.5 ${style.icon}`}>{style.iconSvg}</div>
      <div className="text-sm leading-relaxed flex-1">
        {title && <div className="font-semibold mb-0.5">{title}</div>}
        <div>{text}</div>
        {action && (
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-cta px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-cta/90 transition-colors"
          >
            {action.label}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
