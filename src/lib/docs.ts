import type { Locale } from "./i18n";

export type DocBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "callout";
      variant: "info" | "warning" | "success";
      title?: string;
      text: string;
      action?: { href: string; label: string };
    }
  | { type: "code"; lang: string; code: string; filename?: string }
  | {
      type: "mockup";
      variant:
        | "dashboard"
        | "order"
        | "inventory"
        | "purchase"
        | "customer"
        | "settings"
        | "tier-price"
        | "weighed-grades"
        | "customer-price-level"
        | "showroom-private"
        | "product-list"
        | "product-standard"
        | "product-weighed"
        | "product-multi-spec";
      active?: string;
    }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface DocArticle {
  locale: Locale;
  slug: string;
  category: string;
  href: string;
  title: string;
  description: string;
  keywords: string[];
  readingTime: string;
  lastUpdated: string;
  blocks: DocBlock[];
  toc: { id: string; text: string; level: 2 | 3 }[];
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}

export interface DocCategory {
  slug: string;
  title: string;
  href: string;
  description: string;
  articles: { href: string; title: string; description: string }[];
}

export interface DocSection {
  title: string;
  categories: DocCategory[];
}

// ---------------------------------------------------------------------------
// Category labels (per locale)
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    "get-started": "Get started",
    "ordering-portal": "Ordering portal",
    orders: "Order management",
    inventory: "Inventory",
    purchasing: "Purchasing",
  },
  zh: {
    "get-started": "快速开始",
    "ordering-portal": "订货门户",
    orders: "订单管理",
    inventory: "库存",
    purchasing: "采购",
  },
  vi: {},
  th: {},
  id: {},
  ms: {},
  ar: {},
  tr: {},
  "es-MX": {},
  "es-ES": {},
  "pt-BR": {},
  "pt-PT": {},
  de: {},
  fr: {},
  it: {},
  pl: {},
};

const CATEGORY_DESCRIPTIONS: Record<Locale, Record<string, string>> = {
  en: {
    "get-started":
      "Set up your tenant, build a catalog, and place your first wholesale order in under an hour.",
    "ordering-portal":
      "Configure the storefront your wholesale buyers use — catalog, pricing, and the buyer experience.",
    orders:
      "Manage every order from submission through delivery, including status transitions and invoicing.",
    inventory:
      "Track stock across warehouses, set reorder thresholds, and reconcile inventory in real time.",
    purchasing:
      "Manage suppliers, build purchase orders, and convert received goods into updated stock.",
  },
  zh: {
    "get-started": "搭建租户、配置目录，并在一小时内完成第一笔批发订单。",
    "ordering-portal": "配置批发客户使用的订货门户——目录、定价以及客户体验。",
    orders: "管理从下单到交付的全流程订单，包括状态流转与开票。",
    inventory: "跨仓库跟踪库存、设置补货阈值，并实时核对库存。",
    purchasing: "管理供应商、建立采购订单，并将收货转化为库存更新。",
  },
  vi: {},
  th: {},
  id: {},
  ms: {},
  ar: {},
  tr: {},
  "es-MX": {},
  "es-ES": {},
  "pt-BR": {},
  "pt-PT": {},
  de: {},
  fr: {},
  it: {},
  pl: {},
};

const SECTION_TITLES: Record<Locale, Record<string, string>> = {
  en: {
    fundamentals: "Fundamentals",
    platform: "Platform guides",
  },
  zh: {
    fundamentals: "入门基础",
    platform: "平台指南",
  },
  vi: {},
  th: {},
  id: {},
  ms: {},
  ar: {},
  tr: {},
  "es-MX": {},
  "es-ES": {},
  "pt-BR": {},
  "pt-PT": {},
  de: {},
  fr: {},
  it: {},
  pl: {},
};

// ---------------------------------------------------------------------------
// Articles (per-locale entries share category+slug)
// ---------------------------------------------------------------------------

export const articles: DocArticle[] = [
  // ===================================================================
  // ENGLISH
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "en",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Wholesalify overview",
    description:
      "A concise overview of Wholesalify — the B2B wholesale ordering platform for fresh produce, FMCG, and multi-unit wholesale businesses.",
    keywords: ["wholesale platform", "B2B ordering", "wholesale SaaS overview"],
    readingTime: "4 min read",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify is a modern B2B wholesale ordering platform built for wholesalers, distributors, and trade companies. It combines a customer-facing ordering portal with a powerful admin dashboard so your team can manage orders, inventory, purchasing, and customer accounts in one place.",
      },
      {
        type: "p",
        text: "Whether you sell fresh produce by weight, graded fruit by case, or multi-specification products by SKU, Wholesalify gives you a flexible catalog and pricing model that matches the way your business actually runs.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "What you can do with Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Sell products by weight, by case/pallet, or by unit — from the same catalog.",
          "Tier your fruit and produce pricing by grade, size, or volume.",
          "Manage weighted, graded, and multi-specification products side-by-side.",
          "Give every wholesale buyer a self-service ordering portal with order history.",
          "Track orders, payments, and fulfillment from a unified order dashboard.",
          "Run stock reports and automated replenishment.",
          "Manage suppliers, purchase orders, and inbound stock.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "How the platform fits together",
      },
      {
        type: "p",
        text: "Wholesalify is composed of three layers that share a single source of truth:",
      },
      {
        type: "ul",
        items: [
          "Ordering portal — a customer-facing storefront for wholesale buyers.",
          "Admin dashboard — the back-office used by your operations team.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "Who uses Wholesalify" },
      {
        type: "ul",
        items: [
          "Fresh produce wholesalers (fruit, vegetable, seafood).",
          "Food and FMCG distributors.",
          "Building-material and hardware wholesalers.",
          "Multi-unit importers and trading companies.",
          "Small and mid-sized wholesale businesses that have outgrown spreadsheets and WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Next steps" },
      {
        type: "ul",
        items: [
          "Read the Quickstart to create your first tenant and place a test order.",
          "Browse the Ordering portal guide to set up your wholesale catalog.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Ready to get started?",
        text: "Sign up for a free trial and start exploring Wholesalify right away — no credit card required. Create your tenant, add a few products, and place a test order in under 15 minutes.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Sign up — it's free",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "What you can do with Wholesalify",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "How the platform fits together",
        level: 2,
      },
      { id: "who-uses-it", text: "Who uses Wholesalify", level: 2 },
      { id: "next-steps", text: "Next steps", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Quickstart" },
  },
  {
    locale: "en",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Quickstart",
    description:
      "Set up your Wholesalify tenant in under 15 minutes: create an account, add products, invite a buyer, and place your first wholesale order.",
    keywords: ["wholesale setup", "B2B quickstart", "tenant onboarding"],
    readingTime: "6 min read",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "This Quickstart walks you through the fastest path to a working Wholesalify tenant. By the end you will have a catalog with a few sample products and a wholesale buyer who can place a real order.",
      },
      { type: "h2", id: "prerequisites", text: "Prerequisites" },
      {
        type: "ul",
        items: [
          "A Wholesalify account. Sign up at the registration page if you don't have one yet.",
          "A business email — buyers will receive their invite link here.",
          "About 15 minutes for setup.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Create your account and tenant",
      },
      {
        type: "p",
        text: "Open the Wholesalify sign-up page, enter your business email, and create a password. After verifying your email you are taken to your tenant dashboard. Each tenant is fully isolated — your catalog, customers, and orders stay private to your workspace.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Add your first products",
      },
      {
        type: "p",
        text: "Open the catalog workspace and click Add product. Wholesalify supports three product kinds from day one:",
      },
      {
        type: "table",
        headers: ["Product kind", "Use it when…", "Example"],
        rows: [
          [
            "Weighed product",
            "You sell by weight (kg / lb).",
            "Loose tomatoes 5 kg box",
          ],
          [
            "Graded product",
            "You have multiple grades or quality tiers.",
            "Apples — Grade A / B",
          ],
          [
            "Multi-spec product",
            "You sell SKUs that vary by color/size/flavor.",
            "Soap bar 100 g — rose / lavender / unscented",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Invite a wholesale buyer",
      },
      {
        type: "p",
        text: "From Customers click Invite buyer. Enter the buyer email and select the price list and payment terms they should see. The buyer receives an email with a link to set their password and log in.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Tip",
        text: "Use a personal email (such as a Gmail address) when testing — that way you do not need a separate inbox to verify the invite.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Place your first order",
      },
      {
        type: "p",
        text: "Switch to the buyer account and open the ordering portal. Add a few products to the cart, choose a delivery date, and submit. The order shows up immediately in your admin dashboard under Orders.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "step-5-explore",
        text: "5. Explore the rest of the platform",
      },
      {
        type: "p",
        text: "From here you can wire up inventory, create your first purchase order, and invite your operations team. The remaining guides in this documentation walk through each area in depth.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Prerequisites", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Create your account and tenant",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Add your first products",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Invite a wholesale buyer",
        level: 2,
      },
      { id: "step-4-place-order", text: "4. Place your first order", level: 2 },
      {
        id: "step-5-explore",
        text: "5. Explore the rest of the platform",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/overview", title: "Overview" },
    next: { href: "/docs/get-started/concepts", title: "Core concepts" },
  },
  {
    locale: "en",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Core concepts",
    description:
      "Understand the building blocks of Wholesalify: tenants, catalogs, pricing tiers, customer accounts, and the ordering lifecycle.",
    keywords: ["tenant", "catalog", "pricing tier", "wholesale concepts"],
    readingTime: "7 min read",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Before you dig into specific features, it helps to know a few terms we use everywhere in the product and documentation.",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "A tenant is an isolated Wholesalify workspace owned by a single wholesale business. Each tenant has its own catalog, customers, orders, inventory, and users. Tenants never share data with each other.",
      },
      { type: "h2", id: "product-kinds", text: "Product kinds" },
      { type: "p", text: "Every item in your catalog is one of three kinds:" },
      {
        type: "ul",
        items: [
          "Standard — sell units such as cases, pallets, or single SKUs.",
          "Weighed — sell by weight with a base unit (kg / lb) and pack sizes.",
          "Multi-specification — sell under one parent product with multiple SKUs (size, color, flavor).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Price tiers and customer pricing",
      },
      {
        type: "p",
        text: "A price tier is a group of customers that should see the same pricing. You can assign each customer to one or more tiers (for example, VIP, Wholesale, Retail-reseller). The ordering portal automatically shows the correct price for the logged-in buyer.",
      },
      { type: "h2", id: "order-lifecycle", text: "Order lifecycle" },
      {
        type: "p",
        text: "Every order goes through a small set of states. Your team advances an order from one state to the next as work progresses:",
      },
      {
        type: "ol",
        items: [
          "Draft — the buyer is still editing the order in their portal.",
          "Submitted — placed by the buyer and waiting for confirmation.",
          "Confirmed — accepted by your team; inventory is reserved.",
          "Cancelled — terminal; the order was voided.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Inventory units" },
      {
        type: "p",
        text: "Stock is tracked in the inventory unit you choose per product — kilograms for produce, cases for beverages, pieces for hardware. Sell units are converted automatically using the conversion rules you set on each product.",
      },
      { type: "h2", id: "users-and-roles", text: "Users and roles" },
      { type: "p", text: "Tenant members fall into a few roles:" },
      {
        type: "table",
        headers: ["Role", "What they do"],
        rows: [
          ["Owner", "Manages billing, users, and all settings."],
          ["Admin", "Manages catalog, orders, inventory, and purchasing."],
          ["Operator", "Handles day-to-day order processing."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "Product kinds", level: 2 },
      { id: "price-tiers", text: "Price tiers and customer pricing", level: 2 },
      { id: "order-lifecycle", text: "Order lifecycle", level: 2 },
      { id: "inventory-units", text: "Inventory units", level: 2 },
      { id: "users-and-roles", text: "Users and roles", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Quickstart" },
    next: { href: "/docs/ordering-portal/setup", title: "Set up your catalog" },
  },

  // ----- Ordering portal -----
  {
    locale: "en",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Set up your ordering portal",
    description:
      "Configure the wholesale ordering portal — merchant info, the private showroom, public showroom, checkout messages, and per-customer overrides that control what every buyer sees when they log in.",
    keywords: [
      "ordering portal setup",
      "wholesale storefront",
      "showroom settings",
    ],
    readingTime: "6 min read",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "The ordering portal is the storefront your buyers use. All merchant-side configuration lives under Settings — a single drawer with 12 sections covering your storefront, products, payments, and team. This guide focuses on the sections you touch most often when launching a new portal.",
      },
      { type: "h2", id: "merchant", text: "Merchant info" },
      {
        type: "p",
        text: "Settings → Merchant is where you set the business name, phone number, default currency, language, timezone, and date format that appear on every order, invoice, and buyer-facing screen. Saving changes here may sign you out so the new locale takes effect.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Private showroom (the ordering portal)",
      },
      {
        type: "p",
        text: "Settings → Private showroom is the hub for everything your logged-in buyers see. The settings drawer opens five tabs in order:",
      },
      {
        type: "ol",
        items: [
          "Enable — a single switch that turns the B2B portal on or off for your tenant. When off, buyers see only the public showroom.",
          "Customer Accounts — list of every customer with their own private-showroom overrides. Each customer can inherit your merchant defaults or have custom banners, themes, and product restrictions.",
          "Public Showroom — settings for visitors who are not logged in: sign-up message, sale price level, and compare-at price level.",
          "Private Showroom — the visual config every logged-in buyer sees.",
          "Checkout Settings — cart reminder email, checkout message, and post-order message.",
        ],
      },
      { type: "h3", id: "public", text: "Public showroom" },
      {
        type: "p",
        text: "For visitors who haven't logged in yet, pick which price level they see (Sales Price Level) and which price level is shown crossed-out as the reference (Compare At Price Level). The Sign Up Message field is the short text shown above the catalog — typically a one-line invite to register and access your wholesale pricing.",
      },
      { type: "h3", id: "private", text: "Private showroom" },
      {
        type: "p",
        text: "These settings shape every logged-in buyer's experience. The Private Showroom tab is grouped into five blocks:",
      },
      {
        type: "ul",
        items: [
          "Banners — a Mobile Banner (16:9) and a separate Web Banner. Recommended 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Each can be uploaded or removed independently.",
          "Display Settings — toggle whether to hide out-of-stock products, and pick a Stock Level mode: Hide Stock / Only show In/Out / Show numbers + state.",
          "Product Display — show or hide the product image, category, description, and remark.",
          "Contact Info — contact email, contact phone, and a free-form contact message shown to buyers.",
          "Restrictions — choose which products and which warehouses (locations) the customer can see. Empty list means no restriction.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Tax and discount",
        text: "Tax scheme (primary + optional secondary rate) and discount (percentage or fixed amount) are also configured here. They flow into the cart and checkout calculation automatically.",
      },
      { type: "h3", id: "checkout", text: "Checkout messages" },
      {
        type: "p",
        text: "Three short texts control the buyer experience around checkout: Cart Reminder (the 1-hour automated reminder email), Checkout Message (shown on the cart/checkout screen), and Post Order Message (shown after a successful order placement). All three accept plain text.",
      },
      { type: "h2", id: "payment", text: "Payment methods and tax" },
      {
        type: "p",
        text: "Settings → Payment Methods is where you enable the payment options buyers can select at checkout (bank transfer, cash on delivery, credit terms, etc.). Settings → Tax Codes defines the tax schemes referenced by the showroom — primary and optional secondary tax rates per region.",
      },
      { type: "h2", id: "open-storefront", text: "Opening your storefront" },
      {
        type: "p",
        text: "Once Enable is on and at least one customer account has access, your storefront URL appears at the top of the Private showroom drawer. Use Open Storefront to verify what your buyers will see before sending invitations.",
      },
    ],
    toc: [
      { id: "merchant", text: "Merchant info", level: 2 },
      {
        id: "showroom",
        text: "Private showroom (the ordering portal)",
        level: 2,
      },
      { id: "public", text: "Public showroom", level: 3 },
      { id: "private", text: "Private showroom", level: 3 },
      { id: "checkout", text: "Checkout messages", level: 3 },
      { id: "payment", text: "Payment methods and tax", level: 2 },
      { id: "open-storefront", text: "Opening your storefront", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Core concepts" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Build your catalog",
    },
  },
  {
    locale: "en",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Build your catalog",
    description:
      "Create weighed, graded, and multi-specification products, organize them with categories and tags, and manage images and translations.",
    keywords: ["product catalog", "wholesale catalog", "weighted products"],
    readingTime: "8 min read",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Your catalog is the foundation of the ordering portal. Wholesalify's product model is built to handle the three realities of wholesale: items sold by weight, graded produce, and SKUs with multiple specifications.",
      },
      { type: "h2", id: "create-product", text: "Create a product" },
      {
        type: "p",
        text: "Go to Catalog → Products → New product. Wholesalify offers four product kinds: Standard, Weighed, Non-inventory, and Service.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Standard" },
      {
        type: "p",
        text: "A standard product sells in discrete units (piece / case / pallet). Define a SKU, a stock unit, and a sale price. To offer multiple pack sizes, switch to the Sale units tab and add a row per unit — each row carries its own price, Tax-Included switch, and 5-tier price level.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Weighed" },
      {
        type: "p",
        text: "A weighed product has no fixed SKU — buyers enter any decimal quantity at checkout. Set the base unit (kg / lb) and a per-unit sale price; the system rounds each order line to the configured precision.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Multi-specification" },
      {
        type: "p",
        text: "On a Standard product, flip the Multi-spec mode switch on to define multiple attributes (e.g. Size × Scent). The system generates one SKU per combination. Define attribute options in Catalog → Attributes first.",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Multi-grade" },
      {
        type: "p",
        text: "On a Weighed product, the SKU editor adds a Product grade tab. Add up to 10 grade rows for the same SKU (e.g. Premium / Grade A / Grade B). Each row carries its own sale price, Tax-Included switch, and 5-tier price level. Buyers pick a specific grade at checkout; the order total uses that grade's price.",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Categories and tags" },
      {
        type: "p",
        text: "Group products into categories to control how they appear in the portal sidebar and which categories a buyer can browse. Tags are free-form labels for filtering and search.",
      },
      { type: "h2", id: "images", text: "Images and translations" },
      {
        type: "p",
        text: "Upload up to one image per product — it becomes the storefront hero. If you operate in multiple regions, add translated names and descriptions from the product edit page — these propagate automatically to the corresponding locale.",
      },
    ],
    toc: [
      { id: "create-product", text: "Create a product", level: 2 },
      { id: "standard", text: "Standard", level: 3 },
      { id: "weighed", text: "Weighed", level: 3 },
      { id: "multi-spec", text: "Multi-specification", level: 3 },
      { id: "multi-grade", text: "Multi-grade", level: 3 },
      { id: "categories", text: "Categories and tags", level: 2 },
      { id: "images", text: "Images and translations", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Set up your ordering portal",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Price tiers and customer pricing",
    },
  },
  {
    locale: "en",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Price tiers and customer pricing",
    description:
      "Configure 5 price tiers per SKU, set up graded prices for weighed products, and assign each customer to a price level that decides which tier they see in the ordering portal.",
    keywords: [
      "price tier",
      "wholesale pricing",
      "fruit grading",
      "customer price level",
    ],
    readingTime: "6 min read",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Wholesalify pricing is built around two ideas: every SKU carries 5 price tiers (Price Level 1–5), and each customer is assigned to one of those 5 tiers in their profile. The two sides are mapped 1-to-1 and configured in two places: SKU tiers in Product → SKU editor, customer level in Customer → Edit customer.",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Price tiers on every SKU",
      },
      {
        type: "p",
        text: "On any SKU's Basic info tab, the Sale price input has a sliders icon on its right side. Click it to open the Price Level dialog, where you can fill in 5 separate prices (Price Level 1 through Price Level 5) and toggle Tax-Included for each one independently.",
      },
      {
        type: "ul",
        items: [
          "The 5 tiers map to the 5 customer price levels (set on the customer profile — see below).",
          "A small dot on the icon indicates that at least one tier price has been set (>0); the dot is informational only.",
          "A single SKU carries one set of 5 tier prices; the actual amount displayed also depends on base unit / sale unit, tax scheme, and currency.",
          "The price a logged-out visitor sees is driven by Settings → Showroom → Sales Price Level; the strikethrough comparison price is driven by Compare At Price Level.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Grade settings for weighed products",
      },
      {
        type: "p",
        text: "When a product's mode is Weighed, the SKU editor shows an extra Product grade tab. There you can add up to 10 grade rows for the same SKU (e.g. Premium / Grade A / Grade B). Each row has a grade name, a sale price (suffix fixed to /{baseUnit}, e.g. /kg), a tax-included switch, and the same sliders icon on the price input — clicking it opens the same 5-tier Price Level dialog so that specific grade can carry its own 5 prices.",
      },
      {
        type: "ul",
        items: [
          "Up to 10 grade rows; removing the last row leaves a blank one rather than deleting the section.",
          "The price suffix is always /{baseUnit} (e.g. /kg) to match the weighed sales convention.",
          "Buyers pick the specific grade when ordering; the order total is calculated using that grade's price.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Price tiers for multi-sale-unit products",
      },
      {
        type: "p",
        text: "Non-weighed products can have multiple sale units (e.g. Case / Piece / Set) configured on the Sale units tab. Each sale-unit row also has its own sale price input with the sliders icon, opening the same 5-tier Price Level dialog so the unit can carry its own 5 prices plus tax switches.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Customer price level",
      },
      {
        type: "p",
        text: "Open any customer in Customer management — the basic info area has a Price Level dropdown with five options (Price Level 1 through Price Level 5). The level you assign here determines which of the SKU's 5 tier prices that customer sees when they log in to the ordering portal. A customer assigned to Price Level 3 will see Price Level 3 across the whole catalog.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "How the two sides connect",
        text: "The SKU side (5 tier prices) and the customer side (Price Level 1–5) are 1-to-1: the number chosen on the customer profile decides which tier price the portal displays for every product. If that tier is left blank, the system falls back to the SKU's base sale price.",
      },
    ],
    toc: [
      { id: "sku-price-levels", text: "Price tiers on every SKU", level: 2 },
      {
        id: "weighed-grades",
        text: "Grade settings for weighed products",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Price tiers for multi-sale-unit products",
        level: 2,
      },
      { id: "customer-price-level", text: "Customer price level", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Build your catalog",
    },
    next: { href: "/docs/orders/dashboard", title: "Order dashboard" },
  },

  // ----- Orders -----
  {
    locale: "en",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Order dashboard",
    description:
      "Understand the Sales Orders list — the five real order statuses, the available filters, the columns on the table, and the actions available on the order detail page.",
    keywords: ["order dashboard", "wholesale orders", "B2B order management"],
    readingTime: "4 min read",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "The Sales Orders list is where your operations team reviews and acts on every order. This page explains every control on the list, the columns you see, and the actions available on each order's detail page.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filters" },
      {
        type: "ul",
        items: [
          "Keyword search — order number, customer name, customer PO number, or any other text on the order.",
          "Status — single-select dropdown: All, Draft, Confirmed, Canceled, Reopened, Unconfirmed.",
          "Date range — Today / last 7 days / last 30 days presets, or pick a custom range on the calendar.",
          "Location — multi-select warehouse filter. Empty means all warehouses.",
          "Payment status — multi-select filter: Unpaid, Partial, Paid, Overpaid.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Reset filters",
        text: "Use the reset icon on the right of the filter row to clear all filters back to their defaults (last 30 days, all statuses, all warehouses, all payment statuses).",
      },
      { type: "h2", id: "table-columns", text: "Table columns" },
      {
        type: "p",
        text: "Each row of the list shows the following twelve columns:",
      },
      {
        type: "ol",
        items: [
          "# — row index (page × size + n).",
          "Order No. — clickable link that opens the order detail page in a new tab.",
          "Customer — buyer name.",
          "Business Date — date recorded on the order.",
          "Payable Money — formatted in the merchant's default currency.",
          "Location — outgoing warehouse.",
          "Payment Status — derived from balance vs payable.",
          "Status — current state of the order (see Order statuses below).",
          "Created At / Created By / Updated At / Updated By — audit fields.",
        ],
      },
      { type: "h2", id: "statuses", text: "Order statuses" },
      {
        type: "p",
        text: "Every order is always in one of the following five states. The status badge is a passive label — it cannot be clicked to advance the order. To change the state, open the order's detail page and use the action button there.",
      },
      {
        type: "table",
        headers: ["State", "Code", "Meaning"],
        rows: [
          ["Draft", "0", "Saved as a draft. Not yet sent to the customer."],
          ["Confirmed", "1", "Sent to the customer / ready to fulfil."],
          [
            "Cancelled",
            "2",
            "Voided; the order is kept for audit but no further actions are possible.",
          ],
          [
            "Reopened",
            "3",
            "A previously cancelled order reopened for editing.",
          ],
          [
            "Unconfirmed",
            "4",
            "Reverted from Confirmed back to a draft-like state.",
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Order actions" },
      {
        type: "p",
        text: "Click an order number to open the detail page. The detail page header shows the action buttons appropriate to the current state. Every action is gated by a permission code — buttons you don't have access to are hidden entirely.",
      },
      {
        type: "ul",
        items: [
          "Save — save the order while it is in Draft, Reopened, or Unconfirmed.",
          "Confirm — move a draft-like state (Draft / Reopened / Unconfirmed) into Confirmed.",
          "Unconfirm — revert a Confirmed order to Unconfirmed (can then be edited and re-confirmed).",
          "Cancel — void a Confirmed order into Cancelled.",
          "Reopen — bring a Cancelled order back to Reopened for editing.",
          "Delete — permanently remove the order. Only available on Draft, Unconfirmed, and Reopened.",
          "Return / Cancel return — on a Confirmed order's line items, process a partial customer return or undo one.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "State transitions and stock impact",
      },
      {
        type: "p",
        text: "Every stock change is recorded as a single line in the stock ledger and can be traced back to its source order. The table below summarises the inventory impact of each action:",
      },
      {
        type: "table",
        headers: ["Action", "State change", "Stock impact", "Notes"],
        rows: [
          [
            "Confirm",
            "Draft / Reopened / Unconfirmed → Confirmed",
            "Deduct ( − )",
            "Outbound from the order's warehouse for every line item; cost is written onto the order at confirm time.",
          ],
          [
            "Unconfirm",
            "Confirmed → Unconfirmed",
            "Return ( + )",
            "Rolls back the deduction from the most recent Confirm; the order's cost fields are cleared.",
          ],
          [
            "Cancel",
            "Confirmed → Cancelled",
            "Return ( + )",
            "Rolls back the deduction from the most recent Confirm; the order is kept for audit and cannot be advanced further.",
          ],
          [
            "Reopen",
            "Cancelled → Reopened",
            "No change",
            "Stock was already returned when the order was cancelled. Reopen only changes state; a subsequent Confirm will deduct again.",
          ],
          [
            "Return",
            "Confirmed (per line)",
            "Partial return ( + )",
            "Adds a negative-quantity line for a Confirmed order's line item and returns that quantity to stock.",
          ],
          [
            "Cancel return",
            "Confirmed (per line)",
            "Deduct again ( − )",
            "Removes a previously-recorded return line and re-deducts the original quantity from stock.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Both Cancel and Unconfirm return stock",
        text: "The two actions have the same inventory effect: they both roll back the deduction from the most recent Confirm. The difference is the terminal state — Cancel moves the order to Cancelled (terminal, no further state changes possible); Unconfirm moves it to Unconfirmed (still editable, a fresh Confirm will deduct stock again).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "No bulk operations",
        text: "The Sales Orders list does not support row selection or bulk actions. Each order must be opened individually to be acted on.",
      },
    ],
    toc: [
      { id: "filters", text: "Filters", level: 2 },
      { id: "table-columns", text: "Table columns", level: 2 },
      { id: "statuses", text: "Order statuses", level: 2 },
      { id: "actions", text: "Order actions", level: 2 },
      {
        id: "inventory-impact",
        text: "State transitions and stock impact",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Price tiers and customer pricing",
    },
    next: { href: "/docs/inventory/stock", title: "Stock levels" },
  },

  // ----- Inventory -----
  {
    locale: "en",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Stock levels",
    description:
      "Track stock per location, per warehouse, and per product variant. Configure your base inventory unit and conversion rules.",
    keywords: ["stock management", "wholesale inventory", "multi-warehouse"],
    readingTime: "5 min read",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Wholesalify's inventory module keeps a real-time count for every product variant, per warehouse. Stock is automatically adjusted when orders are confirmed and when purchase receipts are posted.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Warehouses" },
      {
        type: "p",
        text: "Add as many warehouses as you operate. Each product has a separate stock count per warehouse, which lets you fulfill orders from the location closest to the buyer.",
      },
      { type: "h2", id: "stock-units", text: "Stock units and conversions" },
      {
        type: "p",
        text: 'For a fresh produce product, set the inventory unit to kilograms. Add pack sizes such as "5 kg box" or "10 kg crate" with automatic conversion so buyers can order in those units without you having to manually translate stock.',
      },
      { type: "h2", id: "stock-adjustments", text: "Manual stock adjustments" },
      {
        type: "p",
        text: "Lost a few crates to spoilage? Open the product, choose Adjust stock, and enter a positive or negative quantity with a reason. Adjustments are recorded in the audit log with the user, date, and optional photo.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Warehouses", level: 2 },
      { id: "stock-units", text: "Stock units and conversions", level: 2 },
      { id: "stock-adjustments", text: "Manual stock adjustments", level: 2 },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Order dashboard" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Create purchase orders",
    },
  },

  // ----- Purchasing -----
  {
    locale: "en",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Create purchase orders",
    description:
      "Build purchase orders against your suppliers, track inbound shipments, and post receipts that update stock automatically.",
    keywords: ["purchase order", "supplier management", "wholesale purchasing"],
    readingTime: "6 min read",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "A purchase order tells your supplier what to ship, when, and at what price. When the goods arrive, posting the receipt updates stock and supplier records in one step.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "Step 1 — Add the supplier" },
      {
        type: "p",
        text: "Open Purchasing → Suppliers → New supplier. Enter contact details, and the lead time they typically deliver within.",
      },
      { type: "h2", id: "build-po", text: "Step 2 — Build the PO" },
      {
        type: "p",
        text: "Click New purchase order, select the supplier, and add line items. Prices default to the supplier's last price but you can override each line.",
      },
      { type: "h2", id: "receive", text: "Step 3 — Receive the shipment" },
      {
        type: "p",
        text: "When goods arrive, click Receive on the PO. Enter the actual delivered quantities — partial receipts are supported — and confirm. Stock levels update automatically and a supplier invoice is created.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "State transitions and stock impact",
      },
      {
        type: "p",
        text: "Purchase orders and sales orders share the same stock ledger, but flow in opposite directions — confirming a purchase order adds stock (+), while confirming a sales order removes it (−). The table below summarizes the four main actions and their impact on stock:",
      },
      {
        type: "table",
        headers: ["Action", "State change", "Stock impact", "Notes"],
        rows: [
          [
            "Confirm PO",
            "Draft / Reopened / Unconfirmed → Confirmed",
            "Stock in ( + )",
            "Goods are received into the destination warehouse per line; purchase cost is recorded on the order.",
          ],
          [
            "Unconfirm",
            "Confirmed → Unconfirmed",
            "Stock out ( − )",
            "Reverses the stock that was added when the PO was confirmed; purchase cost is cleared.",
          ],
          [
            "Cancel PO",
            "Confirmed → Cancelled",
            "Stock out ( − )",
            "Reverses the stock that was added when the PO was confirmed; the order is retained for audit only.",
          ],
          [
            "Reopen",
            "Cancelled → Reopened",
            "No stock change",
            "Stock has already been reversed by Cancel; Reopen only changes state. The order can be Confirmed again to re-add stock.",
          ],
          [
            "Return",
            "Confirmed (per line)",
            "Partial stock out ( − )",
            "Return part of a confirmed line to the supplier — a negative-quantity line is added and stock is reduced accordingly.",
          ],
          [
            "Cancel return",
            "Confirmed (per line)",
            "Re-add stock ( + )",
            "Reverse a return — the negative line is removed and stock is re-added at the original quantity.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Confirming a PO adds stock — it does not remove it",
        text: "Confirming a purchase order means goods have physically arrived and been put away, so stock goes up (+). This is the opposite of confirming a sales order, which goes down (−). Don't confuse the two: Unconfirm does not return goods to the supplier — it simply reverses the stock that was added when you confirmed.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Cancel and Unconfirm both reverse stock",
        text: "Both actions have the same effect on stock — they undo the stock that was added by the previous Confirm. The difference is the end state: Cancel moves the order to Cancelled (terminal), while Unconfirm moves it to Unconfirmed (still editable, and a subsequent Confirm will re-add stock).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Step 1 — Add the supplier", level: 2 },
      { id: "build-po", text: "Step 2 — Build the PO", level: 2 },
      { id: "receive", text: "Step 3 — Receive the shipment", level: 2 },
      {
        id: "inventory-impact",
        text: "State transitions and stock impact",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Stock levels" },
  },

  // ===================================================================
  // CHINESE (zh)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "zh",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Wholesalify 概览",
    description:
      "Wholesalify 概览 —— 面向生鲜、快消及多规格批发企业的 B2B 批发订货平台。",
    keywords: ["批发平台", "B2B 订货", "批发 SaaS 概览"],
    readingTime: "阅读约 4 分钟",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify 是一款为批发商、分销商和贸易公司打造的现代化 B2B 批发订货平台。它将面向客户的订货门户与功能强大的管理后台结合在一起，让你的团队可以在同一套系统里管理订单、库存、采购与客户账户。",
      },
      {
        type: "p",
        text: "无论你以重量销售生鲜农产品、按等级整箱销售水果，还是按 SKU 销售多规格产品，Wholesalify 都能提供灵活的商品目录与定价模型，与你真实的业务运作方式保持一致。",
      },
      { type: "h2", id: "what-you-can-do", text: "Wholesalify 能为你做什么" },
      {
        type: "ul",
        items: [
          "同一份目录中同时支持按重量、按整箱/托盘或按单位销售。",
          "按等级、规格或采购量对水果及农产品进行分层定价。",
          "并列管理称重商品、分级商品和多规格商品。",
          "为每位批发客户提供带历史订单的自助订货门户。",
          "在统一的订单工作台中跟踪订单、收款与履约状态。",
          "生成库存报表，并自动触发补货。",
          "管理供应商、采购订单与到货入库。",
        ],
      },
      { type: "h2", id: "how-it-fits-together", text: "平台如何衔接" },
      { type: "p", text: "Wholesalify 由三层组成，它们共享同一份数据源：" },
      {
        type: "ul",
        items: [
          "订货门户 —— 面向批发客户的客户端店面。",
          "管理后台 —— 运营团队使用的后台工作台。",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "谁在使用 Wholesalify" },
      {
        type: "ul",
        items: [
          "生鲜农产品批发商（水果、蔬菜、海鲜）。",
          "食品与快消品分销商。",
          "建材与五金批发商。",
          "多单位进口商与贸易公司。",
          "已经厌倦了 Excel 与 WhatsApp 的中小型批发企业。",
        ],
      },
      { type: "h2", id: "next-steps", text: "下一步" },
      {
        type: "ul",
        items: [
          "阅读《快速开始》，创建你的第一个租户并下一笔测试订单。",
          "查阅《订货门户》指南，搭建你的批发目录。",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "准备开始了吗？",
        text: "立即注册免费试用，无需信用卡即可开始使用 Wholesalify。创建租户、添加几个商品，再下一笔测试订单，全程不超过 15 分钟。",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "免费注册",
        },
      },
    ],
    toc: [
      { id: "what-you-can-do", text: "Wholesalify 能为你做什么", level: 2 },
      { id: "how-it-fits-together", text: "平台如何衔接", level: 2 },
      { id: "who-uses-it", text: "谁在使用 Wholesalify", level: 2 },
      { id: "next-steps", text: "下一步", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "快速开始" },
  },
  {
    locale: "zh",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "快速开始",
    description:
      "15 分钟内搭建你的 Wholesalify 租户：创建账户、添加商品、邀请客户并完成第一笔批发订单。",
    keywords: ["批发开通", "B2B 快速开始", "租户初始化"],
    readingTime: "阅读约 6 分钟",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "本《快速开始》将带你用最短路径完成一个可用的 Wholesalify 租户。完成后你将拥有一份包含几个示例商品的目录，以及一位能够下单的批发客户。",
      },
      { type: "h2", id: "prerequisites", text: "前置准备" },
      {
        type: "ul",
        items: [
          "一个 Wholesalify 账户。如果你还没有，请先在注册页面申请。",
          "一个企业邮箱 —— 系统会向此邮箱发送邀请链接。",
          "大约 15 分钟时间完成配置。",
        ],
      },
      { type: "h2", id: "step-1-create-account", text: "1. 创建账户与租户" },
      {
        type: "p",
        text: "进入 Wholesalify 注册页面，填写企业邮箱并设置密码。验证邮箱后系统会跳转到租户工作台。每个租户都是完全隔离的，目录、客户与订单都保存在各自的独立工作区内。",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "step-2-add-products", text: "2. 添加首批商品" },
      {
        type: "p",
        text: "打开「目录」工作区并点击「新增商品」。Wholesalify 内置支持三种商品类型：",
      },
      {
        type: "table",
        headers: ["商品类型", "适用场景", "示例"],
        rows: [
          ["称重商品", "按重量（公斤 / 磅）销售", "散装番茄 5 公斤箱"],
          ["分级商品", "商品有不同等级或质量档位", "苹果 —— A 级 / B 级"],
          [
            "多规格商品",
            "SKU 因颜色 / 尺寸 / 口味而不同",
            "100 克香皂 —— 玫瑰 / 薰衣草 / 无香",
          ],
        ],
      },
      { type: "h2", id: "step-3-invite-buyer", text: "3. 邀请批发客户" },
      {
        type: "p",
        text: "在「客户」页面点击「邀请客户」。输入客户邮箱，并选择其可见的价格表与账期。客户会收到一封带激活链接的邮件，设置密码后即可登录。",
      },
      {
        type: "callout",
        variant: "info",
        title: "小贴士",
        text: "测试时可以使用个人邮箱（例如 Gmail），这样你无需额外配置收件箱就能验证邀请流程。",
      },
      { type: "h2", id: "step-4-place-order", text: "4. 完成第一笔订单" },
      {
        type: "p",
        text: "切换到客户账户，打开订货门户，将几个商品加入购物车，选择一个配送日期并提交。订单会立刻出现在后台工作台的「订单」中。",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "step-5-explore", text: "5. 继续探索更多功能" },
      {
        type: "p",
        text: "接下来你可以接入库存、创建第一张采购订单，并邀请你的运营同事加入。后续文档会按模块逐一深入介绍每个区域的功能。",
      },
    ],
    toc: [
      { id: "prerequisites", text: "前置准备", level: 2 },
      { id: "step-1-create-account", text: "1. 创建账户与租户", level: 2 },
      { id: "step-2-add-products", text: "2. 添加首批商品", level: 2 },
      { id: "step-3-invite-buyer", text: "3. 邀请批发客户", level: 2 },
      { id: "step-4-place-order", text: "4. 完成第一笔订单", level: 2 },
      { id: "step-5-explore", text: "5. 继续探索更多功能", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "概览" },
    next: { href: "/docs/get-started/concepts", title: "核心概念" },
  },
  {
    locale: "zh",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "核心概念",
    description:
      "了解 Wholesalify 的基本组成：租户、目录、定价层级、客户账户和订单流转。",
    keywords: ["租户", "目录", "定价层级", "批发核心概念"],
    readingTime: "阅读约 7 分钟",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "在深入了解具体功能之前，先熟悉几个贯穿产品与文档的术语会很有帮助。",
      },
      { type: "h2", id: "tenant", text: "租户" },
      {
        type: "p",
        text: "租户是一个由单一批发企业拥有的、互相隔离的 Wholesalify 工作空间。每个租户拥有自己的目录、客户、订单、库存与用户。不同租户之间数据完全隔离。",
      },
      { type: "h2", id: "product-kinds", text: "商品类型" },
      { type: "p", text: "目录中的每一件商品都属于以下三种类型之一：" },
      {
        type: "ul",
        items: [
          "标准商品 —— 按件、整箱或整托等离散单位销售。",
          "称重商品 —— 按重量（公斤 / 磅）销售，可附带多种包装规格。",
          "多规格商品 —— 在同一父商品下提供多种 SKU（尺寸、颜色、口味等）。",
        ],
      },
      { type: "h2", id: "price-tiers", text: "价格层级与客户定价" },
      {
        type: "p",
        text: "价格层级是一组应该看到相同价格的客户集合。你可以将每个客户分配到一个或多个层级（例如 VIP、批发、零售转售）。订货门户会根据登录客户的身份自动展示对应的价格。",
      },
      { type: "h2", id: "order-lifecycle", text: "订单流转" },
      { type: "p", text: "每一笔订单都会经历一组有限的状态，团队按状态推进：" },
      {
        type: "ol",
        items: [
          "草稿 —— 客户仍在门户中编辑订单。",
          "已提交 —— 客户已下单，等待确认。",
          "已确认 —— 你的团队已接受，库存已预留。",
          "已取消 —— 终止状态，订单作废。",
        ],
      },
      { type: "h2", id: "inventory-units", text: "库存单位" },
      {
        type: "p",
        text: "每个商品可以指定一个库存基本单位 —— 生鲜用公斤、饮料用整箱、五金用件。系统会根据你在商品上设置的换算关系自动将销售单位转换为库存单位。",
      },
      { type: "h2", id: "users-and-roles", text: "用户与角色" },
      { type: "p", text: "租户成员分为以下几类角色：" },
      {
        type: "table",
        headers: ["角色", "职责"],
        rows: [
          ["所有者", "管理账单、用户与所有系统设置。"],
          ["管理员", "管理目录、订单、库存与采购。"],
          ["操作员", "负责日常订单处理。"],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "租户", level: 2 },
      { id: "product-kinds", text: "商品类型", level: 2 },
      { id: "price-tiers", text: "价格层级与客户定价", level: 2 },
      { id: "order-lifecycle", text: "订单流转", level: 2 },
      { id: "inventory-units", text: "库存单位", level: 2 },
      { id: "users-and-roles", text: "用户与角色", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "快速开始" },
    next: { href: "/docs/ordering-portal/setup", title: "配置订货门户" },
  },

  // ----- Ordering portal -----
  {
    locale: "zh",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "配置订货门户",
    description:
      "配置批发订货门户 —— 商户信息、私域商城、公共商城、结算消息，以及每个客户的个性化覆盖。",
    keywords: ["订货门户配置", "批发店面", "商城设置"],
    readingTime: "阅读约 6 分钟",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "订货门户是客户实际使用的店面。所有商家侧的配置都集中在「设置」抽屉里,共 12 个分区,涵盖店面、商品、付款与团队。本指南聚焦启动新店面时最常用的几个分区。",
      },
      { type: "h2", id: "merchant", text: "商户信息" },
      {
        type: "p",
        text: "「设置 → 商户」用于设置商户名称、手机号、默认货币、语言、时区与日期格式。这些字段会出现在每张订单、发票以及面向客户的页面上。保存后系统可能要求你重新登录,新语言设置才会生效。",
      },
      { type: "h2", id: "showroom", text: "批发商城(订货门户核心)" },
      {
        type: "p",
        text: "「设置 → 批发商城」是已登录客户看到的所有内容的总控,按以下顺序提供 5 个 Tab:",
      },
      {
        type: "ol",
        items: [
          "启用设置 — 一个总开关,用于在租户级别打开或关闭 B2B 门户。关闭后,客户只能看到公共商城。",
          "客户账号 — 列出所有客户及其私有商城覆盖。每个客户可以继承商户级默认配置,也可以拥有自己的 Banner、主题与商品限制。",
          "公共商城 — 未登录访客看到的内容:注册引导文案、销售价格等级、原价(划线价)等级。",
          "私有商城 — 已登录客户看到的所有视觉与行为配置。",
          "结算设置 — 购物车提醒邮件、结算页面文案、订单完成后文案。",
        ],
      },
      { type: "h3", id: "public", text: "公共商城" },
      {
        type: "p",
        text: "为未登录访客选择他们能看到的价格等级(销售价格等级),以及作为划线参考的价格等级(原价等级)。注册引导文案是一行简短的邀请,通常用于引导访客注册并解锁批发价。",
      },
      { type: "h3", id: "private", text: "私有商城" },
      {
        type: "p",
        text: "这些配置塑造了每个已登录客户的浏览体验。「私有商城」Tab 分为 5 个分组:",
      },
      {
        type: "ul",
        items: [
          "Banner — 移动端 Banner(16:9)与 Web 端 Banner(独立上传)。建议 1920×1080 px,JPG/PNG/WebP,≤ 5 MB。两张图可独立上传或移除。",
          "显示设置 — 是否隐藏缺货商品;库存显示模式三选一:隐藏库存 / 仅显示有货/缺货 / 显示具体数字 + 状态。",
          "商品展示 — 独立开关,控制是否显示商品图片、分类、描述与备注。",
          "联系信息 — 联系邮箱、联系电话与一段自由文本的联系说明,展示给客户。",
          "可见范围 — 选择客户可访问的商品与仓库(Location)。空列表表示不限制。",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "税方案与折扣",
        text: "税方案(主税 + 可选副税)与折扣(百分比或固定金额)也在此设置,会自动参与购物车与结算的金额计算。",
      },
      { type: "h3", id: "checkout", text: "结算文案" },
      {
        type: "p",
        text: "三段简短的文案控制结算前后的体验:购物车提醒(默认 1 小时自动发送的提醒邮件)、结算页面文案(展示在购物车/结算页)、订单完成后文案(下单成功后展示)。三段均支持纯文本。",
      },
      { type: "h2", id: "payment", text: "支付方式与税方案" },
      {
        type: "p",
        text: "「设置 → 支付方式」用于启用客户在结算时可选择的支付选项(银行转账、货到付款、信用账期等)。「设置 → 税方案」定义商城引用的税方案——每个区域可设置主税与可选的副税税率。",
      },
      { type: "h2", id: "open-storefront", text: "上线你的店面" },
      {
        type: "p",
        text: "启用开关打开,至少一个客户账号已开通后,「批发商城」抽屉顶部会出现店面访问地址。点击「访问商城」可以直接预览客户登录后看到的样子,确认无误后再发送邀请。",
      },
    ],
    toc: [
      { id: "merchant", text: "商户信息", level: 2 },
      { id: "showroom", text: "批发商城(订货门户核心)", level: 2 },
      { id: "public", text: "公共商城", level: 3 },
      { id: "private", text: "私有商城", level: 3 },
      { id: "checkout", text: "结算文案", level: 3 },
      { id: "payment", text: "支付方式与税方案", level: 2 },
      { id: "open-storefront", text: "上线你的店面", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "核心概念" },
    next: { href: "/docs/ordering-portal/catalog", title: "搭建商品目录" },
  },
  {
    locale: "zh",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "搭建商品目录",
    description:
      "创建称重、分级与多规格商品，按分类与标签组织，并管理图片与多语言文案。",
    keywords: ["商品目录", "批发目录", "称重商品"],
    readingTime: "阅读约 8 分钟",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "商品目录是订货门户的基础。Wholesalify 的商品模型正是为了应对批发的三大实际场景：按重量销售的农产品、按等级销售的水果，以及带多种规格的 SKU。",
      },
      { type: "h2", id: "create-product", text: "创建商品" },
      {
        type: "p",
        text: "进入「目录 → 商品 → 新建商品」，先选择商品类型再开始配置。商品类型有 4 种可选：标准商品、称重商品、非库存商品、服务商品。",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "标准商品" },
      {
        type: "p",
        text: "标准商品以离散单位销售（件 / 箱 / 托）。设置 SKU、库存单位以及销售单价；如需多种销售规格，切换到「销售单位」Tab 追加，每行可独立维护价格、含税开关与 5 档价格等级。",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "称重商品" },
      {
        type: "p",
        text: "称重商品没有固定 SKU，客户可以在订货门户输入任意小数数量。设置基本单位（kg / lb）与每基本单位的销售单价，系统会按你配置的精度自动取整。",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "多规格商品" },
      {
        type: "p",
        text: "在标准商品基础上开启「多规格模式」开关后，可以定义多个规格（如 Size × Scent），系统自动按笛卡尔积生成 SKU 矩阵。请先在「目录 → 属性」中创建规格名与规格值。",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "多等级商品" },
      {
        type: "p",
        text: "在称重商品基础上，每个 SKU 可以额外维护「商品等级」Tab：为同一商品添加多行等级（例如「特级 / 一级 / 二级」），每行有独立等级名称、销售价、含税开关以及 5 档价格等级。客户在订货门户下单时需先选择具体等级，按所选等级价格结算。最多支持 10 个等级。",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "分类与标签" },
      {
        type: "p",
        text: "通过分类控制商品在门户侧边栏中的展示顺序以及客户可浏览的范围。标签则是自由文本，可用于筛选与搜索。",
      },
      { type: "h2", id: "images", text: "图片与多语言文案" },
      {
        type: "p",
        text: "每个商品最多上传 1 张图片，第一张将作为店面主图。如果你面向多区域运营，可以在商品编辑页中补充多语言名称与描述，系统会自动应用到对应语言。",
      },
    ],
    toc: [
      { id: "create-product", text: "创建商品", level: 2 },
      { id: "standard", text: "标准商品", level: 3 },
      { id: "weighed", text: "称重商品", level: 3 },
      { id: "multi-spec", text: "多规格商品", level: 3 },
      { id: "multi-grade", text: "多等级商品", level: 3 },
      { id: "categories", text: "商品分类", level: 2 },
      { id: "images", text: "图片", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/setup", title: "配置订货门户" },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "价格层级与客户定价",
    },
  },
  {
    locale: "zh",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "价格层级与客户定价",
    description:
      "为每个 SKU 配置 5 档价格等级,为称重商品维护多行等级价格,并在客户档案中指定其所属的价格等级。",
    keywords: ["价格等级", "批发定价", "水果分级", "客户等级"],
    readingTime: "阅读约 6 分钟",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Wholesalify 的定价围绕两个核心概念展开:商品侧的「价格等级」(同一商品对不同客户展示 5 档价格),以及客户档案上的「价格等级」字段(决定该客户登录订货门户后看到哪一档)。两边通过 1~5 五个等级一一对应,在「商品管理 → SKU 编辑」与「客户管理 → 编辑客户」两处分别配置。",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "所有商品类型的价格等级设置",
      },
      {
        type: "p",
        text: "在任意一个 SKU 的「基本信息」标签页,找到「销售价」输入框,框右侧有一个滑杆图标。点击该图标会弹出「价格等级」窗口,可分别为该 SKU 填写「价格等级 1 ~ 5」共 5 档价格,并独立设置每一档的「含税」开关。",
      },
      {
        type: "ul",
        items: [
          "5 档价格对应客户的 5 个价格等级(在客户档案中指定,见下文)。",
          "图标右上角的小圆点表示已设置过任意一档价格(>0);圆点仅作状态提示。",
          "同一 SKU 只能维护一套 5 档价格;具体应收金额还会与基本单位 / 销售单位、税率、币种组合计算。",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "称重商品的等级设置",
      },
      {
        type: "p",
        text: "商品类型为「称重」时,SKU 编辑页会多出一个「商品等级」标签页。在该标签页中可以为同一 SKU 维护多行等级(例如「特级 / 一级 / 二级」),每行包含:等级名称、销售价(单位固定为基本单位,如 /kg)、含税开关,以及销售价右侧的滑杆图标 —— 点击同样弹出 5 档价格等级窗口,可针对该等级单独配置 5 档价格与含税开关。",
      },
      {
        type: "ul",
        items: [
          "最多可添加 10 行等级;删除到最后一行时会保留一行空记录,不会整体删除该区块。",
          "销售价后缀固定为「/{基本单位}」(如 /kg),与称重商品按重量计价的口径一致。",
          "客户在订货门户下单时需要先选择具体等级,系统按所选等级的价格计算应收。",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "多销售单位的价格等级",
      },
      {
        type: "p",
        text: "非称重类商品可以在「销售单位」标签页中追加多个销售单位(例如「箱 / 件 / 套」)。每个销售单位行同样有独立的销售价输入框,框右侧的滑杆图标也会弹出 5 档价格等级窗口,可针对该单位单独维护 5 档价格与含税开关。",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "客户的价格等级",
      },
      {
        type: "p",
        text: "在「客户管理」中打开任意一个客户档案,基本资料区有一个「价格等级」下拉框,可选择「价格等级 1 ~ 5」五个选项。该字段决定该客户登录订货门户后看到的销售价档位:例如客户被指定为「价格等级 3」,则门户上所有商品都按该 SKU 的「价格等级 3」价格展示。",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "商品侧与客户侧的对应关系",
        text: "商品侧(5 档价格等级)与客户侧(价格等级 1~5)是一一对应的:客户档案中指定的等级 N,门户自动展示该商品「价格等级 N」的价格;若该档未填写,则按兜底销售价(salePrice)展示。",
      },
    ],
    toc: [
      {
        id: "sku-price-levels",
        text: "所有商品类型的价格等级设置",
        level: 2,
      },
      { id: "weighed-grades", text: "称重商品的等级设置", level: 2 },
      { id: "sale-unit-tiers", text: "多销售单位的价格等级", level: 2 },
      { id: "customer-price-level", text: "客户的价格等级", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "搭建商品目录" },
    next: { href: "/docs/orders/dashboard", title: "订单工作台" },
  },

  // ----- Orders -----
  {
    locale: "zh",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "订单工作台",
    description:
      "了解销售单列表 —— 真实的五种单据状态、可用的筛选条件、表格列，以及订单详情页上可执行的操作。",
    keywords: ["订单工作台", "批发订单", "B2B 订单管理"],
    readingTime: "阅读约 4 分钟",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "「销售单」列表是运营团队日常审单、改单的核心入口。本页会逐一介绍列表上的控件、列字段,以及每张订单在详情页可执行的操作。",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "筛选条件" },
      {
        type: "ul",
        items: [
          "关键字搜索 —— 订单号、客户名、客户 PO 号,或订单上的任意文本。",
          "状态 —— 单选下拉:全部 / 草稿 / 已确认 / 已取消 / 重新打开 / 撤销确认。",
          "时间范围 —— 今天 / 最近 7 天 / 最近 30 天 三个快捷预设,也可在日历上选择自定义区间。",
          "仓库 —— 多选仓库筛选;留空表示不限。",
          "付款状态 —— 多选:未支付 / 部分支付 / 已支付 / 超额支付。",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "重置筛选",
        text: "筛选行最右侧的重置图标会把所有筛选条件还原为默认值(最近 30 天、全部状态、全部仓库、全部付款状态)。",
      },
      { type: "h2", id: "table-columns", text: "表格列" },
      {
        type: "p",
        text: "列表每一行展示以下 12 列:",
      },
      {
        type: "ol",
        items: [
          "# —— 行号(page × size + n)。",
          "订单号 —— 可点击链接,会在新标签页中打开订单详情。",
          "客户 —— 买家名称。",
          "业务日期 —— 订单上的业务日期。",
          "应收金额 —— 按商户默认币种格式化。",
          "仓库 —— 出库仓库。",
          "付款状态 —— 根据「已收 vs 应收」自动派生。",
          "状态 —— 订单当前所处状态(见下方「单据状态」)。",
          "创建时间 / 创建人 / 更新时间 / 更新人 —— 审计字段。",
        ],
      },
      { type: "h2", id: "statuses", text: "单据状态" },
      {
        type: "p",
        text: "每张订单始终处于以下 5 种状态之一。状态徽标为静态展示,不可点击推进订单。要切换状态,请打开订单详情页并使用其中的动作按钮。",
      },
      {
        type: "table",
        headers: ["状态", "代码", "含义"],
        rows: [
          ["草稿", "0", "已保存为草稿,尚未发送至客户。"],
          ["已确认", "1", "已发送至客户,可进入履约流程。"],
          ["已取消", "2", "已作废;订单仅留作审计,后续不可再操作。"],
          ["重新打开", "3", "之前已取消的订单被重新打开以供修改。"],
          ["撤销确认", "4", "从「已确认」回到类似草稿的可改状态。"],
        ],
      },
      { type: "h2", id: "actions", text: "订单操作" },
      {
        type: "p",
        text: "点击订单号打开详情页。详情页顶部会根据当前状态显示对应的动作按钮,所有动作都按权限码控制,无权时按钮直接隐藏。",
      },
      {
        type: "ul",
        items: [
          "保存 —— 在草稿 / 重新打开 / 撤销确认 状态下保存当前修改。",
          "确认销售单 —— 将草稿推进为「已确认」。",
          "撤销确认 —— 把「已确认」回退到「撤销确认」(可再编辑后再次确认)。",
          "作废销售单 —— 把「已确认」的订单作废为「已取消」。",
          "Reopen —— 把「已取消」的订单重新打开为「重新打开」状态,允许再次编辑。",
          "删除 —— 永久删除订单。仅在草稿 / 撤销确认 / 重新打开 状态下可用。",
          "退货 / 取消退货 —— 在「已确认」订单的明细行上处理客户退货(部分退货);取消退货可撤销一次退货。",
        ],
      },
      { type: "h2", id: "inventory-impact", text: "状态转换与库存联动" },
      {
        type: "p",
        text: "所有库存变动都通过统一流水记录,可随时在「库存流水」中按单据号追溯。下表展示了 4 个主要动作对库存的影响:",
      },
      {
        type: "table",
        headers: ["动作", "状态变化", "库存影响", "说明"],
        rows: [
          [
            "确认销售单",
            "草稿 / 重新打开 / 撤销确认 → 已确认",
            "扣减库存 ( − )",
            "按订单明细数量,从对应仓库出库;扣减后成本写入订单。",
          ],
          [
            "撤销确认",
            "已确认 → 撤销确认",
            "返还库存 ( + )",
            "把上一次「确认销售单」扣减的库存全部返还;订单成本清零。",
          ],
          [
            "作废销售单",
            "已确认 → 已取消",
            "返还库存 ( + )",
            "把上一次「确认销售单」扣减的库存全部返还;订单仅留作审计。",
          ],
          [
            "Reopen",
            "已取消 → 重新打开",
            "不动库存",
            "库存已在「作废销售单」时返还,Reopen 只改状态;可直接再次「确认销售单」再次扣减。",
          ],
          [
            "退货",
            "已确认 (行级)",
            "部分返还 ( + )",
            "对已确认订单的某一行做部分退货,新增一条负数量明细,按该数量返还库存。",
          ],
          [
            "取消退货",
            "已确认 (行级)",
            "再次扣减 ( − )",
            "撤销一次退货,删除负数量明细并按原数量重新扣减库存。",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "「作废销售单」和「撤销确认」都会返还库存",
        text: "两个动作的库存效果相同 —— 都是把上一次「确认销售单」扣减的库存全部回滚。区别在于终态:作废后订单进入「已取消」(终态,不可再推进),撤销确认后订单进入「撤销确认」(可继续编辑,再次确认会再次扣减库存)。",
      },
      {
        type: "callout",
        variant: "warning",
        title: "不支持批量操作",
        text: "销售单列表不支持多选或批量操作。每张订单都必须单独打开详情页进行处理。",
      },
    ],
    toc: [
      { id: "filters", text: "筛选条件", level: 2 },
      { id: "table-columns", text: "表格列", level: 2 },
      { id: "statuses", text: "单据状态", level: 2 },
      { id: "actions", text: "订单操作", level: 2 },
      { id: "inventory-impact", text: "状态转换与库存联动", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "价格层级与客户定价",
    },
    next: { href: "/docs/inventory/stock", title: "库存水位" },
  },

  // ----- Inventory -----
  {
    locale: "zh",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "库存水位",
    description:
      "按库位、仓库与商品变体跟踪库存，配置基本库存单位以及单位之间的换算关系。",
    keywords: ["库存管理", "批发库存", "多仓库"],
    readingTime: "阅读约 5 分钟",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Wholesalify 的库存模块会为每个商品的每个变体在每个仓库内维护一份实时库存数。采购订单确认时会自动调整库存。",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "仓库" },
      {
        type: "p",
        text: "你可以按需添加多个仓库。每个商品在不同仓库下都有独立的库存计数，方便你从距离客户最近的仓库发货。",
      },
      { type: "h2", id: "stock-units", text: "库存单位与换算" },
      {
        type: "p",
        text: "对于生鲜商品可以将库存单位设置为公斤。同时添加 5 公斤箱、10 公斤筐等包装规格并自动换算，客户即可按这些规格下单，而无需你手动维护。",
      },
      { type: "h2", id: "stock-adjustments", text: "手动调整库存" },
      {
        type: "p",
        text: "是否因损耗少了几箱？打开商品、选择「调整库存」并输入正或负的数量及原因。调整记录会带操作人、时间、可选图片写入审计日志。",
      },
    ],
    toc: [
      { id: "warehouses", text: "仓库", level: 2 },
      { id: "stock-units", text: "库存单位与换算", level: 2 },
      { id: "stock-adjustments", text: "手动调整库存", level: 2 },
    ],
    prev: { href: "/docs/orders/dashboard", title: "订单工作台" },
    next: { href: "/docs/purchasing/purchase-orders", title: "创建采购订单" },
  },

  // ----- Purchasing -----
  {
    locale: "zh",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "创建采购订单",
    description:
      "向供应商下达采购订单，跟踪在途收货并通过一次操作将收货单过账到库存。",
    keywords: ["采购订单", "供应商管理", "批发采购"],
    readingTime: "阅读约 6 分钟",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "采购订单明确告知供应商发货的品项、时间与价格。货物到达后，确认收货即可一步到位更新库存与供应商记录。",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "步骤一 —— 添加供应商" },
      {
        type: "p",
        text: "进入「采购 → 供应商 → 新建供应商」，填写联系方式、以及他们通常需要的交货周期。",
      },
      { type: "h2", id: "build-po", text: "步骤二 —— 建立采购订单" },
      {
        type: "p",
        text: "点击「新建采购订单」，选择供应商并添加明细行。单价默认沿用该供应商的历史价格，每一行可单独覆盖。",
      },
      { type: "h2", id: "receive", text: "步骤三 —— 收货过账" },
      {
        type: "p",
        text: "货物到达后在采购订单上点击「确认」。录入每行实际到货数量并确认，库存会自动更新。",
      },
      { type: "h2", id: "inventory-impact", text: "状态转换与库存联动" },
      {
        type: "p",
        text: "采购单与销售单共用一套库存流水,但方向相反 —— 采购的「确认」是入库 (+),而销售的「确认」是出库 (−)。下表展示了 4 个主要动作对库存的影响:",
      },
      {
        type: "table",
        headers: ["动作", "状态变化", "库存影响", "说明"],
        rows: [
          [
            "确认采购单",
            "草稿 / 重新打开 / 撤销确认 → 已确认",
            "入库 ( + )",
            "按订单明细数量入到对应仓库;采购成本写入订单。",
          ],
          [
            "撤销确认",
            "已确认 → 撤销确认",
            "出库 ( − )",
            "把上一次「确认采购单」入库的库存全部扣回;采购成本清零。",
          ],
          [
            "作废采购单",
            "已确认 → 已取消",
            "出库 ( − )",
            "把上一次「确认采购单」入库的库存全部扣回;订单仅留作审计。",
          ],
          [
            "Reopen",
            "已取消 → 重新打开",
            "不动库存",
            "库存已在「作废采购单」时扣回,Reopen 只改状态;可直接再次「确认采购单」再次入库。",
          ],
          [
            "退货",
            "已确认 (行级)",
            "部分出库 ( − )",
            "对已确认订单的某一行做部分退货(向供应商退回部分货物),新增一条负数量明细,按该数量扣回库存。",
          ],
          [
            "取消退货",
            "已确认 (行级)",
            "再次入库 ( + )",
            "撤销一次退货,删除负数量明细并按原数量重新入库。",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "「确认采购单」是入库,而不是出库",
        text: "采购单的「确认」代表货物已实际到达并入库,所以是 +;这与销售单「确认」是出货 − 的方向完全相反。操作时请特别注意方向,避免误以为「撤销确认会归还库存给供应商」——撤销确认只是把已经入库的库存再扣回去。",
      },
      {
        type: "callout",
        variant: "info",
        title: "「作废采购单」和「撤销确认」都会扣回库存",
        text: "两个动作的库存效果相同 —— 都是把上一次「确认采购单」入库的库存全部扣回。区别在于终态:作废后订单进入「已取消」(终态,不可再推进),撤销确认后订单进入「撤销确认」(可继续编辑,再次确认会再次入库)。",
      },
    ],
    toc: [
      { id: "supplier-first", text: "步骤一 —— 添加供应商", level: 2 },
      { id: "build-po", text: "步骤二 —— 建立采购订单", level: 2 },
      { id: "receive", text: "步骤三 —— 收货过账", level: 2 },
      { id: "inventory-impact", text: "状态转换与库存联动", level: 2 },
    ],
    prev: { href: "/docs/inventory/stock", title: "库存水位" },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CATEGORY_ORDER = [
  "get-started",
  "ordering-portal",
  "orders",
  "inventory",
  "purchasing",
];

function pickLocale(locale: string): Locale {
  // Documented locales: en + zh. Other locales will fall back to English content.
  if (locale === "zh") return "zh";
  return "en";
}

export function getArticleByPath(
  pathSegments: string[],
  locale: string,
): DocArticle | undefined {
  if (pathSegments.length === 0) return undefined;
  const [category, slug] = pathSegments;
  const target = pickLocale(locale);
  return articles.find(
    (a) => a.locale === target && a.category === category && a.slug === slug,
  );
}

export function getArticles(locale: string): DocArticle[] {
  const target = pickLocale(locale);
  return articles.filter((a) => a.locale === target);
}

export function getCategories(locale: string): DocCategory[] {
  const target = pickLocale(locale);
  const labels = CATEGORY_LABELS[target] ?? CATEGORY_LABELS.en;
  const descriptions =
    CATEGORY_DESCRIPTIONS[target] ?? CATEGORY_DESCRIPTIONS.en;
  const docs = articles.filter((a) => a.locale === target);

  const map = new Map<string, { articles: DocArticle[] }>();
  for (const a of docs) {
    if (!map.has(a.category)) map.set(a.category, { articles: [] });
    map.get(a.category)!.articles.push(a);
  }
  return CATEGORY_ORDER.filter((slug) => map.has(slug)).map((slug) => ({
    slug,
    title: labels[slug] ?? slug,
    href: `/docs/${slug}`,
    description: descriptions[slug] ?? "",
    articles: map.get(slug)!.articles.map((a) => ({
      href: a.href,
      title: a.title,
      description: a.description,
    })),
  }));
}

export function getCategoryBySlug(
  slug: string,
  locale: string,
): DocCategory | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

export function getSections(locale: string): DocSection[] {
  const target = pickLocale(locale);
  const sectionLabels = SECTION_TITLES[target] ?? SECTION_TITLES.en;
  const cats = getCategories(locale);
  return [
    {
      title: sectionLabels.fundamentals,
      categories: cats.filter((c) => c.slug === "get-started"),
    },
    {
      title: sectionLabels.platform,
      categories: cats.filter((c) =>
        ["ordering-portal", "orders", "inventory", "purchasing"].includes(
          c.slug,
        ),
      ),
    },
  ];
}
