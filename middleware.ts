import createMiddleware from "next-intl/middleware";
import { locales } from "./src/lib/i18n";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  // Match root + all locale-prefixed paths so next-intl can rewrite
  // "/" -> "/en" with a proper Location header
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
