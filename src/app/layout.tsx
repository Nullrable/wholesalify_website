import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesalify – B2B Wholesale Ordering Platform",
  description:
    "Wholesalify helps wholesalers manage orders, inventory and purchasing in one platform. Modern B2B ordering system for distributors.",
  openGraph: {
    title: "Wholesalify Wholesale Platform",
    description: "Modern B2B ordering system for wholesalers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
