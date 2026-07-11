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
        | "settings";
    }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface DocArticle {
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

const CATEGORY_TITLES: Record<Locale, Record<string, string>> = {
  en: {
    "get-started": "Get started",
    "ordering-portal": "Ordering portal",
    orders: "Order management",
    inventory: "Inventory",
    purchasing: "Purchasing",
    admin: "Admin & mobile",
    account: "Account & billing",
    integrations: "Integrations",
    reference: "Reference",
  },
  zh: {},
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
// Articles
// ---------------------------------------------------------------------------

export const articles: DocArticle[] = [
  // ----- Get started -----
  {
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
          "Run low-stock alerts, stock reports, and automated replenishment.",
          "Manage suppliers, purchase orders, and inbound stock.",
          "Operate the business from anywhere with our iOS and Android apps.",
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
          "Mobile app — on-the-go management for stock checks, order updates, and approvals.",
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
          "Jump to the Admin dashboard overview to learn the back-office layout.",
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
          ["Operator", "Handles day-to-day order processing and picking."],
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
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Set up your ordering portal",
    description:
      "Configure your wholesale ordering portal — store details, payment terms, delivery zones, and the look your buyers see when they log in.",
    keywords: ["ordering portal setup", "wholesale storefront", "B2B catalog"],
    readingTime: "5 min read",
    lastUpdated: "2026-07-06",
    blocks: [
      {
        type: "p",
        text: "The ordering portal is the storefront your buyers use. This guide walks through every setting that controls how it looks and behaves.",
      },
      { type: "h2", id: "store-details", text: "Store details" },
      {
        type: "p",
        text: "In Settings → Store, fill in your business name, logo, contact details, and default currency. These values appear on invoices, email notifications, and the buyer-facing portal header.",
      },
      {
        type: "h2",
        id: "delivery-zones",
        text: "Delivery zones and minimum order",
      },
      {
        type: "p",
        text: "Wholesale buyers care about whether you can deliver to them. Open Settings → Delivery zones to add the regions you serve, the lead time for each zone, and any minimum order value.",
      },
      {
        type: "ul",
        items: [
          "Set a per-zone lead time in days.",
          "Apply a minimum order value to zones where you only deliver in bulk.",
          "Disable a zone rather than delete it — this preserves historical order data.",
        ],
      },
      { type: "h2", id: "payment-terms", text: "Payment terms" },
      {
        type: "p",
        text: "Head to Settings → Payments to enable the payment methods you accept (bank transfer, cash on delivery, Net-7 / Net-30 credit, etc.). You can also configure default credit terms per customer tier.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Invoices and credit notes",
        text: "Wholesalify does not process card payments itself — it tracks what is owed. Each order generates an invoice you can export as PDF or sync to your accounting tool.",
      },
      { type: "h2", id: "appearance", text: "Appearance" },
      {
        type: "p",
        text: "Use Settings → Appearance to switch between light and dark themes, pick your brand colors, and upload a banner for your storefront home page.",
      },
    ],
    toc: [
      { id: "store-details", text: "Store details", level: 2 },
      {
        id: "delivery-zones",
        text: "Delivery zones and minimum order",
        level: 2,
      },
      { id: "payment-terms", text: "Payment terms", level: 2 },
      { id: "appearance", text: "Appearance", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Core concepts" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Build your catalog",
    },
  },
  {
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
        text: "Go to Catalog → Products → New product. Choose a product kind to start.",
      },
      { type: "h3", id: "standard", text: "Standard" },
      {
        type: "p",
        text: "A standard product sells in discrete units. Define a SKU, a base unit (piece / case / pallet), and the price per unit. Add multiple pack sizes by adding variants.",
      },
      { type: "h3", id: "weighed", text: "Weighed" },
      {
        type: "p",
        text: "A weighed product has no fixed SKU — buyers can enter any decimal quantity. Set the price per kilogram and a minimum pack size. The system rounds each order to the configured precision.",
      },
      { type: "h3", id: "multi-spec", text: "Multi-specification" },
      {
        type: "p",
        text: "A multi-spec product has a parent record plus child SKUs. Each child represents one combination of attributes — for example Size × Color × Flavor. Add attribute options in Catalog → Attributes first.",
      },
      { type: "h2", id: "categories", text: "Categories and tags" },
      {
        type: "p",
        text: "Group products into categories to control how they appear in the portal sidebar and which categories a buyer can browse. Tags are free-form labels for filtering and search.",
      },
      { type: "h2", id: "images", text: "Images and translations" },
      {
        type: "p",
        text: "Upload up to eight images per product. The first image is the storefront hero. If you operate in multiple regions, add translated names and descriptions from the product edit page — these propagate automatically to the corresponding locale.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Bulk import",
        text: "Need to load thousands of products? Use Catalog → Import to upload a CSV. The importer validates every row and surfaces errors before you commit.",
      },
    ],
    toc: [
      { id: "create-product", text: "Create a product", level: 2 },
      { id: "standard", text: "Standard", level: 3 },
      { id: "weighed", text: "Weighed", level: 3 },
      { id: "multi-spec", text: "Multi-specification", level: 3 },
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
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Price tiers and customer pricing",
    description:
      "Set up tiered pricing, volume discounts, and graded fruit pricing. Assign customers to tiers and apply per-customer overrides.",
    keywords: ["price tier", "wholesale pricing", "fruit grading"],
    readingTime: "6 min read",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Wholesale buyers expect pricing that reflects their volume. Wholesalify supports several pricing strategies that can be combined on the same product.",
      },
      { type: "h2", id: "price-tiers", text: "Price tiers" },
      {
        type: "p",
        text: "A price tier is a group of buyers who see the same prices. Examples: VIP, Standard wholesale, Reseller. Each product can have one price per tier, plus a fallback base price.",
      },
      { type: "h2", id: "volume-discounts", text: "Volume discounts" },
      {
        type: "p",
        text: "On a standard or multi-spec product, add quantity breaks — for example, 10+ units at 5% off, 50+ units at 10% off. The discount applies automatically in the cart.",
      },
      {
        type: "h2",
        id: "graded-pricing",
        text: "Graded pricing for fruit and produce",
      },
      {
        type: "p",
        text: "Graded products let you charge a different price per grade (A / B / Premium). Each grade is a child record with its own price and stock. Buyers select the grade in the product page.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "customer-overrides", text: "Per-customer overrides" },
      {
        type: "p",
        text: "Need to offer a special price to a single buyer? Open the customer record, switch to the Pricing tab, and set a custom unit price for one or more products. Custom overrides take precedence over tier pricing.",
      },
    ],
    toc: [
      { id: "price-tiers", text: "Price tiers", level: 2 },
      { id: "volume-discounts", text: "Volume discounts", level: 2 },
      {
        id: "graded-pricing",
        text: "Graded pricing for fruit and produce",
        level: 2,
      },
      { id: "customer-overrides", text: "Per-customer overrides", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Build your catalog",
    },
    next: { href: "/docs/orders/dashboard", title: "Order dashboard" },
  },

  // ----- Orders -----
  {
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Order dashboard",
    description:
      "Understand the order dashboard — filters, bulk actions, status pills, and the order detail panel.",
    keywords: ["order dashboard", "wholesale orders", "B2B order management"],
    readingTime: "4 min read",
    lastUpdated: "2026-07-04",
    blocks: [
      {
        type: "p",
        text: "The Orders workspace is where your operations team spends most of its day. This page explains every control on the dashboard.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filters" },
      {
        type: "ul",
        items: [
          "Status — Submitted, Confirmed, Picking, Dispatched, Delivered, Cancelled.",
          "Date range — last 24 h / 7 d / 30 d, or a custom range.",
          "Customer — restrict to a single buyer or a tier.",
          "Delivery zone — useful when your warehouse is split by region.",
        ],
      },
      { type: "h2", id: "bulk-actions", text: "Bulk actions" },
      {
        type: "p",
        text: "Select multiple orders with the checkboxes to confirm, print picking lists, export to CSV, or assign a delivery route in one go.",
      },
      { type: "h2", id: "status-pills", text: "Status pills" },
      {
        type: "p",
        text: "Each order shows a colored pill that reflects its current state. The color and label follow the order lifecycle described in Core concepts. Click the pill to advance the order to the next state.",
      },
      { type: "h2", id: "detail-panel", text: "Order detail panel" },
      {
        type: "p",
        text: "Click any order to open the detail panel. Inside you'll find the buyer's contact details, line items, internal notes, payment status, and an activity timeline showing who did what.",
      },
    ],
    toc: [
      { id: "filters", text: "Filters", level: 2 },
      { id: "bulk-actions", text: "Bulk actions", level: 2 },
      { id: "status-pills", text: "Status pills", level: 2 },
      { id: "detail-panel", text: "Order detail panel", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Price tiers and customer pricing",
    },
    next: { href: "/docs/orders/picking", title: "Picking and packing" },
  },
  {
    slug: "picking",
    category: "orders",
    href: "/docs/orders/picking",
    title: "Picking and packing",
    description:
      "Generate picking lists, print pack slips, and record what was actually shipped — including substitution logic for weighed items.",
    keywords: ["picking list", "pack slip", "order fulfillment"],
    readingTime: "5 min read",
    lastUpdated: "2026-07-04",
    blocks: [
      {
        type: "p",
        text: "Once an order is Confirmed, the warehouse needs to pick and pack it. Wholesalify turns each order into a printable picking list and a customer-facing pack slip with a single click.",
      },
      { type: "h2", id: "generate-picklist", text: "Generate a picking list" },
      {
        type: "p",
        text: "Open an order and click Print → Picking list. The list is grouped by storage location so warehouse staff can walk an efficient route.",
      },
      {
        type: "h2",
        id: "weighed-substitutions",
        text: "Weighed item substitutions",
      },
      {
        type: "p",
        text: 'Sometimes the exact weight a buyer ordered is not available. The picker can mark the line as "Actual weight X kg" — the order total recalculates automatically and the buyer sees the discrepancy on the invoice.',
      },
      {
        type: "callout",
        variant: "warning",
        title: "Approval threshold",
        text: "Substitutions greater than a configurable threshold (default 10%) require a manager to approve before the order can be dispatched.",
      },
      { type: "h2", id: "pack-slip", text: "Pack slip and dispatch" },
      {
        type: "p",
        text: "When packing is complete, click Mark as packed. The pack slip PDF is generated and the order moves to the Dispatched state when you scan the carrier waybill.",
      },
    ],
    toc: [
      { id: "generate-picklist", text: "Generate a picking list", level: 2 },
      {
        id: "weighed-substitutions",
        text: "Weighed item substitutions",
        level: 2,
      },
      { id: "pack-slip", text: "Pack slip and dispatch", level: 2 },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Order dashboard" },
    next: { href: "/docs/inventory/stock", title: "Stock levels" },
  },

  // ----- Inventory -----
  {
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
    prev: { href: "/docs/orders/picking", title: "Picking and packing" },
    next: { href: "/docs/inventory/alerts", title: "Low-stock alerts" },
  },
  {
    slug: "alerts",
    category: "inventory",
    href: "/docs/inventory/alerts",
    title: "Low-stock alerts",
    description:
      "Configure per-product reorder thresholds so your team gets a heads-up before stock runs out.",
    keywords: ["low stock alerts", "reorder threshold", "wholesale alerts"],
    readingTime: "3 min read",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Low-stock alerts notify the right person the moment a product drops below its reorder threshold. Alerts can be sent by email, push notification on the mobile app, or webhook.",
      },
      { type: "h2", id: "set-threshold", text: "Set a threshold" },
      {
        type: "p",
        text: "Each product has a Reorder threshold and a Target level field. The threshold is the trigger; the target is the amount of stock you want to keep on hand after replenishment.",
      },
      { type: "h2", id: "channels", text: "Notification channels" },
      {
        type: "p",
        text: "Configure alerts in Settings → Notifications. You can route different product categories to different roles — for example, produce alerts to the procurement manager, packaging alerts to the warehouse supervisor.",
      },
    ],
    toc: [
      { id: "set-threshold", text: "Set a threshold", level: 2 },
      { id: "channels", text: "Notification channels", level: 2 },
    ],
    prev: { href: "/docs/inventory/stock", title: "Stock levels" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Create purchase orders",
    },
  },

  // ----- Purchasing -----
  {
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
        text: "Open Purchasing → Suppliers → New supplier. Enter contact details, default currency, and the lead time they typically deliver within.",
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
    ],
    toc: [
      { id: "supplier-first", text: "Step 1 — Add the supplier", level: 2 },
      { id: "build-po", text: "Step 2 — Build the PO", level: 2 },
      { id: "receive", text: "Step 3 — Receive the shipment", level: 2 },
    ],
    prev: { href: "/docs/inventory/alerts", title: "Low-stock alerts" },
    next: { href: "/docs/admin/dashboard", title: "Admin dashboard" },
  },

  // ----- Admin -----
  {
    slug: "dashboard",
    category: "admin",
    href: "/docs/admin/dashboard",
    title: "Admin dashboard",
    description:
      "Get an at-a-glance view of orders, revenue, low-stock items, and pending purchase orders.",
    keywords: ["admin dashboard", "wholesale KPIs", "revenue analytics"],
    readingTime: "4 min read",
    lastUpdated: "2026-07-01",
    blocks: [
      {
        type: "p",
        text: "The admin dashboard is the home page for your operations team. It surfaces the numbers that matter today, alongside a short list of items that need attention.",
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "widgets", text: "Widgets" },
      {
        type: "ul",
        items: [
          "Today's orders and revenue, with week-over-week change.",
          "Orders by status — see where every order is in the lifecycle.",
          "Low-stock list — products at or below their reorder threshold.",
          "Open purchase orders — count and total value of POs awaiting receipt.",
          "Top customers by revenue, this month.",
        ],
      },
      { type: "h2", id: "widgets-customize", text: "Customize the dashboard" },
      {
        type: "p",
        text: "Click and drag the widget header to rearrange tiles. Use the + button to add extra widgets (revenue chart, fulfillment SLA, payment aging) and the × to remove ones you don't need.",
      },
    ],
    toc: [
      { id: "widgets", text: "Widgets", level: 2 },
      { id: "widgets-customize", text: "Customize the dashboard", level: 2 },
    ],
    prev: {
      href: "/docs/purchasing/purchase-orders",
      title: "Create purchase orders",
    },
    next: { href: "/docs/admin/mobile", title: "Mobile app" },
  },
  {
    slug: "mobile",
    category: "admin",
    href: "/docs/admin/mobile",
    title: "Mobile app for iOS and Android",
    description:
      "Install the Wholesalify mobile app, sign in, and check orders, stock, or approve a purchase order from anywhere.",
    keywords: ["mobile app", "Wholesalify iOS", "Wholesalify Android"],
    readingTime: "3 min read",
    lastUpdated: "2026-06-28",
    blocks: [
      {
        type: "p",
        text: "The Wholesalify mobile app keeps the back office in your pocket. Use it on a warehouse floor, in the market, or on the road.",
      },
      { type: "h2", id: "install", text: "Install the app" },
      {
        type: "ul",
        items: [
          'iOS — search "Wholesalify" on the App Store. Requires iOS 16 or later.',
          'Android — search "Wholesalify" on Google Play. Requires Android 10 or later.',
        ],
      },
      { type: "h2", id: "sign-in", text: "Sign in" },
      {
        type: "p",
        text: "Open the app, enter your tenant slug and email, then approve the push-notification prompt. Biometric login is supported after the first sign-in.",
      },
      { type: "h2", id: "on-the-go", text: "What you can do on the go" },
      {
        type: "ul",
        items: [
          "Confirm or cancel incoming orders.",
          "Check live stock for any product, including a quick barcode scan.",
          "Approve a purchase order that needs your sign-off.",
          "Record a stock count or a manual adjustment with a photo.",
        ],
      },
    ],
    toc: [
      { id: "install", text: "Install the app", level: 2 },
      { id: "sign-in", text: "Sign in", level: 2 },
      { id: "on-the-go", text: "What you can do on the go", level: 2 },
    ],
    prev: { href: "/docs/admin/dashboard", title: "Admin dashboard" },
    next: { href: "/docs/account/team", title: "Invite your team" },
  },

  // ----- Account -----
  {
    slug: "team",
    category: "account",
    href: "/docs/account/team",
    title: "Invite your team",
    description:
      "Add teammates, assign roles, and configure who can approve orders and purchase orders.",
    keywords: ["team management", "roles", "permissions"],
    readingTime: "3 min read",
    lastUpdated: "2026-06-25",
    blocks: [
      {
        type: "p",
        text: "Wholesalify supports Owner, Admin, Operator, and Buyer roles. Each role has a default permission set; you can override individual permissions under Settings → Roles.",
      },
      { type: "h2", id: "invite", text: "Send an invite" },
      {
        type: "p",
        text: "Head to Settings → Team → Invite. Enter the user's email and pick a role. They will receive an activation link valid for 14 days.",
      },
      {
        type: "h2",
        id: "two-factor",
        text: "Require two-factor authentication",
      },
      {
        type: "p",
        text: 'Under Settings → Security, toggle "Require 2FA for all admins". Buyers are not required to enable 2FA.',
      },
    ],
    toc: [
      { id: "invite", text: "Send an invite", level: 2 },
      { id: "two-factor", text: "Require two-factor authentication", level: 2 },
    ],
    prev: { href: "/docs/admin/mobile", title: "Mobile app" },
    next: { href: "/docs/account/billing", title: "Billing and subscription" },
  },
  {
    slug: "billing",
    category: "account",
    href: "/docs/account/billing",
    title: "Billing and subscription",
    description:
      "Manage your Wholesalify subscription, view invoices, and update payment details.",
    keywords: ["billing", "subscription", "invoice"],
    readingTime: "3 min read",
    lastUpdated: "2026-06-24",
    blocks: [
      {
        type: "p",
        text: "Wholesalify offers a free tier for businesses just getting started and paid plans that scale with the number of orders you process each month.",
      },
      { type: "h2", id: "plans", text: "Plans" },
      {
        type: "table",
        headers: ["Plan", "Best for", "Includes"],
        rows: [
          [
            "Free",
            "Up to 100 orders / month",
            "Catalog, ordering portal, single warehouse, email support.",
          ],
          [
            "Pro",
            "Growing wholesale",
            "Multi-warehouse, low-stock alerts, mobile app, priority support.",
          ],
          [
            "Scale",
            "High-volume distribution",
            "Multi-tenant ops, custom roles, dedicated success manager.",
          ],
        ],
      },
      { type: "h2", id: "invoices", text: "Invoices and receipts" },
      {
        type: "p",
        text: "Every charge generates a downloadable PDF invoice under Settings → Billing → Invoices. Update your billing email or VAT number from the same page.",
      },
    ],
    toc: [
      { id: "plans", text: "Plans", level: 2 },
      { id: "invoices", text: "Invoices and receipts", level: 2 },
    ],
    prev: { href: "/docs/account/team", title: "Invite your team" },
  },
];

// ---------------------------------------------------------------------------
// Categories (built from articles)
// ---------------------------------------------------------------------------

export function getCategories(): DocCategory[] {
  const map = new Map<string, DocCategory>();
  for (const article of articles) {
    if (!map.has(article.category)) {
      map.set(article.category, {
        slug: article.category,
        title: humanCategoryTitle(article.category),
        href: `/docs/${article.category}`,
        description: humanCategoryDescription(article.category),
        articles: [],
      });
    }
    map.get(article.category)!.articles.push({
      href: article.href,
      title: article.title,
      description: article.description,
    });
  }
  // Order categories explicitly
  const order = [
    "get-started",
    "ordering-portal",
    "orders",
    "inventory",
    "purchasing",
    "admin",
    "account",
  ];
  return order.filter((slug) => map.has(slug)).map((slug) => map.get(slug)!);
}

export function getSections(): DocSection[] {
  return [
    {
      title: "Fundamentals",
      categories: getCategories().filter((c) =>
        ["get-started"].includes(c.slug),
      ),
    },
    {
      title: "Platform guides",
      categories: getCategories().filter((c) =>
        ["ordering-portal", "orders", "inventory", "purchasing"].includes(
          c.slug,
        ),
      ),
    },
    {
      title: "Operations",
      categories: getCategories().filter((c) =>
        ["admin", "account"].includes(c.slug),
      ),
    },
  ];
}

export function getArticleByPath(
  pathSegments: string[],
): DocArticle | undefined {
  if (pathSegments.length === 0) return undefined;
  const [category, slug] = pathSegments;
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function getArticles(): DocArticle[] {
  return articles;
}

export function getCategoryBySlug(slug: string): DocCategory | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function humanCategoryTitle(slug: string): string {
  return CATEGORY_TITLES.en[slug as keyof typeof CATEGORY_TITLES.en] ?? slug;
}

function humanCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "get-started":
      "Set up your tenant, build a catalog, and place your first wholesale order in under an hour.",
    "ordering-portal":
      "Configure the storefront your wholesale buyers use — catalog, pricing, and the buyer experience.",
    orders:
      "Manage every order from submission through delivery, including picking, packing, and invoicing.",
    inventory:
      "Track stock across warehouses, set reorder thresholds, and reconcile inventory in real time.",
    purchasing:
      "Manage suppliers, build purchase orders, and convert received goods into updated stock.",
    admin:
      "Run your back office from the admin dashboard and the iOS / Android mobile apps.",
    account:
      "Invite your team, manage roles, and handle billing for your Wholesalify tenant.",
  };
  return descriptions[slug] ?? "";
}
