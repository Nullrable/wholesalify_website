import createMiddleware from "next-intl/middleware";
import { locales } from "./src/lib/i18n";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/(zh|vi|th|id|ms|ar|tr|es-MX|es-ES|pt-BR|pt-PT|de|fr|it|pl)/:path*",
  ],
};
