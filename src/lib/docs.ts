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
        | "showroom"
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
  vi: {
    "get-started": "Bắt đầu",
    "ordering-portal": "Cổng đặt hàng",
    orders: "Quản lý đơn hàng",
    inventory: "Hàng tồn kho",
    purchasing: "Mua hàng",
  },
  th: {
    "get-started": "เริ่มต้นใช้งาน",
    "ordering-portal": "พอร์ทัลสั่งซื้อ",
    orders: "การจัดการคำสั่งซื้อ",
    inventory: "สต็อกสินค้า",
    purchasing: "การจัดซื้อ",
  },
  id: {
    "get-started": "Mulai",
    "ordering-portal": "Portal pemesanan",
    orders: "Manajemen pesanan",
    inventory: "Stok",
    purchasing: "Pembelian",
  },
  ms: {
    "get-started": "Bermula",
    "ordering-portal": "Portal pesanan",
    orders: "Pengurusan pesanan",
    inventory: "Stok",
    purchasing: "Pembelian",
  },
  ar: {
    "get-started": "ابدأ",
    "ordering-portal": "بوابة الطلب",
    orders: "إدارة الطلبات",
    inventory: "المخزون",
    purchasing: "المشتريات",
  },
  tr: {
    "get-started": "Başlayın",
    "ordering-portal": "Sipariş portalı",
    orders: "Sipariş yönetimi",
    inventory: "Stok",
    purchasing: "Satın alma",
  },
  "es-MX": {
    "get-started": "Empezar",
    "ordering-portal": "Portal de pedidos",
    orders: "Gestión de pedidos",
    inventory: "Inventario",
    purchasing: "Compras",
  },
  "es-ES": {
    "get-started": "Empezar",
    "ordering-portal": "Portal de pedidos",
    orders: "Gestión de pedidos",
    inventory: "Inventario",
    purchasing: "Compras",
  },
  "pt-BR": {
    "get-started": "Começar",
    "ordering-portal": "Portal de pedidos",
    orders: "Gestão de pedidos",
    inventory: "Estoque",
    purchasing: "Compras",
  },
  de: {
    "get-started": "Erste Schritte",
    "ordering-portal": "Bestellportal",
    orders: "Bestellverwaltung",
    inventory: "Bestand",
    purchasing: "Einkauf",
  },
  fr: {
    "get-started": "Commencer",
    "ordering-portal": "Portail de commande",
    orders: "Gestion des commandes",
    inventory: "Stock",
    purchasing: "Achats",
  },
  it: {
    "get-started": "Iniziare",
    "ordering-portal": "Portale ordini",
    orders: "Gestione ordini",
    inventory: "Magazzino",
    purchasing: "Acquisti",
  },
  pl: {
    "get-started": "Pierwsze kroki",
    "ordering-portal": "Portal zamówień",
    orders: "Zarządzanie zamówieniami",
    inventory: "Stany magazynowe",
    purchasing: "Zakupy",
  },
  "pt-PT": {
    "get-started": "Começar",
    "ordering-portal": "Portal de encomendas",
    orders: "Gestão de encomendas",
    inventory: "Stock",
    purchasing: "Compras",
  },
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
  vi: {
    "get-started":
      "Thiết lập tenant, cấu hình danh mục và hoàn thành đơn hàng bán sỉ đầu tiên trong vòng chưa đầy một giờ.",
    "ordering-portal":
      "Cấu hình cổng đặt hàng mà khách bán sỉ sử dụng — danh mục, giá bán và trải nghiệm khách hàng.",
    orders:
      "Quản lý mọi đơn hàng từ khi đặt đến khi giao, bao gồm chuyển trạng thái và xuất hóa đơn.",
    inventory:
      "Theo dõi tồn kho giữa các kho, đặt ngưỡng bổ sung và đối chiếu tồn kho theo thời gian thực.",
    purchasing:
      "Quản lý nhà cung cấp, tạo đơn mua hàng và chuyển hàng nhận thành cập nhật tồn kho.",
  },
  th: {
    "get-started":
      "ตั้งค่า tenant สร้างแคตตาล็อก และทำคำสั่งซื้อขายส่งแรกให้เสร็จภายในหนึ่งชั่วโมง",
    "ordering-portal":
      "กำหนดค่าหน้าร้านที่ผู้ซื้อขายส่งใช้งาน — แคตตาล็อก ราคา และประสบการณ์ของลูกค้า",
    orders:
      "จัดการทุกคำสั่งซื้อตั้งแต่ส่งไปจนถึงจัดส่ง รวมถึงการเปลี่ยนสถานะและการออกใบแจ้งหนี้",
    inventory:
      "ติดตามสต็อกข้ามคลังสินค้า ตั้งเกณฑ์การเติมสินค้า และตรวจสอบยอดแบบเรียลไทม์",
    purchasing:
      "จัดการซัพพลายเออร์ สร้างใบสั่งซื้อ และแปลงการรับสินค้าเป็นการอัปเดตสต็อก",
  },
  id: {
    "get-started":
      "Siapkan tenant, buat katalog, dan selesaikan pesanan grosir pertama Anda dalam waktu kurang dari satu jam.",
    "ordering-portal":
      "Konfigurasikan etalase yang digunakan pembeli grosir — katalog, harga, dan pengalaman pembeli.",
    orders:
      "Kelola setiap pesanan mulai dari pengiriman hingga pengiriman, termasuk transisi status dan penagihan.",
    inventory:
      "Lacak stok lintas gudang, tetapkan ambang batas pemesanan ulang, dan rekonsiliasi stok secara real-time.",
    purchasing:
      "Kelola pemasok, buat purchase order, dan konversi barang yang diterima menjadi pembaruan stok.",
  },
  ms: {
    "get-started":
      "Sediakan tenant, bina katalog, dan lengkapkan pesanan borong pertama anda dalam masa kurang dari satu jam.",
    "ordering-portal":
      "Konfigurasikan etalase yang digunakan pembeli borong — katalog, harga, dan pengalaman pembeli.",
    orders:
      "Urus setiap pesanan dari penyerahan hingga penghantaran, termasuk peralihan status dan invois.",
    inventory:
      "Jejak stok merentasi gudang, tetapkan ambang pesanan semula, dan rekonsiliasi stok dalam masa nyata.",
    purchasing:
      "Urus pembekal, bina pesanan pembelian, dan tukar barang yang diterima menjadi kemas kini stok.",
  },
  ar: {
    "get-started":
      "أنشئ حسابك، وأنشئ كتالوجًا، وأكمل أول طلب جملة لك في أقل من ساعة.",
    "ordering-portal":
      "اضبط المتجر الذي يستخدمه عملاء الجملة — الكتالوج والأسعار وتجربة العميل.",
    orders:
      "أدر كل طلب من إرساله حتى تسليمه، بما في ذلك تغيير الحالات وإصدار الفواتير.",
    inventory:
      "تتبع المخزون عبر المستودعات، واضبط حدود إعادة الطلب، وطابق المخزون في الزمن الفعلي.",
    purchasing:
      "أدر الموردين، وأنشئ أوامر الشراء، وحول البضائع المستلمة إلى تحديثات للمخزون.",
  },
  tr: {
    "get-started":
      "Üyeliğinizi kurun, bir katalog oluşturun ve ilk toptan siparişinizi bir saatten kısa sürede tamamlayın.",
    "ordering-portal":
      "Toptan alıcılarınızın kullandığı mağazayı yapılandırın — katalog, fiyatlandırma ve alıcı deneyimi.",
    orders:
      "Durum geçişleri ve fatura oluşturma dahil tüm siparişleri gönderimden teslimata kadar yönetin.",
    inventory:
      "Depolar arasında stoğu takip edin, yeniden sipariş eşiklerini ayarlayın ve stoğu gerçek zamanlı olarak mutabakatlayın.",
    purchasing:
      "Tedarikçileri yönetin, satın alma siparişleri oluşturun ve alınan malları stok güncellemelerine dönüştürün.",
  },
  "es-MX": {
    "get-started":
      "Configura tu espacio, crea un catálogo y completa tu primer pedido al mayoreo en menos de una hora.",
    "ordering-portal":
      "Configura la tienda que usan tus compradores al mayoreo — catálogo, precios y experiencia de compra.",
    orders:
      "Gestiona cada pedido desde su envío hasta la entrega, incluidas las transiciones de estado y la facturación.",
    inventory:
      "Rastrea el inventario entre almacenes, establece umbrales de reorden y concilia el inventario en tiempo real.",
    purchasing:
      "Gestiona proveedores, crea órdenes de compra y convierte los bienes recibidos en actualizaciones de inventario.",
  },
  "es-ES": {
    "get-started":
      "Configura tu espacio, crea un catálogo y completa tu primer pedido al por mayor en menos de una hora.",
    "ordering-portal":
      "Configura la tienda que usan tus compradores al por mayor — catálogo, precios y experiencia de compra.",
    orders:
      "Gestiona cada pedido desde su envío hasta la entrega, incluidas las transiciones de estado y la facturación.",
    inventory:
      "Haz un seguimiento del inventario entre almacenes, establece umbrales de reposición y concilia el inventario en tiempo real.",
    purchasing:
      "Gestiona proveedores, crea pedidos de compra y convierte la mercancía recibida en actualizaciones de inventario.",
  },
  "pt-BR": {
    "get-started":
      "Configure seu espaço, crie um catálogo e conclua seu primeiro pedido de atacado em menos de uma hora.",
    "ordering-portal":
      "Configure a loja que seus compradores de atacado usam — catálogo, preços e experiência do comprador.",
    orders:
      "Gerencie cada pedido desde o envio até a entrega, incluindo as transições de status e a emissão de notas fiscais.",
    inventory:
      "Acompanhe o estoque entre armazéns, defina limites de recompra e reconcilie o estoque em tempo real.",
    purchasing:
      "Gerencie fornecedores, crie pedidos de compra e converta mercadorias recebidas em atualizações de estoque.",
  },
  de: {
    "get-started":
      "Richten Sie Ihren Mandanten ein, erstellen Sie einen Katalog und geben Sie Ihre erste Großhandelsbestellung in weniger als einer Stunde auf.",
    "ordering-portal":
      "Konfigurieren Sie den Shop, den Ihre Großhandelskunden nutzen — Katalog, Preise und Kauferlebnis.",
    orders:
      "Verwalten Sie jede Bestellung von der Übermittlung bis zur Lieferung, einschließlich Statusübergänge und Rechnungsstellung.",
    inventory:
      "Verfolgen Sie den Bestand über Lager hinweg, legen Sie Nachbestellschwellen fest und gleichen Sie den Bestand in Echtzeit ab.",
    purchasing:
      "Verwalten Sie Lieferanten, erstellen Sie Bestellungen und wandeln Sie eingegangene Waren in Bestandsaktualisierungen um.",
  },
  fr: {
    "get-started":
      "Configurez votre espace, créez un catalogue et passez votre première commande de gros en moins d'une heure.",
    "ordering-portal":
      "Configurez la boutique utilisée par vos acheteurs en gros — catalogue, tarification et expérience d'achat.",
    orders:
      "Gérez chaque commande de la soumission à la livraison, y compris les transitions de statut et la facturation.",
    inventory:
      "Suivez le stock entre les entrepôts, définissez des seuils de réapprovisionnement et rapprochez le stock en temps réel.",
    purchasing:
      "Gérez les fournisseurs, créez des bons de commande et convertissez les marchandises reçues en mises à jour de stock.",
  },
  it: {
    "get-started":
      "Configura il tuo spazio, crea un catalogo e completa il tuo primo ordine all'ingrosso in meno di un'ora.",
    "ordering-portal":
      "Configura il negozio usato dai tuoi acquirenti all'ingrosso — catalogo, prezzi ed esperienza d'acquisto.",
    orders:
      "Gestisci ogni ordine dall'invio alla consegna, incluse le transizioni di stato e la fatturazione.",
    inventory:
      "Traccia le scorte tra i magazzini, imposta le soglie di riordino e riconcilia l'inventario in tempo reale.",
    purchasing:
      "Gestisci i fornitori, crea ordini d'acquisto e converti le merci ricevute in aggiornamenti delle scorte.",
  },
  pl: {
    "get-started":
      "Skonfiguruj swoją przestrzeń, zbuduj katalog i złóż pierwsze zamówienie hurtowe w niecałą godzinę.",
    "ordering-portal":
      "Skonfiguruj sklep, z którego korzystają Twoi hurtowi nabywcy — katalog, ceny i doświadczenie kupującego.",
    orders:
      "Zarządzaj każdym zamówieniem od złożenia do dostawy, w tym zmianami statusów i fakturowaniem.",
    inventory:
      "Śledź stany magazynowe między magazynami, ustawiaj progi ponownego zamówienia i uzgadniaj zapasy w czasie rzeczywistym.",
    purchasing:
      "Zarządzaj dostawcami, twórz zamówienia zakupu i zamieniaj otrzymane towary na aktualizacje stanów magazynowych.",
  },
  "pt-PT": {
    "get-started":
      "Configure o seu espaço, crie um catálogo e efetue a sua primeira encomenda por grosso em menos de uma hora.",
    "ordering-portal":
      "Configure a loja utilizada pelos seus compradores por grosso — catálogo, preços e experiência de compra.",
    orders:
      "Gira cada encomenda desde o envio até à entrega, incluindo as transições de estado e a faturação.",
    inventory:
      "Acompanhe o stock entre armazéns, defina limites de reposição e reconcilie o stock em tempo real.",
    purchasing:
      "Gira fornecedores, crie encomendas de compra e converta mercadorias recebidas em atualizações de stock.",
  },
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
  vi: {
    fundamentals: "Nền tảng cơ bản",
    platform: "Hướng dẫn nền tảng",
  },
  th: {
    fundamentals: "พื้นฐาน",
    platform: "คู่มือแพลตฟอร์ม",
  },
  id: {
    fundamentals: "Dasar-dasar",
    platform: "Panduan platform",
  },
  ms: {
    fundamentals: "Asas",
    platform: "Panduan platform",
  },
  ar: {
    fundamentals: "الأساسيات",
    platform: "أدلة المنصة",
  },
  tr: {
    fundamentals: "Temeller",
    platform: "Platform kılavuzları",
  },
  "es-MX": {
    fundamentals: "Fundamentos",
    platform: "Guías de la plataforma",
  },
  "es-ES": {
    fundamentals: "Fundamentos",
    platform: "Guías de la plataforma",
  },
  "pt-BR": {
    fundamentals: "Fundamentos",
    platform: "Guias da plataforma",
  },
  de: {
    fundamentals: "Grundlagen",
    platform: "Plattform-Anleitungen",
  },
  fr: {
    fundamentals: "Fondamentaux",
    platform: "Guides de la plateforme",
  },
  it: {
    fundamentals: "Fondamentali",
    platform: "Guide della piattaforma",
  },
  pl: {
    fundamentals: "Podstawy",
    platform: "Przewodniki po platformie",
  },
  "pt-PT": {
    fundamentals: "Fundamentos",
    platform: "Guias da plataforma",
  },
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
      {
        type: "h2",
        id: "showroom-preview",
        text: "Buyer-facing showroom preview",
      },
      {
        type: "p",
        text: "Below is the actual storefront a logged-in buyer sees — same branded header, banner, and product grid they navigate on their phone or desktop. Use this preview to confirm catalog visibility, sort order, and the inline add-to-cart experience before sharing the URL.",
      },
      { type: "mockup", variant: "showroom" },
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
      {
        id: "showroom-preview",
        text: "Buyer-facing showroom preview",
        level: 2,
      },
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
      { type: "h2", id: "showroom-preview", text: "买家店面预览" },
      {
        type: "p",
        text: "下面就是客户登录后实际看到的店面:同样的品牌头部、Banner、商品网格——与他们手机或电脑上操作的完全一致。在把链接发给买家之前,可以用这个预览核对目录可见性、排序方式以及「加入购物车」的内联交互。",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "商户信息", level: 2 },
      { id: "showroom", text: "批发商城(订货门户核心)", level: 2 },
      { id: "public", text: "公共商城", level: 3 },
      { id: "private", text: "私有商城", level: 3 },
      { id: "checkout", text: "结算文案", level: 3 },
      { id: "payment", text: "支付方式与税方案", level: 2 },
      { id: "open-storefront", text: "上线你的店面", level: 2 },
      { id: "showroom-preview", text: "买家店面预览", level: 2 },
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

  // ===================================================================
  // VIETNAMESE (vi)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "vi",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Tổng quan Wholesalify",
    description:
      "Tổng quan ngắn gọn về Wholesalify — nền tảng đặt hàng bán sỉ B2B cho nông sản tươi, FMCG và doanh nghiệp bán sỉ đa đơn vị.",
    keywords: ["nền tảng bán sỉ", "đặt hàng B2B", "tổng quan SaaS bán sỉ"],
    readingTime: "4 phút đọc",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify là nền tảng đặt hàng bán sỉ B2B hiện đại được xây dựng cho nhà bán sỉ, nhà phân phối và công ty thương mại. Nền tảng kết hợp cổng đặt hàng hướng khách hàng với bảng quản trị mạnh mẽ để đội ngũ của bạn quản lý đơn hàng, tồn kho, mua hàng và tài khoản khách hàng tại một nơi duy nhất.",
      },
      {
        type: "p",
        text: "Dù bạn bán nông sản tươi theo cân nặng, bán trái cây phân loại theo thùng, hay bán sản phẩm đa quy cách theo SKU, Wholesalify cung cấp mô hình danh mục và giá linh hoạt phù hợp với cách doanh nghiệp bạn thực sự vận hành.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Wholesalify có thể giúp bạn điều gì",
      },
      {
        type: "ul",
        items: [
          "Bán sản phẩm theo cân nặng, theo thùng/pallet hoặc theo đơn vị — từ cùng một danh mục.",
          "Phân tầng giá trái cây và nông sản theo cấp, kích thước hoặc sản lượng.",
          "Quản lý song song sản phẩm cân, sản phẩm phân loại và sản phẩm đa quy cách.",
          "Cung cấp cho mỗi khách bán sỉ cổng đặt hàng tự phục vụ có lịch sử đơn hàng.",
          "Theo dõi đơn hàng, thanh toán và giao hàng từ một bảng điều khiển đơn hàng thống nhất.",
          "Chạy báo cáo tồn kho và tự động bổ sung hàng.",
          "Quản lý nhà cung cấp, đơn mua hàng và hàng nhập kho.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Cách nền tảng phối hợp với nhau",
      },
      {
        type: "p",
        text: "Wholesalify được cấu thành từ ba lớp chia sẻ cùng một nguồn dữ liệu duy nhất:",
      },
      {
        type: "ul",
        items: [
          "Cổng đặt hàng — cửa hàng hướng khách hàng dành cho người mua bán sỉ.",
          "Bảng quản trị — back-office dùng cho đội ngũ vận hành.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "Ai sử dụng Wholesalify" },
      {
        type: "ul",
        items: [
          "Nhà bán sỉ nông sản tươi (trái cây, rau, hải sản).",
          "Nhà phân phối thực phẩm và FMCG.",
          "Nhà bán sỉ vật liệu xây dựng và đồ kim khí.",
          "Nhà nhập khẩu đa đơn vị và công ty thương mại.",
          "Doanh nghiệp bán sỉ vừa và nhỏ đã vượt qua giới hạn của bảng tính và WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Bước tiếp theo" },
      {
        type: "ul",
        items: [
          "Đọc Hướng dẫn nhanh để tạo tenant đầu tiên và đặt một đơn hàng thử.",
          "Xem hướng dẫn Cổng đặt hàng để thiết lập danh mục bán sỉ.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Sẵn sàng bắt đầu?",
        text: "Đăng ký dùng thử miễn phí và bắt đầu khám phá Wholesalify ngay — không cần thẻ tín dụng. Tạo tenant, thêm vài sản phẩm và đặt đơn hàng thử trong chưa đầy 15 phút.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Đăng ký miễn phí",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Wholesalify có thể giúp bạn điều gì",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Cách nền tảng phối hợp với nhau",
        level: 2,
      },
      { id: "who-uses-it", text: "Ai sử dụng Wholesalify", level: 2 },
      { id: "next-steps", text: "Bước tiếp theo", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Hướng dẫn nhanh" },
  },
  {
    locale: "vi",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Hướng dẫn nhanh",
    description:
      "Thiết lập tenant Wholesalify của bạn trong chưa đầy 15 phút: tạo tài khoản, thêm sản phẩm, mời khách mua và đặt đơn hàng bán sỉ đầu tiên.",
    keywords: ["thiết lập bán sỉ", "khởi động nhanh B2B", "onboarding tenant"],
    readingTime: "6 phút đọc",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Hướng dẫn nhanh này dẫn bạn đi theo con đường nhanh nhất để có một tenant Wholesalify hoạt động. Kết thúc hướng dẫn, bạn sẽ có một danh mục với vài sản phẩm mẫu và một khách bán sỉ có thể đặt đơn hàng thực.",
      },
      { type: "h2", id: "prerequisites", text: "Điều kiện tiên quyết" },
      {
        type: "ul",
        items: [
          "Một tài khoản Wholesalify. Đăng ký tại trang đăng ký nếu bạn chưa có.",
          "Một email doanh nghiệp — khách mua sẽ nhận liên kết mời tại đó.",
          "Khoảng 15 phút để thiết lập.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Tạo tài khoản và tenant",
      },
      {
        type: "p",
        text: "Mở trang đăng ký Wholesalify, nhập email doanh nghiệp và tạo mật khẩu. Sau khi xác minh email, bạn sẽ được đưa đến bảng điều khiển tenant. Mỗi tenant được cô lập hoàn toàn — danh mục, khách hàng và đơn hàng của bạn luôn riêng tư trong không gian làm việc của bạn.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Thêm sản phẩm đầu tiên",
      },
      {
        type: "p",
        text: "Mở không gian danh mục và nhấp Thêm sản phẩm. Wholesalify hỗ trợ ba loại sản phẩm ngay từ đầu:",
      },
      {
        type: "table",
        headers: ["Loại sản phẩm", "Sử dụng khi…", "Ví dụ"],
        rows: [
          [
            "Sản phẩm cân",
            "Bạn bán theo cân nặng (kg / lb).",
            "Cà chua rời thùng 5 kg",
          ],
          [
            "Sản phẩm phân loại",
            "Bạn có nhiều cấp hoặc tầng chất lượng.",
            "Táo — Cấp A / B",
          ],
          [
            "Sản phẩm đa quy cách",
            "Bạn bán các SKU khác nhau theo màu/kích thước/hương vị.",
            "Xà phòng 100 g — hoa hồng / oải hương / không mùi",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Mời khách bán sỉ",
      },
      {
        type: "p",
        text: "Từ Khách hàng, nhấp Mời khách mua. Nhập email khách mua và chọn bảng giá cùng điều khoản thanh toán mà họ sẽ thấy. Khách mua nhận email chứa liên kết để đặt mật khẩu và đăng nhập.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Mẹo",
        text: "Khi thử nghiệm, hãy dùng email cá nhân (ví dụ Gmail) — như vậy bạn không cần hộp thư riêng để xác minh lời mời.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Đặt đơn hàng đầu tiên",
      },
      {
        type: "p",
        text: "Chuyển sang tài khoản khách mua và mở cổng đặt hàng. Thêm vài sản phẩm vào giỏ hàng, chọn ngày giao và gửi. Đơn hàng sẽ xuất hiện ngay trong bảng quản trị của bạn dưới mục Đơn hàng.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "step-5-explore",
        text: "5. Khám phá phần còn lại của nền tảng",
      },
      {
        type: "p",
        text: "Từ đây bạn có thể kết nối tồn kho, tạo đơn mua hàng đầu tiên và mời đội ngũ vận hành. Các hướng dẫn còn lại trong tài liệu này sẽ đi sâu vào từng khu vực.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Điều kiện tiên quyết", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Tạo tài khoản và tenant",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Thêm sản phẩm đầu tiên",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Mời khách bán sỉ",
        level: 2,
      },
      {
        id: "step-4-place-order",
        text: "4. Đặt đơn hàng đầu tiên",
        level: 2,
      },
      {
        id: "step-5-explore",
        text: "5. Khám phá phần còn lại của nền tảng",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/overview", title: "Tổng quan" },
    next: { href: "/docs/get-started/concepts", title: "Khái niệm cốt lõi" },
  },
  {
    locale: "vi",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Khái niệm cốt lõi",
    description:
      "Hiểu các khối xây dựng của Wholesalify: tenant, danh mục, tầng giá, tài khoản khách hàng và vòng đời đơn hàng.",
    keywords: ["tenant", "danh mục", "tầng giá", "khái niệm bán sỉ"],
    readingTime: "7 phút đọc",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Trước khi đi vào các tính năng cụ thể, việc nắm vài thuật ngữ chúng tôi dùng xuyên suốt sản phẩm và tài liệu là rất hữu ích.",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "Tenant là một không gian làm việc Wholesalify được cô lập, thuộc sở hữu của một doanh nghiệp bán sỉ duy nhất. Mỗi tenant có danh mục, khách hàng, đơn hàng, tồn kho và người dùng riêng. Các tenant không bao giờ chia sẻ dữ liệu với nhau.",
      },
      { type: "h2", id: "product-kinds", text: "Các loại sản phẩm" },
      {
        type: "p",
        text: "Mỗi mặt hàng trong danh mục thuộc một trong ba loại:",
      },
      {
        type: "ul",
        items: [
          "Tiêu chuẩn — bán theo đơn vị rời rạc như thùng, pallet hoặc SKU đơn lẻ.",
          "Cân — bán theo cân nặng với đơn vị cơ bản (kg / lb) và các quy cách đóng gói.",
          "Đa quy cách — bán dưới một sản phẩm cha với nhiều SKU (kích thước, màu, hương vị).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Tầng giá và giá khách hàng",
      },
      {
        type: "p",
        text: "Tầng giá là một nhóm khách hàng nên thấy cùng một mức giá. Bạn có thể gán mỗi khách hàng vào một hoặc nhiều tầng (ví dụ: VIP, Bán sỉ, Bán lại). Cổng đặt hàng tự động hiển thị giá chính xác cho người mua đang đăng nhập.",
      },
      { type: "h2", id: "order-lifecycle", text: "Vòng đời đơn hàng" },
      {
        type: "p",
        text: "Mỗi đơn hàng đi qua một tập trạng thái nhỏ. Đội ngũ của bạn chuyển đơn hàng từ trạng thái này sang trạng thái tiếp theo khi công việc tiến triển:",
      },
      {
        type: "ol",
        items: [
          "Bản nháp — người mua vẫn đang chỉnh sửa đơn trong cổng của họ.",
          "Đã gửi — người mua đã đặt và đang chờ xác nhận.",
          "Đã xác nhận — đội ngũ của bạn đã chấp nhận; tồn kho được giữ chỗ.",
          "Đã hủy — trạng thái kết thúc; đơn hàng đã bị hủy bỏ.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Đơn vị tồn kho" },
      {
        type: "p",
        text: "Tồn kho được theo dõi bằng đơn vị tồn kho bạn chọn cho mỗi sản phẩm — kilogram cho nông sản, thùng cho đồ uống, cái cho đồ kim khí. Đơn vị bán được quy đổi tự động theo các quy tắc quy đổi bạn đặt trên từng sản phẩm.",
      },
      { type: "h2", id: "users-and-roles", text: "Người dùng và vai trò" },
      {
        type: "p",
        text: "Các thành viên tenant thuộc một vài vai trò:",
      },
      {
        type: "table",
        headers: ["Vai trò", "Họ làm gì"],
        rows: [
          ["Chủ sở hữu", "Quản lý thanh toán, người dùng và mọi cài đặt."],
          ["Quản trị viên", "Quản lý danh mục, đơn hàng, tồn kho và mua hàng."],
          ["Vận hành viên", "Xử lý công việc đơn hàng hằng ngày."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "Các loại sản phẩm", level: 2 },
      { id: "price-tiers", text: "Tầng giá và giá khách hàng", level: 2 },
      { id: "order-lifecycle", text: "Vòng đời đơn hàng", level: 2 },
      { id: "inventory-units", text: "Đơn vị tồn kho", level: 2 },
      { id: "users-and-roles", text: "Người dùng và vai trò", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Hướng dẫn nhanh" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Thiết lập danh mục của bạn",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "vi",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Thiết lập cổng đặt hàng",
    description:
      "Cấu hình cổng đặt hàng bán sỉ — thông tin merchant, showroom riêng, showroom công khai, thông báo thanh toán và các tùy chỉnh theo từng khách hàng quyết định mỗi người mua thấy gì khi đăng nhập.",
    keywords: [
      "thiết lập cổng đặt hàng",
      "cửa hàng bán sỉ",
      "cài đặt showroom",
    ],
    readingTime: "6 phút đọc",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Cổng đặt hàng là cửa hàng mà khách mua của bạn sử dụng. Toàn bộ cấu hình phía merchant nằm trong Cài đặt — một ngăn kéo duy nhất với 12 mục bao gồm cửa hàng, sản phẩm, thanh toán và đội ngũ. Hướng dẫn này tập trung vào các mục bạn thường dùng nhất khi khởi chạy cổng mới.",
      },
      { type: "h2", id: "merchant", text: "Thông tin merchant" },
      {
        type: "p",
        text: "Cài đặt → Merchant là nơi bạn đặt tên doanh nghiệp, số điện thoại, tiền tệ mặc định, ngôn ngữ, múi giờ và định dạng ngày hiển thị trên mọi đơn hàng, hóa đơn và màn hình hướng khách hàng. Lưu thay đổi ở đây có thể khiến bạn đăng xuất để ngôn ngữ mới có hiệu lực.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Showroom riêng (cổng đặt hàng)",
      },
      {
        type: "p",
        text: "Cài đặt → Showroom riêng là trung tâm cho mọi thứ khách mua đã đăng nhập thấy. Ngăn kéo cài đặt mở năm tab theo thứ tự:",
      },
      {
        type: "ol",
        items: [
          "Bật — một công tắc duy nhất bật hoặc tắt cổng B2B cho tenant. Khi tắt, khách mua chỉ thấy showroom công khai.",
          "Tài khoản khách hàng — danh sách mọi khách hàng cùng các tùy chỉnh showroom riêng của họ. Mỗi khách có thể kế thừa mặc định của merchant hoặc có banner, chủ đề và giới hạn sản phẩm riêng.",
          "Showroom công khai — cài đặt cho khách truy cập chưa đăng nhập: thông báo đăng ký, cấp giá bán, cấp giá so sánh.",
          "Showroom riêng — cấu hình trực quan mà mỗi khách đã đăng nhập thấy.",
          "Cài đặt thanh toán — email nhắc giỏ hàng, thông báo thanh toán và thông báo sau đơn hàng.",
        ],
      },
      { type: "h3", id: "public", text: "Showroom công khai" },
      {
        type: "p",
        text: "Với khách truy cập chưa đăng nhập, hãy chọn cấp giá họ thấy (Cấp giá bán) và cấp giá hiển thị gạch ngang làm tham chiếu (Cấp giá so sánh). Trường Thông báo đăng ký là văn bản ngắn hiển thị phía trên danh mục — thường là lời mời một dòng để đăng ký và truy cập giá bán sỉ của bạn.",
      },
      { type: "h3", id: "private", text: "Showroom riêng" },
      {
        type: "p",
        text: "Các cài đặt này định hình trải nghiệm của mỗi khách đã đăng nhập. Tab Showroom riêng được nhóm thành năm khối:",
      },
      {
        type: "ul",
        items: [
          "Banner — Banner di động (16:9) và banner web riêng. Khuyến nghị 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Mỗi cái có thể tải lên hoặc xóa độc lập.",
          "Cài đặt hiển thị — bật/tắt ẩn sản phẩm hết hàng, chọn chế độ mức tồn: Ẩn tồn / Chỉ hiện Còn/Hết / Hiện số + trạng thái.",
          "Hiển thị sản phẩm — bật/tắt hiển thị hình ảnh, danh mục, mô tả và ghi chú sản phẩm.",
          "Thông tin liên hệ — email liên hệ, điện thoại liên hệ và thông điệp liên hệ dạng tự do hiển thị cho khách mua.",
          "Giới hạn — chọn sản phẩm và kho (location) nào khách hàng được thấy. Danh sách trống nghĩa là không giới hạn.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Thuế và chiết khấu",
        text: "Chế độ thuế (thuế chính + thuế phụ tùy chọn) và chiết khấu (phần trăm hoặc số tiền cố định) cũng được cấu hình tại đây. Chúng tự động chảy vào tính toán giỏ hàng và thanh toán.",
      },
      { type: "h3", id: "checkout", text: "Thông báo thanh toán" },
      {
        type: "p",
        text: "Ba đoạn văn bản ngắn điều khiển trải nghiệm khách mua quanh thanh toán: Nhắc giỏ hàng (email nhắc tự động 1 giờ), Thông báo thanh toán (hiển thị trên màn hình giỏ/thanh toán) và Thông báo sau đơn (hiển thị sau khi đặt hàng thành công). Cả ba chấp nhận văn bản thuần.",
      },
      { type: "h2", id: "payment", text: "Phương thức thanh toán và thuế" },
      {
        type: "p",
        text: "Cài đặt → Phương thức thanh toán là nơi bạn bật các lựa chọn thanh toán mà khách mua có thể chọn khi thanh toán (chuyển khoản, thanh toán khi nhận hàng, công nợ tín dụng...). Cài đặt → Mã thuế định nghĩa chế độ thuế mà showroom tham chiếu — thuế chính và thuế phụ tùy chọn theo từng khu vực.",
      },
      { type: "h2", id: "open-storefront", text: "Mở cửa hàng của bạn" },
      {
        type: "p",
        text: "Khi Bật được bật và ít nhất một tài khoản khách hàng đã có quyền truy cập, URL cửa hàng sẽ xuất hiện ở đầu ngăn kéo Showroom riêng. Dùng Mở cửa hàng để xác minh những gì khách mua sẽ thấy trước khi gửi lời mời.",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "Xem trước showroom hướng người mua",
      },
      {
        type: "p",
        text: "Bên dưới là cửa hàng thực tế mà người mua đã đăng nhập thấy — cùng tiêu đề thương hiệu, banner và lưới sản phẩm mà họ điều hướng trên điện thoại hoặc máy tính. Dùng bản xem trước này để xác nhận khả năng hiển thị danh mục, thứ tự sắp xếp và trải nghiệm thêm vào giỏ hàng trước khi chia sẻ URL.",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "Thông tin merchant", level: 2 },
      {
        id: "showroom",
        text: "Showroom riêng (cổng đặt hàng)",
        level: 2,
      },
      { id: "public", text: "Showroom công khai", level: 3 },
      { id: "private", text: "Showroom riêng", level: 3 },
      { id: "checkout", text: "Thông báo thanh toán", level: 3 },
      { id: "payment", text: "Phương thức thanh toán và thuế", level: 2 },
      { id: "open-storefront", text: "Mở cửa hàng của bạn", level: 2 },
      {
        id: "showroom-preview",
        text: "Xem trước showroom hướng người mua",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/get-started/concepts",
      title: "Khái niệm cốt lõi",
    },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Xây dựng danh mục",
    },
  },
  {
    locale: "vi",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Xây dựng danh mục",
    description:
      "Tạo sản phẩm cân, phân loại và đa quy cách, sắp xếp chúng theo danh mục và thẻ, quản lý hình ảnh và bản dịch.",
    keywords: ["danh mục sản phẩm", "danh mục bán sỉ", "sản phẩm cân"],
    readingTime: "8 phút đọc",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Danh mục của bạn là nền tảng của cổng đặt hàng. Mô hình sản phẩm của Wholesalify được xây dựng để xử lý ba thực tế của bán sỉ: sản phẩm bán theo cân, nông sản phân loại và SKU có nhiều quy cách.",
      },
      { type: "h2", id: "create-product", text: "Tạo sản phẩm" },
      {
        type: "p",
        text: "Vào Danh mục → Sản phẩm → Sản phẩm mới. Wholesalify cung cấp bốn loại sản phẩm: Tiêu chuẩn, Cân, Không tồn kho và Dịch vụ.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Tiêu chuẩn" },
      {
        type: "p",
        text: "Sản phẩm tiêu chuẩn bán theo đơn vị rời rạc (cái / thùng / pallet). Định nghĩa SKU, đơn vị tồn kho và giá bán. Để cung cấp nhiều quy cách đóng gói, chuyển sang tab Đơn vị bán và thêm một hàng cho mỗi đơn vị — mỗi hàng có giá riêng, công tắc Bao gồm thuế và 5 tầng giá.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Cân" },
      {
        type: "p",
        text: "Sản phẩm cân không có SKU cố định — người mua nhập bất kỳ số thập phân nào khi thanh toán. Đặt đơn vị cơ bản (kg / lb) và giá bán trên mỗi đơn vị; hệ thống làm tròn mỗi dòng đơn hàng theo độ chính xác đã cấu hình.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Đa quy cách" },
      {
        type: "p",
        text: "Trên sản phẩm Tiêu chuẩn, bật công tắc Chế độ đa quy cách để định nghĩa nhiều thuộc tính (ví dụ Kích thước × Mùi hương). Hệ thống tạo một SKU cho mỗi tổ hợp. Định nghĩa các tùy chọn thuộc tính trong Danh mục → Thuộc tính trước.",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Đa cấp" },
      {
        type: "p",
        text: "Trên sản phẩm Cân, trình soạn SKU thêm tab Cấp sản phẩm. Thêm tối đa 10 hàng cấp cho cùng một SKU (ví dụ Cao cấp / Cấp A / Cấp B). Mỗi hàng có giá bán riêng, công tắc Bao gồm thuế và 5 tầng giá. Người mua chọn cấp cụ thể khi thanh toán; tổng đơn hàng dùng giá của cấp đó.",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Danh mục con và thẻ" },
      {
        type: "p",
        text: "Nhóm sản phẩm vào các danh mục con để kiểm soát cách chúng xuất hiện trong thanh bên của cổng và danh mục nào người mua có thể duyệt. Thẻ là nhãn tự do dùng để lọc và tìm kiếm.",
      },
      { type: "h2", id: "images", text: "Hình ảnh và bản dịch" },
      {
        type: "p",
        text: "Tải lên tối đa một hình ảnh cho mỗi sản phẩm — nó trở thành ảnh chính của cửa hàng. Nếu bạn vận hành ở nhiều khu vực, hãy thêm tên và mô tả đã dịch từ trang chỉnh sửa sản phẩm — chúng tự động lan sang ngôn ngữ tương ứng.",
      },
    ],
    toc: [
      { id: "create-product", text: "Tạo sản phẩm", level: 2 },
      { id: "standard", text: "Tiêu chuẩn", level: 3 },
      { id: "weighed", text: "Cân", level: 3 },
      { id: "multi-spec", text: "Đa quy cách", level: 3 },
      { id: "multi-grade", text: "Đa cấp", level: 3 },
      { id: "categories", text: "Danh mục con và thẻ", level: 2 },
      { id: "images", text: "Hình ảnh và bản dịch", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Thiết lập cổng đặt hàng",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Tầng giá và giá khách hàng",
    },
  },
  {
    locale: "vi",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Tầng giá và giá khách hàng",
    description:
      "Cấu hình 5 tầng giá cho mỗi SKU, thiết lập giá phân cấp cho sản phẩm cân và gán mỗi khách hàng vào một cấp giá quyết định họ thấy tầng nào trong cổng đặt hàng.",
    keywords: [
      "tầng giá",
      "định giá bán sỉ",
      "phân cấp trái cây",
      "cấp giá khách hàng",
    ],
    readingTime: "6 phút đọc",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Định giá của Wholesalify xoay quanh hai ý tưởng: mỗi SKU mang 5 tầng giá (Cấp giá 1–5), và mỗi khách hàng được gán vào một trong 5 tầng đó trong hồ sơ của họ. Hai phía được ánh xạ 1-1 và cấu hình ở hai nơi: tầng SKU trong Sản phẩm → trình soạn SKU, cấp khách hàng trong Khách hàng → Chỉnh sửa khách hàng.",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Tầng giá trên mọi SKU",
      },
      {
        type: "p",
        text: "Trên tab Thông tin cơ bản của bất kỳ SKU nào, ô nhập Giá bán có biểu tượng thanh trượt bên phải. Nhấp vào đó để mở hộp thoại Cấp giá, nơi bạn có thể điền 5 giá riêng biệt (Cấp giá 1 đến Cấp giá 5) và bật/tắt Bao gồm thuế cho từng cái độc lập.",
      },
      {
        type: "ul",
        items: [
          "5 tầng ánh xạ tới 5 cấp giá khách hàng (đặt trên hồ sơ khách hàng — xem bên dưới).",
          "Một chấm nhỏ trên biểu tượng cho biết ít nhất một giá tầng đã được đặt (>0); chấm chỉ mang tính thông tin.",
          "Một SKU mang một bộ 5 giá tầng; số tiền hiển thị thực tế còn phụ thuộc vào đơn vị cơ bản / đơn vị bán, chế độ thuế và tiền tệ.",
          "Giá khách truy cập đã đăng xuất thấy được điều khiển bởi Cài đặt → Showroom → Cấp giá bán; giá so sánh gạch ngang được điều khiển bởi Cấp giá so sánh.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Cài đặt cấp cho sản phẩm cân",
      },
      {
        type: "p",
        text: "Khi chế độ sản phẩm là Cân, trình soạn SKU hiển thị thêm tab Cấp sản phẩm. Tại đó bạn có thể thêm tối đa 10 hàng cấp cho cùng một SKU (ví dụ Cao cấp / Cấp A / Cấp B). Mỗi hàng có tên cấp, giá bán (hậu tố cố định /{baseUnit}, ví dụ /kg), công tắc bao gồm thuế và cùng biểu tượng thanh trượt trên ô giá — nhấp mở cùng hộp thoại Cấp giá 5 tầng để cấp cụ thể đó có thể mang 5 giá riêng.",
      },
      {
        type: "ul",
        items: [
          "Tối đa 10 hàng cấp; xóa hàng cuối sẽ để lại một hàng trống thay vì xóa cả mục.",
          "Hậu tố giá luôn là /{baseUnit} (ví dụ /kg) để khớp quy ước bán cân.",
          "Người mua chọn cấp cụ thể khi đặt hàng; tổng đơn hàng được tính theo giá của cấp đó.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Tầng giá cho sản phẩm nhiều đơn vị bán",
      },
      {
        type: "p",
        text: "Sản phẩm không cân có thể có nhiều đơn vị bán (ví dụ Thùng / Cái / Bộ) được cấu hình trên tab Đơn vị bán. Mỗi hàng đơn vị bán cũng có ô giá bán riêng với biểu tượng thanh trượt, mở cùng hộp thoại Cấp giá 5 tầng để đơn vị có thể mang 5 giá riêng cùng công tắc thuế.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Cấp giá khách hàng",
      },
      {
        type: "p",
        text: "Mở bất kỳ khách hàng nào trong Quản lý khách hàng — khu vực thông tin cơ bản có menu thả Cấp giá với năm tùy chọn (Cấp giá 1 đến Cấp giá 5). Cấp bạn gán ở đây quyết định giá nào trong 5 giá tầng của SKU mà khách hàng thấy khi họ đăng nhập vào cổng đặt hàng. Khách hàng được gán Cấp giá 3 sẽ thấy Cấp giá 3 trên toàn bộ danh mục.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Cách hai phía kết nối",
        text: "Phía SKU (5 giá tầng) và phía khách hàng (Cấp giá 1–5) là 1-1: con số được chọn trên hồ sơ khách hàng quyết định giá tầng nào của SKU mà cổng hiển thị cho mọi sản phẩm. Nếu tầng đó để trống, hệ thống sẽ dùng giá bán cơ sở của SKU.",
      },
    ],
    toc: [
      { id: "sku-price-levels", text: "Tầng giá trên mọi SKU", level: 2 },
      {
        id: "weighed-grades",
        text: "Cài đặt cấp cho sản phẩm cân",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Tầng giá cho sản phẩm nhiều đơn vị bán",
        level: 2,
      },
      { id: "customer-price-level", text: "Cấp giá khách hàng", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Xây dựng danh mục",
    },
    next: { href: "/docs/orders/dashboard", title: "Bảng đơn hàng" },
  },

  // ----- Orders -----
  {
    locale: "vi",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Bảng đơn hàng",
    description:
      "Hiểu danh sách Đơn bán hàng — năm trạng thái đơn hàng thực, các bộ lọc có sẵn, các cột trên bảng và các hành động khả dụng trên trang chi tiết đơn hàng.",
    keywords: ["bảng đơn hàng", "đơn hàng bán sỉ", "quản lý đơn hàng B2B"],
    readingTime: "4 phút đọc",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Danh sách Đơn bán hàng là nơi đội ngũ vận hành xem xét và xử lý mọi đơn hàng. Trang này giải thích mọi điều khiển trên danh sách, các cột bạn thấy và các hành động khả dụng trên trang chi tiết của từng đơn hàng.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Bộ lọc" },
      {
        type: "ul",
        items: [
          "Tìm kiếm từ khóa — số đơn hàng, tên khách hàng, số PO khách hàng hoặc bất kỳ văn bản nào trên đơn hàng.",
          "Trạng thái — menu thả đơn chọn: Tất cả, Bản nháp, Đã xác nhận, Đã hủy, Mở lại, Chưa xác nhận.",
          "Khoảng ngày — cài sẵn Hôm nay / 7 ngày qua / 30 ngày qua, hoặc chọn phạm vi tùy chỉnh trên lịch.",
          "Kho — bộ lọc kho đa chọn. Trống nghĩa là tất cả kho.",
          "Trạng thái thanh toán — bộ lọc đa chọn: Chưa thanh toán, Một phần, Đã thanh toán, Thanh toán thừa.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Đặt lại bộ lọc",
        text: "Dùng biểu tượng đặt lại ở bên phải hàng bộ lọc để xóa mọi bộ lọc về mặc định (30 ngày qua, mọi trạng thái, mọi kho, mọi trạng thái thanh toán).",
      },
      { type: "h2", id: "table-columns", text: "Cột của bảng" },
      {
        type: "p",
        text: "Mỗi hàng của danh sách hiển thị mười hai cột sau:",
      },
      {
        type: "ol",
        items: [
          "# — chỉ số hàng (page × size + n).",
          "Số đơn — liên kết có thể nhấp mở trang chi tiết đơn hàng trong tab mới.",
          "Khách hàng — tên người mua.",
          "Ngày giao dịch — ngày ghi trên đơn hàng.",
          "Số tiền phải trả — được định dạng theo tiền tệ mặc định của merchant.",
          "Kho — kho xuất hàng.",
          "Trạng thái thanh toán — suy ra từ số dư so với số phải trả.",
          "Trạng thái — trạng thái hiện tại của đơn hàng (xem Trạng thái đơn hàng bên dưới).",
          "Ngày tạo / Người tạo / Ngày cập nhật / Người cập nhật — trường kiểm tra.",
        ],
      },
      { type: "h2", id: "statuses", text: "Trạng thái đơn hàng" },
      {
        type: "p",
        text: "Mỗi đơn hàng luôn ở một trong năm trạng thái sau. Huy hiệu trạng thái là nhãn thụ động — không thể nhấp để chuyển đơn hàng. Để thay đổi trạng thái, mở trang chi tiết đơn hàng và dùng nút hành động ở đó.",
      },
      {
        type: "table",
        headers: ["Trạng thái", "Mã", "Ý nghĩa"],
        rows: [
          [
            "Bản nháp",
            "0",
            "Đã lưu dưới dạng bản nháp. Chưa gửi cho khách hàng.",
          ],
          ["Đã xác nhận", "1", "Đã gửi cho khách hàng / sẵn sàng thực hiện."],
          [
            "Đã hủy",
            "2",
            "Đã hủy bỏ; đơn hàng được giữ để kiểm tra nhưng không thể thực hiện thêm hành động.",
          ],
          ["Mở lại", "3", "Đơn hàng đã hủy trước đó được mở lại để chỉnh sửa."],
          [
            "Chưa xác nhận",
            "4",
            "Quay lại từ Đã xác nhận về trạng thái giống bản nháp.",
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Hành động trên đơn hàng" },
      {
        type: "p",
        text: "Nhấp vào số đơn hàng để mở trang chi tiết. Đầu trang chi tiết hiển thị các nút hành động phù hợp với trạng thái hiện tại. Mọi hành động được bảo vệ bởi mã quyền — các nút bạn không có quyền sẽ bị ẩn hoàn toàn.",
      },
      {
        type: "ul",
        items: [
          "Lưu — lưu đơn hàng khi đang ở Bản nháp, Mở lại hoặc Chưa xác nhận.",
          "Xác nhận — chuyển trạng thái dạng bản nháp (Bản nháp / Mở lại / Chưa xác nhận) sang Đã xác nhận.",
          "Bỏ xác nhận — hoàn tác đơn Đã xác nhận về Chưa xác nhận (sau đó có thể chỉnh sửa và xác nhận lại).",
          "Hủy — hủy bỏ đơn Đã xác nhận thành Đã hủy.",
          "Mở lại — đưa đơn Đã hủy trở về Mở lại để chỉnh sửa.",
          "Xóa — xóa vĩnh viễn đơn hàng. Chỉ khả dụng ở Bản nháp, Chưa xác nhận và Mở lại.",
          "Trả hàng / Hủy trả — trên dòng chi tiết của đơn Đã xác nhận, xử lý trả hàng một phần hoặc hoàn tác một lần trả.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Chuyển trạng thái và tác động tồn kho",
      },
      {
        type: "p",
        text: "Mọi thay đổi tồn kho được ghi lại thành một dòng trong sổ tồn kho và có thể truy ngược về đơn hàng nguồn. Bảng dưới tóm tắt tác động tồn kho của mỗi hành động:",
      },
      {
        type: "table",
        headers: [
          "Hành động",
          "Thay đổi trạng thái",
          "Tác động tồn kho",
          "Ghi chú",
        ],
        rows: [
          [
            "Xác nhận",
            "Bản nháp / Mở lại / Chưa xác nhận → Đã xác nhận",
            "Trừ ( − )",
            "Xuất kho từ kho của đơn hàng cho mọi dòng chi tiết; giá vốn được ghi lên đơn tại thời điểm xác nhận.",
          ],
          [
            "Bỏ xác nhận",
            "Đã xác nhận → Chưa xác nhận",
            "Hoàn trả ( + )",
            "Hoàn lại phần trừ từ lần Xác nhận gần nhất; các trường giá vốn của đơn được xóa.",
          ],
          [
            "Hủy",
            "Đã xác nhận → Đã hủy",
            "Hoàn trả ( + )",
            "Hoàn lại phần trừ từ lần Xác nhận gần nhất; đơn hàng được giữ để kiểm tra và không thể chuyển tiếp.",
          ],
          [
            "Mở lại",
            "Đã hủy → Mở lại",
            "Không thay đổi",
            "Tồn kho đã được hoàn khi đơn bị hủy. Mở lại chỉ thay đổi trạng thái; Xác nhận tiếp theo sẽ trừ lại.",
          ],
          [
            "Trả hàng",
            "Đã xác nhận (theo dòng)",
            "Trả một phần ( + )",
            "Thêm dòng số lượng âm cho dòng chi tiết của đơn Đã xác nhận và hoàn số lượng đó về tồn kho.",
          ],
          [
            "Hủy trả",
            "Đã xác nhận (theo dòng)",
            "Trừ lại ( − )",
            "Xóa dòng trả đã ghi trước đó và trừ lại số lượng gốc từ tồn kho.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Cả Hủy và Bỏ xác nhận đều hoàn tồn kho",
        text: "Hai hành động có cùng tác động tồn kho: cả hai đều hoàn lại phần trừ từ lần Xác nhận gần nhất. Khác biệt là trạng thái kết thúc — Hủy chuyển đơn sang Đã hủy (kết thúc, không thể chuyển tiếp); Bỏ xác nhận chuyển sang Chưa xác nhận (vẫn chỉnh sửa được, Xác nhận mới sẽ trừ tồn kho lần nữa).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Không có thao tác hàng loạt",
        text: "Danh sách Đơn bán hàng không hỗ trợ chọn hàng hay thao tác hàng loạt. Mỗi đơn phải được mở riêng để xử lý.",
      },
    ],
    toc: [
      { id: "filters", text: "Bộ lọc", level: 2 },
      { id: "table-columns", text: "Cột của bảng", level: 2 },
      { id: "statuses", text: "Trạng thái đơn hàng", level: 2 },
      { id: "actions", text: "Hành động trên đơn hàng", level: 2 },
      {
        id: "inventory-impact",
        text: "Chuyển trạng thái và tác động tồn kho",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Tầng giá và giá khách hàng",
    },
    next: { href: "/docs/inventory/stock", title: "Mức tồn kho" },
  },

  // ----- Inventory -----
  {
    locale: "vi",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Mức tồn kho",
    description:
      "Theo dõi tồn kho theo vị trí, kho và biến thể sản phẩm. Cấu hình đơn vị tồn kho cơ bản và các quy tắc quy đổi.",
    keywords: ["quản lý tồn kho", "tồn kho bán sỉ", "đa kho"],
    readingTime: "5 phút đọc",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Mô-đun tồn kho của Wholesalify duy trì số đếm thời gian thực cho mỗi biến thể sản phẩm, theo từng kho. Tồn kho được tự động điều chỉnh khi đơn hàng được xác nhận và khi phiếu nhập mua hàng được ghi.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Kho" },
      {
        type: "p",
        text: "Thêm bao nhiêu kho tùy theo bạn vận hành. Mỗi sản phẩm có số đếm tồn kho riêng theo từng kho, cho phép bạn giao đơn từ vị trí gần người mua nhất.",
      },
      { type: "h2", id: "stock-units", text: "Đơn vị tồn kho và quy đổi" },
      {
        type: "p",
        text: 'Với sản phẩm nông sản tươi, đặt đơn vị tồn kho là kilogram. Thêm các quy cách đóng gói như "thùng 5 kg" hoặc "sọt 10 kg" với quy đổi tự động để người mua có thể đặt theo các đơn vị đó mà không cần bạn phải quy đổi thủ công.',
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Điều chỉnh tồn kho thủ công",
      },
      {
        type: "p",
        text: "Bị mất vài thùng do hư hỏng? Mở sản phẩm, chọn Điều chỉnh tồn kho và nhập số lượng dương hoặc âm kèm lý do. Các điều chỉnh được ghi vào nhật ký kiểm tra với người dùng, ngày và hình ảnh tùy chọn.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Kho", level: 2 },
      { id: "stock-units", text: "Đơn vị tồn kho và quy đổi", level: 2 },
      {
        id: "stock-adjustments",
        text: "Điều chỉnh tồn kho thủ công",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Bảng đơn hàng" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Tạo đơn mua hàng",
    },
  },

  // ----- Purchasing -----
  {
    locale: "vi",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Tạo đơn mua hàng",
    description:
      "Lập đơn mua hàng với nhà cung cấp, theo dõi lô hàng đang về và ghi phiếu nhập để cập nhật tồn kho tự động.",
    keywords: ["đơn mua hàng", "quản lý nhà cung cấp", "mua hàng bán sỉ"],
    readingTime: "6 phút đọc",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Đơn mua hàng nói cho nhà cung cấp biết cần giao gì, khi nào và với giá nào. Khi hàng đến, việc ghi phiếu nhập cập nhật tồn kho và hồ sơ nhà cung cấp chỉ trong một bước.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "Bước 1 — Thêm nhà cung cấp" },
      {
        type: "p",
        text: "Mở Mua hàng → Nhà cung cấp → Nhà cung cấp mới. Nhập thông tin liên hệ và thời gian giao hàng thường lệ của họ.",
      },
      { type: "h2", id: "build-po", text: "Bước 2 — Lập đơn mua hàng" },
      {
        type: "p",
        text: "Nhấp Đơn mua hàng mới, chọn nhà cung cấp và thêm các dòng chi tiết. Đơn giá mặc định theo giá gần nhất của nhà cung cấp nhưng bạn có thể ghi đè từng dòng.",
      },
      { type: "h2", id: "receive", text: "Bước 3 — Nhận lô hàng" },
      {
        type: "p",
        text: "Khi hàng đến, nhấp Nhận trên đơn mua hàng. Nhập số lượng thực tế đã giao — hỗ trợ nhận một phần — và xác nhận. Mức tồn kho được cập nhật tự động và một hóa đơn nhà cung cấp được tạo.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Chuyển trạng thái và tác động tồn kho",
      },
      {
        type: "p",
        text: "Đơn mua hàng và đơn bán hàng dùng chung một sổ tồn kho, nhưng chảy theo hai hướng ngược nhau — xác nhận đơn mua là cộng tồn (+), trong khi xác nhận đơn bán là trừ tồn (−). Bảng dưới tóm tắt bốn hành động chính và tác động tồn kho:",
      },
      {
        type: "table",
        headers: [
          "Hành động",
          "Thay đổi trạng thái",
          "Tác động tồn kho",
          "Ghi chú",
        ],
        rows: [
          [
            "Xác nhận đơn mua",
            "Bản nháp / Mở lại / Chưa xác nhận → Đã xác nhận",
            "Nhập kho ( + )",
            "Hàng được nhập vào kho đích theo từng dòng; chi phí mua hàng được ghi trên đơn.",
          ],
          [
            "Bỏ xác nhận",
            "Đã xác nhận → Chưa xác nhận",
            "Xuất kho ( − )",
            "Đảo ngược phần nhập từ lần Xác nhận đơn mua gần nhất; chi phí mua hàng được xóa.",
          ],
          [
            "Hủy đơn mua",
            "Đã xác nhận → Đã hủy",
            "Xuất kho ( − )",
            "Đảo ngược phần nhập từ lần Xác nhận đơn mua gần nhất; đơn hàng chỉ được giữ để kiểm tra.",
          ],
          [
            "Mở lại",
            "Đã hủy → Mở lại",
            "Không thay đổi tồn kho",
            "Tồn kho đã được đảo ngược khi Hủy; Mở lại chỉ thay đổi trạng thái. Có thể Xác nhận lại để nhập kho lần nữa.",
          ],
          [
            "Trả hàng",
            "Đã xác nhận (theo dòng)",
            "Xuất một phần ( − )",
            "Trả một phần dòng đã xác nhận cho nhà cung cấp — thêm dòng số lượng âm và giảm tồn kho tương ứng.",
          ],
          [
            "Hủy trả",
            "Đã xác nhận (theo dòng)",
            "Nhập lại ( + )",
            "Đảo ngược một lần trả — dòng âm bị xóa và nhập lại tồn kho với số lượng ban đầu.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Xác nhận đơn mua là nhập kho — không phải xuất kho",
        text: "Xác nhận đơn mua nghĩa là hàng đã thực sự đến và được cất vào kho, nên tồn kho tăng (+). Điều này ngược với xác nhận đơn bán, vốn giảm (−). Đừng nhầm lẫn hai hướng: Bỏ xác nhận không trả hàng cho nhà cung cấp — nó chỉ đảo ngược phần tồn kho đã nhập khi bạn xác nhận.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Hủy và Bỏ xác nhận đều đảo ngược tồn kho",
        text: "Cả hai hành động có cùng tác động tồn kho — chúng đảo ngược phần nhập từ lần Xác nhận trước. Khác biệt là trạng thái kết thúc: Hủy chuyển đơn sang Đã hủy (kết thúc), trong khi Bỏ xác nhận chuyển sang Chưa xác nhận (vẫn chỉnh sửa được, Xác nhận tiếp theo sẽ nhập kho lại).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Bước 1 — Thêm nhà cung cấp", level: 2 },
      { id: "build-po", text: "Bước 2 — Lập đơn mua hàng", level: 2 },
      { id: "receive", text: "Bước 3 — Nhận lô hàng", level: 2 },
      {
        id: "inventory-impact",
        text: "Chuyển trạng thái và tác động tồn kho",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Mức tồn kho" },
  },

  // ===================================================================
  // THAI (th)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "th",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "ภาพรวม Wholesalify",
    description:
      "ภาพรวมสั้นๆ ของ Wholesalify — แพลตฟอร์มสั่งซื้อขายส่ง B2B สำหรับธุรกิจผักผลไม้สด FMCG และการค้าส่งหลายหน่วย",
    keywords: ["แพลตฟอร์มขายส่ง", "การสั่งซื้อ B2B", "ภาพรวม SaaS ขายส่ง"],
    readingTime: "อ่าน 4 นาที",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify เป็นแพลตฟอร์มสั่งซื้อขายส่ง B2B สมัยใหม่ที่สร้างมาสำหรับผู้ค้าส่ง ผู้จัดจำหน่าย และบริษัทการค้า แพลตฟอร์มผสมผสานพอร์ทัลสั่งซื้อสำหรับลูกค้าเข้ากับแดชบอร์ดผู้ดูแลที่ทรงพลัง เพื่อให้ทีมของคุณจัดการคำสั่งซื้อ สต็อก การจัดซื้อ และบัญชีลูกค้าได้ในที่เดียว",
      },
      {
        type: "p",
        text: "ไม่ว่าคุณจะขายผักผลไม้สดตามน้ำหนัก ขายผลไม้คัดเกรดเป็นลัง หรือขายสินค้าหลายสเปกตาม SKU Wholesalify มีแคตตาล็อกและโมเดลราคาที่ยืดหยุ่นตรงกับวิธีที่ธุรกิจของคุณทำงานจริง",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Wholesalify ทำอะไรให้คุณได้บ้าง",
      },
      {
        type: "ul",
        items: [
          "ขายสินค้าตามน้ำหนัก ตามลัง/พาเลท หรือตามหน่วย จากแคตตาล็อกเดียวกัน",
          "แบ่งระดับราคาผลไม้และผักตามเกรด ขนาด หรือปริมาณ",
          "จัดการสินค้าชั่งน้ำหนัก สินค้าคัดเกรด และสินค้าหลายสเปกคู่กัน",
          "มอบพอร์ทัลสั่งซื้อแบบบริการตนเองพร้อมประวัติคำสั่งซื้อให้ผู้ซื้อขายส่งทุกราย",
          "ติดตามคำสั่งซื้อ การชำระเงิน และการจัดส่งจากแดชบอร์ดคำสั่งซื้อเดียว",
          "เรียกใช้รายงานสต็อกและการเติมสินค้าอัตโนมัติ",
          "จัดการซัพพลายเออร์ ใบสั่งซื้อ และสินค้าขาเข้า",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "แพลตฟอร์มเชื่อมต่อกันอย่างไร",
      },
      {
        type: "p",
        text: "Wholesalify ประกอบด้วยสามชั้นที่ใช้แหล่งข้อมูลเดียวกัน:",
      },
      {
        type: "ul",
        items: [
          "พอร์ทัลสั่งซื้อ — หน้าร้านสำหรับผู้ซื้อขายส่ง",
          "แดชบอร์ดผู้ดูแล — back-office สำหรับทีมปฏิบัติการ",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "ใครใช้ Wholesalify" },
      {
        type: "ul",
        items: [
          "ผู้ค้าส่งผักผลไม้สด (ผลไม้ ผัก อาหารทะเล)",
          "ผู้จัดจำหน่ายอาหารและ FMCG",
          "ผู้ค้าส่งวัสดุก่อสร้างและเครื่องมือช่าง",
          "ผู้นำเข้าหลายหน่วยและบริษัทการค้า",
          "ธุรกิจขายส่งขนาดเล็กถึงกลางที่เลิกใช้สเปรดชีตและ WhatsApp แล้ว",
        ],
      },
      { type: "h2", id: "next-steps", text: "ขั้นตอนถัดไป" },
      {
        type: "ul",
        items: [
          "อ่านคู่มือ Quickstart เพื่อสร้าง tenant แรกและทำคำสั่งซื้อทดสอบ",
          "เรียกดูคู่มือพอร์ทัลสั่งซื้อเพื่อตั้งค่าแคตตาล็อกขายส่ง",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "พร้อมเริ่มต้นหรือยัง?",
        text: "สมัครทดลองใช้ฟรีและเริ่มสำรวจ Wholesalify ได้ทันที — ไม่ต้องใช้บัตรเครดิต สร้าง tenant เพิ่มสินค้าสองสามรายการ และทำคำสั่งซื้อทดสอบได้ในเวลาไม่ถึง 15 นาที",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "สมัครฟรี",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Wholesalify ทำอะไรให้คุณได้บ้าง",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "แพลตฟอร์มเชื่อมต่อกันอย่างไร",
        level: 2,
      },
      { id: "who-uses-it", text: "ใครใช้ Wholesalify", level: 2 },
      { id: "next-steps", text: "ขั้นตอนถัดไป", level: 2 },
    ],
    next: {
      href: "/docs/get-started/quickstart",
      title: "คู่มือเริ่มต้นอย่างรวดเร็ว",
    },
  },
  {
    locale: "th",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "คู่มือเริ่มต้นอย่างรวดเร็ว",
    description:
      "ตั้งค่า tenant Wholesalify ของคุณภายในเวลาไม่ถึง 15 นาที: สร้างบัญชี เพิ่มสินค้า เชิญผู้ซื้อ และทำคำสั่งซื้อขายส่งแรก",
    keywords: ["ตั้งค่าขายส่ง", "B2B quickstart", "การเปิดใช้ tenant"],
    readingTime: "อ่าน 6 นาที",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "คู่มือเริ่มต้นอย่างรวดเร็วนี้จะพาคุณไปตามเส้นทางที่เร็วที่สุดสู่การมี tenant Wholesalify ที่ใช้งานได้ เมื่อจบแล้ว คุณจะมีแคตตาล็อกที่มีสินค้าตัวอย่างสองสามรายการ และผู้ซื้อขายส่งที่สามารถสั่งซื้อจริงได้",
      },
      { type: "h2", id: "prerequisites", text: "ข้อกำหนดเบื้องต้น" },
      {
        type: "ul",
        items: [
          "บัญชี Wholesalify หากยังไม่มี ให้สมัครที่หน้าลงทะเบียน",
          "อีเมลธุรกิจ — ผู้ซื้อจะได้รับลิงก์เชิญที่นี่",
          "ใช้เวลาประมาณ 15 นาทีในการตั้งค่า",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. สร้างบัญชีและ tenant",
      },
      {
        type: "p",
        text: "เปิดหน้าลงทะเบียนของ Wholesalify กรอกอีเมลธุรกิจและตั้งรหัสผ่าน หลังจากยืนยันอีเมล คุณจะถูกพาไปยังแดชบอร์ด tenant แต่ละ tenant ถูกแยกออกจากกันโดยสมบูรณ์ — แคตตาล็อก ลูกค้า และคำสั่งซื้อของคุณจะเป็นส่วนตัวภายในพื้นที่ทำงานของคุณ",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. เพิ่มสินค้าแรกของคุณ",
      },
      {
        type: "p",
        text: "เปิดพื้นที่แคตตาล็อกและคลิก เพิ่มสินค้า Wholesalify รองรับสินค้าสามประเภทตั้งแต่ต้น:",
      },
      {
        type: "table",
        headers: ["ประเภทสินค้า", "ใช้เมื่อ…", "ตัวอย่าง"],
        rows: [
          [
            "สินค้าชั่งน้ำหนัก",
            "คุณขายตามน้ำหนัก (กก. / ปอนด์)",
            "มะเขือเทศลัง 5 กก.",
          ],
          [
            "สินค้าคัดเกรด",
            "มีหลายเกรดหรือหลายระดับคุณภาพ",
            "แอปเปิล — เกรด A / B",
          ],
          [
            "สินค้าหลายสเปก",
            "SKU ที่แตกต่างกันตามสี/ขนาด/กลิ่น",
            "สบู่ 100 กรัม — กุหลาบ / ลาเวนเดอร์ / ไม่มีกลิ่น",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. เชิญผู้ซื้อขายส่ง",
      },
      {
        type: "p",
        text: "จาก ลูกค้า คลิก เชิญผู้ซื้อ กรอกอีเมลผู้ซื้อและเลือกราคาและเงื่อนไขการชำระเงินที่พวกเขาจะเห็น ผู้ซื้อจะได้รับอีเมลพร้อมลิงก์เพื่อตั้งรหัสผ่านและเข้าสู่ระบบ",
      },
      {
        type: "callout",
        variant: "info",
        title: "เคล็ดลับ",
        text: "ใช้อีเมลส่วนตัว (เช่น Gmail) เมื่อทดสอบ — คุณจะไม่ต้องมีกล่องจดหมายแยกเพื่อยืนยันคำเชิญ",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. ทำคำสั่งซื้อแรกของคุณ",
      },
      {
        type: "p",
        text: "สลับไปยังบัญชีผู้ซื้อและเปิดพอร์ทัลสั่งซื้อ เพิ่มสินค้าสองสามรายการลงในตะกร้า เลือกวันจัดส่ง และส่งคำสั่งซื้อ คำสั่งซื้อจะปรากฏในแดชบอร์ดผู้ดูแลของคุณภายใต้ คำสั่งซื้อ ทันที",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "step-5-explore",
        text: "5. สำรวจส่วนอื่นๆ ของแพลตฟอร์ม",
      },
      {
        type: "p",
        text: "จากตรงนี้ คุณสามารถเชื่อมต่อสต็อก สร้างใบสั่งซื้อแรก และเชิญทีมปฏิบัติการ คู่มือที่เหลือในเอกสารนี้จะอธิบายแต่ละส่วนอย่างละเอียด",
      },
    ],
    toc: [
      { id: "prerequisites", text: "ข้อกำหนดเบื้องต้น", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. สร้างบัญชีและ tenant",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. เพิ่มสินค้าแรกของคุณ",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. เชิญผู้ซื้อขายส่ง",
        level: 2,
      },
      { id: "step-4-place-order", text: "4. ทำคำสั่งซื้อแรกของคุณ", level: 2 },
      {
        id: "step-5-explore",
        text: "5. สำรวจส่วนอื่นๆ ของแพลตฟอร์ม",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/overview", title: "ภาพรวม" },
    next: { href: "/docs/get-started/concepts", title: "แนวคิดหลัก" },
  },
  {
    locale: "th",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "แนวคิดหลัก",
    description:
      "ทำความเข้าใจองค์ประกอบพื้นฐานของ Wholesalify: tenant แคตตาล็อก ระดับราคา บัญชีลูกค้า และวงจรชีวิตของคำสั่งซื้อ",
    keywords: ["tenant", "แคตตาล็อก", "ระดับราคา", "แนวคิดขายส่ง"],
    readingTime: "อ่าน 7 นาที",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "ก่อนจะเจาะลึกฟีเจอร์เฉพาะ การรู้จักคำศัพท์บางอย่างที่เราใช้ทั่วทั้งผลิตภัณฑ์และเอกสารจะเป็นประโยชน์",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "Tenant คือพื้นที่ทำงานของ Wholesalify ที่แยกออกจากกัน ซึ่งเป็นเจ้าของโดยธุรกิจขายส่งรายเดียว แต่ละ tenant มีแคตตาล็อก ลูกค้า คำสั่งซื้อ สต็อก และผู้ใช้ของตัวเอง tenant จะไม่แชร์ข้อมูลกัน",
      },
      { type: "h2", id: "product-kinds", text: "ประเภทสินค้า" },
      { type: "p", text: "ทุกรายการในแคตตาล็อกของคุณเป็นหนึ่งในสามประเภท:" },
      {
        type: "ul",
        items: [
          "มาตรฐาน — ขายเป็นหน่วย เช่น ลัง พาเลท หรือ SKU เดี่ยว",
          "ชั่งน้ำหนัก — ขายตามน้ำหนักด้วยหน่วยพื้นฐาน (กก. / ปอนด์) และขนาดบรรจุภัณฑ์",
          "หลายสเปก — ขายภายใต้สินค้าหลักเดียวกันที่มีหลาย SKU (ขนาด สี กลิ่น)",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "ระดับราคาและราคาลูกค้า",
      },
      {
        type: "p",
        text: "ระดับราคาคือกลุ่มของลูกค้าที่ควรเห็นราคาเดียวกัน คุณสามารถกำหนดลูกค้าแต่ละรายให้อยู่ในหนึ่งหรือหลายระดับ (เช่น VIP ขายส่ง ขายปลีก-รีเซลเลอร์) พอร์ทัลสั่งซื้อจะแสดงราคาที่ถูกต้องสำหรับผู้ซื้อที่ล็อกอินโดยอัตโนมัติ",
      },
      { type: "h2", id: "order-lifecycle", text: "วงจรชีวิตของคำสั่งซื้อ" },
      {
        type: "p",
        text: "ทุกคำสั่งซื้อจะผ่านชุดสถานะเล็กๆ ทีมของคุณจะเลื่อนคำสั่งซื้อจากสถานะหนึ่งไปยังสถานะถัดไปเมื่องานดำเนินไป:",
      },
      {
        type: "ol",
        items: [
          "ร่าง — ผู้ซื้อยังคงแก้ไขคำสั่งซื้อในพอร์ทัล",
          "ส่งแล้ว — ผู้ซื้อส่งคำสั่งซื้อและรอการยืนยัน",
          "ยืนยันแล้ว — ทีมของคุณยอมรับ สต็อกถูกจองไว้",
          "ยกเลิก — สถานะสุดท้าย คำสั่งซื้อถูกยกเลิก",
        ],
      },
      { type: "h2", id: "inventory-units", text: "หน่วยสต็อก" },
      {
        type: "p",
        text: "สต็อกถูกติดตามในหน่วยสต็อกที่คุณเลือกต่อสินค้า — กิโลกรัมสำหรับผักผลไม้ ลังสำหรับเครื่องดื่ม ชิ้นสำหรับเครื่องมือช่าง หน่วยขายจะถูกแปลงอัตโนมัติโดยใช้กฎการแปลงที่คุณตั้งในแต่ละสินค้า",
      },
      { type: "h2", id: "users-and-roles", text: "ผู้ใช้และบทบาท" },
      { type: "p", text: "สมาชิก tenant มีบทบาทสองสามบทบาท:" },
      {
        type: "table",
        headers: ["บทบาท", "หน้าที่"],
        rows: [
          ["เจ้าของ", "จัดการการเรียกเก็บเงิน ผู้ใช้ และการตั้งค่าทั้งหมด"],
          ["ผู้ดูแล", "จัดการแคตตาล็อก คำสั่งซื้อ สต็อก และการจัดซื้อ"],
          ["ผู้ปฏิบัติงาน", "จัดการประมวลผลคำสั่งซื้อประจำวัน"],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "ประเภทสินค้า", level: 2 },
      { id: "price-tiers", text: "ระดับราคาและราคาลูกค้า", level: 2 },
      { id: "order-lifecycle", text: "วงจรชีวิตของคำสั่งซื้อ", level: 2 },
      { id: "inventory-units", text: "หน่วยสต็อก", level: 2 },
      { id: "users-and-roles", text: "ผู้ใช้และบทบาท", level: 2 },
    ],
    prev: {
      href: "/docs/get-started/quickstart",
      title: "คู่มือเริ่มต้นอย่างรวดเร็ว",
    },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "ตั้งค่าแคตตาล็อกของคุณ",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "th",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "ตั้งค่าพอร์ทัลสั่งซื้อ",
    description:
      "กำหนดค่าพอร์ทัลสั่งซื้อขายส่ง — ข้อมูลร้านค้า ห้องแสดงสินค้าส่วนตัว ห้องแสดงสินค้าสาธารณะ ข้อความชำระเงิน และการปรับแต่งต่อลูกค้าที่ควบคุมสิ่งที่ผู้ซื้อเห็นเมื่อเข้าสู่ระบบ",
    keywords: [
      "ตั้งค่าพอร์ทัลสั่งซื้อ",
      "หน้าร้านขายส่ง",
      "ตั้งค่าห้องแสดงสินค้า",
    ],
    readingTime: "อ่าน 6 นาที",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "พอร์ทัลสั่งซื้อคือหน้าร้านที่ผู้ซื้อของคุณใช้ การกำหนดค่าฝั่งร้านค้าทั้งหมดอยู่ใน การตั้งค่า — ลิ้นชักเดียวที่มี 12 ส่วนครอบคลุมหน้าร้าน สินค้า การชำระเงิน และทีม คู่มือนี้เน้นที่ส่วนที่คุณใช้บ่อยที่สุดเมื่อเปิดพอร์ทัลใหม่",
      },
      { type: "h2", id: "merchant", text: "ข้อมูลร้านค้า" },
      {
        type: "p",
        text: "การตั้งค่า → ร้านค้า เป็นที่ที่คุณตั้งชื่อธุรกิจ เบอร์โทรศัพท์ สกุลเงินเริ่มต้น ภาษา เขตเวลา และรูปแบบวันที่ที่จะปรากฏในทุกคำสั่งซื้อ ใบแจ้งหนี้ และหน้าจอสำหรับผู้ซื้อ การบันทึกการเปลี่ยนแปลงที่นี่อาจทำให้คุณออกจากระบบเพื่อให้การตั้งค่าภาษาใหม่มีผล",
      },
      {
        type: "h2",
        id: "showroom",
        text: "ห้องแสดงสินค้าส่วนตัว (พอร์ทัลสั่งซื้อ)",
      },
      {
        type: "p",
        text: "การตั้งค่า → ห้องแสดงสินค้าส่วนตัว เป็นศูนย์กลางสำหรับทุกสิ่งที่ผู้ซื้อที่ล็อกอินแล้วเห็น ลิ้นชักการตั้งค่าเปิดแท็บห้าแท็บตามลำดับ:",
      },
      {
        type: "ol",
        items: [
          "เปิดใช้งาน — สวิตช์เดียวที่เปิดหรือปิดพอร์ทัล B2B สำหรับ tenant ของคุณ เมื่อปิด ผู้ซื้อจะเห็นเฉพาะห้องแสดงสินค้าสาธารณะ",
          "บัญชีลูกค้า — รายชื่อลูกค้าทุกรายพร้อมการปรับแต่งห้องแสดงสินค้าส่วนตัวของตัวเอง ลูกค้าแต่ละรายสามารถสืบทอดค่าเริ่มต้นของร้านค้าหรือมีแบนเนอร์ ธีม และข้อจำกัดสินค้าของตัวเอง",
          "ห้องแสดงสินค้าสาธารณะ — การตั้งค่าสำหรับผู้เยี่ยมชมที่ไม่ได้ล็อกอิน: ข้อความลงทะเบียน ระดับราคาขาย และระดับราคาเปรียบเทียบ",
          "ห้องแสดงสินค้าส่วนตัว — การกำหนดค่าภาพที่ผู้ซื้อที่ล็อกอินแล้วทุกคนเห็น",
          "การตั้งค่าการชำระเงิน — อีเมลเตือนตะกร้า ข้อความชำระเงิน และข้อความหลังคำสั่งซื้อ",
        ],
      },
      { type: "h3", id: "public", text: "ห้องแสดงสินค้าสาธารณะ" },
      {
        type: "p",
        text: "สำหรับผู้เยี่ยมชมที่ยังไม่ได้ล็อกอิน เลือกระดับราคาที่พวกเขาเห็น (ระดับราคาขาย) และระดับราคาที่แสดงขีดฆ่าเป็นข้อมูลอ้างอิง (ระดับราคาเปรียบเทียบ) ช่องข้อความลงทะเบียนคือข้อความสั้นๆ ที่แสดงเหนือแคตตาล็อก — มักเป็นคำเชิญสั้นๆ ให้ลงทะเบียนและเข้าถึงราคาขายส่งของคุณ",
      },
      { type: "h3", id: "private", text: "ห้องแสดงสินค้าส่วนตัว" },
      {
        type: "p",
        text: "การตั้งค่าเหล่านี้กำหนดประสบการณ์ของผู้ซื้อที่ล็อกอินทุกราย แท็บห้องแสดงสินค้าส่วนตัวถูกจัดกลุ่มเป็นห้าบล็อก:",
      },
      {
        type: "ul",
        items: [
          "แบนเนอร์ — แบนเนอร์มือถือ (16:9) และแบนเนอร์เว็บแยกกัน แนะนำ 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB สามารถอัปโหลดหรือลบแต่ละรายการได้อย่างอิสระ",
          "การตั้งค่าการแสดงผล — สลับการซ่อนสินค้าที่หมดสต็อก และเลือกโหมดระดับสต็อก: ซ่อนสต็อก / แสดงเฉพาะ มี/หมด / แสดงตัวเลข + สถานะ",
          "การแสดงผลสินค้า — แสดงหรือซ่อนรูปภาพ หมวดหมู่ คำอธิบาย และหมายเหตุของสินค้า",
          "ข้อมูลการติดต่อ — อีเมลติดต่อ โทรศัพท์ติดต่อ และข้อความติดต่อแบบอิสระที่แสดงให้ผู้ซื้อ",
          "ข้อจำกัด — เลือกว่าลูกค้าจะเห็นสินค้าและคลังสินค้า (สถานที่) ใด รายการว่างหมายถึงไม่มีข้อจำกัด",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "ภาษีและส่วนลด",
        text: "รูปแบบภาษี (ภาษีหลัก + ภาษีรองทางเลือก) และส่วนลด (เปอร์เซ็นต์หรือจำนวนคงที่) ถูกกำหนดค่าที่นี่เช่นกัน พวกมันจะถูกนำไปคำนวณในตะกร้าและการชำระเงินโดยอัตโนมัติ",
      },
      { type: "h3", id: "checkout", text: "ข้อความการชำระเงิน" },
      {
        type: "p",
        text: "ข้อความสั้นๆ สามข้อความควบคุมประสบการณ์ผู้ซื้อรอบการชำระเงิน: เตือนตะกร้า (อีเมลเตือนอัตโนมัติ 1 ชั่วโมง), ข้อความชำระเงิน (แสดงบนหน้าจอตะกร้า/ชำระเงิน) และข้อความหลังคำสั่งซื้อ (แสดงหลังจากสั่งซื้อสำเร็จ) ทั้งสามรับข้อความธรรมดา",
      },
      { type: "h2", id: "payment", text: "วิธีการชำระเงินและภาษี" },
      {
        type: "p",
        text: "การตั้งค่า → วิธีการชำระเงิน เป็นที่ที่คุณเปิดใช้ตัวเลือกการชำระเงินที่ผู้ซื้อสามารถเลือกได้ที่จุดชำระเงิน (โอนผ่านธนาคาร เก็บเงินปลายทาง เครดิตเทอม ฯลฯ) การตั้งค่า → รหัสภาษี กำหนดรูปแบบภาษีที่ห้องแสดงสินค้าอ้างถึง — อัตราภาษีหลักและอัตราภาษีรองทางเลือกต่อภูมิภาค",
      },
      { type: "h2", id: "open-storefront", text: "เปิดหน้าร้านของคุณ" },
      {
        type: "p",
        text: "เมื่อเปิดใช้งานสวิตช์ เปิด และมีบัญชีลูกค้าอย่างน้อยหนึ่งบัญชีที่เข้าถึงได้ URL ของหน้าร้านจะปรากฏที่ด้านบนของลิ้นชักห้องแสดงสินค้าส่วนตัว ใช้ เปิดหน้าร้าน เพื่อตรวจสอบสิ่งที่ผู้ซื้อจะเห็นก่อนส่งคำเชิญ",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "ตัวอย่างห้องแสดงสินค้าสำหรับผู้ซื้อ",
      },
      {
        type: "p",
        text: "ด้านล่างคือหน้าร้านจริงที่ผู้ซื้อที่ล็อกอินเห็น — ส่วนหัวแบรนด์ แบนเนอร์ และตารางสินค้าเดียวกับที่พวกเขาใช้บนโทรศัพท์หรือเดสก์ท็อป ใช้ตัวอย่างนี้เพื่อยืนยันการมองเห็นแคตตาล็อก ลำดับการจัดเรียง และประสบการณ์เพิ่มลงตะกร้าก่อนแชร์ URL",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "ข้อมูลร้านค้า", level: 2 },
      {
        id: "showroom",
        text: "ห้องแสดงสินค้าส่วนตัว (พอร์ทัลสั่งซื้อ)",
        level: 2,
      },
      { id: "public", text: "ห้องแสดงสินค้าสาธารณะ", level: 3 },
      { id: "private", text: "ห้องแสดงสินค้าส่วนตัว", level: 3 },
      { id: "checkout", text: "ข้อความการชำระเงิน", level: 3 },
      { id: "payment", text: "วิธีการชำระเงินและภาษี", level: 2 },
      { id: "open-storefront", text: "เปิดหน้าร้านของคุณ", level: 2 },
      {
        id: "showroom-preview",
        text: "ตัวอย่างห้องแสดงสินค้าสำหรับผู้ซื้อ",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/concepts", title: "แนวคิดหลัก" },
    next: { href: "/docs/ordering-portal/catalog", title: "สร้างแคตตาล็อก" },
  },
  {
    locale: "th",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "สร้างแคตตาล็อก",
    description:
      "สร้างสินค้าชั่งน้ำหนัก คัดเกรด และหลายสเปก จัดระเบียบด้วยหมวดหมู่และแท็ก และจัดการรูปภาพและคำแปล",
    keywords: ["แคตตาล็อกสินค้า", "แคตตาล็อกขายส่ง", "สินค้าชั่งน้ำหนัก"],
    readingTime: "อ่าน 8 นาที",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "แคตตาล็อกของคุณคือรากฐานของพอร์ทัลสั่งซื้อ โมเดลสินค้าของ Wholesalify ถูกสร้างมาเพื่อรองรับความเป็นจริงสามประการของการขายส่ง: สินค้าที่ขายตามน้ำหนัก ผลิตผลที่คัดเกรด และ SKU ที่มีหลายสเปก",
      },
      { type: "h2", id: "create-product", text: "สร้างสินค้า" },
      {
        type: "p",
        text: "ไปที่ แคตตาล็อก → สินค้า → สินค้าใหม่ Wholesalify มีสินค้าสี่ประเภท: มาตรฐาน ชั่งน้ำหนัก ไม่มีสต็อก และบริการ",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "มาตรฐาน" },
      {
        type: "p",
        text: "สินค้ามาตรฐานขายเป็นหน่วยแยก (ชิ้น / ลัง / พาเลท) กำหนด SKU หน่วยสต็อก และราคาขาย หากต้องการหลายขนาดบรรจุภัณฑ์ ให้สลับไปที่แท็บ หน่วยขาย และเพิ่มแถวต่อหน่วย — แต่ละแถวมีราคา สวิตช์รวมภาษี และระดับราคา 5 ระดับของตัวเอง",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "ชั่งน้ำหนัก" },
      {
        type: "p",
        text: "สินค้าชั่งน้ำหนักไม่มี SKU คงที่ — ผู้ซื้อป้อนจำนวนทศนิยมใดๆ ก็ได้ที่จุดชำระเงิน ตั้งหน่วยพื้นฐาน (กก. / ปอนด์) และราคาขายต่อหน่วย ระบบจะปัดเศษแต่ละรายการคำสั่งซื้อตามความแม่นยำที่กำหนด",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "หลายสเปก" },
      {
        type: "p",
        text: "ในสินค้ามาตรฐาน เปิดสวิตช์ โหมดหลายสเปก เพื่อกำหนดหลายแอตทริบิวต์ (เช่น ขนาด × กลิ่น) ระบบจะสร้าง SKU หนึ่งรายการต่อชุด กำหนดตัวเลือกแอตทริบิวต์ใน แคตตาล็อก → แอตทริบิวต์ ก่อน",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "หลายเกรด" },
      {
        type: "p",
        text: "ในสินค้าชั่งน้ำหนัก ตัวแก้ไข SKU จะเพิ่มแท็บ เกรดสินค้า เพิ่มแถวเกรดได้สูงสุด 10 แถวสำหรับ SKU เดียวกัน (เช่น พรีเมียม / เกรด A / เกรด B) แต่ละแถวมีราคาขาย สวิตช์รวมภาษี และระดับราคา 5 ระดับของตัวเอง ผู้ซื้อเลือกเกรดเฉพาะที่จุดชำระเงิน ยอดรวมคำสั่งซื้อใช้ราคาของเกรดนั้น",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "หมวดหมู่และแท็ก" },
      {
        type: "p",
        text: "จัดกลุ่มสินค้าเป็นหมวดหมู่เพื่อควบคุมวิธีที่พวกมันปรากฏในแถบด้านข้างของพอร์ทัลและหมวดหมู่ที่ผู้ซื้อสามารถเรียกดู แท็กเป็นป้ายกำกับอิสระสำหรับการกรองและค้นหา",
      },
      { type: "h2", id: "images", text: "รูปภาพและคำแปล" },
      {
        type: "p",
        text: "อัปโหลดได้สูงสุดหนึ่งภาพต่อสินค้า — มันจะกลายเป็นภาพหลักของหน้าร้าน หากคุณดำเนินงานในหลายภูมิภาค ให้เพิ่มชื่อและคำอธิบายที่แปลแล้วจากหน้าแก้ไขสินค้า — พวกมันจะถูกเผยแพร่ไปยังภาษาที่เกี่ยวข้องโดยอัตโนมัติ",
      },
    ],
    toc: [
      { id: "create-product", text: "สร้างสินค้า", level: 2 },
      { id: "standard", text: "มาตรฐาน", level: 3 },
      { id: "weighed", text: "ชั่งน้ำหนัก", level: 3 },
      { id: "multi-spec", text: "หลายสเปก", level: 3 },
      { id: "multi-grade", text: "หลายเกรด", level: 3 },
      { id: "categories", text: "หมวดหมู่และแท็ก", level: 2 },
      { id: "images", text: "รูปภาพและคำแปล", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "ตั้งค่าพอร์ทัลสั่งซื้อ",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "ระดับราคาและราคาลูกค้า",
    },
  },
  {
    locale: "th",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "ระดับราคาและราคาลูกค้า",
    description:
      "กำหนดค่า 5 ระดับราคาต่อ SKU ตั้งค่าราคาคัดเกรดสำหรับสินค้าชั่งน้ำหนัก และกำหนดลูกค้าแต่ละรายให้อยู่ในระดับราคาที่กำหนดว่าพวกเขาจะเห็นระดับใดในพอร์ทัลสั่งซื้อ",
    keywords: [
      "ระดับราคา",
      "การตั้งราคาขายส่ง",
      "การคัดเกรดผลไม้",
      "ระดับราคาลูกค้า",
    ],
    readingTime: "อ่าน 6 นาที",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "การตั้งราคาของ Wholesalify สร้างขึ้นจากสองแนวคิด: ทุก SKU มี 5 ระดับราคา (ระดับราคา 1–5) และลูกค้าแต่ละรายถูกกำหนดให้อยู่ในหนึ่งใน 5 ระดับนั้นในโปรไฟล์ของพวกเขา ทั้งสองฝั่งถูกจับคู่ 1 ต่อ 1 และกำหนดค่าในสองที่: ระดับ SKU ใน สินค้า → ตัวแก้ไข SKU, ระดับลูกค้าใน ลูกค้า → แก้ไขลูกค้า",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "ระดับราคาในทุก SKU",
      },
      {
        type: "p",
        text: "ในแท็บข้อมูลพื้นฐานของ SKU ใดๆ ช่องป้อนราคาขายมีไอคอนแถบเลื่อนที่ด้านขวา คลิกเพื่อเปิดกล่องโต้ตอบ ระดับราคา ซึ่งคุณสามารถกรอกราคาแยก 5 ราคา (ระดับราคา 1 ถึง ระดับราคา 5) และสลับ รวมภาษี สำหรับแต่ละรายการอย่างอิสระ",
      },
      {
        type: "ul",
        items: [
          "5 ระดับแมปกับ 5 ระดับราคาลูกค้า (ตั้งในโปรไฟล์ลูกค้า — ดูด้านล่าง)",
          "จุดเล็กๆ บนไอคอนระบุว่ามีการตั้งราคาอย่างน้อยหนึ่งระดับ (>0) แล้ว จุดเป็นข้อมูลเท่านั้น",
          "SKU เดียวมีชุดราคา 5 ระดับเพียงชุดเดียว จำนวนเงินที่แสดงจริงขึ้นอยู่กับหน่วยพื้นฐาน / หน่วยขาย รูปแบบภาษี และสกุลเงิน",
          "ราคาที่ผู้เยี่ยมชมที่ล็อกเอาต์เห็นถูกควบคุมโดย การตั้งค่า → ห้องแสดงสินค้า → ระดับราคาขาย ราคาเปรียบเทียบที่ขีดฆ่าถูกควบคุมโดย ระดับราคาเปรียบเทียบ",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "การตั้งค่าเกรดสำหรับสินค้าชั่งน้ำหนัก",
      },
      {
        type: "p",
        text: "เมื่อโหมดสินค้าเป็น ชั่งน้ำหนัก ตัวแก้ไข SKU จะแสดงแท็บ เกรดสินค้า เพิ่มเติม ที่นั่นคุณสามารถเพิ่มแถวเกรดได้สูงสุด 10 แถวสำหรับ SKU เดียวกัน (เช่น พรีเมียม / เกรด A / เกรด B) แต่ละแถวมีชื่อเกรด ราคาขาย (คำต่อท้ายคงที่ /{หน่วยพื้นฐาน} เช่น /กก.) สวิตช์รวมภาษี และไอคอนแถบเลื่อนเดียวกันบนช่องราคา — คลิกจะเปิดกล่องโต้ตอบ ระดับราคา 5 ระดับ เดียวกัน เพื่อให้เกรดเฉพาะนั้นสามารถมีราคา 5 ระดับของตัวเอง",
      },
      {
        type: "ul",
        items: [
          "แถวเกรดได้สูงสุด 10 แถว การลบแถวสุดท้ายจะเหลือแถวว่างไว้แทนที่จะลบส่วนทั้งหมด",
          "คำต่อท้ายราคาคือ /{หน่วยพื้นฐาน} เสมอ (เช่น /กก.) เพื่อให้ตรงกับธรรมเนียมการขายตามน้ำหนัก",
          "ผู้ซื้อเลือกเกรดเฉพาะเมื่อสั่งซื้อ ยอดรวมคำสั่งซื้อจะคำนวณโดยใช้ราคาของเกรดนั้น",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "ระดับราคาสำหรับสินค้าหลายหน่วยขาย",
      },
      {
        type: "p",
        text: "สินค้าที่ไม่ได้ชั่งน้ำหนักสามารถมีหลายหน่วยขาย (เช่น ลัง / ชิ้น / ชุด) ที่กำหนดค่าในแท็บ หน่วยขาย แต่ละแถวหน่วยขายมีช่องราคาขายของตัวเองพร้อมไอคอนแถบเลื่อน เปิดกล่องโต้ตอบ ระดับราคา 5 ระดับ เดียวกัน เพื่อให้หน่วยสามารถมีราคา 5 ระดับของตัวเองพร้อมสวิตช์ภาษี",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "ระดับราคาลูกค้า",
      },
      {
        type: "p",
        text: "เปิดลูกค้ารายใดก็ได้ใน การจัดการลูกค้า — พื้นที่ข้อมูลพื้นฐานมีดรอปดาวน์ ระดับราคา ที่มีห้าตัวเลือก (ระดับราคา 1 ถึง ระดับราคา 5) ระดับที่คุณกำหนดที่นี่จะกำหนดว่าราคาใดใน 5 ราคาของ SKU ที่ลูกค้าจะเห็นเมื่อเข้าสู่ระบบพอร์ทัลสั่งซื้อ ลูกค้าที่ถูกกำหนดให้เป็น ระดับราคา 3 จะเห็น ระดับราคา 3 ทั่วทั้งแคตตาล็อก",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "วิธีที่สองฝั่งเชื่อมต่อกัน",
        text: "ฝั่ง SKU (5 ราคาระดับ) และฝั่งลูกค้า (ระดับราคา 1–5) คือ 1 ต่อ 1: ตัวเลขที่เลือกในโปรไฟล์ลูกค้าจะกำหนดว่าราคาระดับใดของ SKU ที่พอร์ทัลแสดงสำหรับทุกสินค้า หากระดับนั้นเว้นว่างไว้ ระบบจะใช้ราคาขายพื้นฐานของ SKU",
      },
    ],
    toc: [
      { id: "sku-price-levels", text: "ระดับราคาในทุก SKU", level: 2 },
      {
        id: "weighed-grades",
        text: "การตั้งค่าเกรดสำหรับสินค้าชั่งน้ำหนัก",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "ระดับราคาสำหรับสินค้าหลายหน่วยขาย",
        level: 2,
      },
      { id: "customer-price-level", text: "ระดับราคาลูกค้า", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "สร้างแคตตาล็อก" },
    next: { href: "/docs/orders/dashboard", title: "แดชบอร์ดคำสั่งซื้อ" },
  },

  // ----- Orders -----
  {
    locale: "th",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "แดชบอร์ดคำสั่งซื้อ",
    description:
      "ทำความเข้าใจรายการใบสั่งขาย — สถานะคำสั่งซื้อจริงห้าสถานะ ตัวกรองที่มี คอลัมน์ในตาราง และการดำเนินการที่มีในหน้ารายละเอียดคำสั่งซื้อ",
    keywords: [
      "แดชบอร์ดคำสั่งซื้อ",
      "คำสั่งซื้อขายส่ง",
      "การจัดการคำสั่งซื้อ B2B",
    ],
    readingTime: "อ่าน 4 นาที",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "รายการใบสั่งขายคือที่ที่ทีมปฏิบัติการของคุณตรวจสอบและดำเนินการกับทุกคำสั่งซื้อ หน้านี้อธิบายการควบคุมทุกอย่างในรายการ คอลัมน์ที่คุณเห็น และการดำเนินการที่มีในหน้ารายละเอียดของแต่ละคำสั่งซื้อ",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "ตัวกรอง" },
      {
        type: "ul",
        items: [
          "ค้นหาคำสำคัญ — หมายเลขคำสั่งซื้อ ชื่อลูกค้า หมายเลข PO ลูกค้า หรือข้อความอื่นๆ บนคำสั่งซื้อ",
          "สถานะ — ดรอปดาวน์เลือกเดียว: ทั้งหมด ร่าง ยืนยันแล้ว ยกเลิก เปิดใหม่ ยังไม่ยืนยัน",
          "ช่วงวันที่ — ค่าตั้งล่วงหน้า วันนี้ / 7 วันที่ผ่านมา / 30 วันที่ผ่านมา หรือเลือกช่วงที่กำหนดเองบนปฏิทิน",
          "สถานที่ — ตัวกรองคลังสินค้าแบบเลือกหลายรายการ ว่างหมายถึงคลังสินค้าทั้งหมด",
          "สถานะการชำระเงิน — ตัวกรองแบบเลือกหลายรายการ: ยังไม่ชำระ ชำระบางส่วน ชำระแล้ว ชำระเกิน",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "รีเซ็ตตัวกรอง",
        text: "ใช้ไอคอนรีเซ็ตที่ด้านขวาของแถวตัวกรองเพื่อล้างตัวกรองทั้งหมดกลับเป็นค่าเริ่มต้น (30 วันที่ผ่านมา สถานะทั้งหมด คลังสินค้าทั้งหมด สถานะการชำระเงินทั้งหมด)",
      },
      { type: "h2", id: "table-columns", text: "คอลัมน์ของตาราง" },
      {
        type: "p",
        text: "แต่ละแถวของรายการแสดงสิบสองคอลัมน์ต่อไปนี้:",
      },
      {
        type: "ol",
        items: [
          "# — ดัชนีแถว (หน้า × ขนาด + n)",
          "หมายเลขคำสั่งซื้อ — ลิงก์ที่คลิกได้ซึ่งเปิดหน้ารายละเอียดคำสั่งซื้อในแท็บใหม่",
          "ลูกค้า — ชื่อผู้ซื้อ",
          "วันที่ทำธุรกรรม — วันที่บันทึกในคำสั่งซื้อ",
          "จำนวนเงินที่ต้องชำระ — จัดรูปแบบในสกุลเงินเริ่มต้นของร้านค้า",
          "สถานที่ — คลังสินค้าต้นทาง",
          "สถานะการชำระเงิน — อนุมานจากยอดคงเหลือเทียบกับจำนวนเงินที่ต้องชำระ",
          "สถานะ — สถานะปัจจุบันของคำสั่งซื้อ (ดู สถานะคำสั่งซื้อ ด้านล่าง)",
          "วันที่สร้าง / ผู้สร้าง / วันที่อัปเดต / ผู้อัปเดต — ฟิลด์การตรวจสอบ",
        ],
      },
      { type: "h2", id: "statuses", text: "สถานะคำสั่งซื้อ" },
      {
        type: "p",
        text: "ทุกคำสั่งซื้ออยู่ในหนึ่งในห้าสถานะต่อไปนี้เสมอ ป้ายสถานะเป็นป้ายแบบพาสซีฟ — ไม่สามารถคลิกเพื่อเลื่อนคำสั่งซื้อได้ หากต้องการเปลี่ยนสถานะ ให้เปิดหน้ารายละเอียดคำสั่งซื้อและใช้ปุ่มดำเนินการที่นั่น",
      },
      {
        type: "table",
        headers: ["สถานะ", "รหัส", "ความหมาย"],
        rows: [
          ["ร่าง", "0", "บันทึกเป็นร่าง ยังไม่ได้ส่งให้ลูกค้า"],
          ["ยืนยันแล้ว", "1", "ส่งให้ลูกค้าแล้ว / พร้อมดำเนินการ"],
          [
            "ยกเลิก",
            "2",
            "ถูกยกเลิก คำสั่งซื้อถูกเก็บไว้เพื่อการตรวจสอบแต่ไม่สามารถดำเนินการต่อได้",
          ],
          [
            "เปิดใหม่",
            "3",
            "คำสั่งซื้อที่ถูกยกเลิกก่อนหน้านี้ถูกเปิดใหม่เพื่อแก้ไข",
          ],
          [
            "ยังไม่ยืนยัน",
            "4",
            "เปลี่ยนกลับจาก ยืนยันแล้ว ไปเป็นสถานะคล้ายร่าง",
          ],
        ],
      },
      { type: "h2", id: "actions", text: "การดำเนินการกับคำสั่งซื้อ" },
      {
        type: "p",
        text: "คลิกหมายเลขคำสั่งซื้อเพื่อเปิดหน้ารายละเอียด ส่วนหัวของหน้ารายละเอียดแสดงปุ่มดำเนินการที่เหมาะสมกับสถานะปัจจุบัน ทุกการดำเนินการถูกควบคุมโดยรหัสสิทธิ์ — ปุ่มที่คุณไม่มีสิทธิ์เข้าถึงจะถูกซ่อนไว้ทั้งหมด",
      },
      {
        type: "ul",
        items: [
          "บันทึก — บันทึกคำสั่งซื้อขณะอยู่ในสถานะ ร่าง เปิดใหม่ หรือ ยังไม่ยืนยัน",
          "ยืนยัน — เลื่อนสถานะแบบร่าง (ร่าง / เปิดใหม่ / ยังไม่ยืนยัน) ไปเป็น ยืนยันแล้ว",
          "ยกเลิกการยืนยัน — เปลี่ยนคำสั่งซื้อที่ ยืนยันแล้ว กลับเป็น ยังไม่ยืนยัน (จากนั้นสามารถแก้ไขและยืนยันใหม่ได้)",
          "ยกเลิก — ยกเลิกคำสั่งซื้อที่ ยืนยันแล้ว ไปเป็น ยกเลิก",
          "เปิดใหม่ — นำคำสั่งซื้อที่ ยกเลิก กลับมาเป็น เปิดใหม่ เพื่อแก้ไข",
          "ลบ — ลบคำสั่งซื้ออย่างถาวร มีให้ใช้ในสถานะ ร่าง ยังไม่ยืนยัน และ เปิดใหม่ เท่านั้น",
          "คืนสินค้า / ยกเลิกการคืน — ในรายการสินค้าของคำสั่งซื้อที่ ยืนยันแล้ว ดำเนินการคืนสินค้าบางส่วนจากลูกค้าหรือยกเลิกการคืน",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "การเปลี่ยนสถานะและผลกระทบต่อสต็อก",
      },
      {
        type: "p",
        text: "การเปลี่ยนแปลงสต็อกทุกครั้งถูกบันทึกเป็นรายการเดียวในบัญชีสต็อกและสามารถติดตามย้อนกลับไปยังคำสั่งซื้อต้นทางได้ ตารางด้านล่างสรุปผลกระทบของสต็อกจากการดำเนินการแต่ละอย่าง:",
      },
      {
        type: "table",
        headers: [
          "การดำเนินการ",
          "การเปลี่ยนสถานะ",
          "ผลกระทบต่อสต็อก",
          "หมายเหตุ",
        ],
        rows: [
          [
            "ยืนยัน",
            "ร่าง / เปิดใหม่ / ยังไม่ยืนยัน → ยืนยันแล้ว",
            "หัก ( − )",
            "เบิกจ่ายจากคลังสินค้าของคำสั่งซื้อสำหรับทุกรายการ ต้นทุนถูกบันทึกลงในคำสั่งซื้อเมื่อยืนยัน",
          ],
          [
            "ยกเลิกการยืนยัน",
            "ยืนยันแล้ว → ยังไม่ยืนยัน",
            "คืน ( + )",
            "ย้อนกลับการหักจากการยืนยันครั้งล่าสุด ฟิลด์ต้นทุนของคำสั่งซื้อถูกล้าง",
          ],
          [
            "ยกเลิก",
            "ยืนยันแล้ว → ยกเลิก",
            "คืน ( + )",
            "ย้อนกลับการหักจากการยืนยันครั้งล่าสุด คำสั่งซื้อถูกเก็บไว้เพื่อการตรวจสอบและไม่สามารถเลื่อนต่อได้",
          ],
          [
            "เปิดใหม่",
            "ยกเลิก → เปิดใหม่",
            "ไม่เปลี่ยนแปลง",
            "สต็อกถูกคืนแล้วเมื่อคำสั่งซื้อถูกยกเลิก การเปิดใหม่เปลี่ยนเฉพาะสถานะ การยืนยันครั้งต่อไปจะหักอีกครั้ง",
          ],
          [
            "คืนสินค้า",
            "ยืนยันแล้ว (ต่อรายการ)",
            "คืนบางส่วน ( + )",
            "เพิ่มรายการจำนวนลบสำหรับรายการในคำสั่งซื้อที่ ยืนยันแล้ว และคืนจำนวนนั้นกลับเข้าสต็อก",
          ],
          [
            "ยกเลิกการคืน",
            "ยืนยันแล้ว (ต่อรายการ)",
            "หักอีกครั้ง ( − )",
            "ลบรายการคืนที่บันทึกไว้ก่อนหน้าและหักจำนวนเดิมจากสต็อกอีกครั้ง",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "ทั้ง ยกเลิก และ ยกเลิกการยืนยัน คืนสต็อก",
        text: "การดำเนินการทั้งสองมีผลกระทบต่อสต็อกเหมือนกัน: ทั้งคู่ย้อนกลับการหักจากการยืนยันครั้งล่าสุด ความแตกต่างคือสถานะสุดท้าย — ยกเลิก ย้ายคำสั่งซื้อไปเป็น ยกเลิก (สถานะสุดท้าย ไม่สามารถเลื่อนต่อ); ยกเลิกการยืนยัน ย้ายไปเป็น ยังไม่ยืนยัน (ยังแก้ไขได้ การยืนยันใหม่จะหักสต็อกอีกครั้ง)",
      },
      {
        type: "callout",
        variant: "warning",
        title: "ไม่มีการดำเนินการแบบกลุ่ม",
        text: "รายการใบสั่งขายไม่รองรับการเลือกแถวหรือการดำเนินการแบบกลุ่ม ต้องเปิดแต่ละคำสั่งซื้อทีละรายการเพื่อดำเนินการ",
      },
    ],
    toc: [
      { id: "filters", text: "ตัวกรอง", level: 2 },
      { id: "table-columns", text: "คอลัมน์ของตาราง", level: 2 },
      { id: "statuses", text: "สถานะคำสั่งซื้อ", level: 2 },
      { id: "actions", text: "การดำเนินการกับคำสั่งซื้อ", level: 2 },
      {
        id: "inventory-impact",
        text: "การเปลี่ยนสถานะและผลกระทบต่อสต็อก",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "ระดับราคาและราคาลูกค้า",
    },
    next: { href: "/docs/inventory/stock", title: "ระดับสต็อก" },
  },

  // ----- Inventory -----
  {
    locale: "th",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "ระดับสต็อก",
    description:
      "ติดตามสต็อกตามสถานที่ คลังสินค้า และตัวแปรสินค้า กำหนดค่าหน่วยสต็อกพื้นฐานและกฎการแปลง",
    keywords: ["การจัดการสต็อก", "สต็อกขายส่ง", "หลายคลังสินค้า"],
    readingTime: "อ่าน 5 นาที",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "โมดูลสต็อกของ Wholesalify รักษาจำนวนแบบเรียลไทม์สำหรับตัวแปรสินค้าทุกตัวต่อคลังสินค้า สต็อกจะถูกปรับอัตโนมัติเมื่อคำสั่งซื้อได้รับการยืนยันและเมื่อการรับใบสั่งซื้อถูกบันทึก",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "คลังสินค้า" },
      {
        type: "p",
        text: "เพิ่มคลังสินค้าได้มากเท่าที่คุณดำเนินงาน สินค้าแต่ละรายการมีจำนวนสต็อกแยกต่อคลังสินค้า ทำให้คุณสามารถจัดส่งคำสั่งซื้อจากสถานที่ที่ใกล้กับผู้ซื้อที่สุด",
      },
      { type: "h2", id: "stock-units", text: "หน่วยสต็อกและการแปลง" },
      {
        type: "p",
        text: 'สำหรับสินค้าผักผลไม้สด ให้ตั้งหน่วยสต็อกเป็นกิโลกรัม เพิ่มขนาดบรรจุภัณฑ์ เช่น "ลัง 5 กก." หรือ "ตะกร้า 10 กก." พร้อมการแปลงอัตโนมัติ เพื่อให้ผู้ซื้อสามารถสั่งซื้อในหน่วยเหล่านั้นโดยไม่ต้องให้คุณแปลงสต็อกด้วยตนเอง',
      },
      { type: "h2", id: "stock-adjustments", text: "การปรับสต็อกด้วยตนเอง" },
      {
        type: "p",
        text: "สูญเสียลังไปสองสามลังจากการเน่าเสีย? เปิดสินค้า เลือก ปรับสต็อก และป้อนจำนวนบวกหรือลบพร้อมเหตุผล การปรับถูกบันทึกในบันทึกการตรวจสอบพร้อมผู้ใช้ วันที่ และรูปภาพทางเลือก",
      },
    ],
    toc: [
      { id: "warehouses", text: "คลังสินค้า", level: 2 },
      { id: "stock-units", text: "หน่วยสต็อกและการแปลง", level: 2 },
      {
        id: "stock-adjustments",
        text: "การปรับสต็อกด้วยตนเอง",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "แดชบอร์ดคำสั่งซื้อ" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "สร้างใบสั่งซื้อ",
    },
  },

  // ----- Purchasing -----
  {
    locale: "th",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "สร้างใบสั่งซื้อ",
    description:
      "สร้างใบสั่งซื้อกับซัพพลายเออร์ของคุณ ติดตามการจัดส่งที่กำลังมา และบันทึกการรับสินค้าที่อัปเดตสต็อกโดยอัตโนมัติ",
    keywords: ["ใบสั่งซื้อ", "การจัดการซัพพลายเออร์", "การจัดซื้อขายส่ง"],
    readingTime: "อ่าน 6 นาที",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "ใบสั่งซื้อบอกซัพพลายเออร์ของคุณว่าต้องจัดส่งอะไร เมื่อไร และในราคาเท่าไหร่ เมื่อสินค้ามาถึง การบันทึกการรับจะอัปเดตสต็อกและบันทึกซัพพลายเออร์ในขั้นตอนเดียว",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "ขั้นตอนที่ 1 — เพิ่มซัพพลายเออร์",
      },
      {
        type: "p",
        text: "เปิด การจัดซื้อ → ซัพพลายเออร์ → ซัพพลายเออร์ใหม่ กรอกรายละเอียดการติดต่อและระยะเวลาจัดส่งโดยทั่วไป",
      },
      { type: "h2", id: "build-po", text: "ขั้นตอนที่ 2 — สร้างใบสั่งซื้อ" },
      {
        type: "p",
        text: "คลิก ใบสั่งซื้อใหม่ เลือกซัพพลายเออร์และเพิ่มรายการ ราคาเริ่มต้นเป็นราคาล่าสุดของซัพพลายเออร์ แต่คุณสามารถแทนที่แต่ละรายการได้",
      },
      { type: "h2", id: "receive", text: "ขั้นตอนที่ 3 — รับการจัดส่ง" },
      {
        type: "p",
        text: "เมื่อสินค้ามาถึง คลิก รับ บนใบสั่งซื้อ ป้อนจำนวนที่จัดส่งจริง — รองรับการรับบางส่วน — และยืนยัน ระดับสต็อกจะอัปเดตโดยอัตโนมัติและใบแจ้งหนี้ซัพพลายเออร์จะถูกสร้างขึ้น",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "การเปลี่ยนสถานะและผลกระทบต่อสต็อก",
      },
      {
        type: "p",
        text: "ใบสั่งซื้อและใบสั่งขายใช้บัญชีสต็อกชุดเดียวกัน แต่ไหลในทิศทางตรงข้าม — การยืนยันใบสั่งซื้อเป็นการเพิ่มสต็อก (+) ในขณะที่การยืนยันใบสั่งขายเป็นการลบสต็อก (−) ตารางด้านล่างสรุปการดำเนินการหลักสี่อย่างและผลกระทบต่อสต็อก:",
      },
      {
        type: "table",
        headers: [
          "การดำเนินการ",
          "การเปลี่ยนสถานะ",
          "ผลกระทบต่อสต็อก",
          "หมายเหตุ",
        ],
        rows: [
          [
            "ยืนยัน PO",
            "ร่าง / เปิดใหม่ / ยังไม่ยืนยัน → ยืนยันแล้ว",
            "สต็อกเข้า ( + )",
            "สินค้าถูกรับเข้าคลังปลายทางตามรายการ ต้นทุนการซื้อถูกบันทึกบนใบสั่งซื้อ",
          ],
          [
            "ยกเลิกการยืนยัน",
            "ยืนยันแล้ว → ยังไม่ยืนยัน",
            "สต็อกออก ( − )",
            "ย้อนกลับสต็อกที่เพิ่มเมื่อยืนยัน PO ต้นทุนการซื้อถูกล้าง",
          ],
          [
            "ยกเลิก PO",
            "ยืนยันแล้ว → ยกเลิก",
            "สต็อกออก ( − )",
            "ย้อนกลับสต็อกที่เพิ่มเมื่อยืนยัน PO ใบสั่งซื้อถูกเก็บไว้เพื่อการตรวจสอบเท่านั้น",
          ],
          [
            "เปิดใหม่",
            "ยกเลิก → เปิดใหม่",
            "ไม่มีการเปลี่ยนแปลงสต็อก",
            "สต็อกถูกย้อนกลับแล้วโดย ยกเลิก การเปิดใหม่เปลี่ยนเฉพาะสถานะ สามารถยืนยันใหม่เพื่อเพิ่มสต็อกอีกครั้ง",
          ],
          [
            "คืนสินค้า",
            "ยืนยันแล้ว (ต่อรายการ)",
            "สต็อกออกบางส่วน ( − )",
            "คืนสินค้าบางส่วนของรายการที่ยืนยันแล้วให้ซัพพลายเออร์ — เพิ่มรายการจำนวนลบและลดสต็อกตามนั้น",
          ],
          [
            "ยกเลิกการคืน",
            "ยืนยันแล้ว (ต่อรายการ)",
            "เพิ่มสต็อกอีกครั้ง ( + )",
            "ย้อนกลับการคืน — ลบรายการลบและเพิ่มสต็อกอีกครั้งที่จำนวนเดิม",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "การยืนยัน PO เป็นการเพิ่มสต็อก — ไม่ใช่ลบ",
        text: "การยืนยันใบสั่งซื้อหมายความว่าสินค้ามาถึงจริงและถูกเก็บเข้าคลังแล้ว ดังนั้นสต็อกจึงเพิ่ม (+) ตรงข้ามกับการยืนยันใบสั่งขายซึ่งลด (−) อย่าสับสนระหว่างสองทิศทาง: ยกเลิกการยืนยันไม่ได้คืนสินค้าให้ซัพพลายเออร์ — เพียงย้อนกลับสต็อกที่เพิ่มเมื่อคุณยืนยัน",
      },
      {
        type: "callout",
        variant: "info",
        title: "ทั้ง ยกเลิก และ ยกเลิกการยืนยัน ย้อนกลับสต็อก",
        text: "การดำเนินการทั้งสองมีผลกระทบต่อสต็อกเหมือนกัน — ทั้งคู่ย้อนกลับสต็อกที่เพิ่มโดยการยืนยันก่อนหน้า ความแตกต่างคือสถานะสุดท้าย: ยกเลิก ย้ายคำสั่งซื้อไปเป็น ยกเลิก (สถานะสุดท้าย) ในขณะที่ ยกเลิกการยืนยัน ย้ายไปเป็น ยังไม่ยืนยัน (ยังแก้ไขได้ การยืนยันครั้งต่อไปจะเพิ่มสต็อกอีกครั้ง)",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "ขั้นตอนที่ 1 — เพิ่มซัพพลายเออร์",
        level: 2,
      },
      { id: "build-po", text: "ขั้นตอนที่ 2 — สร้างใบสั่งซื้อ", level: 2 },
      { id: "receive", text: "ขั้นตอนที่ 3 — รับการจัดส่ง", level: 2 },
      {
        id: "inventory-impact",
        text: "การเปลี่ยนสถานะและผลกระทบต่อสต็อก",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "ระดับสต็อก" },
  },

  // ===================================================================
  // INDONESIAN (id)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "id",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Ikhtisar Wholesalify",
    description:
      "Ikhtisar singkat Wholesalify — platform pemesanan grosir B2B untuk produk segar, FMCG, dan bisnis grosir multi-unit.",
    keywords: ["platform grosir", "pemesanan B2B", "ikhtisar SaaS grosir"],
    readingTime: "4 menit baca",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify adalah platform pemesanan grosir B2B modern yang dibangun untuk grosir, distributor, dan perusahaan perdagangan. Platform ini menggabungkan portal pemesanan yang menghadap pelanggan dengan dasbor admin yang kuat sehingga tim Anda dapat mengelola pesanan, inventaris, pembelian, dan akun pelanggan di satu tempat.",
      },
      {
        type: "p",
        text: "Baik Anda menjual produk segar berdasarkan berat, buah berkualitas berdasarkan peti, atau produk multi-spesifikasi berdasarkan SKU, Wholesalify memberi Anda model katalog dan harga yang fleksibel yang sesuai dengan cara bisnis Anda sebenarnya berjalan.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Apa yang dapat Anda lakukan dengan Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Jual produk berdasarkan berat, berdasarkan peti/palet, atau berdasarkan unit — dari katalog yang sama.",
          "Tingkatkan harga buah dan produksi berdasarkan grade, ukuran, atau volume.",
          "Kelola produk tertimbang, bergradasi, dan multi-spesifikasi secara berdampingan.",
          "Beri setiap pembeli grosir portal pemesanan mandiri dengan riwayat pesanan.",
          "Lacak pesanan, pembayaran, dan pemenuhan dari dasbor pesanan terpadu.",
          "Jalankan laporan stok dan replenishment otomatis.",
          "Kelola pemasok, purchase order, dan stok masuk.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Bagaimana platform ini cocok bersama",
      },
      {
        type: "p",
        text: "Wholesalify terdiri dari tiga lapisan yang berbagi satu sumber kebenaran:",
      },
      {
        type: "ul",
        items: [
          "Portal pemesanan — etalase yang menghadap pelanggan untuk pembeli grosir.",
          "Dasbor admin — back-office yang digunakan oleh tim operasi Anda.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Siapa yang menggunakan Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Grosir produk segar (buah, sayuran, seafood).",
          "Distributor makanan dan FMCG.",
          "Grosir bahan bangunan dan perangkat keras.",
          "Importir multi-unit dan perusahaan perdagangan.",
          "Bisnis grosir kecil dan menengah yang sudah melampaui spreadsheet dan WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Langkah selanjutnya" },
      {
        type: "ul",
        items: [
          "Baca Quickstart untuk membuat tenant pertama dan menempatkan pesanan percobaan.",
          "Telusuri panduan Portal pemesanan untuk menyiapkan katalog grosir Anda.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Siap memulai?",
        text: "Daftar untuk uji coba gratis dan mulai menjelajahi Wholesalify sekarang juga — tanpa kartu kredit. Buat tenant, tambahkan beberapa produk, dan tempatkan pesanan percobaan dalam waktu kurang dari 15 menit.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Daftar gratis",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Apa yang dapat Anda lakukan dengan Wholesalify",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Bagaimana platform ini cocok bersama",
        level: 2,
      },
      {
        id: "who-uses-it",
        text: "Siapa yang menggunakan Wholesalify",
        level: 2,
      },
      { id: "next-steps", text: "Langkah selanjutnya", level: 2 },
    ],
    next: {
      href: "/docs/get-started/quickstart",
      title: "Mulai cepat",
    },
  },
  {
    locale: "id",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Mulai cepat",
    description:
      "Siapkan tenant Wholesalify Anda dalam waktu kurang dari 15 menit: buat akun, tambahkan produk, undang pembeli, dan tempatkan pesanan grosir pertama Anda.",
    keywords: ["penyiapan grosir", "mulai cepat B2B", "onboarding tenant"],
    readingTime: "6 menit baca",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Mulai cepat ini memandu Anda melalui jalur tercepat ke tenant Wholesalify yang berfungsi. Pada akhirnya Anda akan memiliki katalog dengan beberapa produk sampel dan pembeli grosir yang dapat menempatkan pesanan nyata.",
      },
      { type: "h2", id: "prerequisites", text: "Prasyarat" },
      {
        type: "ul",
        items: [
          "Akun Wholesalify. Daftar di halaman pendaftaran jika Anda belum memilikinya.",
          "Email bisnis — pembeli akan menerima tautan undangan di sini.",
          "Sekitar 15 menit untuk penyiapan.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Buat akun dan tenant Anda",
      },
      {
        type: "p",
        text: "Buka halaman pendaftaran Wholesalify, masukkan email bisnis Anda, dan buat kata sandi. Setelah memverifikasi email, Anda akan dibawa ke dasbor tenant. Setiap tenant sepenuhnya terisolasi — katalog, pelanggan, dan pesanan Anda tetap pribadi di workspace Anda.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Tambahkan produk pertama Anda",
      },
      {
        type: "p",
        text: "Buka workspace katalog dan klik Tambah produk. Wholesalify mendukung tiga jenis produk sejak hari pertama:",
      },
      {
        type: "table",
        headers: ["Jenis produk", "Gunakan ketika…", "Contoh"],
        rows: [
          [
            "Produk tertimbang",
            "Anda menjual berdasarkan berat (kg / lb).",
            "Tomat curah kotak 5 kg",
          ],
          [
            "Produk bergradasi",
            "Anda memiliki beberapa grade atau tingkatan kualitas.",
            "Apel — Grade A / B",
          ],
          [
            "Produk multi-spesifikasi",
            "Anda menjual SKU yang bervariasi berdasarkan warna/ukuran/rasa.",
            "Sabun batangan 100 g — mawar / lavender / tanpa aroma",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Undang pembeli grosir",
      },
      {
        type: "p",
        text: "Dari Pelanggan klik Undang pembeli. Masukkan email pembeli dan pilih daftar harga serta syarat pembayaran yang harus mereka lihat. Pembeli menerima email dengan tautan untuk mengatur kata sandi dan masuk.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Tips",
        text: "Gunakan email pribadi (seperti Gmail) saat menguji — dengan begitu Anda tidak memerlukan kotak masuk terpisah untuk memverifikasi undangan.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Tempatkan pesanan pertama Anda",
      },
      {
        type: "p",
        text: "Beralih ke akun pembeli dan buka portal pemesanan. Tambahkan beberapa produk ke keranjang, pilih tanggal pengiriman, dan kirim. Pesanan segera muncul di dasbor admin Anda di bawah Pesanan.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "step-5-explore",
        text: "5. Jelajahi sisa platform",
      },
      {
        type: "p",
        text: "Dari sini Anda dapat menghubungkan inventaris, membuat purchase order pertama, dan mengundang tim operasi Anda. Panduan yang tersisa dalam dokumentasi ini membahas setiap area secara mendalam.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Prasyarat", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Buat akun dan tenant Anda",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Tambahkan produk pertama Anda",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Undang pembeli grosir",
        level: 2,
      },
      {
        id: "step-4-place-order",
        text: "4. Tempatkan pesanan pertama Anda",
        level: 2,
      },
      {
        id: "step-5-explore",
        text: "5. Jelajahi sisa platform",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/overview", title: "Ikhtisar" },
    next: { href: "/docs/get-started/concepts", title: "Konsep inti" },
  },
  {
    locale: "id",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Konsep inti",
    description:
      "Pahami blok bangunan Wholesalify: tenant, katalog, tingkat harga, akun pelanggan, dan siklus hidup pemesanan.",
    keywords: ["tenant", "katalog", "tingkat harga", "konsep grosir"],
    readingTime: "7 menit baca",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Sebelum menggali fitur tertentu, ada baiknya mengetahui beberapa istilah yang kami gunakan di seluruh produk dan dokumentasi.",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "Tenant adalah workspace Wholesalify yang terisolasi, dimiliki oleh satu bisnis grosir. Setiap tenant memiliki katalog, pelanggan, pesanan, inventaris, dan penggunanya sendiri. Tenant tidak pernah berbagi data satu sama lain.",
      },
      { type: "h2", id: "product-kinds", text: "Jenis produk" },
      {
        type: "p",
        text: "Setiap item dalam katalog Anda adalah salah satu dari tiga jenis:",
      },
      {
        type: "ul",
        items: [
          "Standar — jual unit seperti peti, palet, atau SKU tunggal.",
          "Tertimbang — jual berdasarkan berat dengan unit dasar (kg / lb) dan ukuran kemasan.",
          "Multi-spesifikasi — jual di bawah satu produk induk dengan beberapa SKU (ukuran, warna, rasa).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Tingkat harga dan harga pelanggan",
      },
      {
        type: "p",
        text: "Tingkat harga adalah sekelompok pelanggan yang seharusnya melihat harga yang sama. Anda dapat menetapkan setiap pelanggan ke satu atau beberapa tingkat (misalnya VIP, Grosir, Pengecer-reseller). Portal pemesanan secara otomatis menampilkan harga yang benar untuk pembeli yang masuk.",
      },
      { type: "h2", id: "order-lifecycle", text: "Siklus hidup pesanan" },
      {
        type: "p",
        text: "Setiap pesanan melewati sekumpulan status kecil. Tim Anda memajukan pesanan dari satu status ke status berikutnya saat pekerjaan berlanjut:",
      },
      {
        type: "ol",
        items: [
          "Draf — pembeli masih mengedit pesanan di portal mereka.",
          "Dikirim — ditempatkan oleh pembeli dan menunggu konfirmasi.",
          "Dikonfirmasi — diterima oleh tim Anda; inventaris dicadangkan.",
          "Dibatalkan — terminal; pesanan dibatalkan.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Unit inventaris" },
      {
        type: "p",
        text: "Stok dilacak dalam unit inventaris yang Anda pilih per produk — kilogram untuk produksi, peti untuk minuman, buah untuk perangkat keras. Unit jual dikonversi secara otomatis menggunakan aturan konversi yang Anda tetapkan pada setiap produk.",
      },
      { type: "h2", id: "users-and-roles", text: "Pengguna dan peran" },
      { type: "p", text: "Anggota tenant termasuk dalam beberapa peran:" },
      {
        type: "table",
        headers: ["Peran", "Apa yang mereka lakukan"],
        rows: [
          ["Pemilik", "Mengelola penagihan, pengguna, dan semua pengaturan."],
          ["Admin", "Mengelola katalog, pesanan, inventaris, dan pembelian."],
          ["Operator", "Menangani pemrosesan pesanan harian."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "Jenis produk", level: 2 },
      {
        id: "price-tiers",
        text: "Tingkat harga dan harga pelanggan",
        level: 2,
      },
      { id: "order-lifecycle", text: "Siklus hidup pesanan", level: 2 },
      { id: "inventory-units", text: "Unit inventaris", level: 2 },
      { id: "users-and-roles", text: "Pengguna dan peran", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Mulai cepat" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Siapkan katalog Anda",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "id",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Siapkan portal pemesanan Anda",
    description:
      "Konfigurasikan portal pemesanan grosir — info merchant, showroom pribadi, showroom publik, pesan checkout, dan override per pelanggan yang mengontrol apa yang dilihat setiap pembeli saat masuk.",
    keywords: [
      "penyiapan portal pemesanan",
      "etalase grosir",
      "pengaturan showroom",
    ],
    readingTime: "6 menit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Portal pemesanan adalah etalase yang digunakan pembeli Anda. Semua konfigurasi sisi merchant berada di Pengaturan — satu drawer dengan 12 bagian yang mencakup etalase, produk, pembayaran, dan tim. Panduan ini berfokus pada bagian yang paling sering Anda sentuh saat meluncurkan portal baru.",
      },
      { type: "h2", id: "merchant", text: "Info merchant" },
      {
        type: "p",
        text: "Pengaturan → Merchant adalah tempat Anda menetapkan nama bisnis, nomor telepon, mata uang default, bahasa, zona waktu, dan format tanggal yang muncul di setiap pesanan, faktur, dan layar yang menghadap pembeli. Menyimpan perubahan di sini dapat mengeluarkan Anda agar lokal baru berlaku.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Showroom pribadi (portal pemesanan)",
      },
      {
        type: "p",
        text: "Pengaturan → Showroom pribadi adalah hub untuk semua yang dilihat pembeli yang masuk. Drawer pengaturan membuka lima tab secara berurutan:",
      },
      {
        type: "ol",
        items: [
          "Aktifkan — satu sakelar yang mengaktifkan atau menonaktifkan portal B2B untuk tenant Anda. Saat mati, pembeli hanya melihat showroom publik.",
          "Akun Pelanggan — daftar setiap pelanggan dengan override showroom pribadi mereka sendiri. Setiap pelanggan dapat mewarisi default merchant atau memiliki banner, tema, dan pembatasan produk khusus.",
          "Showroom Publik — pengaturan untuk pengunjung yang tidak masuk: pesan pendaftaran, level harga jual, dan level harga compare-at.",
          "Showroom Pribadi — konfigurasi visual yang dilihat setiap pembeli yang masuk.",
          "Pengaturan Checkout — email pengingat keranjang, pesan checkout, dan pesan pasca-pesanan.",
        ],
      },
      { type: "h3", id: "public", text: "Showroom publik" },
      {
        type: "p",
        text: "Untuk pengunjung yang belum masuk, pilih level harga yang mereka lihat (Level Harga Jual) dan level harga yang ditampilkan tercoret sebagai referensi (Level Harga Compare At). Bidang Pesan Pendaftaran adalah teks pendek yang ditampilkan di atas katalog — biasanya undangan satu baris untuk mendaftar dan mengakses harga grosir Anda.",
      },
      { type: "h3", id: "private", text: "Showroom pribadi" },
      {
        type: "p",
        text: "Pengaturan ini membentuk pengalaman setiap pembeli yang masuk. Tab Showroom Pribadi dikelompokkan menjadi lima blok:",
      },
      {
        type: "ul",
        items: [
          "Banner — Banner Seluler (16:9) dan Banner Web terpisah. Disarankan 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Masing-masing dapat diunggah atau dihapus secara independen.",
          "Pengaturan Tampilan — toggle untuk menyembunyikan produk yang habis stok, dan pilih mode Level Stok: Sembunyikan Stok / Hanya tampilkan Ada/Habis / Tampilkan angka + status.",
          "Tampilan Produk — tampilkan atau sembunyikan gambar produk, kategori, deskripsi, dan catatan.",
          "Info Kontak — email kontak, telepon kontak, dan pesan kontak bentuk bebas yang ditampilkan kepada pembeli.",
          "Pembatasan — pilih produk dan gudang (lokasi) mana yang dapat dilihat pelanggan. Daftar kosong berarti tidak ada pembatasan.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Pajak dan diskon",
        text: "Skema pajak (pajak utama + pajak sekunder opsional) dan diskon (persentase atau jumlah tetap) juga dikonfigurasi di sini. Mereka mengalir ke kalkulasi keranjang dan checkout secara otomatis.",
      },
      { type: "h3", id: "checkout", text: "Pesan checkout" },
      {
        type: "p",
        text: "Tiga teks pendek mengontrol pengalaman pembeli di sekitar checkout: Pengingat Keranjang (email pengingat otomatis 1 jam), Pesan Checkout (ditampilkan di layar keranjang/checkout), dan Pesan Pasca Pesanan (ditampilkan setelah pemesanan berhasil). Ketiganya menerima teks biasa.",
      },
      { type: "h2", id: "payment", text: "Metode pembayaran dan pajak" },
      {
        type: "p",
        text: "Pengaturan → Metode Pembayaran adalah tempat Anda mengaktifkan opsi pembayaran yang dapat dipilih pembeli di checkout (transfer bank, tunai saat pengiriman, istilah kredit, dll.). Pengaturan → Kode Pajak mendefinisikan skema pajak yang dirujuk oleh showroom — tarif pajak utama dan sekunder opsional per wilayah.",
      },
      { type: "h2", id: "open-storefront", text: "Membuka etalase Anda" },
      {
        type: "p",
        text: "Setelah Aktifkan aktif dan setidaknya satu akun pelanggan memiliki akses, URL etalase Anda muncul di bagian atas drawer Showroom pribadi. Gunakan Buka Etalase untuk memverifikasi apa yang akan dilihat pembeli Anda sebelum mengirim undangan.",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "Pratinjau showroom yang menghadap pembeli",
      },
      {
        type: "p",
        text: "Di bawah ini adalah etalase aktual yang dilihat pembeli yang masuk — header bermerek, banner, dan grid produk yang sama yang mereka navigasi di ponsel atau desktop mereka. Gunakan pratinjau ini untuk mengonfirmasi visibilitas katalog, urutan sortir, dan pengalaman add-to-cart inline sebelum membagikan URL.",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "Info merchant", level: 2 },
      {
        id: "showroom",
        text: "Showroom pribadi (portal pemesanan)",
        level: 2,
      },
      { id: "public", text: "Showroom publik", level: 3 },
      { id: "private", text: "Showroom pribadi", level: 3 },
      { id: "checkout", text: "Pesan checkout", level: 3 },
      { id: "payment", text: "Metode pembayaran dan pajak", level: 2 },
      { id: "open-storefront", text: "Membuka etalase Anda", level: 2 },
      {
        id: "showroom-preview",
        text: "Pratinjau showroom yang menghadap pembeli",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Konsep inti" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Bangun katalog Anda",
    },
  },
  {
    locale: "id",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Bangun katalog Anda",
    description:
      "Buat produk tertimbang, bergradasi, dan multi-spesifikasi, atur dengan kategori dan tag, dan kelola gambar serta terjemahan.",
    keywords: ["katalog produk", "katalog grosir", "produk tertimbang"],
    readingTime: "8 menit baca",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Katalog Anda adalah fondasi portal pemesanan. Model produk Wholesalify dibangun untuk menangani tiga realitas grosir: item yang dijual berdasarkan berat, produksi bergradasi, dan SKU dengan beberapa spesifikasi.",
      },
      { type: "h2", id: "create-product", text: "Buat produk" },
      {
        type: "p",
        text: "Buka Katalog → Produk → Produk baru. Wholesalify menawarkan empat jenis produk: Standar, Tertimbang, Non-inventaris, dan Layanan.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Standar" },
      {
        type: "p",
        text: "Produk standar dijual dalam unit diskrit (buah / peti / palet). Tentukan SKU, unit stok, dan harga jual. Untuk menawarkan beberapa ukuran kemasan, alihkan ke tab Unit jual dan tambahkan baris per unit — setiap baris membawa harga, sakelar Termasuk Pajak, dan 5 tingkat harga level sendiri.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Tertimbang" },
      {
        type: "p",
        text: "Produk tertimbang tidak memiliki SKU tetap — pembeli memasukkan jumlah desimal apa pun saat checkout. Tetapkan unit dasar (kg / lb) dan harga jual per unit; sistem membulatkan setiap baris pesanan ke presisi yang dikonfigurasi.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Multi-spesifikasi" },
      {
        type: "p",
        text: "Pada produk Standar, aktifkan sakelar mode Multi-spes untuk mendefinisikan beberapa atribut (mis. Ukuran × Aroma). Sistem menghasilkan satu SKU per kombinasi. Tentukan opsi atribut di Katalog → Atribut terlebih dahulu.",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Multi-grade" },
      {
        type: "p",
        text: "Pada produk Tertimbang, editor SKU menambahkan tab Grade produk. Tambahkan hingga 10 baris grade untuk SKU yang sama (mis. Premium / Grade A / Grade B). Setiap baris membawa harga jual, sakelar Termasuk Pajak, dan 5 tingkat harga level sendiri. Pembeli memilih grade tertentu saat checkout; total pesanan menggunakan harga grade tersebut.",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Kategori dan tag" },
      {
        type: "p",
        text: "Kelompokkan produk ke dalam kategori untuk mengontrol bagaimana mereka muncul di sidebar portal dan kategori mana yang dapat dijelajahi pembeli. Tag adalah label bentuk bebas untuk pemfilteran dan pencarian.",
      },
      { type: "h2", id: "images", text: "Gambar dan terjemahan" },
      {
        type: "p",
        text: "Unggah hingga satu gambar per produk — itu menjadi hero etalase. Jika Anda beroperasi di beberapa wilayah, tambahkan nama dan deskripsi yang diterjemahkan dari halaman edit produk — mereka secara otomatis распространяются ke lokal yang sesuai.",
      },
    ],
    toc: [
      { id: "create-product", text: "Buat produk", level: 2 },
      { id: "standard", text: "Standar", level: 3 },
      { id: "weighed", text: "Tertimbang", level: 3 },
      { id: "multi-spec", text: "Multi-spesifikasi", level: 3 },
      { id: "multi-grade", text: "Multi-grade", level: 3 },
      { id: "categories", text: "Kategori dan tag", level: 2 },
      { id: "images", text: "Gambar dan terjemahan", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Siapkan portal pemesanan",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Tingkat harga dan harga pelanggan",
    },
  },
  {
    locale: "id",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Tingkat harga dan harga pelanggan",
    description:
      "Konfigurasikan 5 tingkat harga per SKU, atur harga bergradasi untuk produk tertimbang, dan tetapkan setiap pelanggan ke tingkat harga yang memutuskan tingkatan mana yang mereka lihat di portal pemesanan.",
    keywords: [
      "tingkat harga",
      "harga grosir",
      "gradasi buah",
      "level harga pelanggan",
    ],
    readingTime: "6 menit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Harga Wholesalify dibangun di sekitar dua ide: setiap SKU membawa 5 tingkat harga (Level Harga 1–5), dan setiap pelanggan ditetapkan ke salah satu dari 5 tingkatan tersebut di profil mereka. Kedua sisi dipetakan 1-ke-1 dan dikonfigurasi di dua tempat: tingkat SKU di Produk → editor SKU, level pelanggan di Pelanggan → Edit pelanggan.",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Tingkat harga pada setiap SKU",
      },
      {
        type: "p",
        text: "Pada tab Info dasar SKU mana pun, input Harga jual memiliki ikon slider di sisi kanannya. Klik untuk membuka dialog Level Harga, di mana Anda dapat mengisi 5 harga terpisah (Level Harga 1 melalui Level Harga 5) dan mengaktifkan Termasuk Pajak untuk masing-masing secara independen.",
      },
      {
        type: "ul",
        items: [
          "5 tingkatan memetakan ke 5 level harga pelanggan (ditetapkan pada profil pelanggan — lihat di bawah).",
          "Titik kecil pada ikon menunjukkan bahwa setidaknya satu harga tingkat telah ditetapkan (>0); titik hanya informasional.",
          "Satu SKU membawa satu set 5 harga tingkat; jumlah yang ditampilkan sebenarnya juga bergantung pada unit dasar / unit jual, skema pajak, dan mata uang.",
          "Harga yang dilihat pengunjung yang keluar ditentukan oleh Pengaturan → Showroom → Level Harga Jual; harga perbandingan tercoret ditentukan oleh Level Harga Compare At.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Pengaturan grade untuk produk tertimbang",
      },
      {
        type: "p",
        text: "Ketika mode produk adalah Tertimbang, editor SKU menampilkan tab Grade produk tambahan. Di sana Anda dapat menambahkan hingga 10 baris grade untuk SKU yang sama (mis. Premium / Grade A / Grade B). Setiap baris memiliki nama grade, harga jual (akhiran tetap /{baseUnit}, mis. /kg), sakelar termasuk pajak, dan ikon slider yang sama pada input harga — mengkliknya membuka dialog Level Harga 5 tingkat yang sama sehingga grade tertentu dapat membawa 5 harganya sendiri.",
      },
      {
        type: "ul",
        items: [
          "Hingga 10 baris grade; menghapus baris terakhir meninggalkan baris kosong daripada menghapus seluruh bagian.",
          "Akhiran harga selalu /{baseUnit} (mis. /kg) untuk mencocokkan konvensi penjualan tertimbang.",
          "Pembeli memilih grade spesifik saat memesan; total pesanan dihitung menggunakan harga grade tersebut.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Tingkat harga untuk produk multi-unit jual",
      },
      {
        type: "p",
        text: "Produk non-tertimbang dapat memiliki beberapa unit jual (mis. Peti / Buah / Set) yang dikonfigurasi pada tab Unit jual. Setiap baris unit jual juga memiliki input harga jual sendiri dengan ikon slider, membuka dialog Level Harga 5 tingkat yang sama sehingga unit dapat membawa 5 harganya sendiri ditambah sakelar pajak.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Level harga pelanggan",
      },
      {
        type: "p",
        text: "Buka pelanggan mana pun di Manajemen pelanggan — area info dasar memiliki dropdown Level Harga dengan lima opsi (Level Harga 1 melalui Level Harga 5). Level yang Anda tetapkan di sini menentukan harga mana dari 5 harga tingkat SKU yang dilihat pelanggan saat mereka masuk ke portal pemesanan. Pelanggan yang ditetapkan ke Level Harga 3 akan melihat Level Harga 3 di seluruh katalog.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Bagaimana kedua sisi terhubung",
        text: "Sisi SKU (5 harga tingkat) dan sisi pelanggan (Level Harga 1–5) adalah 1-ke-1: nomor yang dipilih pada profil pelanggan memutuskan harga tingkat SKU mana yang ditampilkan portal untuk setiap produk. Jika tingkatan itu dibiarkan kosong, sistem akan jatuh kembali ke harga jual dasar SKU.",
      },
    ],
    toc: [
      {
        id: "sku-price-levels",
        text: "Tingkat harga pada setiap SKU",
        level: 2,
      },
      {
        id: "weighed-grades",
        text: "Pengaturan grade untuk produk tertimbang",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Tingkat harga untuk produk multi-unit jual",
        level: 2,
      },
      { id: "customer-price-level", text: "Level harga pelanggan", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Bangun katalog Anda",
    },
    next: { href: "/docs/orders/dashboard", title: "Dasbor pesanan" },
  },

  // ----- Orders -----
  {
    locale: "id",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Dasbor pesanan",
    description:
      "Pahami daftar Pesanan Penjualan — lima status pesanan nyata, filter yang tersedia, kolom pada tabel, dan tindakan yang tersedia di halaman detail pesanan.",
    keywords: ["dasbor pesanan", "pesanan grosir", "manajemen pesanan B2B"],
    readingTime: "4 menit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Daftar Pesanan Penjualan adalah tempat tim operasi Anda meninjau dan bertindak pada setiap pesanan. Halaman ini menjelaskan setiap kontrol pada daftar, kolom yang Anda lihat, dan tindakan yang tersedia di halaman detail setiap pesanan.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filter" },
      {
        type: "ul",
        items: [
          "Pencarian kata kunci — nomor pesanan, nama pelanggan, nomor PO pelanggan, atau teks lain pada pesanan.",
          "Status — dropdown pilih tunggal: Semua, Draf, Dikonfirmasi, Dibatalkan, Dibuka Kembali, Belum Dikonfirmasi.",
          "Rentang tanggal — preset Hari ini / 7 hari terakhir / 30 hari terakhir, atau pilih rentang kustom pada kalender.",
          "Lokasi — filter gudang multi-pilih. Kosong berarti semua gudang.",
          "Status pembayaran — filter multi-pilih: Belum bayar, Sebagian, Lunas, Berlebih bayar.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Reset filter",
        text: "Gunakan ikon reset di kanan baris filter untuk menghapus semua filter kembali ke defaultnya (30 hari terakhir, semua status, semua gudang, semua status pembayaran).",
      },
      { type: "h2", id: "table-columns", text: "Kolom tabel" },
      {
        type: "p",
        text: "Setiap baris daftar menunjukkan dua belas kolom berikut:",
      },
      {
        type: "ol",
        items: [
          "# — indeks baris (halaman × ukuran + n).",
          "No. Pesanan — tautan yang dapat diklik yang membuka halaman detail pesanan di tab baru.",
          "Pelanggan — nama pembeli.",
          "Tanggal Bisnis — tanggal yang dicatat pada pesanan.",
          "Uang yang Harus Dibayar — diformat dalam mata uang default merchant.",
          "Lokasi — gudang keluar.",
          "Status Pembayaran — diturunkan dari saldo vs yang harus dibayar.",
          "Status — status pesanan saat ini (lihat Status pesanan di bawah).",
          "Dibuat Pada / Dibuat Oleh / Diperbarui Pada / Diperbarui Oleh — bidang audit.",
        ],
      },
      { type: "h2", id: "statuses", text: "Status pesanan" },
      {
        type: "p",
        text: "Setiap pesanan selalu berada dalam salah satu dari lima status berikut. Lencana status adalah label pasif — tidak dapat diklik untuk memajukan pesanan. Untuk mengubah status, buka halaman detail pesanan dan gunakan tombol tindakan di sana.",
      },
      {
        type: "table",
        headers: ["Status", "Kode", "Arti"],
        rows: [
          ["Draf", "0", "Disimpan sebagai draf. Belum dikirim ke pelanggan."],
          ["Dikonfirmasi", "1", "Dikirim ke pelanggan / siap dipenuhi."],
          [
            "Dibatalkan",
            "2",
            "Dibatalkan; pesanan disimpan untuk audit tetapi tidak ada tindakan lebih lanjut yang memungkinkan.",
          ],
          [
            "Dibuka Kembali",
            "3",
            "Pesanan yang sebelumnya dibatalkan dibuka kembali untuk diedit.",
          ],
          [
            "Belum Dikonfirmasi",
            "4",
            "Dikembalikan dari Dikonfirmasi kembali ke status mirip draf.",
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Tindakan pesanan" },
      {
        type: "p",
        text: "Klik nomor pesanan untuk membuka halaman detail. Header halaman detail menunjukkan tombol tindakan yang sesuai dengan status saat ini. Setiap tindakan dijaga oleh kode izin — tombol yang tidak Anda akses disembunyikan sepenuhnya.",
      },
      {
        type: "ul",
        items: [
          "Simpan — simpan pesanan saat dalam Draf, Dibuka Kembali, atau Belum Dikonfirmasi.",
          "Konfirmasi — pindahkan status mirip draf (Draf / Dibuka Kembali / Belum Dikonfirmasi) ke Dikonfirmasi.",
          "Batalkan Konfirmasi — kembalikan pesanan Dikonfirmasi ke Belum Dikonfirmasi (kemudian dapat diedit dan dikonfirmasi ulang).",
          "Batalkan — batalkan pesanan Dikonfirmasi menjadi Dibatalkan.",
          "Buka Kembali — bawa pesanan Dibatalkan kembali ke Dibuka Kembali untuk diedit.",
          "Hapus — hapus pesanan secara permanen. Hanya tersedia pada Draf, Belum Dikonfirmasi, dan Dibuka Kembali.",
          "Retur / Batalkan Retur — pada item baris pesanan Dikonfirmasi, proses retur pelanggan sebagian atau batalkan satu.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transisi status dan dampak stok",
      },
      {
        type: "p",
        text: "Setiap perubahan stok dicatat sebagai satu baris dalam buku besar stok dan dapat dilacak kembali ke pesanan sumbernya. Tabel di bawah merangkum dampak inventaris dari setiap tindakan:",
      },
      {
        type: "table",
        headers: ["Tindakan", "Perubahan status", "Dampak stok", "Catatan"],
        rows: [
          [
            "Konfirmasi",
            "Draf / Dibuka Kembali / Belum Dikonfirmasi → Dikonfirmasi",
            "Kurangi ( − )",
            "Keluar dari gudang pesanan untuk setiap item baris; biaya ditulis pada pesanan pada waktu konfirmasi.",
          ],
          [
            "Batalkan Konfirmasi",
            "Dikonfirmasi → Belum Dikonfirmasi",
            "Kembalikan ( + )",
            "Membalikan pengurangan dari Konfirmasi terbaru; bidang biaya pesanan dihapus.",
          ],
          [
            "Batalkan",
            "Dikonfirmasi → Dibatalkan",
            "Kembalikan ( + )",
            "Membalikan pengurangan dari Konfirmasi terbaru; pesanan disimpan untuk audit dan tidak dapat dimajukan lebih lanjut.",
          ],
          [
            "Buka Kembali",
            "Dibatalkan → Dibuka Kembali",
            "Tidak ada perubahan",
            "Stok sudah dikembalikan saat pesanan dibatalkan. Buka Kembali hanya mengubah status; Konfirmasi berikutnya akan mengurangi lagi.",
          ],
          [
            "Retur",
            "Dikonfirmasi (per baris)",
            "Retur sebagian ( + )",
            "Menambahkan baris jumlah negatif untuk item baris pesanan Dikonfirmasi dan mengembalikan jumlah tersebut ke stok.",
          ],
          [
            "Batalkan Retur",
            "Dikonfirmasi (per baris)",
            "Kurangi lagi ( − )",
            "Menghapus baris retur yang sebelumnya dicatat dan mengurangi kembali jumlah asli dari stok.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Baik Batalkan maupun Batalkan Konfirmasi mengembalikan stok",
        text: "Kedua tindakan memiliki efek inventaris yang sama: keduanya membatalkan pengurangan dari Konfirmasi terbaru. Perbedaannya adalah status terminal — Batalkan memindahkan pesanan ke Dibatalkan (terminal, tidak ada perubahan status lebih lanjut yang memungkinkan); Batalkan Konfirmasi memindahkannya ke Belum Dikonfirmasi (masih dapat diedit, Konfirmasi baru akan mengurangi stok lagi).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Tidak ada operasi massal",
        text: "Daftar Pesanan Penjualan tidak mendukung pemilihan baris atau tindakan massal. Setiap pesanan harus dibuka secara individual untuk bertindak.",
      },
    ],
    toc: [
      { id: "filters", text: "Filter", level: 2 },
      { id: "table-columns", text: "Kolom tabel", level: 2 },
      { id: "statuses", text: "Status pesanan", level: 2 },
      { id: "actions", text: "Tindakan pesanan", level: 2 },
      {
        id: "inventory-impact",
        text: "Transisi status dan dampak stok",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Tingkat harga dan harga pelanggan",
    },
    next: { href: "/docs/inventory/stock", title: "Level stok" },
  },

  // ----- Inventory -----
  {
    locale: "id",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Level stok",
    description:
      "Lacak stok per lokasi, per gudang, dan per varian produk. Konfigurasikan unit inventaris dasar dan aturan konversi Anda.",
    keywords: ["manajemen stok", "inventaris grosir", "multi-gudang"],
    readingTime: "5 menit baca",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Modul inventaris Wholesalify mempertahankan jumlah real-time untuk setiap varian produk, per gudang. Stok secara otomatis disesuaikan ketika pesanan dikonfirmasi dan ketika tanda terima pembelian diposting.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Gudang" },
      {
        type: "p",
        text: "Tambahkan gudang sebanyak yang Anda operasikan. Setiap produk memiliki jumlah stok terpisah per gudang, yang memungkinkan Anda memenuhi pesanan dari lokasi terdekat dengan pembeli.",
      },
      { type: "h2", id: "stock-units", text: "Unit stok dan konversi" },
      {
        type: "p",
        text: 'Untuk produk segar, tetapkan unit inventaris ke kilogram. Tambahkan ukuran kemasan seperti "kotak 5 kg" atau "keranjang 10 kg" dengan konversi otomatis sehingga pembeli dapat memesan dalam unit tersebut tanpa Anda harus menerjemahkan stok secara manual.',
      },
      { type: "h2", id: "stock-adjustments", text: "Penyesuaian stok manual" },
      {
        type: "p",
        text: "Kehilangan beberapa peti karena kerusakan? Buka produk, pilih Sesuaikan stok, dan masukkan jumlah positif atau negatif dengan alasan. Penyesuaian dicatat dalam log audit dengan pengguna, tanggal, dan foto opsional.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Gudang", level: 2 },
      { id: "stock-units", text: "Unit stok dan konversi", level: 2 },
      {
        id: "stock-adjustments",
        text: "Penyesuaian stok manual",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Dasbor pesanan" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Buat purchase order",
    },
  },

  // ----- Purchasing -----
  {
    locale: "id",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Buat purchase order",
    description:
      "Bangun purchase order dengan pemasok Anda, lacak pengiriman masuk, dan posting tanda terima yang memperbarui stok secara otomatis.",
    keywords: ["purchase order", "manajemen pemasok", "pembelian grosir"],
    readingTime: "6 menit baca",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Purchase order memberi tahu pemasok Anda apa yang harus dikirim, kapan, dan dengan harga berapa. Ketika barang tiba, memposting tanda terima memperbarui stok dan catatan pemasok dalam satu langkah.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Langkah 1 — Tambahkan pemasok",
      },
      {
        type: "p",
        text: "Buka Pembelian → Pemasok → Pemasok baru. Masukkan detail kontak, dan lead time yang biasanya mereka kirimkan.",
      },
      { type: "h2", id: "build-po", text: "Langkah 2 — Bangun PO" },
      {
        type: "p",
        text: "Klik Purchase order baru, pilih pemasok, dan tambahkan item baris. Harga default ke harga terakhir pemasok tetapi Anda dapat mengganti setiap baris.",
      },
      { type: "h2", id: "receive", text: "Langkah 3 — Terima pengiriman" },
      {
        type: "p",
        text: "Ketika barang tiba, klik Terima pada PO. Masukkan jumlah yang dikirimkan sebenarnya — tanda terima sebagian didukung — dan konfirmasi. Level stok diperbarui secara otomatis dan faktur pemasok dibuat.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transisi status dan dampak stok",
      },
      {
        type: "p",
        text: "Purchase order dan sales order berbagi buku besar stok yang sama, tetapi mengalir dalam arah yang berlawanan — mengonfirmasi purchase order menambahkan stok (+), sementara mengonfirmasi sales order menghapusnya (−). Tabel di bawah merangkum empat tindakan utama dan dampaknya terhadap stok:",
      },
      {
        type: "table",
        headers: ["Tindakan", "Perubahan status", "Dampak stok", "Catatan"],
        rows: [
          [
            "Konfirmasi PO",
            "Draf / Dibuka Kembali / Belum Dikonfirmasi → Dikonfirmasi",
            "Stok masuk ( + )",
            "Barang diterima ke gudang tujuan per item baris; biaya pembelian dicatat pada pesanan.",
          ],
          [
            "Batalkan Konfirmasi",
            "Dikonfirmasi → Belum Dikonfirmasi",
            "Stok keluar ( − )",
            "Membalikkan stok yang ditambahkan ketika PO dikonfirmasi; biaya pembelian dihapus.",
          ],
          [
            "Batalkan PO",
            "Dikonfirmasi → Dibatalkan",
            "Stok keluar ( − )",
            "Membalikkan stok yang ditambahkan ketika PO dikonfirmasi; pesanan disimpan untuk audit saja.",
          ],
          [
            "Buka Kembali",
            "Dibatalkan → Dibuka Kembali",
            "Tidak ada perubahan stok",
            "Stok sudah dibalik oleh Batalkan; Buka Kembali hanya mengubah status. Pesanan dapat Dikonfirmasi lagi untuk menambah stok kembali.",
          ],
          [
            "Retur",
            "Dikonfirmasi (per baris)",
            "Stok keluar sebagian ( − )",
            "Kembalikan sebagian baris yang dikonfirmasi ke pemasok — baris jumlah negatif ditambahkan dan stok dikurangi.",
          ],
          [
            "Batalkan Retur",
            "Dikonfirmasi (per baris)",
            "Tambah stok lagi ( + )",
            "Balikkan retur — baris negatif dihapus dan stok ditambahkan kembali pada jumlah asli.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Mengonfirmasi PO menambahkan stok — tidak menghapusnya",
        text: "Mengonfirmasi purchase order berarti barang telah tiba secara fisik dan disimpan, jadi stok naik (+). Ini adalah kebalikan dari mengonfirmasi sales order, yang turun (−). Jangan bingung antara keduanya: Batalkan Konfirmasi tidak mengembalikan barang ke pemasok — itu hanya membalikkan stok yang ditambahkan ketika Anda mengonfirmasi.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Batalkan dan Batalkan Konfirmasi keduanya membalikkan stok",
        text: "Kedua tindakan memiliki efek yang sama pada stok — keduanya membatalkan stok yang ditambahkan oleh Konfirmasi sebelumnya. Perbedaannya adalah status akhir: Batalkan memindahkan pesanan ke Dibatalkan (terminal), sementara Batalkan Konfirmasi memindahkannya ke Belum Dikonfirmasi (masih dapat diedit, dan Konfirmasi berikutnya akan menambah stok lagi).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Langkah 1 — Tambahkan pemasok", level: 2 },
      { id: "build-po", text: "Langkah 2 — Bangun PO", level: 2 },
      { id: "receive", text: "Langkah 3 — Terima pengiriman", level: 2 },
      {
        id: "inventory-impact",
        text: "Transisi status dan dampak stok",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Level stok" },
  },

  // ===================================================================
  // MALAY (ms)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "ms",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Gambaran keseluruhan Wholesalify",
    description:
      "Gambaran ringkas Wholesalify — platform pesanan borong B2B untuk hasil segar, FMCG, dan perniagaan borong berbilang unit.",
    keywords: ["platform borong", "pesanan B2B", "gambaran SaaS borong"],
    readingTime: "4 minit baca",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify ialah platform pesanan borong B2B moden yang dibina untuk pemborong, pengedar, dan syarikat perdagangan. Ia menggabungkan portal pesanan yang menghadap pelanggan dengan papan pemuka pentadbir yang berkuasa supaya pasukan anda boleh mengurus pesanan, inventori, pembelian, dan akaun pelanggan di satu tempat.",
      },
      {
        type: "p",
        text: "Sama ada anda menjual hasil segar mengikut berat, buah bergred mengikut peti, atau produk berbilang spesifikasi mengikut SKU, Wholesalify memberi anda model katalog dan harga yang fleksibel yang sepadan dengan cara perniagaan anda sebenarnya berjalan.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Apa yang anda boleh lakukan dengan Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Jual produk mengikut berat, mengikut peti/palet, atau mengikut unit — daripada katalog yang sama.",
          "Tingkat harga buah dan hasil mengikut gred, saiz, atau volum.",
          "Urus produk timbang, bergred, dan berbilang spesifikasi secara serentak.",
          "Beri setiap pembeli borong portal pesanan layan diri dengan sejarah pesanan.",
          "Jejak pesanan, pembayaran, dan pemenuhan daripada papan pemuka pesanan bersepadu.",
          "Jalankan laporan stok dan penambahan semula automatik.",
          "Urus pembekal, pesanan pembelian, dan stok masuk.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Bagaimana platform ini saling melengkapi",
      },
      {
        type: "p",
        text: "Wholesalify terdiri daripada tiga lapisan yang berkongsi satu sumber kebenaran:",
      },
      {
        type: "ul",
        items: [
          "Portal pesanan — etalase yang menghadap pelanggan untuk pembeli borong.",
          "Papan pemuka pentadbir — back-office yang digunakan oleh pasukan operasi anda.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Siapa yang menggunakan Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Pemborong hasil segar (buah, sayur, makanan laut).",
          "Pengedar makanan dan FMCG.",
          "Pemborong bahan bangunan dan perkakasan.",
          "Pengimport berbilang unit dan syarikat perdagangan.",
          "Perniagaan borong kecil dan sederhana yang sudah melebihi had spreadsheet dan WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Langkah seterusnya" },
      {
        type: "ul",
        items: [
          "Baca Panduan Pantas untuk membuat tenant pertama dan membuat pesanan ujian.",
          "Layari panduan Portal Pesanan untuk menyediakan katalog borong anda.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Bersedia untuk bermula?",
        text: "Daftar untuk percubaan percuma dan mula meneroka Wholesalify sekarang — tanpa kad kredit. Buat tenant, tambah beberapa produk, dan buat pesanan ujian dalam masa kurang daripada 15 minit.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Daftar percuma",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Apa yang anda boleh lakukan dengan Wholesalify",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Bagaimana platform ini saling melengkapi",
        level: 2,
      },
      {
        id: "who-uses-it",
        text: "Siapa yang menggunakan Wholesalify",
        level: 2,
      },
      { id: "next-steps", text: "Langkah seterusnya", level: 2 },
    ],
    next: {
      href: "/docs/get-started/quickstart",
      title: "Panduan pantas",
    },
  },
  {
    locale: "ms",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Panduan pantas",
    description:
      "Sediakan tenant Wholesalify anda dalam masa kurang daripada 15 minit: buat akaun, tambah produk, jemput pembeli, dan buat pesanan borong pertama anda.",
    keywords: [
      "penyediaan borong",
      "permulaan pantas B2B",
      "onboarding tenant",
    ],
    readingTime: "6 minit baca",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Panduan Pantas ini membawa anda melalui laluan terpantas ke tenant Wholesalify yang berfungsi. Pada akhirnya anda akan mempunyai katalog dengan beberapa produk sampel dan pembeli borong yang boleh membuat pesanan sebenar.",
      },
      { type: "h2", id: "prerequisites", text: "Prasyarat" },
      {
        type: "ul",
        items: [
          "Akaun Wholesalify. Daftar di halaman pendaftaran jika anda belum mempunyai satu.",
          "E-mel perniagaan — pembeli akan menerima pautan jemputan di sini.",
          "Lebih kurang 15 minit untuk penyediaan.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Buat akaun dan tenant anda",
      },
      {
        type: "p",
        text: "Buka halaman pendaftaran Wholesalify, masukkan e-mel perniagaan anda, dan buat kata laluan. Selepas mengesahkan e-mel, anda akan dibawa ke papan pemuka tenant. Setiap tenant diasingkan sepenuhnya — katalog, pelanggan, dan pesanan anda kekal peribadi kepada ruang kerja anda.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Tambah produk pertama anda",
      },
      {
        type: "p",
        text: "Buka ruang kerja katalog dan klik Tambah produk. Wholesalify menyokong tiga jenis produk dari hari pertama:",
      },
      {
        type: "table",
        headers: ["Jenis produk", "Guna apabila…", "Contoh"],
        rows: [
          [
            "Produk timbang",
            "Anda menjual mengikut berat (kg / lb).",
            "Tomato pukal kotak 5 kg",
          ],
          [
            "Produk bergred",
            "Anda mempunyai pelbagai gred atau tahap kualiti.",
            "Epal — Gred A / B",
          ],
          [
            "Produk berbilang spesifikasi",
            "Anda menjual SKU yang berbeza mengikut warna/saiz/perisa.",
            "Sabun bar 100 g — mawar / lavender / tanpa bau",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Jemput pembeli borong",
      },
      {
        type: "p",
        text: "Dari Pelanggan klik Jemput pembeli. Masukkan e-mel pembeli dan pilih senarai harga dan terma pembayaran yang harus mereka lihat. Pembeli menerima e-mel dengan pautan untuk menetapkan kata laluan dan log masuk.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Petua",
        text: "Gunakan e-mel peribadi (seperti Gmail) semasa menguji — supaya anda tidak memerlukan peti masuk berasingan untuk mengesahkan jemputan.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Buat pesanan pertama anda",
      },
      {
        type: "p",
        text: "Beralih ke akaun pembeli dan buka portal pesanan. Tambah beberapa produk ke troli, pilih tarikh penghantaran, dan hantar. Pesanan muncul serta-merta dalam papan pemuka pentadbir anda di bawah Pesanan.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "step-5-explore",
        text: "5. Terokai selebihnya platform",
      },
      {
        type: "p",
        text: "Dari sini anda boleh menyediakan inventori, membuat pesanan pembelian pertama, dan menjemput pasukan operasi anda. Panduan yang selebihnya dalam dokumentasi ini melalui setiap kawasan secara mendalam.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Prasyarat", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Buat akaun dan tenant anda",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Tambah produk pertama anda",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Jemput pembeli borong",
        level: 2,
      },
      {
        id: "step-4-place-order",
        text: "4. Buat pesanan pertama anda",
        level: 2,
      },
      {
        id: "step-5-explore",
        text: "5. Terokai selebihnya platform",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/overview", title: "Gambaran keseluruhan" },
    next: { href: "/docs/get-started/concepts", title: "Konsep teras" },
  },
  {
    locale: "ms",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Konsep teras",
    description:
      "Fahami blok binaan Wholesalify: tenant, katalog, tahap harga, akaun pelanggan, dan kitaran hayat pesanan.",
    keywords: ["tenant", "katalog", "tahap harga", "konsep borong"],
    readingTime: "7 minit baca",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Sebelum anda menyelami ciri tertentu, ia membantu untuk mengetahui beberapa istilah yang kami gunakan di seluruh produk dan dokumentasi.",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "Tenant ialah ruang kerja Wholesalify yang diasingkan, dimiliki oleh satu perniagaan borong. Setiap tenant mempunyai katalog, pelanggan, pesanan, inventori, dan pengguna sendiri. Tenant tidak pernah berkongsi data antara satu sama lain.",
      },
      { type: "h2", id: "product-kinds", text: "Jenis produk" },
      {
        type: "p",
        text: "Setiap item dalam katalog anda adalah salah satu daripada tiga jenis:",
      },
      {
        type: "ul",
        items: [
          "Piawai — jual unit seperti peti, palet, atau SKU tunggal.",
          "Timbang — jual mengikut berat dengan unit asas (kg / lb) dan saiz pek.",
          "Berbilang spesifikasi — jual di bawah satu produk induk dengan pelbagai SKU (saiz, warna, perisa).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Tahap harga dan harga pelanggan",
      },
      {
        type: "p",
        text: "Tahap harga ialah sekumpulan pelanggan yang sepatutnya melihat harga yang sama. Anda boleh menetapkan setiap pelanggan kepada satu atau beberapa tahap (contohnya VIP, Borong, Peruncit-penjual semula). Portal pesanan secara automatik menunjukkan harga yang betul untuk pembeli yang log masuk.",
      },
      { type: "h2", id: "order-lifecycle", text: "Kitaran hayat pesanan" },
      {
        type: "p",
        text: "Setiap pesanan melalui set kecil status. Pasukan anda memajukan pesanan dari satu status ke status seterusnya apabila kerja berjalan:",
      },
      {
        type: "ol",
        items: [
          "Draf — pembeli masih menyunting pesanan dalam portal mereka.",
          "Dihantar — dibuat oleh pembeli dan menunggu pengesahan.",
          "Disahkan — diterima oleh pasukan anda; inventori ditempah.",
          "Dibatalkan — terminal; pesanan dibatalkan.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Unit inventori" },
      {
        type: "p",
        text: "Stok dijejak dalam unit inventori yang anda pilih setiap produk — kilogram untuk hasil, peti untuk minuman, keping untuk perkakasan. Unit jual ditukar secara automatik menggunakan peraturan penukaran yang anda tetapkan pada setiap produk.",
      },
      { type: "h2", id: "users-and-roles", text: "Pengguna dan peranan" },
      { type: "p", text: "Ahli tenant termasuk dalam beberapa peranan:" },
      {
        type: "table",
        headers: ["Peranan", "Apa yang mereka lakukan"],
        rows: [
          ["Pemilik", "Mengurus pengebilan, pengguna, dan semua tetapan."],
          ["Pentadbir", "Mengurus katalog, pesanan, inventori, dan pembelian."],
          ["Operator", "Mengendalikan pemprosesan pesanan harian."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "Jenis produk", level: 2 },
      { id: "price-tiers", text: "Tahap harga dan harga pelanggan", level: 2 },
      { id: "order-lifecycle", text: "Kitaran hayat pesanan", level: 2 },
      { id: "inventory-units", text: "Unit inventori", level: 2 },
      { id: "users-and-roles", text: "Pengguna dan peranan", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Panduan pantas" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Sediakan katalog anda",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "ms",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Sediakan portal pesanan anda",
    description:
      "Konfigurasikan portal pesanan borong — maklumat pedagang, showroom peribadi, showroom awam, mesej pembayaran, dan ganti ganti setiap pelanggan yang mengawal apa yang dilihat setiap pembeli apabila mereka log masuk.",
    keywords: ["penyediaan portal pesanan", "kedai borong", "tetapan showroom"],
    readingTime: "6 minit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Portal pesanan ialah etalase yang digunakan pembeli anda. Semua konfigurasi sisi pedagang berada di bawah Tetapan — satu laci dengan 12 bahagian yang merangkumi etalase, produk, pembayaran, dan pasukan. Panduan ini memberi tumpuan kepada bahagian yang paling kerap anda sentuh apabila melancarkan portal baru.",
      },
      { type: "h2", id: "merchant", text: "Maklumat pedagang" },
      {
        type: "p",
        text: "Tetapan → Pedagang ialah tempat anda menetapkan nama perniagaan, nombor telefon, mata wang lalai, bahasa, zon waktu, dan format tarikh yang muncul pada setiap pesanan, invois, dan skrin yang menghadap pembeli. Menyimpan perubahan di sini mungkin menyebabkan anda log keluar supaya lokal baru berkuat kuasa.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Showroom peribadi (portal pesanan)",
      },
      {
        type: "p",
        text: "Tetapan → Showroom Peribadi ialah hab untuk semua yang dilihat pembeli yang log masuk. Laci tetapan membuka lima tab mengikut urutan:",
      },
      {
        type: "ol",
        items: [
          "Dayakan — satu suis yang menghidupkan atau mematikan portal B2B untuk tenant anda. Apabila dimatikan, pembeli hanya melihat showroom awam.",
          "Akaun Pelanggan — senarai setiap pelanggan dengan ganti showroom peribadi mereka sendiri. Setiap pelanggan boleh mewarisi lalai pedagang atau mempunyai banner, tema, dan sekatan produk tersuai.",
          "Showroom Awam — tetapan untuk pelawat yang tidak log masuk: mesej pendaftaran, tahap harga jualan, dan tahap harga banding.",
          "Showroom Peribadi — konfigurasi visual yang dilihat setiap pembeli yang log masuk.",
          "Tetapan Pembayaran — e-mel peringatan troli, mesej pembayaran, dan mesej selepas pesanan.",
        ],
      },
      { type: "h3", id: "public", text: "Showroom awam" },
      {
        type: "p",
        text: "Untuk pelawat yang belum log masuk, pilih tahap harga yang mereka lihat (Tahap Harga Jualan) dan tahap harga yang dipaparkan tercoret sebagai rujukan (Tahap Harga Banding). Medan Mesej Pendaftaran ialah teks pendek yang dipaparkan di atas katalog — biasanya jemputan satu baris untuk mendaftar dan mengakses harga borong anda.",
      },
      { type: "h3", id: "private", text: "Showroom peribadi" },
      {
        type: "p",
        text: "Tetapan ini membentuk pengalaman setiap pembeli yang log masuk. tab Showroom Peribadi dikumpulkan kepada lima blok:",
      },
      {
        type: "ul",
        items: [
          "Banner — Banner Mudah Alih (16:9) dan Banner Web berasingan. Disyorkan 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Setiap satu boleh dimuat naik atau dialih keluar secara bebas.",
          "Tetapan Paparan — togol untuk menyembunyikan produk yang kehabisan stok, dan pilih mod Tahap Stok: Sembunyikan Stok / Hanya tunjukkan Ada/Habis / Tunjukkan nombor + status.",
          "Paparan Produk — tunjukkan atau sembunyikan imej produk, kategori, penerangan, dan nota.",
          "Maklumat Hubungan — e-mel hubungan, telefon hubungan, dan mesej hubungan bentuk bebas yang ditunjukkan kepada pembeli.",
          "Sekatan — pilih produk dan gudang (lokasi) yang boleh dilihat oleh pelanggan. Senarai kosong bermakna tiada sekatan.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Cukai dan diskaun",
        text: "Skim cukai (cukai utama + cukai sekunder pilihan) dan diskaun (peratusan atau jumlah tetap) juga dikonfigurasikan di sini. Ia mengalir ke dalam pengiraan troli dan pembayaran secara automatik.",
      },
      { type: "h3", id: "checkout", text: "Mesej pembayaran" },
      {
        type: "p",
        text: "Tiga teks pendek mengawal pengalaman pembeli sekitar pembayaran: Peringatan Troli (e-mel peringatan automatik 1 jam), Mesej Pembayaran (ditunjukkan pada skrin troli/pembayaran), dan Mesej Selepas Pesanan (ditunjukkan selepas penempatan pesanan berjaya). Ketiga-tiganya menerima teks biasa.",
      },
      { type: "h2", id: "payment", text: "Kaedah pembayaran dan cukai" },
      {
        type: "p",
        text: "Tetapan → Kaedah Pembayaran ialah tempat anda mengaktifkan pilihan pembayaran yang boleh dipilih pembeli di pembayaran (pemindahan bank, tunai semasa penghantaran, terma kredit, dll.). Tetapan → Kod Cukai mentakrifkan skim cukai yang dirujuk oleh showroom — kadar cukai utama dan sekunder pilihan setiap rantau.",
      },
      { type: "h2", id: "open-storefront", text: "Membuka etalase anda" },
      {
        type: "p",
        text: "Setelah Dayakan dihidupkan dan sekurang-kurangnya satu akaun pelanggan mempunyai akses, URL etalase anda muncul di bahagian atas laci Showroom peribadi. Gunakan Buka Etalase untuk mengesahkan apa yang akan dilihat pembeli anda sebelum menghantar jemputan.",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "Pratonton showroom yang menghadap pembeli",
      },
      {
        type: "p",
        text: "Di bawah ialah etalase sebenar yang dilihat pembeli yang log masuk — header berjenama, banner, dan grid produk yang sama yang mereka navigasi pada telefon atau desktop mereka. Gunakan pratonton ini untuk mengesahkan keterlihatan katalog, tertib isihan, dan pengalaman tambah ke troli dalam talian sebelum berkongsi URL.",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "Maklumat pedagang", level: 2 },
      {
        id: "showroom",
        text: "Showroom peribadi (portal pesanan)",
        level: 2,
      },
      { id: "public", text: "Showroom awam", level: 3 },
      { id: "private", text: "Showroom peribadi", level: 3 },
      { id: "checkout", text: "Mesej pembayaran", level: 3 },
      { id: "payment", text: "Kaedah pembayaran dan cukai", level: 2 },
      { id: "open-storefront", text: "Membuka etalase anda", level: 2 },
      {
        id: "showroom-preview",
        text: "Pratonton showroom yang menghadap pembeli",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Konsep teras" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Bina katalog anda",
    },
  },
  {
    locale: "ms",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Bina katalog anda",
    description:
      "Cipta produk timbang, bergred, dan berbilang spesifikasi, susun dengan kategori dan tag, dan uruskan imej serta terjemahan.",
    keywords: ["katalog produk", "katalog borong", "produk timbang"],
    readingTime: "8 minit baca",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Katalog anda ialah asas portal pesanan. Model produk Wholesalify dibina untuk mengendalikan tiga realiti borong: item yang dijual mengikut berat, hasil bergred, dan SKU dengan berbilang spesifikasi.",
      },
      { type: "h2", id: "create-product", text: "Cipta produk" },
      {
        type: "p",
        text: "Pergi ke Katalog → Produk → Produk baru. Wholesalify menawarkan empat jenis produk: Piawai, Timbang, Bukan inventori, dan Perkhidmatan.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Piawai" },
      {
        type: "p",
        text: "Produk piawai dijual dalam unit diskret (keping / peti / palet). Takrifkan SKU, unit stok, dan harga jualan. Untuk menawarkan pelbagai saiz pek, tukar ke tab Unit jual dan tambah baris per unit — setiap baris membawa harganya sendiri, suis Termasuk Cukai, dan 5 tahap harga aras.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Timbang" },
      {
        type: "p",
        text: "Produk timbang tidak mempunyai SKU tetap — pembeli memasukkan sebarang kuantiti perpuluhan di pembayaran. Tetapkan unit asas (kg / lb) dan harga jualan per unit; sistem membundarkan setiap baris pesanan kepada ketepatan yang dikonfigurasikan.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Berbilang spesifikasi" },
      {
        type: "p",
        text: "Pada produk Piawai, hidupkan suis mod Berbilang-spek untuk mentakrifkan pelbagai atribut (cth Saiz × Bau). Sistem menjana satu SKU setiap gabungan. Takrifkan pilihan atribut dalam Katalog → Atribut dahulu.",
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Berbilang gred" },
      {
        type: "p",
        text: "Pada produk Timbang, editor SKU menambah tab Gred produk. Tambah sehingga 10 baris gred untuk SKU yang sama (cth Premium / Gred A / Gred B). Setiap baris membawa harga jualannya sendiri, suis Termasuk Cukai, dan 5 tahap harga aras. Pembeli memilih gred tertentu di pembayaran; jumlah pesanan menggunakan harga gred tersebut.",
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Kategori dan tag" },
      {
        type: "p",
        text: "Kumpulkan produk ke dalam kategori untuk mengawal cara ia muncul dalam bar sisi portal dan kategori yang boleh dilayari oleh pembeli. Tag ialah label bentuk bebas untuk penapisan dan carian.",
      },
      { type: "h2", id: "images", text: "Imej dan terjemahan" },
      {
        type: "p",
        text: "Muat naik sehingga satu imej setiap produk — ia menjadi hero etalase. Jika anda beroperasi di berbilang rantau, tambah nama dan penerangan yang diterjemahkan dari halaman edit produk — ia secara automatik tersebar ke lokal yang sepadan.",
      },
    ],
    toc: [
      { id: "create-product", text: "Cipta produk", level: 2 },
      { id: "standard", text: "Piawai", level: 3 },
      { id: "weighed", text: "Timbang", level: 3 },
      { id: "multi-spec", text: "Berbilang spesifikasi", level: 3 },
      { id: "multi-grade", text: "Berbilang gred", level: 3 },
      { id: "categories", text: "Kategori dan tag", level: 2 },
      { id: "images", text: "Imej dan terjemahan", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Sediakan portal pesanan",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Tahap harga dan harga pelanggan",
    },
  },
  {
    locale: "ms",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Tahap harga dan harga pelanggan",
    description:
      "Konfigurasikan 5 tahap harga setiap SKU, sediakan harga bergred untuk produk timbang, dan tetapkan setiap pelanggan kepada aras harga yang memutuskan aras yang mereka lihat dalam portal pesanan.",
    keywords: [
      "tahap harga",
      "penentuan harga borong",
      "penggredan buah",
      "aras harga pelanggan",
    ],
    readingTime: "6 minit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Penentuan harga Wholesalify dibina di sekitar dua idea: setiap SKU membawa 5 tahap harga (Aras Harga 1–5), dan setiap pelanggan ditetapkan kepada satu daripada 5 aras tersebut dalam profil mereka. Kedua-dua sisi dipetakan 1-ke-1 dan dikonfigurasikan di dua tempat: aras SKU dalam Produk → editor SKU, aras pelanggan dalam Pelanggan → Edit pelanggan.",
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Tahap harga pada setiap SKU",
      },
      {
        type: "p",
        text: "Pada tab Maklumat asas mana-mana SKU, input Harga jual mempunyai ikon slider di sebelah kanannya. Klik untuk membuka dialog Aras Harga, di mana anda boleh mengisi 5 harga berasingan (Aras Harga 1 hingga Aras Harga 5) dan togol Termasuk Cukai untuk setiap satu secara bebas.",
      },
      {
        type: "ul",
        items: [
          "5 tahap memetakan kepada 5 aras harga pelanggan (ditetapkan pada profil pelanggan — lihat di bawah).",
          "Titik kecil pada ikon menunjukkan bahawa sekurang-kurangnya satu harga tahap telah ditetapkan (>0); titik hanya maklumat.",
          "Satu SKU membawa satu set 5 harga tahap; jumlah yang dipaparkan sebenar juga bergantung pada unit asas / unit jual, skim cukai, dan mata wang.",
          "Harga yang dilihat pelawat yang log keluar dikawal oleh Tetapan → Showroom → Aras Harga Jualan; harga perbandingan tercoret dikawal oleh Aras Harga Banding.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Tetapan gred untuk produk timbang",
      },
      {
        type: "p",
        text: "Apabila mod produk ialah Timbang, editor SKU menunjukkan tab Gred produk tambahan. Di sana anda boleh menambah sehingga 10 baris gred untuk SKU yang sama (cth Premium / Gred A / Gred B). Setiap baris mempunyai nama gred, harga jual (akhiran tetap /{baseUnit}, cth /kg), suis termasuk cukai, dan ikon slider yang sama pada input harga — mengkliknya membuka dialog Aras Harga 5 tahap yang sama supaya gred tertentu boleh membawa 5 harganya sendiri.",
      },
      {
        type: "ul",
        items: [
          "Sehingga 10 baris gred; memadam baris terakhir meninggalkan baris kosong daripada memadam keseluruhan bahagian.",
          "Akhiran harga sentiasa /{baseUnit} (cth /kg) untuk memadankan konvensi jualan timbang.",
          "Pembeli memilih gred tertentu apabila membuat pesanan; jumlah pesanan dikira menggunakan harga gred tersebut.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Tahap harga untuk produk berbilang unit jual",
      },
      {
        type: "p",
        text: "Produk bukan timbang boleh mempunyai berbilang unit jual (cth Peti / Keping / Set) yang dikonfigurasikan pada tab Unit jual. Setiap baris unit jual juga mempunyai input harga jual sendiri dengan ikon slider, membuka dialog Aras Harga 5 tahap yang sama supaya unit boleh membawa 5 harganya sendiri ditambah suis cukai.",
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Aras harga pelanggan",
      },
      {
        type: "p",
        text: "Buka mana-mana pelanggan dalam Pengurusan Pelanggan — kawasan maklumat asas mempunyai lungsur Aras Harga dengan lima pilihan (Aras Harga 1 hingga Aras Harga 5). Aras yang anda tetapkan di sini menentukan harga yang mana daripada 5 harga tahap SKU yang dilihat oleh pelanggan apabila mereka log masuk ke portal pesanan. Pelanggan yang ditetapkan kepada Aras Harga 3 akan melihat Aras Harga 3 merentasi keseluruhan katalog.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Bagaimana kedua-dua sisi bersambung",
        text: "Sisi SKU (5 harga tahap) dan sisi pelanggan (Aras Harga 1–5) adalah 1-ke-1: nombor yang dipilih pada profil pelanggan memutuskan harga tahap SKU yang mana yang ditunjukkan portal untuk setiap produk. Jika aras itu dibiarkan kosong, sistem jatuh balik kepada harga jual asas SKU.",
      },
    ],
    toc: [
      { id: "sku-price-levels", text: "Tahap harga pada setiap SKU", level: 2 },
      {
        id: "weighed-grades",
        text: "Tetapan gred untuk produk timbang",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Tahap harga untuk produk berbilang unit jual",
        level: 2,
      },
      { id: "customer-price-level", text: "Aras harga pelanggan", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Bina katalog anda" },
    next: { href: "/docs/orders/dashboard", title: "Papan pemuka pesanan" },
  },

  // ----- Orders -----
  {
    locale: "ms",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Papan pemuka pesanan",
    description:
      "Fahami senarai Pesanan Jualan — lima status pesanan sebenar, penapis yang tersedia, lajur pada jadual, dan tindakan yang tersedia di halaman butiran pesanan.",
    keywords: [
      "papan pemuka pesanan",
      "pesanan borong",
      "pengurusan pesanan B2B",
    ],
    readingTime: "4 minit baca",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Senarai Pesanan Jualan ialah tempat pasukan operasi anda menyemak dan bertindak atas setiap pesanan. Halaman ini menjelaskan setiap kawalan pada senarai, lajur yang anda lihat, dan tindakan yang tersedia di halaman butiran setiap pesanan.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Penapis" },
      {
        type: "ul",
        items: [
          "Carian kata kunci — nombor pesanan, nama pelanggan, nombor PO pelanggan, atau mana-mana teks lain pada pesanan.",
          "Status — lungsur pilih tunggal: Semua, Draf, Disahkan, Dibatalkan, Dibuka Semula, Belum Disahkan.",
          "Julat tarikh — pratetap Hari ini / 7 hari lepas / 30 hari lepas, atau pilih julat tersuai pada kalendar.",
          "Lokasi — penapis gudang berbilang pilih. Kosong bermakna semua gudang.",
          "Status pembayaran — penapis berbilang pilih: Belum bayar, Sebahagian, Dibayar, Berlebihan bayar.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Set semula penapis",
        text: "Gunakan ikon set semula di kanan baris penapis untuk mengosongkan semua penapis kembali ke lalai (30 hari lepas, semua status, semua gudang, semua status pembayaran).",
      },
      { type: "h2", id: "table-columns", text: "Lajur jadual" },
      {
        type: "p",
        text: "Setiap baris senarai menunjukkan dua belas lajur berikut:",
      },
      {
        type: "ol",
        items: [
          "# — indeks baris (halaman × saiz + n).",
          "No. Pesanan — pautan yang boleh diklik yang membuka halaman butiran pesanan dalam tab baru.",
          "Pelanggan — nama pembeli.",
          "Tarikh Perniagaan — tarikh yang direkodkan pada pesanan.",
          "Wang yang Perlu Dibayar — diformatkan dalam mata wang lalai pedagang.",
          "Lokasi — gudang keluar.",
          "Status Pembayaran — diterbitkan daripada baki berbanding yang perlu dibayar.",
          "Status — keadaan semasa pesanan (lihat Status pesanan di bawah).",
          "Dicipta Pada / Dicipta Oleh / Dikemas Kini Pada / Dikemas Kini Oleh — medan audit.",
        ],
      },
      { type: "h2", id: "statuses", text: "Status pesanan" },
      {
        type: "p",
        text: "Setiap pesanan sentiasa berada dalam salah satu daripada lima status berikut. Lencana status ialah label pasif — tidak boleh diklik untuk memajukan pesanan. Untuk menukar status, buka halaman butiran pesanan dan gunakan butang tindakan di sana.",
      },
      {
        type: "table",
        headers: ["Status", "Kod", "Maksud"],
        rows: [
          [
            "Draf",
            "0",
            "Disimpan sebagai draf. Belum dihantar kepada pelanggan.",
          ],
          [
            "Disahkan",
            "1",
            "Dihantar kepada pelanggan / sedia untuk dipenuhi.",
          ],
          [
            "Dibatalkan",
            "2",
            "Dibatalkan; pesanan disimpan untuk audit tetapi tiada tindakan lanjut yang mungkin.",
          ],
          [
            "Dibuka Semula",
            "3",
            "Pesanan yang sebelumnya dibatalkan dibuka semula untuk diedit.",
          ],
          [
            "Belum Disahkan",
            "4",
            "Dipulihkan daripada Disahkan kembali kepada keadaan seperti draf.",
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Tindakan pesanan" },
      {
        type: "p",
        text: "Klik nombor pesanan untuk membuka halaman butiran. Pengepala halaman butiran menunjukkan butang tindakan yang sesuai dengan status semasa. Setiap tindakan dijaga oleh kod kebenaran — butang yang anda tidak mempunyai akses disembunyikan sepenuhnya.",
      },
      {
        type: "ul",
        items: [
          "Simpan — simpan pesanan semasa ia dalam Draf, Dibuka Semula, atau Belum Disahkan.",
          "Sahkan — pindahkan keadaan seperti draf (Draf / Dibuka Semula / Belum Disahkan) kepada Disahkan.",
          "Nyahsahkan — pulihkan pesanan Disahkan kepada Belum Disahkan (kemudian boleh disunting dan disahkan semula).",
          "Batalkan — batalkan pesanan Disahkan kepada Dibatalkan.",
          "Buka Semula — bawa pesanan Dibatalkan kembali kepada Dibuka Semula untuk diedit.",
          "Padam — alih keluar pesanan secara kekal. Hanya tersedia pada Draf, Belum Disahkan, dan Dibuka Semula.",
          "Pulangan / Batal Pulangan — pada item baris pesanan Disahkan, proses pulangan pelanggan separa atau batalkan satu.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Peralihan status dan kesan stok",
      },
      {
        type: "p",
        text: "Setiap perubahan stok direkodkan sebagai satu baris dalam lejar stok dan boleh dijejak kembali kepada pesanan sumbernya. Jadual di bawah meringkaskan kesan inventori setiap tindakan:",
      },
      {
        type: "table",
        headers: ["Tindakan", "Perubahan status", "Kesan stok", "Nota"],
        rows: [
          [
            "Sahkan",
            "Draf / Dibuka Semula / Belum Disahkan → Disahkan",
            "Tolak ( − )",
            "Keluar daripada gudang pesanan untuk setiap item baris; kos ditulis pada pesanan pada masa pengesahan.",
          ],
          [
            "Nyahsahkan",
            "Disahkan → Belum Disahkan",
            "Pulangkan ( + )",
            "Putar balik penolakan daripada Sahkan terkini; medan kos pesanan dikosongkan.",
          ],
          [
            "Batalkan",
            "Disahkan → Dibatalkan",
            "Pulangkan ( + )",
            "Putar balik penolakan daripada Sahkan terkini; pesanan disimpan untuk audit dan tidak boleh dimajukan lagi.",
          ],
          [
            "Buka Semula",
            "Dibatalkan → Dibuka Semula",
            "Tiada perubahan",
            "Stok sudah dipulangkan apabila pesanan dibatalkan. Buka Semula hanya menukar status; Sahkan seterusnya akan menolak lagi.",
          ],
          [
            "Pulangan",
            "Disahkan (setiap baris)",
            "Pulangan separa ( + )",
            "Menambah baris kuantiti negatif untuk item baris pesanan Disahkan dan memulangkan kuantiti tersebut kepada stok.",
          ],
          [
            "Batal Pulangan",
            "Disahkan (setiap baris)",
            "Tolak lagi ( − )",
            "Mengalih keluar baris pulangan yang direkodkan sebelumnya dan menolak semula kuantiti asal daripada stok.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Kedua-dua Batal dan Nyahsahkan memulangkan stok",
        text: "Kedua-dua tindakan mempunyai kesan inventori yang sama: kedua-duanya memutar balik penolakan daripada Sahkan terkini. Perbezaannya ialah status terminal — Batal memindahkan pesanan kepada Dibatalkan (terminal, tiada perubahan status lanjut yang mungkin); Nyahsahkan memindahkannya kepada Belum Disahkan (masih boleh disunting, Sahkan baharu akan menolak stok lagi).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Tiada operasi pukal",
        text: "Senarai Pesanan Jualan tidak menyokong pemilihan baris atau tindakan pukal. Setiap pesanan mesti dibuka secara individu untuk bertindak.",
      },
    ],
    toc: [
      { id: "filters", text: "Penapis", level: 2 },
      { id: "table-columns", text: "Lajur jadual", level: 2 },
      { id: "statuses", text: "Status pesanan", level: 2 },
      { id: "actions", text: "Tindakan pesanan", level: 2 },
      {
        id: "inventory-impact",
        text: "Peralihan status dan kesan stok",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Tahap harga dan harga pelanggan",
    },
    next: { href: "/docs/inventory/stock", title: "Tahap stok" },
  },

  // ----- Inventory -----
  {
    locale: "ms",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Tahap stok",
    description:
      "Jejak stok setiap lokasi, setiap gudang, dan setiap varian produk. Konfigurasikan unit inventori asas dan peraturan penukaran anda.",
    keywords: ["pengurusan stok", "inventori borong", "berbilang gudang"],
    readingTime: "5 minit baca",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Modul inventori Wholesalify mengekalkan kiraan masa nyata untuk setiap varian produk, setiap gudang. Stok secara automatik diselaraskan apabila pesanan disahkan dan apabila resit pembelian diposkan.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Gudang" },
      {
        type: "p",
        text: "Tambah seberapa banyak gudang yang anda kendalikan. Setiap produk mempunyai kiraan stok berasingan setiap gudang, yang membolehkan anda memenuhi pesanan dari lokasi terdekat dengan pembeli.",
      },
      { type: "h2", id: "stock-units", text: "Unit stok dan penukaran" },
      {
        type: "p",
        text: 'Untuk produk hasil segar, tetapkan unit inventori kepada kilogram. Tambah saiz pek seperti "kotak 5 kg" atau "bakul 10 kg" dengan penukaran automatik supaya pembeli boleh membuat pesanan dalam unit tersebut tanpa anda perlu menterjemahkan stok secara manual.',
      },
      { type: "h2", id: "stock-adjustments", text: "Pelarasan stok manual" },
      {
        type: "p",
        text: "Kehilangan beberapa peti akibat kerosakan? Buka produk, pilih Laraskan stok, dan masukkan kuantiti positif atau negatif dengan sebab. Pelarasan direkodkan dalam log audit dengan pengguna, tarikh, dan foto pilihan.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Gudang", level: 2 },
      { id: "stock-units", text: "Unit stok dan penukaran", level: 2 },
      {
        id: "stock-adjustments",
        text: "Pelarasan stok manual",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Papan pemuka pesanan" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Cipta pesanan pembelian",
    },
  },

  // ----- Purchasing -----
  {
    locale: "ms",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Cipta pesanan pembelian",
    description:
      "Bina pesanan pembelian dengan pembekal anda, jejak penghantaran masuk, dan poskan resit yang mengemas kini stok secara automatik.",
    keywords: ["pesanan pembelian", "pengurusan pembekal", "pembelian borong"],
    readingTime: "6 minit baca",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Pesanan pembelian memberitahu pembekal anda apa yang perlu dihantar, bila, dan pada harga berapa. Apabila barang tiba, memposkan resit mengemas kini stok dan rekod pembekal dalam satu langkah.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "Langkah 1 — Tambah pembekal" },
      {
        type: "p",
        text: "Buka Pembelian → Pembekal → Pembekal baru. Masukkan butiran hubungan, dan masa utama yang biasanya mereka hantar.",
      },
      { type: "h2", id: "build-po", text: "Langkah 2 — Bina PO" },
      {
        type: "p",
        text: "Klik Pesanan pembelian baru, pilih pembekal, dan tambah item baris. Harga lalai kepada harga terakhir pembekal tetapi anda boleh mengatasi setiap baris.",
      },
      { type: "h2", id: "receive", text: "Langkah 3 — Terima penghantaran" },
      {
        type: "p",
        text: "Apabila barang tiba, klik Terima pada PO. Masukkan kuantiti yang dihantar sebenar — resit separa disokong — dan sahkan. Tahap stok dikemas kini secara automatik dan invois pembekal dicipta.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Peralihan status dan kesan stok",
      },
      {
        type: "p",
        text: "Pesanan pembelian dan pesanan jualan berkongsi lejar stok yang sama, tetapi mengalir dalam arah yang bertentangan — mengesahkan pesanan pembelian menambah stok (+), manakala mengesahkan pesanan jualan mengeluarkannya (−). Jadual di bawah meringkaskan empat tindakan utama dan kesannya terhadap stok:",
      },
      {
        type: "table",
        headers: ["Tindakan", "Perubahan status", "Kesan stok", "Nota"],
        rows: [
          [
            "Sahkan PO",
            "Draf / Dibuka Semula / Belum Disahkan → Disahkan",
            "Stok masuk ( + )",
            "Barang diterima ke gudang destinasi setiap item baris; kos pembelian direkodkan pada pesanan.",
          ],
          [
            "Nyahsahkan",
            "Disahkan → Belum Disahkan",
            "Stok keluar ( − )",
            "Putar balik stok yang ditambah apabila PO disahkan; kos pembelian dikosongkan.",
          ],
          [
            "Batalkan PO",
            "Disahkan → Dibatalkan",
            "Stok keluar ( − )",
            "Putar balik stok yang ditambah apabila PO disahkan; pesanan disimpan untuk audit sahaja.",
          ],
          [
            "Buka Semula",
            "Dibatalkan → Dibuka Semula",
            "Tiada perubahan stok",
            "Stok sudah diputar balik oleh Batalkan; Buka Semula hanya menukar status. Pesanan boleh Disahkan semula untuk menambah stok.",
          ],
          [
            "Pulangan",
            "Disahkan (setiap baris)",
            "Stok keluar separa ( − )",
            "Pulangkan sebahagian baris yang disahkan kepada pembekal — baris kuantiti negatif ditambah dan stok dikurangkan.",
          ],
          [
            "Batal Pulangan",
            "Disahkan (setiap baris)",
            "Tambah stok semula ( + )",
            "Putar balik pulangan — baris negatif dialih keluar dan stok ditambah semula pada kuantiti asal.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Mengesahkan PO menambah stok — bukan mengeluarkannya",
        text: "Mengesahkan pesanan pembelian bermakna barang telah tiba secara fizikal dan disimpan, jadi stok naik (+). Ini adalah bertentangan dengan mengesahkan pesanan jualan, yang turun (−). Jangan kelirukan kedua-dua arah: Nyahsahkan tidak memulangkan barang kepada pembekal — ia hanya memutar balik stok yang ditambah apabila anda mengesahkan.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Batal dan Nyahsahkan kedua-duanya memutar balik stok",
        text: "Kedua-dua tindakan mempunyai kesan yang sama terhadap stok — kedua-duanya memutar balik stok yang ditambah oleh Sahkan sebelumnya. Perbezaannya ialah status akhir: Batal memindahkan pesanan kepada Dibatalkan (terminal), manakala Nyahsahkan memindahkannya kepada Belum Disahkan (masih boleh disunting, dan Sahkan seterusnya akan menambah stok semula).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Langkah 1 — Tambah pembekal", level: 2 },
      { id: "build-po", text: "Langkah 2 — Bina PO", level: 2 },
      { id: "receive", text: "Langkah 3 — Terima penghantaran", level: 2 },
      {
        id: "inventory-impact",
        text: "Peralihan status dan kesan stok",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Tahap stok" },
  },

  // ===================================================================
  // ARABIC (ar)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "ar",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "نظرة عامة على Wholesalify",
    description:
      "نظرة عامة على Wholesalify — منصة B2B لطلبات الجملة مخصصة لشركات المنتجات الطازجة والسلع الاستهلاكية سريعة التداول وقطاعات الجملة متعددة المواصفات.",
    keywords: ["منصة جملة", "طلبات B2B", "نظرة عامة على SaaS للجملة"],
    readingTime: "قراءة 4 دقائق تقريبًا",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify هي منصة حديثة لطلبات الجملة بين الشركات (B2B) مصممة خصيصًا لتجار الجملة والموزعين وشركات التجارة. فهي تجمع بين بوابة طلبات موجهة للعملاء ولوحة إدارة قوية، مما يتيح لفريقك إدارة الطلبات والمخزون والمشتريات وحسابات العملاء ضمن نظام واحد.",
      },
      {
        type: "p",
        text: "سواء كنت تبيع المنتجات الطازجة بالوزن، أو تبيع الفواكه بالدرجة والصندوق الكامل، أو تبيع منتجات بمواصفات متعددة وفق SKU، فإن Wholesalify يوفر لك نماذج كتالوج وتسعير مرنة تتوافق مع طريقة عملك الفعلية.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "ما الذي يمكن أن يفعله Wholesalify لك",
      },
      {
        type: "ul",
        items: [
          "دعم البيع بالوزن أو بالصندوق/الطبلية أو بالوحدة ضمن كتالوج واحد.",
          "تسعير متعدد الطبقات للفواكه والمنتجات الزراعية حسب الدرجة أو المواصفة أو الكمية.",
          "إدارة متوازية للمنتجات الموزونة والمصنفة بالدرجات والمتعددة المواصفات.",
          "بوابة طلبات ذاتية الخدمة لكل عميل جملة مع سجل طلبات تاريخي.",
          "تتبع الطلبات والتحصيلات وحالات التسليم في لوحة عمل موحدة.",
          "إنشاء تقارير المخزون وتشغيل إعادة الطلب تلقائيًا.",
          "إدارة الموردين وأوامر الشراء واستلام البضائع.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "كيف تتكامل المنصة",
      },
      {
        type: "p",
        text: "تتكون Wholesalify من ثلاث طبقات تشترك في نفس مصدر البيانات:",
      },
      {
        type: "ul",
        items: [
          "بوابة الطلبات — واجهة المتجر الموجهة لعملاء الجملة.",
          "لوحة الإدارة — لوحة العمل الخلفية لفريق العمليات.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "من يستخدم Wholesalify",
      },
      {
        type: "ul",
        items: [
          "تجار جملة المنتجات الطازجة (الفواكه والخضروات والمأكولات البحرية).",
          "موزعو الأغذية والسلع الاستهلاكية سريعة التداول.",
          "تجار جملة مواد البناء والمعدات.",
          "المستوردون وشركات التجارة متعددة الوحدات.",
          "الشركات الصغيرة والمتوسطة التي سئمت من استخدام Excel وWhatsApp.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "الخطوات التالية",
      },
      {
        type: "ul",
        items: [
          "اقرأ «البدء السريع» لإنشاء حسابك وتقديم أول طلب اختبار.",
          "راجع دليل «بوابة الطلبات» لبناء كتالوج الجملة.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "هل أنت مستعد للبدء؟",
        text: "سجّل الآن للحصول على تجربة مجانية، دون الحاجة إلى بطاقة ائتمان. أنشئ حسابك، وأضف بعض المنتجات، ثم قدّم أول طلب اختبار — كل ذلك في أقل من 15 دقيقة.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "تسجيل مجاني",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "ما الذي يمكن أن يفعله Wholesalify لك",
        level: 2,
      },
      { id: "how-it-fits-together", text: "كيف تتكامل المنصة", level: 2 },
      { id: "who-uses-it", text: "من يستخدم Wholesalify", level: 2 },
      { id: "next-steps", text: "الخطوات التالية", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "البدء السريع" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "ar",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "البدء السريع",
    description:
      "أنشئ حسابك على Wholesalify، وأضف منتجك الأول، وأرسل أول طلب جملة في أقل من 15 دقيقة.",
    keywords: ["البدء السريع", "إعداد الحساب", "أول طلب"],
    readingTime: "قراءة 3 دقائق",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "سيرشدك هذا الدليل خلال إعداد حسابك وإنشاء أول طلب جملة. يفترض أنك تستخدم Wholesalify للمرة الأولى ولا تملك أي بيانات في النظام بعد.",
      },
      {
        type: "h2",
        id: "create-account",
        text: "الخطوة 1 — أنشئ حسابك",
      },
      {
        type: "p",
        text: "اذهب إلى صفحة التسجيل على Wholesalify. أدخل اسم شركتك وعنوان بريدك الإلكتروني وكلمة المرور. تتلقى رسالة تأكيد عبر البريد الإلكتروني فورًا — انقر على الرابط لتفعيل حسابك وتسجيل الدخول.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "الخطوة 2 — أضف منتجك الأول",
      },
      {
        type: "p",
        text: "بعد تسجيل الدخول، تنتقل تلقائيًا إلى كتالوج المنتجات. انقر على «منتج جديد» وأدخل اسم المنتج ووحدة البيع الأساسية (مثلًا الكيلوجرام للصناديق أو القطعة لكل وحدة) والسعر الابتدائي. يمكنك تعديل كل شيء لاحقًا، فلا تقلق بشأن البدء بشكل مثالي.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "الخطوة 3 — ادعُ عميلك الأول",
      },
      {
        type: "p",
        text: "في بوابة الإدارة، افتح «العملاء» ثم «عميل جديد». أدخل اسم العميل ومعلومات الاتصال به ومستوى السعر الافتراضي. يحصل العميل على دعوة عبر البريد الإلكتروني لإنشاء كلمة المرور الخاصة به وبدء تصفح الكتالوج.",
      },
      {
        type: "h2",
        id: "place-order",
        text: "الخطوة 4 — قدّم طلبًا",
      },
      {
        type: "p",
        text: "افتح بوابة الطلبات بصفة العميل، وأضف منتجًا إلى السلة، وأكمل عملية السحب لإنشاء الطلب. يتحول الطلب فورًا إلى حالة «مفتوح» في لوحة الإدارة، ويكون جاهزًا للمعالجة.",
      },
      {
        type: "callout",
        variant: "success",
        title: "تهانينا!",
        text: "أتممت للتو إعداد Wholesalify بالكامل. من هنا يمكنك بناء الكتالوج أو تكوين مستويات الأسعار أو استكشاف بقية الوثائق.",
      },
    ],
    toc: [
      { id: "create-account", text: "الخطوة 1 — أنشئ حسابك", level: 2 },
      { id: "add-product", text: "الخطوة 2 — أضف منتجك الأول", level: 2 },
      { id: "invite-buyer", text: "الخطوة 3 — ادعُ عميلك الأول", level: 2 },
      { id: "place-order", text: "الخطوة 4 — قدّم طلبًا", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "نظرة عامة" },
    next: { href: "/docs/get-started/concepts", title: "المفاهيم الأساسية" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "ar",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "المفاهيم الأساسية",
    description:
      "تعرّف على النماذج الأساسية لمنصة Wholesalify: الكتالوج ومستويات الأسعار والعملاء وأوامر الشراء.",
    keywords: ["المصطلحات", "نموذج البيانات", "أساسيات الجملة"],
    readingTime: "قراءة 5 دقائق",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "تشرح هذه الصفحة المفاهيم الأساسية التي تحتاجها للتعامل مع Wholesalify. إذا كنت قادمًا من نظام إدارة طلبات تقليدي أو كنت تبدأ من الصفر، فإن فهم هذه المصطلحات سيجعل بقية الوثائق أكثر وضوحًا.",
      },
      {
        type: "h2",
        id: "tenants",
        text: "الحسابات (Tenants) ومساحات العمل",
      },
      {
        type: "p",
        text: "كل حساب على Wholesalify منفصل تمامًا عن غيره. الكتالوج والعملاء والمخزون والأوامر كلها محتواة داخل حسابك. وهذا يعني أن بإمكانك تشغيل عدة علامات تجارية أو شركات قابضة ضمن حساب واحد على المنصة، والحفاظ على بيانات منفصلة لكل وحدة أعمال.",
      },
      {
        type: "h2",
        id: "products",
        text: "المنتجات والمتغيرات",
      },
      {
        type: "p",
        text: "المنتج هو قالب. يحدد المتغير الكمية الفعلية التي يبيعها العميل — على سبيل المثال التفاح الأخضر 5 كجم أو الكمثرى بالدرجة A. حتى المنتجات البسيطة التي لا تحتاج إلى تعقيد المواصفات تُخزَّن على هيئة منتج واحد ومتغير واحد.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "مستويات الأسعار وأسعار العملاء",
      },
      {
        type: "p",
        text: "يحدد مستوى السعر فئة تسعير، مثل «تجزئة» أو «جملة» أو «VIP». يربط كل عميل بمستوى واحد افتراضيًا، ولكن يمكن تجاوز ذلك لكل منتج داخل الطلب. ويمكنك إنشاء مستويات أسعار غير محدودة وتنظيم الازدحامات السعرية حسب الفئة أو الحجم.",
      },
      {
        type: "h2",
        id: "orders",
        text: "الطلبات وحالاتها",
      },
      {
        type: "p",
        text: "يمر كل طلب عبر سلسلة من الحالات من إنشائه وحتى تسليمه. تبدأ الطلبات بحالة «مفتوحة»، وتنتقل إلى «مؤكدة» بمجرد تأكيد فريقك لها وتخصيص المخزون لها، ثم «مشحونة» عند خروجها للتسليم، وأخيرًا «مكتملة». ويسمح لك النظام بإعادة فتح الطلب أو إلغائه في أي مرحلة.",
      },
      {
        type: "h2",
        id: "stock",
        text: "المخزون والمستودعات",
      },
      {
        type: "p",
        text: "يُسجَّل المخزون لكل متغير من المنتج ولكل مستودع على حدة. وعند تأكيد الطلب، يتم حجز الكمية تلقائيًا من المستودع المخصص له، ولا يمكن تأكيد الطلبات التي تتجاوز المخزون المتاح إلا بإذن صريح.",
      },
    ],
    toc: [
      { id: "tenants", text: "الحسابات ومساحات العمل", level: 2 },
      { id: "products", text: "المنتجات والمتغيرات", level: 2 },
      { id: "price-levels", text: "مستويات الأسعار وأسعار العملاء", level: 2 },
      { id: "orders", text: "الطلبات وحالاتها", level: 2 },
      { id: "stock", text: "المخزون والمستودعات", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "البدء السريع" },
    next: { href: "/docs/ordering-portal/setup", title: "إعداد البوابة" },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "ar",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "إعداد بوابة الطلبات",
    description:
      "اضبط بوابة الطلبات لتطابق علامتك التجارية وأضف شروط الدفع وحدد المدة التي يعرضها فيها كتالوجك.",
    keywords: ["إعداد البوابة", "العلامة التجارية", "شروط الدفع"],
    readingTime: "قراءة 4 دقائق",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "بمجرد إضافة بعض المنتجات والعملاء، خصّص بوابة الطلبات بحيث تبدو وتشعر بأنها ممتدة لعلامتك التجارية. تتحكم هذه الإعدادات في المظهر المرئي، وشروط الدفع، وأيام العمل، والمدة التي يعرض فيها العميل الكتالوج قبل الحاجة إلى تحديثه.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "العلامة التجارية والمظهر المرئي" },
      {
        type: "p",
        text: "افتح «الإعدادات» ← «العلامة التجارية». ارفع شعارك واختر اللون الأساسي ولون التمييز اللذين سيظهران في جميع صفحات البوابة. ستنعكس هذه التغييرات فورًا لكل عميل يسجل دخوله.",
      },
      {
        type: "h2",
        id: "payment-terms",
        text: "شروط الدفع",
      },
      {
        type: "p",
        text: "في «الإعدادات» ← «الدفع»، عرّف طرق الدفع المقبولة. على سبيل المثال: «تحويل مصرفي (صافي 30 يومًا)»، أو «بطاقة ائتمان»، أو «دفع نقدي عند التسليم». تظهر هذه الشروط في أسفل كل طلب.",
      },
      {
        type: "callout",
        variant: "info",
        title: "الشروط هي الافتراضي، ويمكن تجاوزها لكل عميل",
        text: "إذا كانت لديك علاقة «صافي 30» مع معظم العملاء ولكن أحد عملاء الكبار يحصل على «صافي 60»، فيمكنك تجاوز الشروط عالميًا داخل ملف العميل.",
      },
    ],
    toc: [
      { id: "branding", text: "العلامة التجارية والمظهر المرئي", level: 2 },
      { id: "payment-terms", text: "شروط الدفع", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "المفاهيم الأساسية" },
    next: { href: "/docs/ordering-portal/catalog", title: "كتالوج B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "ar",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "كتالوج B2B",
    description:
      "أضف المنتجات ومتغيراتها إلى الكتالوج، وعرّف خيارات البيع بالوزن والدرجة والمتغيرات، وشارك الكتالوج مع عملائك.",
    keywords: ["كتالوج B2B", "إدارة المنتجات", "متغيرات المنتج"],
    readingTime: "قراءة 6 دقائق",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "الكتالوج هو ما يراه عملاؤك عند تسجيل الدخول إلى بوابة الطلبات. يُنظَّم الكتالوج إلى فئات، وكل منتج له متغير أو أكثر. وتدعم منصة Wholesalify ثلاثة أساليب رئيسية لبيع المنتجات ضمن كتالوج واحد.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "المنتجات القياسية" },
      {
        type: "p",
        text: "المنتجات القياسية تُباع بالقطعة. فمثلًا صندوق من 24 زجاجة، أو طبلية من 50 كيسًا. كل منتج له متغير افتراضي واحد ولكن يمكن إضافة المتغيرات للمواصفات المختلفة.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "المنتجات الموزونة" },
      {
        type: "p",
        text: "تُباع المنتجات الموزونة بالكيلوجرام أو الرطل. يحدد المتغير وحدة الوزن وسعر الوحدة، ويتيح للعميل إدخال الكمية بأي مضاعف للوحدة. وهذا مثالي للمنتجات الطازجة والمكونات السائبة.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "المنتجات متعددة المواصفات" },
      {
        type: "p",
        text: "تأتي بعض المنتجات بمواصفات متعددة — على سبيل المثال الكمثرى بأحجام (صغير/متوسط/كبير) أو ألوان أو نكهات. تُولَّد المتغيرات تلقائيًا استنادًا إلى مجموعات المواصفات التي تحددها للمنتج.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "المنتجات القياسية", level: 2 },
      { id: "weighed", text: "المنتجات الموزونة", level: 2 },
      { id: "multi-spec", text: "المنتجات متعددة المواصفات", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "إعداد بوابة الطلبات",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "مستويات الأسعار وأسعار العملاء",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "ar",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "مستويات الأسعار وأسعار العملاء",
    description:
      "أنشئ مستويات أسعار وخصومات حسب الكمية وقواعد تسعير خاصة بالفواكه الموزونة يمكن تطبيقها على العملاء أو المنتجات.",
    keywords: ["مستوى السعر", "الخصم حسب الكمية", "تسعير الفواكه"],
    readingTime: "قراءة 7 دقائق",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "تدعم Wholesalify نماذج تسعير مرنة يمكنها التعامل مع التعقيد الذي يميز عمليات الجملة الحقيقية — عبر مستويات العملاء والخصومات حسب الكمية وتسعير الفواكه الموزونة.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "مستويات الأسعار" },
      {
        type: "p",
        text: "مستوى السعر هو مجرد تسمية لفئة تسعير، على سبيل المثال «تجزئة» أو «جملة» أو «VIP». أنشئ العدد الذي تحتاجه، ثم اربط كل عميل بمستوى افتراضي. يحدد مستوى السعر الافتراضي السعر الذي يدفعه العميل لكل منتج ما لم يتم تجاوزه يدويًا.",
      },
      { type: "h2", id: "tiered", text: "الخصومات حسب الكمية" },
      {
        type: "p",
        text: "بالنسبة للمنتجات التي تُشترى بكميات كبيرة، يمكنك إعداد خصومات تدريجية على مستوى السعر. فمثلًا اشترِ 10 صناديق بالسعر الكامل، و25 صندوقًا بخصم 5%، و50 صندوقًا أو أكثر بخصم 10%. تُطبَّق الخصومات تلقائيًا عند ملء الكمية في السلة.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "تسعير الفواكه الموزونة بالدرجات",
      },
      {
        type: "p",
        text: "تُباع الفواكه عادةً بدرجات (A، B، C) بأسعار مختلفة، وأحيانًا بوحدات مختلفة (صندوق، طبلية، كيلوغرام). يدعم نموذج تسعير الفواكه في Wholesalify كلتا الحالتين: صف درجاته لكل وحدة، أو اترك وحدة فارغة لتطبيق السعر على كل وحدة افتراضية.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "تجاوزات أسعار العملاء",
      },
      {
        type: "p",
        text: "يتفاوض بعض عملائك الكبار على أسعار محددة خارج مستوى السعر الافتراضي. في هذه الحالة، افتح العميل وأضف قواعد تسعير خاصة به داخل تبويب «التسعير». تتجاوز هذه القواعد كل من مستوى السعر والخصومات حسب الكمية.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "أولوية قواعد التسعير",
        text: "عند وجود عدة قواعد نشطة لنفس المنتج، تُطبَّق الأولوية التالية: (1) سعر العميل الخاص، (2) خصم الكمية على مستوى السعر، (3) سعر مستوى السعر الأساسي.",
      },
    ],
    toc: [
      { id: "price-levels", text: "مستويات الأسعار", level: 2 },
      { id: "tiered", text: "الخصومات حسب الكمية", level: 2 },
      { id: "weighed-fruit", text: "تسعير الفواكه الموزونة", level: 2 },
      { id: "customer-pricing", text: "تجاوزات أسعار العملاء", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "كتالوج B2B" },
    next: { href: "/docs/orders/dashboard", title: "لوحة تحكم الطلبات" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "ar",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "لوحة تحكم الطلبات",
    description:
      "إدارة كل طلب من استلامه حتى تسليمه — تصفية الجدول الزمني وتغيير الحالات ومعالجة الاسترجاعات.",
    keywords: ["لوحة الطلبات", "حالة الطلب", "الاسترجاع"],
    readingTime: "قراءة 6 دقائق",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "تعد لوحة تحكم الطلبات هي نقطة الانطلاق لكل ما يتعلق بطلبات الجملة. فهي تعرض كل طلب في حسابك وتتيح لك التصفية والتأكيد والشحن وإصدار الفواتير وإرجاع البضائع، وكل ذلك من مكان واحد.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "الفلاتر" },
      {
        type: "p",
        text: "تتيح لك الفلاتر الموجودة أعلى الجدول تضييق نطاق القائمة دون الحاجة إلى استخدام البحث النصي. يمكنك الجمع بين عدة فلاتر لتنشيط نطاق دقيق، مثل «جميع الطلبات المؤكدة خلال الأسبوع الماضي من عميل محدد».",
      },
      {
        type: "ul",
        items: [
          "الفترة الزمنية (اليوم، الأسبوع الماضي، الشهر الحالي، النطاق المخصص).",
          "الحالة (مفتوح، مؤكد، ملغى، مكتمل، مُعاد فتحه).",
          "العميل أو مستوى السعر.",
          "المستودع الذي شحن منه الطلب.",
        ],
      },
      { type: "h2", id: "table-columns", text: "أعمدة الجدول" },
      {
        type: "p",
        text: "يحتوي كل صف من الجدول على المفتاح الذي ستحتاجه لمعالجة الطلب بسرعة: تاريخ الطلب، اسم العميل، عدد الأصناف، المجموع الفرعي، والحالة الحالية. انقر فوق أي صف لفتح الطلب وتنفيذ إجراء.",
      },
      { type: "h2", id: "statuses", text: "حالات الطلب" },
      {
        type: "p",
        text: "يمر كل طلب عبر الحالات التالية خلال دورة حياته:",
      },
      {
        type: "ol",
        items: [
          "مفتوح — أُنشئ بواسطة العميل ولم تتم معالجته بعد.",
          "مؤكد — راجعه فريقك وتم تخصيص المخزون، وهو جاهز للشحن.",
          "مشحون — خرج الطلب للتسليم إلى العميل.",
          "مكتمل — تم التسليم ووثقته الاستلامات.",
          "ملغى — أُغلق قبل التأكيد ولا يمكن إعادة فتحه.",
          "أُعيد فتحه — أُلغي سابقًا وأُعيد فتحه لمزيد من المعالجة.",
        ],
      },
      { type: "h2", id: "actions", text: "إجراءات الطلب" },
      {
        type: "p",
        text: "لفتح طلب، انقر فوق صفه. تعرض الشاشة الجانبية تفاصيل الطلب كاملة، بما في ذلك الأصناف والتسعير والعنوان. وتتوفر الإجراءات التالية في الشريط العلوي بناءً على الحالة الحالية:",
      },
      {
        type: "ul",
        items: [
          "تأكيد — نقل الطلب من «مفتوح» إلى «مؤكد» وحجز المخزون.",
          "إلغاء التأكيد — إرجاع الطلب إلى «مفتوح» لتحرير المخزون.",
          "شحن — نقل الطلب من «مؤكد» إلى «مشحون».",
          "إرجاع — تسجيل استرجاع جزئي أو كامل بعد الشحن.",
          "إلغاء — نقل الطلب من «مؤكد» أو «مفتوح» إلى «ملغى».",
          "إعادة الفتح — إرجاع طلب ملغى إلى الحالة «مفتوحة».",
          "إنشاء فاتورة — إصدار فاتورة من الطلب المؤكد أو المشحون.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "تأثير الحالات على المخزون",
      },
      {
        type: "p",
        text: "كل تغيير في حالة الطلب يُسجَّل كسطر في دفتر المخزون، ويمكن تتبعه حتى الطلب الأصلي. يلخص الجدول التالي تأثير كل إجراء على المخزون:",
      },
      {
        type: "table",
        headers: ["الإجراء", "تغيير الحالة", "تأثير المخزون", "ملاحظات"],
        rows: [
          [
            "تأكيد",
            "مسودة / أُعيد فتحه / غير مؤكد ← مؤكد",
            "خصم (−)",
            "يخرج من المستودع المُخصص لكل بند؛ وتُسجَّل التكلفة على الطلب في وقت التأكيد.",
          ],
          [
            "إلغاء التأكيد",
            "مؤكد ← غير مؤكد",
            "إضافة (+)",
            "يعكس الخصم من آخر عملية تأكيد؛ وتُمحى حقل التكلفة في الطلب.",
          ],
          [
            "إلغاء",
            "مؤكد ← ملغى",
            "إضافة (+)",
            "يعكس الخصم من آخر عملية تأكيد؛ ويبقى الطلب للمراجعة، ولا يمكن تقديمه إلى الأمام أكثر من ذلك.",
          ],
          [
            "إعادة فتح",
            "ملغى ← أُعيد فتحه",
            "بلا تأثير",
            "تمت إعادة المخزون بالفعل عند إلغاء الطلب. إعادة الفتح لا يغير سوى الحالة؛ والتأكيد التالي سيخصم مرة أخرى.",
          ],
          [
            "إرجاع",
            "مؤكد (لكل بند)",
            "إرجاع جزئي (+)",
            "يضيف بندًا ذو كمية سالبة لبند الطلب المؤكد، ويضيف تلك الكمية إلى المخزون.",
          ],
          [
            "إلغاء الإرجاع",
            "مؤكد (لكل بند)",
            "خصم آخر (−)",
            "يحذف بند الإرجاع الذي تم تسجيله سابقًا، ويخصم الكمية الأصلية من المخزون مرة أخرى.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "إلغاء وإلغاء التأكيد كلاهما يعيد المخزون",
        text: "كلا الإجراءين لهما نفس التأثير على المخزون: كلاهما يعكس الخصم من آخر عملية تأكيد. الفرق هو في الحالة النهائية — إلغاء ينقل الطلب إلى «ملغى» (نهائي، لا يمكن إجراء المزيد من التغييرات على الحالة)؛ وإلغاء التأكيد ينقله إلى «غير مؤكد» (يمكن تعديله، وإعادة التأكيد سيخصم المخزون مرة أخرى).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "لا توجد عمليات مجمّعة",
        text: "لا تدعم قائمة أوامر البيع تحديد صفوف أو تنفيذ إجراءات مجمّعة. يجب فتح كل طلب على حدة لتنفيذ إجراء.",
      },
    ],
    toc: [
      { id: "filters", text: "الفلاتر", level: 2 },
      { id: "table-columns", text: "أعمدة الجدول", level: 2 },
      { id: "statuses", text: "حالات الطلب", level: 2 },
      { id: "actions", text: "إجراءات الطلب", level: 2 },
      {
        id: "inventory-impact",
        text: "تأثير الحالات على المخزون",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "مستويات الأسعار وأسعار العملاء",
    },
    next: { href: "/docs/inventory/stock", title: "مستويات المخزون" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "ar",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "مستويات المخزون",
    description:
      "تتبع المخزون لكل موقع ولكل مستودع ولكل متغير من المنتج. اضبط وحدة المخزون الأساسية وقواعد التحويل.",
    keywords: ["إدارة المخزون", "مخزون الجملة", "متعدد المستودعات"],
    readingTime: "قراءة 5 دقائق",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "تُبقي وحدة المخزون في Wholesalify حسابًا فوريًا لكل متغير منتج وكل مستودع. تتم مطابقة المخزون تلقائيًا عند تأكيد الطلبات وعند ترحيل إيصالات الشراء.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "المستودعات" },
      {
        type: "p",
        text: "أضف العدد الذي تحتاجه من المستودعات. كل منتج له عدد مخزون منفصل لكل مستودع، مما يتيح لك تنفيذ الطلبات من الموقع الأقرب إلى العميل.",
      },
      { type: "h2", id: "stock-units", text: "وحدات المخزون والتحويلات" },
      {
        type: "p",
        text: "بالنسبة للمنتجات الطازجة، اضبط وحدة المخزون على الكيلوجرام. أضف أحجامًا للعبوات مثل «صندوق 5 كجم» أو «سلة 10 كجم» مع تحويلات تلقائية حتى يتمكن العميل من الطلب بهذه الوحدات دون أن تحتاج إلى ترجمة المخزون يدويًا.",
      },
      { type: "h2", id: "stock-adjustments", text: "تعديلات المخزون اليدوية" },
      {
        type: "p",
        text: "هل فقدت بعض الصناديق بسبب التلف؟ افتح المنتج، واختر «ضبط المخزون»، وأدخل كمية موجبة أو سالبة مع ذكر السبب. تُسجَّل التعديلات في سجل المراجعة مع المستخدم والتاريخ وصورة اختيارية.",
      },
    ],
    toc: [
      { id: "warehouses", text: "المستودعات", level: 2 },
      { id: "stock-units", text: "وحدات المخزون والتحويلات", level: 2 },
      {
        id: "stock-adjustments",
        text: "تعديلات المخزون اليدوية",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "لوحة تحكم الطلبات" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "إنشاء أوامر الشراء",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "ar",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "إنشاء أوامر الشراء",
    description:
      "أنشئ أوامر الشراء لمورديك، وتتبع الشحنات الواردة، وقم بترحيل الإيصالات التي تحدّث المخزون تلقائيًا.",
    keywords: ["أوامر الشراء", "إدارة الموردين", "شراء الجملة"],
    readingTime: "قراءة 6 دقائق",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "يُخبر أمر الشراء مورديك بما يجب شحنه ومتى وبأي سعر. وعندما تصل البضائع، فإن ترحيل الإيصال يُحدّث المخزون وسجل المورد في خطوة واحدة.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "الخطوة 1 — أضف موردًا" },
      {
        type: "p",
        text: "افتح «المشتريات» ← «الموردون» ← «مورد جديد». أدخل بيانات الاتصال ووقت التنفيذ العادي الذي يستغرقه المورد للتسليم.",
      },
      { type: "h2", id: "build-po", text: "الخطوة 2 — أنشئ أمر الشراء" },
      {
        type: "p",
        text: "انقر على «أمر شراء جديد»، واختر المورد، وأضف البنود. يبدأ السعر بسعر آخر عملية شراء من المورد، ولكن يمكنك تجاوز كل بند.",
      },
      { type: "h2", id: "receive", text: "الخطوة 3 — استلم الشحنة" },
      {
        type: "p",
        text: "عندما تصل البضائع، انقر على «استلام» في أمر الشراء. أدخل الكمية المُسلَّمة فعليًا — الإيصالات الجزئية مدعومة — ثم أكّد. تُحدَّث مستويات المخزون تلقائيًا، وتُنشَأ فاتورة المورد.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "تغيير الحالات وتأثير المخزون",
      },
      {
        type: "p",
        text: "تتقاسم أوامر الشراء وأوامر البيع نفس دفتر المخزون، لكنها تتدفق في اتجاهين متعاكسين — فترتيب أمر الشراء يزيد المخزون (+)، بينما ترتيب أمر البيع يخصمه (−). يلخص الجدول التالي أربعة إجراءات رئيسية وتأثيرها على المخزون:",
      },
      {
        type: "table",
        headers: ["الإجراء", "تغيير الحالة", "تأثير المخزون", "ملاحظات"],
        rows: [
          [
            "تأكيد أمر الشراء",
            "مسودة / أُعيد فتحه / غير مؤكد ← مؤكد",
            "إضافة للمخزون (+)",
            "تُسلَّم البضائع إلى المستودع المُخصص لبند معين؛ وتُسجَّل تكلفة الشراء في الطلب.",
          ],
          [
            "إلغاء التأكيد",
            "مؤكد ← غير مؤكد",
            "خصم من المخزون (−)",
            "يعكس المخزون الذي أُضيف عند تأكيد أمر الشراء؛ وتُمحى تكلفة الشراء.",
          ],
          [
            "إلغاء أمر الشراء",
            "مؤكد ← ملغى",
            "خصم من المخزون (−)",
            "يعكس المخزون الذي أُضيف عند تأكيد أمر الشراء؛ ويبقى الطلب لأغراض المراجعة فقط.",
          ],
          [
            "إعادة فتح",
            "ملغى ← أُعيد فتحه",
            "بلا تأثير على المخزون",
            "تمت إعادة المخزون بالفعل عند الإلغاء. إعادة الفتح لا يغير إلا الحالة. يمكن إعادة تأكيد الأمر لإضافة المخزون مرة أخرى.",
          ],
          [
            "إرجاع",
            "مؤكد (لكل بند)",
            "خصم جزئي من المخزون (−)",
            "أعد جزءًا من البند المؤكد إلى المورد — يُضاف بند بكمية سالبة ويُخصم المخزون.",
          ],
          [
            "إلغاء الإرجاع",
            "مؤكد (لكل بند)",
            "إضافة المخزون مرة أخرى (+)",
            "يعكس الإرجاع — يُحذف البند ذو الكمية السالبة، وتُعاد الكمية الأصلية إلى المخزون.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "تأكيد أمر الشراء يُضيف إلى المخزون — لا يخصم منه",
        text: "تأكيد أمر الشراء يعني أن البضائع وصلت فعليًا وتم تخزينها، لذلك يرتفع المخزون (+). هذا عكس تأكيد أمر البيع، الذي ينقصه (−). لا تخلط بين الاتجاهين: إلغاء التأكيد لا يُعد البضائع إلى المورد — بل يعكس المخزون الذي أضفته عند التأكيد.",
      },
      {
        type: "callout",
        variant: "info",
        title: "كل من الإلغاء وإلغاء التأكيد يعكس المخزون",
        text: "كلا الإجراءين لهما نفس التأثير على المخزون — كلاهما يعكس المخزون الذي أضافه التأكيد السابق. الفرق هو في الحالة النهائية: الإلغاء ينقل الأمر إلى «ملغى» (نهائي)، بينما إلغاء التأكيد ينقله إلى «غير مؤكد» (لا يزال قابلاً للتعديل، والتأكيد التالي سيضيف المخزون مرة أخرى).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "الخطوة 1 — أضف موردًا", level: 2 },
      { id: "build-po", text: "الخطوة 2 — أنشئ أمر الشراء", level: 2 },
      { id: "receive", text: "الخطوة 3 — استلم الشحنة", level: 2 },
      {
        id: "inventory-impact",
        text: "تغيير الحالات وتأثير المخزون",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "مستويات المخزون" },
  },

  // ===================================================================
  // TURKISH (tr)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "tr",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Wholesalify'e Genel Bakış",
    description:
      "Wholesalify'e genel bakış — taze ürünler, hızlı tüketim malları ve çoklu özellikli toptan satış işletmeleri için B2B toptan sipariş platformu.",
    keywords: ["toptan platform", "B2B sipariş", "toptan SaaS genel bakış"],
    readingTime: "yaklaşık 4 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify, toptancılar, distribütörler ve ticaret şirketleri için tasarlanmış modern bir B2B toptan sipariş platformudur. Müşteriye dönük sipariş portalını güçlü bir yönetim arka ucuyla birleştirerek ekibinizin siparişleri, stoğu, satın almaları ve müşteri hesaplarını tek bir sistemde yönetmesine olanak tanır.",
      },
      {
        type: "p",
        text: "Taze ürünleri tartıyla, meyveleri kasa veya sınıf bazında ya da SKU bazında çoklu özellikli ürünler olarak satıyor olun, Wholesalify işinizin gerçek işleyişine uyan esnek katalog ve fiyatlandırma modelleri sunar.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Wholesalify sizin için neler yapabilir",
      },
      {
        type: "ul",
        items: [
          "Tek bir katalogda tartıya, kasa/palet'e veya birime göre satışı aynı anda destekleyin.",
          "Meyve ve tarım ürünlerini sınıf, özellik veya miktar bazında katmanlı fiyatlandırın.",
          "Tartılan, sınıflandırılan ve çoklu özellikli ürünleri yan yana yönetin.",
          "Her toptan müşteri için sipariş geçmişiyle self-servis sipariş portalı sunun.",
          "Siparişleri, tahsilatları ve teslimat durumlarını tek bir iş panelinden takip edin.",
          "Stok raporları oluşturun ve otomatik yeniden sipariş tetikleyin.",
          "Tedarikçileri, satın alma siparişlerini ve gelen malları yönetin.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Platform nasıl bir araya geliyor",
      },
      {
        type: "p",
        text: "Wholesalify, aynı veri kaynağını paylaşan üç katmandan oluşur:",
      },
      {
        type: "ul",
        items: [
          "Sipariş Portalı — toptan müşteriler için müşteri tarafı mağaza.",
          "Yönetim Paneli — operasyon ekibi için arka uç iş paneli.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Wholesalify'i kimler kullanıyor",
      },
      {
        type: "ul",
        items: [
          "Taze ürün toptancıları (meyve, sebze, deniz ürünleri).",
          "Gıda ve hızlı tüketim malları distribütörleri.",
          "İnşaat malzemesi ve hırdavat toptancıları.",
          "Çoklu birim ithalatçıları ve ticaret şirketleri.",
          "Excel ve WhatsApp'tan bıkmış KOBİ toptan satış işletmeleri.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Sıradaki adımlar",
      },
      {
        type: "ul",
        items: [
          "İlk kiracınızı oluşturmak ve bir test siparişi vermek için Hızlı Başlangıç'ı okuyun.",
          "Toptan katalogunuzu kurmak için Sipariş Portalı kılavuzunu inceleyin.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Başlamaya hazır mısınız?",
        text: "Hemen ücretsiz deneme için kaydolun, kredi kartı gerekmez. Bir kiracı oluşturun, birkaç ürün ekleyin ve ilk test siparişinizi verin — tüm bunlar 15 dakikadan az sürer.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Ücretsiz kayıt",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Wholesalify sizin için neler yapabilir",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Platform nasıl bir araya geliyor",
        level: 2,
      },
      { id: "who-uses-it", text: "Wholesalify'i kimler kullanıyor", level: 2 },
      { id: "next-steps", text: "Sıradaki adımlar", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Hızlı başlangıç" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "tr",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Hızlı başlangıç",
    description:
      "Wholesalify hesabınızı kurun, ilk ürününüzü ekleyin ve 15 dakikadan kısa sürede ilk toptan siparişinizi gönderin.",
    keywords: ["hızlı başlangıç", "hesap kurulumu", "ilk sipariş"],
    readingTime: "3 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Bu kılavuz, hesabınızı kurma ve ilk toptan siparişinizi oluşturma adımlarında size yol gösterecek. Wholesalify'i ilk kez kullandığınızı ve sistemde henüz hiç veriniz olmadığı varsayılır.",
      },
      {
        type: "h2",
        id: "create-account",
        text: "Adım 1 — Hesabınızı oluşturun",
      },
      {
        type: "p",
        text: "Wholesalify kayıt sayfasına gidin. Şirket adınızı, e-posta adresinizi ve şifrenizi girin. Kısa süre içinde bir onay e-postası alacaksınız — hesabınızı etkinleştirmek ve giriş yapmak için bağlantıya tıklayın.",
      },
      { type: "h2", id: "add-product", text: "Adım 2 — İlk ürününüzü ekleyin" },
      {
        type: "p",
        text: "Giriş yaptıktan sonra otomatik olarak ürün kataloğuna yönlendirilirsiniz. «Yeni ürün»'e tıklayın ve ürün adını, temel satış birimini (örneğin kilogram veya kasa) ve başlangıç fiyatını girin. Her şeyi sonra düzenleyebilirsiniz, mükemmel başlama konusunda endişelenmeyin.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Adım 3 — İlk müşterinizi davet edin",
      },
      {
        type: "p",
        text: "Yönetim panelinde «Müşteriler»'i ve ardından «Yeni müşteri»'yi açın. Müşterinin adını, iletişim bilgilerini ve varsayılan fiyat seviyesini girin. Müşteri, kendi şifresini oluşturmak ve kataloğu taramaya başlamak için e-posta yoluyla bir davetiye alır.",
      },
      { type: "h2", id: "place-order", text: "Adım 4 — Bir sipariş verin" },
      {
        type: "p",
        text: "Müşteri olarak sipariş portalını açın, bir ürünü sepete ekleyin ve siparişi oluşturmak için ödeme adımını tamamlayın. Sipariş anında yönetim panelinde «açık» durumuna geçer ve işlenmeye hazır olur.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Tebrikler!",
        text: "Wholesalify kurulumunu tamamen bitirdiniz. Buradan kataloğu oluşturmaya, fiyat seviyelerini yapılandırmaya veya belgelerin geri kalanını keşfetmeye geçebilirsiniz.",
      },
    ],
    toc: [
      { id: "create-account", text: "Adım 1 — Hesabınızı oluşturun", level: 2 },
      { id: "add-product", text: "Adım 2 — İlk ürününüzü ekleyin", level: 2 },
      {
        id: "invite-buyer",
        text: "Adım 3 — İlk müşterinizi davet edin",
        level: 2,
      },
      { id: "place-order", text: "Adım 4 — Bir sipariş verin", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Genel bakış" },
    next: { href: "/docs/get-started/concepts", title: "Temel kavramlar" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "tr",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Temel kavramlar",
    description:
      "Wholesalify'in temel modellerini tanıyın: katalog, fiyat seviyeleri, müşteriler ve satın alma siparişleri.",
    keywords: ["terminoloji", "veri modeli", "toptan temelleri"],
    readingTime: "5 dakika okuma",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Bu sayfa, Wholesalify ile çalışmak için bilmeniz gereken temel kavramları açıklar. Geleneksel bir sipariş yönetim sisteminden geçiş yapıyorsanız veya sıfırdan başlıyorsanız, bu terimleri anlamak belgelerin geri kalanını çok daha net hale getirecektir.",
      },
      { type: "h2", id: "tenants", text: "Kiracılar ve çalışma alanları" },
      {
        type: "p",
        text: "Her Wholesalify hesabı diğerlerinden tamamen izoledir. Katalog, müşteriler, stok ve siparişlerin tümü hesabınız içinde yer alır. Bu, birden fazla markayı veya holding şirketini tek bir platform hesabı altında çalıştırabileceğiniz ve her iş birimi için verileri ayrı tutabileceğiniz anlamına gelir.",
      },
      { type: "h2", id: "products", text: "Ürünler ve varyantlar" },
      {
        type: "p",
        text: "Ürün bir şablondur. Varyant, müşterinin gerçekten satın aldığı miktarı tanımlar — örneğin 5 kg'lık yeşil elma veya A sınıfı armut. Özellik karmaşıklığı gerektirmeyen basit ürünler bile tek ürün ve tek varyant olarak saklanır.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "Fiyat seviyeleri ve müşteri fiyatları",
      },
      {
        type: "p",
        text: "Fiyat seviyesi bir fiyatlandırma kategorisini — örneğin «perakende», «toptan» veya «VIP» — tanımlar. Her müşteri varsayılan olarak bir seviyeye bağlanır, ancak bu sipariş bazında ürün bazında geçersiz kılınabilir. Sınırsız fiyat seviyesi oluşturabilir ve kategori veya hacme göre ayarlamaları düzenleyebilirsiniz.",
      },
      { type: "h2", id: "orders", text: "Siparişler ve durumları" },
      {
        type: "p",
        text: "Her sipariş oluşturulmasından teslimine kadar bir dizi durumdan geçer. Siparişler «açık» olarak başlar, ekibiniz onaylayıp stok ayırdıktan sonra «onaylı»'ya, çıkış için verildiğinde «gönderildi»'ye ve son olarak «tamamlandı»'ya geçer. Sistem herhangi bir aşamada siparişi yeniden açmanıza veya iptal etmenize izin verir.",
      },
      { type: "h2", id: "stock", text: "Stok ve depolar" },
      {
        type: "p",
        text: "Stok, her ürün varyantı ve her depo için ayrı ayrı kaydedilir. Bir sipariş onaylandığında, miktar otomatik olarak atanan depodan rezerve edilir ve uygun stoğu aşan siparişler açık izin olmadan onaylanamaz.",
      },
    ],
    toc: [
      { id: "tenants", text: "Kiracılar ve çalışma alanları", level: 2 },
      { id: "products", text: "Ürünler ve varyantlar", level: 2 },
      {
        id: "price-levels",
        text: "Fiyat seviyeleri ve müşteri fiyatları",
        level: 2,
      },
      { id: "orders", text: "Siparişler ve durumları", level: 2 },
      { id: "stock", text: "Stok ve depolar", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Hızlı başlangıç" },
    next: { href: "/docs/ordering-portal/setup", title: "Portalı kurma" },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "tr",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Sipariş portalını kurma",
    description:
      "Sipariş portalını markanıza uyacak şekilde yapılandırın, ödeme koşullarını ekleyin ve katalogunuzun ne kadar süreyle geçerli olacağını belirleyin.",
    keywords: ["portal kurulumu", "markalama", "ödeme koşulları"],
    readingTime: "4 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Birkaç ürün ve müşteri ekledikten sonra, sipariş portalını markanızın bir uzantısı gibi görünecek ve hissedilecek şekilde özelleştirin. Bu ayarlar görsel görünümü, ödeme koşullarını, iş günlerini ve müşterinin katalogunuzu ne kadar süreyle görüntüleyebileceğini kontrol eder.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Markalama ve görsel görünüm" },
      {
        type: "p",
        text: "«Ayarlar» ← «Markalama»'yı açın. Logonuzu yükleyin ve portalın tüm sayfalarında görünecek birincil ve vurgu renklerini seçin. Bu değişiklikler oturum açan her müşteri için anında yansıtılır.",
      },
      { type: "h2", id: "payment-terms", text: "Ödeme koşulları" },
      {
        type: "p",
        text: "«Ayarlar» ← «Ödeme» bölümünde, kabul ettiğiniz ödeme yöntemlerini tanımlayın. Örneğin: «Banka havalesi (30 gün net)», «Kredi kartı» veya «Teslimatte nakit». Bu koşullar her siparişin alt kısmında görünür.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Koşullar varsayılandır, müşteri bazında geçersiz kılınabilir",
        text: "Çoğu müşteriyle «net 30» ilişkiniz varsa, ancak büyük bir müşteriniz «net 60» alıyorsa, koşulları müşteri dosyası içinde genel olarak geçersiz kılabilirsiniz.",
      },
    ],
    toc: [
      { id: "branding", text: "Markalama ve görsel görünüm", level: 2 },
      { id: "payment-terms", text: "Ödeme koşulları", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Temel kavramlar" },
    next: { href: "/docs/ordering-portal/catalog", title: "B2B kataloğu" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "tr",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "B2B kataloğu",
    description:
      "Ürünleri ve varyantlarını kataloğa ekleyin, tartılan ve sınıflandırılan satış seçeneklerini tanımlayın ve kataloğu müşterilerinizle paylaşın.",
    keywords: ["B2B kataloğu", "ürün yönetimi", "ürün varyantları"],
    readingTime: "6 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Katalog, müşterileriniz sipariş portalında oturum açtığında gördükleri şeydir. Kategoriler halinde düzenlenir ve her ürün bir veya daha fazla varyanta sahiptir. Wholesalify tek bir katalogda üç ana ürün satış stilini destekler.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Standart ürünler" },
      {
        type: "p",
        text: "Standart ürünler birim başına satılır — örneğin 24 şişelik bir kasa veya 50 torbalık bir palet. Her ürünün bir varsayılan varyantı vardır, ancak farklı özellikler için ek varyantlar eklenebilir.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Tartılan ürünler" },
      {
        type: "p",
        text: "Tartılan ürünler kilogram veya pound olarak satılır. Varyant, ağırlık birimini ve birim fiyatını tanımlar ve müşterinin miktarı birimin herhangi bir katı olarak girmesine olanak tanır. Bu, taze ürünler ve dökme malzemeler için idealdir.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Çoklu özellikli ürünler" },
      {
        type: "p",
        text: "Bazı ürünler birden fazla özellik ile gelir — örneğin boyutları (küçük/orta/büyük), renkleri veya aromaları olan armutlar. Varyantlar, ürün için tanımladığınız özellik kombinasyonlarına göre otomatik olarak oluşturulur.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Standart ürünler", level: 2 },
      { id: "weighed", text: "Tartılan ürünler", level: 2 },
      { id: "multi-spec", text: "Çoklu özellikli ürünler", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Sipariş portalını kurma",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Fiyat seviyeleri ve müşteri fiyatları",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "tr",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Fiyat seviyeleri ve müşteri fiyatları",
    description:
      "Müşterilere veya ürünlere uygulanabilen fiyat seviyeleri, miktar indirimleri ve tartılan meyve fiyatlandırma kuralları oluşturun.",
    keywords: ["fiyat seviyesi", "miktar indirimi", "meyve fiyatlandırma"],
    readingTime: "7 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify, gerçek toptan operasyonların karmaşıklığını — müşteri katmanları, miktar indirimleri ve tartılan meyve fiyatlandırması — yönetebilen esnek fiyatlandırma modellerini destekler.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Fiyat seviyeleri" },
      {
        type: "p",
        text: "Fiyat seviyesi yalnızca bir fiyatlandırma kategorisi etiketidir — örneğin «perakende», «toptan» veya «VIP». İhtiyacınız kadarını oluşturun, ardından her müşteriyi bir varsayılan seviyeye bağlayın. Varsayılan fiyat seviyesi, manuel olarak geçersiz kılınmadıkça müşterinin her ürün için ödediği fiyatı belirler.",
      },
      { type: "h2", id: "tiered", text: "Miktar indirimleri" },
      {
        type: "p",
        text: "Büyük miktarlarda satın alınan ürünler için fiyat seviyesinde kademeli indirimler kurabilirsiniz. Örneğin, ilk 10 kasa tam fiyatla, 25 kasa %5 indirimle, 50+ kasa %10 indirimle. Miktar sepete girildiğinde indirimler otomatik olarak uygulanır.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Tartılan meyve sınıfı fiyatlandırması",
      },
      {
        type: "p",
        text: "Meyveler genellikle farklı fiyatlarla satılan sınıflara (A, B, C) ve bazen farklı birimlere (kasa, palet, kilogram) göre satılır. Wholesalify'in meyve fiyatlandırma modeli her iki durumu da destekler: sınıflarınızı birim başına fiyatlandırın veya birimi boş bırakıp fiyatın tüm birimlere uygulanmasını sağlayın.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Müşteri fiyat geçersiz kılmaları",
      },
      {
        type: "p",
        text: "Bazı büyük müşterileriniz varsayılan fiyat seviyesinin dışında özel fiyatları görüşür. Bu durumda müşteriyi açın ve «Fiyatlandırma» sekmesi altında müşteriye özel fiyatlandırma kuralları ekleyin. Bu kurallar hem fiyat seviyesini hem de miktar indirimlerini geçersiz kılar.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Fiyatlandırma kuralları önceliği",
        text: "Aynı ürün için aktif birden fazla kural olduğunda, aşağıdaki öncelik uygulanır: (1) müşteriye özel fiyat, (2) fiyat seviyesindeki miktar indirimi, (3) temel fiyat seviyesi fiyatı.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Fiyat seviyeleri", level: 2 },
      { id: "tiered", text: "Miktar indirimleri", level: 2 },
      { id: "weighed-fruit", text: "Tartılan meyve fiyatlandırması", level: 2 },
      {
        id: "customer-pricing",
        text: "Müşteri fiyat geçersiz kılmaları",
        level: 2,
      },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "B2B kataloğu" },
    next: { href: "/docs/orders/dashboard", title: "Sipariş paneli" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "tr",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Sipariş paneli",
    description:
      "Her siparişi alımından teslimine kadar yönetin — zaman çizelgesini filtreleyin, durumları değiştirin ve iadeleri işleyin.",
    keywords: ["sipariş paneli", "sipariş durumu", "iade"],
    readingTime: "6 dakika okuma",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Sipariş paneli, her şeyle ilgili başlangıç noktanızdır — toptan siparişleri. Hesabınızdaki her siparişi listeler ve tek bir yerden filtrelemenize, onaylamanıza, göndermenize, faturalandırmanıza ve iade etmenize olanak tanır.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtreler" },
      {
        type: "p",
        text: "Tablonun üstündeki filtreler, metin araması kullanmak zorunda kalmadan listeyi daraltmanıza olanak tanır. Tam zaman aralığı belirlemek için birden fazla filtreyi birleştirebilirsiniz, örneğin belirli bir müşteriden geçen hafta gelen tüm onaylı siparişler.",
      },
      {
        type: "ul",
        items: [
          "Zaman aralığı (bugün, geçen hafta, bu ay, özel aralık).",
          "Durum (açık, onaylı, iptal edilmiş, tamamlanmış, yeniden açılmış).",
          "Müşteri veya fiyat seviyesi.",
          "Siparişin gönderildiği depo.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Tablo sütunları" },
      {
        type: "p",
        text: "Tablodaki her satır, bir siparişi hızlıca işlemek için ihtiyaç duyduğunuz bilgileri içerir: sipariş tarihi, müşteri adı, kalem sayısı, ara toplam ve geçerli durum. Bir siparişi açmak ve işlem yapmak için herhangi bir satıra tıklayın.",
      },
      { type: "h2", id: "statuses", text: "Sipariş durumları" },
      {
        type: "p",
        text: "Her sipariş yaşam döngüsü boyunca aşağıdaki durumlardan geçer:",
      },
      {
        type: "ol",
        items: [
          "Açık — müşteri tarafından oluşturulmuş ve henüz işlenmemiş.",
          "Onaylı — ekibiniz tarafından incelenmiş ve stok ayrılmış, gönderime hazır.",
          "Gönderildi — sipariş müşteriye teslim için çıkmış.",
          "Tamamlandı — teslim edilmiş ve makbuzlarla belgelenmiş.",
          "İptal edildi — onaydan önce kapatılmış ve yeniden açılamaz.",
          "Yeniden açıldı — daha önce iptal edilmiş ve daha fazla işleme alınmak üzere yeniden açılmış.",
        ],
      },
      { type: "h2", id: "actions", text: "Sipariş işlemleri" },
      {
        type: "p",
        text: "Bir siparişi açmak için satırına tıklayın. Yan panel, kalemler, fiyatlandırma ve adres dahil siparişin tüm ayrıntılarını gösterir. Üst çubukta, geçerli duruma göre aşağıdaki işlemler kullanılabilir:",
      },
      {
        type: "ul",
        items: [
          "Onayla — siparişi «açık»'tan «onaylı»'ya taşıyın ve stoğu ayırın.",
          "Onayı kaldır — siparişi «onaylı»'dan «açık»'a döndürün ve stoğu serbest bırakın.",
          "Gönder — siparişi «onaylı»'dan «gönderildi»'ye taşıyın.",
          "İade — gönderimden sonra kısmi veya tam iade kaydedin.",
          "İptal — siparişi «onaylı» veya «açık»'tan «iptal edilmiş»'e taşıyın.",
          "Yeniden aç — iptal edilmiş siparişi «açık» durumuna döndürün.",
          "Fatura oluştur — onaylı veya gönderilmiş siparişten fatura oluşturun.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Durumların stok üzerindeki etkisi",
      },
      {
        type: "p",
        text: "Sipariş durumundaki her değişiklik, stok defterinde bir satır olarak kaydedilir ve kaynak siparişe kadar izlenebilir. Aşağıdaki tablo, her eylemin stok üzerindeki etkisini özetler:",
      },
      {
        type: "table",
        headers: ["Eylem", "Durum değişikliği", "Stok etkisi", "Notlar"],
        rows: [
          [
            "Onayla",
            "Taslak / Yeniden açılmış / Onaysız → Onaylı",
            "Çıkış (−)",
            "Her kalem için atanan depodan çıkar; maliyet onay anında siparişe yazılır.",
          ],
          [
            "Onayı kaldır",
            "Onaylı → Onaysız",
            "İade (+)",
            "Son onaydan çıkışı tersine çevirir; maliyet alanı temizlenir.",
          ],
          [
            "İptal",
            "Onaylı → İptal edilmiş",
            "İade (+)",
            "Son onaydan çıkışı tersine çevirir; sipariş denetim için saklanır ve daha fazla ilerletilemez.",
          ],
          [
            "Yeniden aç",
            "İptal edilmiş → Yeniden açılmış",
            "Değişiklik yok",
            "Stok iptal edildiğinde zaten iade edildi. Yeniden açma yalnızca durumu değiştirir; bir sonraki onay tekrar çıkış yapar.",
          ],
          [
            "İade",
            "Onaylı (kalem başına)",
            "Kısmi iade (+)",
            "Onaylı kalem için negatif miktarda bir satır ekler ve bu miktarı stoğa iade eder.",
          ],
          [
            "İadeyi iptal et",
            "Onaylı (kalem başına)",
            "Tekrar çıkış (−)",
            "Önceden kaydedilmiş iade satırını kaldırır ve orijinal miktarı tekrar stoktan çıkarır.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Hem İptal hem Onayı Kaldır stoğu iade eder",
        text: "Her iki eylem de stok üzerinde aynı etkiye sahiptir: ikisi de son onaydan yapılan çıkışı tersine çevirir. Fark, son durumdadır — İptal, siparişi «İptal edilmiş»'e taşır (terminal, başka durum değişikliği mümkün değildir); Onayı kaldır ise siparişi «Onaysız»'a taşır (düzenlenebilir kalır, sonraki onay tekrar stok çıkışı yapar).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Toplu işlem yok",
        text: "Satış siparişleri listesi, satır seçimini veya toplu işlemleri desteklemez. Her sipariş işlem için ayrı ayrı açılmalıdır.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtreler", level: 2 },
      { id: "table-columns", text: "Tablo sütunları", level: 2 },
      { id: "statuses", text: "Sipariş durumları", level: 2 },
      { id: "actions", text: "Sipariş işlemleri", level: 2 },
      {
        id: "inventory-impact",
        text: "Durumların stok üzerindeki etkisi",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Fiyat seviyeleri ve müşteri fiyatları",
    },
    next: { href: "/docs/inventory/stock", title: "Stok seviyeleri" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "tr",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Stok seviyeleri",
    description:
      "Her konum, her depo ve her ürün varyantı için stoğu takip edin. Temel stok biriminizi ve dönüşüm kurallarınızı yapılandırın.",
    keywords: ["stok yönetimi", "toptan stok", "çoklu depo"],
    readingTime: "5 dakika okuma",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Wholesalify'in stok modülü, her ürün varyantı ve her depo için gerçek zamanlı bir hesap tutar. Stok, siparişler onaylandığında ve satın alma makbuzları kaydedildiğinde otomatik olarak mutabakatlanır.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Depolar" },
      {
        type: "p",
        text: "İşlettiğiniz kadar çok depo ekleyin. Her ürünün her depo için ayrı bir stok sayısı vardır, böylece siparişleri müşteriye en yakın konumdan karşılayabilirsiniz.",
      },
      { type: "h2", id: "stock-units", text: "Stok birimleri ve dönüşümler" },
      {
        type: "p",
        text: "Taze ürünler için stok birimini kilogram olarak ayarlayın. Müşterilerin bu birimlerde sipariş verebilmesi için «5 kg'lık kasa» veya «10 kg'lık sepet» gibi paket boyutlarını otomatik dönüşümlerle ekleyin, böylece stoğu manuel olarak çevirmenize gerek kalmaz.",
      },
      { type: "h2", id: "stock-adjustments", text: "Manuel stok düzeltmeleri" },
      {
        type: "p",
        text: "Bozulma nedeniyle birkaç kasa mı kaybettiniz? Ürünü açın, «Stoğu düzelt»'i seçin ve bir nedenle pozitif veya negatif miktar girin. Düzeltmeler, kullanıcı, tarih ve isteğe bağlı fotoğrafla birlikte denetim günlüğüne kaydedilir.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Depolar", level: 2 },
      { id: "stock-units", text: "Stok birimleri ve dönüşümler", level: 2 },
      {
        id: "stock-adjustments",
        text: "Manuel stok düzeltmeleri",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Sipariş paneli" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Satın alma siparişleri oluşturma",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "tr",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Satın alma siparişleri oluşturma",
    description:
      "Tedarikçileriniz için satın alma siparişleri oluşturun, gelen sevkiyatları takip edin ve stoğu otomatik olarak güncelleyen makbuzları kaydedin.",
    keywords: [
      "satın alma siparişleri",
      "tedarikçi yönetimi",
      "toptan satın alma",
    ],
    readingTime: "6 dakika okuma",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Bir satın alma siparişi, tedarikçilerinize neyin, ne zaman ve hangi fiyatla sevk edileceğini bildirir. Mallar geldiğinde, makbuzun kaydedilmesi stoğu ve tedarikçi kaydını tek bir adımda günceller.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Adım 1 — Bir tedarikçi ekleyin",
      },
      {
        type: "p",
        text: "«Satın Alma» ← «Tedarikçiler» ← «Yeni tedarikçi»'yi açın. İletişim bilgilerini ve tedarikçinin normalde teslim için harcadığı teslim süresini girin.",
      },
      {
        type: "h2",
        id: "build-po",
        text: "Adım 2 — Satın alma siparişi oluşturun",
      },
      {
        type: "p",
        text: "«Yeni satın alma siparişi»'ne tıklayın, tedarikçiyi seçin ve kalemleri ekleyin. Fiyat varsayılan olarak tedarikçinin son fiyatıdır, ancak her kalemi geçersiz kılabilirsiniz.",
      },
      { type: "h2", id: "receive", text: "Adım 3 — Sevkiyatı alın" },
      {
        type: "p",
        text: "Mallar geldiğinde, satın alma siparişinde «Al»'a tıklayın. Gerçek teslim edilen miktarı girin — kısmi makbuzlar desteklenir — ve onaylayın. Stok seviyeleri otomatik olarak güncellenir ve tedarikçi faturası oluşturulur.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Durum geçişleri ve stok etkisi",
      },
      {
        type: "p",
        text: "Satın alma siparişleri ve satış siparişleri aynı stok defterini paylaşır, ancak ters yönde akar — bir satın alma siparişinin onaylanması stoğu artırır (+), satış siparişinin onaylanması ise onu çıkarır (−). Aşağıdaki tablo dört ana eylemi ve stok üzerindeki etkilerini özetler:",
      },
      {
        type: "table",
        headers: ["Eylem", "Durum değişikliği", "Stok etkisi", "Notlar"],
        rows: [
          [
            "SS Onayla",
            "Taslak / Yeniden açılmış / Onaysız → Onaylı",
            "Stok girişi (+)",
            "Mallar atanan depoya her kalem için alınır; satın alma maliyeti siparişe kaydedilir.",
          ],
          [
            "Onayı kaldır",
            "Onaylı → Onaysız",
            "Stok çıkışı (−)",
            "SS onaylandığında eklenen stoğu tersine çevirir; satın alma maliyeti temizlenir.",
          ],
          [
            "SS İptal",
            "Onaylı → İptal edilmiş",
            "Stok çıkışı (−)",
            "SS onaylandığında eklenen stoğu tersine çevirir; sipariş yalnızca denetim için saklanır.",
          ],
          [
            "Yeniden aç",
            "İptal edilmiş → Yeniden açılmış",
            "Stok değişikliği yok",
            "Stok İptal ile zaten tersine çevrildi. Yeniden açma yalnızca durumu değiştirir. Sipariş tekrar onaylanarak stok eklenebilir.",
          ],
          [
            "İade",
            "Onaylı (kalem başına)",
            "Kısmi stok çıkışı (−)",
            "Onaylı kalemin bir kısmını tedarikçiye iade edin — negatif miktarda bir kalem eklenir ve stok düşürülür.",
          ],
          [
            "İadeyi iptal et",
            "Onaylı (kalem başına)",
            "Stoğu tekrar ekle (+)",
            "İadeyi tersine çevirir — negatif kalem kaldırılır ve orijinal miktar stoğa eklenir.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "SS onaylamak stoğu artırır — çıkarmaz",
        text: "Bir satın alma siparişinin onaylanması, malların fiziksel olarak geldiği ve depolandığı anlamına gelir, dolayısıyla stok yükselir (+). Bu, stoğu düşüren (−) satış siparişinin onaylanmasının tersidir. İki yönü karıştırmayın: Onayı kaldırmak, malları tedarikçiye iade etmez — sadece onaylarken eklediğiniz stoğu tersine çevirir.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Hem İptal hem Onayı kaldırma stoğu tersine çevirir",
        text: "Her iki eylem de stok üzerinde aynı etkiye sahiptir — ikisi de önceki onayın eklediği stoğu tersine çevirir. Fark, son durumdadır: İptal, siparişi «İptal edilmiş»'e taşır (terminal), Onayı kaldırma ise onu «Onaysız»'a taşır (düzenlenebilir kalır ve bir sonraki onay stoğu tekrar ekler).",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Adım 1 — Bir tedarikçi ekleyin",
        level: 2,
      },
      {
        id: "build-po",
        text: "Adım 2 — Satın alma siparişi oluşturun",
        level: 2,
      },
      { id: "receive", text: "Adım 3 — Sevkiyatı alın", level: 2 },
      {
        id: "inventory-impact",
        text: "Durum geçişleri ve stok etkisi",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Stok seviyeleri" },
  },

  // ===================================================================
  // MEXICAN SPANISH (es-MX)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "es-MX",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Descripción general de Wholesalify",
    description:
      "Descripción general de Wholesalify — plataforma B2B de pedidos al mayoreo para empresas de productos frescos, bienes de consumo y mayoreo multi-especificación.",
    keywords: [
      "plataforma de mayoreo",
      "pedidos B2B",
      "resumen SaaS mayorista",
    ],
    readingTime: "aprox. 4 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify es una plataforma moderna de pedidos al mayoreo B2B diseñada para mayoristas, distribuidores y empresas comerciales. Combina un portal de pedidos orientado al cliente con un potente panel de administración, lo que permite a tu equipo gestionar pedidos, inventario, compras y cuentas de clientes en un solo sistema.",
      },
      {
        type: "p",
        text: "Ya sea que vendas productos frescos por peso, frutas por grado o por caja, o productos multi-especificación por SKU, Wholesalify te brinda modelos de catálogo y precios flexibles que se alinean con la forma en que realmente opera tu negocio.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Lo que Wholesalify puede hacer por ti",
      },
      {
        type: "ul",
        items: [
          "Vender por peso, caja/pallet o unidad dentro de un mismo catálogo.",
          "Aplicar precios por niveles para frutas y productos agrícolas según grado, especificación o volumen.",
          "Gestionar productos pesados, clasificados y multi-especificación en paralelo.",
          "Ofrecer un portal de autoservicio para cada cliente mayorista con historial de pedidos.",
          "Rastrear pedidos, cobros y estados de entrega desde un único panel de operaciones.",
          "Generar reportes de inventario y activar reposiciones automáticas.",
          "Gestionar proveedores, órdenes de compra y recepción de mercancía.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Cómo se conecta la plataforma",
      },
      {
        type: "p",
        text: "Wholesalify está compuesto por tres capas que comparten la misma fuente de datos:",
      },
      {
        type: "ul",
        items: [
          "Portal de pedidos — la tienda del lado del cliente para compradores mayoristas.",
          "Panel de administración — el panel backend para tu equipo de operaciones.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Quiénes usan Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Mayoristas de productos frescos (frutas, verduras, mariscos).",
          "Distribuidores de alimentos y bienes de consumo.",
          "Mayoristas de materiales de construcción y ferretería.",
          "Importadores y comercializadoras con unidades múltiples.",
          "Negocios mayoristas PyME cansados de Excel y WhatsApp.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Próximos pasos",
      },
      {
        type: "ul",
        items: [
          "Lee la «Guía rápida» para crear tu espacio y hacer tu primer pedido de prueba.",
          "Consulta la guía del «Portal de pedidos» para armar tu catálogo mayorista.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Listo para empezar?",
        text: "Regístrate ahora para una prueba gratuita, sin necesidad de tarjeta de crédito. Crea tu espacio, agrega algunos productos y haz tu primer pedido de prueba, todo en menos de 15 minutos.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Registro gratuito",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Lo que Wholesalify puede hacer por ti",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Cómo se conecta la plataforma",
        level: 2,
      },
      { id: "who-uses-it", text: "Quiénes usan Wholesalify", level: 2 },
      { id: "next-steps", text: "Próximos pasos", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Guía rápida" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "es-MX",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Guía rápida",
    description:
      "Configura tu cuenta de Wholesalify, agrega tu primer producto y envía tu primer pedido al mayoreo en menos de 15 minutos.",
    keywords: ["guía rápida", "configuración de cuenta", "primer pedido"],
    readingTime: "3 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Esta guía te lleva por la configuración de tu cuenta y la creación de tu primer pedido al mayoreo. Asume que es tu primera vez usando Wholesalify y que aún no tienes datos en el sistema.",
      },
      { type: "h2", id: "create-account", text: "Paso 1 — Crea tu cuenta" },
      {
        type: "p",
        text: "Ve a la página de registro de Wholesalify. Ingresa el nombre de tu empresa, tu correo electrónico y una contraseña. Recibirás un correo de confirmación de inmediato — haz clic en el enlace para activar tu cuenta e iniciar sesión.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Paso 2 — Agrega tu primer producto",
      },
      {
        type: "p",
        text: "Después de iniciar sesión serás llevado al catálogo de productos. Haz clic en «Nuevo producto» e ingresa el nombre, la unidad base de venta (por ejemplo, kilogramo o caja) y el precio inicial. Puedes editar todo después, así que no te preocupes por arrancar perfectamente.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Paso 3 — Invita a tu primer cliente",
      },
      {
        type: "p",
        text: "En el panel de administración, abre «Clientes» y luego «Nuevo cliente». Ingresa el nombre del cliente, su información de contacto y el nivel de precios predeterminado. El cliente recibirá una invitación por correo electrónico para crear su contraseña y comenzar a explorar el catálogo.",
      },
      { type: "h2", id: "place-order", text: "Paso 4 — Realiza un pedido" },
      {
        type: "p",
        text: "Abre el portal de pedidos como el cliente, agrega un producto al carrito y completa el paso de pago para crear el pedido. El pedido pasará de inmediato al estado «abierto» en el panel de administración, listo para procesarse.",
      },
      {
        type: "callout",
        variant: "success",
        title: "¡Felicidades!",
        text: "Acabas de completar la configuración de Wholesalify por completo. Desde aquí puedes pasar a armar el catálogo, configurar niveles de precios o explorar el resto de la documentación.",
      },
    ],
    toc: [
      { id: "create-account", text: "Paso 1 — Crea tu cuenta", level: 2 },
      {
        id: "add-product",
        text: "Paso 2 — Agrega tu primer producto",
        level: 2,
      },
      {
        id: "invite-buyer",
        text: "Paso 3 — Invita a tu primer cliente",
        level: 2,
      },
      { id: "place-order", text: "Paso 4 — Realiza un pedido", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Descripción general" },
    next: { href: "/docs/get-started/concepts", title: "Conceptos básicos" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "es-MX",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Conceptos básicos",
    description:
      "Conoce los modelos centrales de Wholesalify: catálogo, niveles de precios, clientes y órdenes de compra.",
    keywords: ["terminología", "modelo de datos", "fundamentos del mayoreo"],
    readingTime: "5 minutos de lectura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Esta página explica los conceptos fundamentales que necesitas para trabajar con Wholesalify. Si vienes de un sistema tradicional de gestión de pedidos o empiezas desde cero, entender estos términos hará mucho más claro el resto de la documentación.",
      },
      { type: "h2", id: "tenants", text: "Espacios y áreas de trabajo" },
      {
        type: "p",
        text: "Cada cuenta de Wholesalify está completamente aislada de las demás. El catálogo, clientes, inventario y pedidos están contenidos dentro de tu espacio. Esto significa que puedes operar varias marcas o empresas tenedoras bajo una sola cuenta de la plataforma, manteniendo los datos separados por unidad de negocio.",
      },
      { type: "h2", id: "products", text: "Productos y variantes" },
      {
        type: "p",
        text: "Un producto es una plantilla. Una variante define la cantidad real que el cliente compra — por ejemplo, manzana verde de 5 kg o pera grado A. Incluso los productos sencillos que no requieren complejidad de especificaciones se almacenan como un producto con una sola variante.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "Niveles de precios y precios por cliente",
      },
      {
        type: "p",
        text: "Un nivel de precios define una categoría de precios — por ejemplo, «menudeo», «mayoreo» o «VIP». Cada cliente se asocia a un nivel por defecto, pero esto puede sobrescribirse a nivel producto dentro de un pedido. Puedes crear niveles de precios ilimitados y organizar los ajustes de precios por categoría o volumen.",
      },
      { type: "h2", id: "orders", text: "Pedidos y sus estados" },
      {
        type: "p",
        text: "Cada pedido pasa por una serie de estados desde su creación hasta la entrega. Los pedidos comienzan como «abiertos», pasan a «confirmados» una vez que tu equipo los confirma y asigna inventario, luego «enviados» cuando salen a reparto y, finalmente, «completados». El sistema te permite reabrir o cancelar un pedido en cualquier etapa.",
      },
      { type: "h2", id: "stock", text: "Inventario y almacenes" },
      {
        type: "p",
        text: "El inventario se registra por separado para cada variante de producto y cada almacén. Cuando se confirma un pedido, la cantidad se reserva automáticamente desde el almacén asignado, y los pedidos que excedan el inventario disponible no pueden confirmarse sin autorización explícita.",
      },
    ],
    toc: [
      { id: "tenants", text: "Espacios y áreas de trabajo", level: 2 },
      { id: "products", text: "Productos y variantes", level: 2 },
      {
        id: "price-levels",
        text: "Niveles de precios y precios por cliente",
        level: 2,
      },
      { id: "orders", text: "Pedidos y sus estados", level: 2 },
      { id: "stock", text: "Inventario y almacenes", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Guía rápida" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configuración del portal",
    },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "es-MX",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configuración del portal de pedidos",
    description:
      "Adapta el portal de pedidos a tu marca, agrega condiciones de pago y define durante cuánto tiempo estará vigente tu catálogo.",
    keywords: ["configuración del portal", "marca", "condiciones de pago"],
    readingTime: "4 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Una vez que tengas algunos productos y clientes, personaliza el portal de pedidos para que se vea y se sienta como una extensión de tu marca. Estos ajustes controlan el aspecto visual, las condiciones de pago, los días hábiles y cuánto tiempo podrá el cliente ver tu catálogo antes de requerir actualización.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Marca y aspecto visual" },
      {
        type: "p",
        text: "Abre «Ajustes» ← «Marca». Sube tu logo y elige los colores primario y de acento que aparecerán en todas las páginas del portal. Estos cambios se reflejarán de inmediato para todos los clientes que hayan iniciado sesión.",
      },
      { type: "h2", id: "payment-terms", text: "Condiciones de pago" },
      {
        type: "p",
        text: "En «Ajustes» ← «Pago», define los métodos de pago aceptados. Por ejemplo: «Transferencia bancaria (neto 30 días)», «Tarjeta de crédito» o «Efectivo contra entrega». Estas condiciones aparecen en la parte inferior de cada pedido.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Las condiciones son el valor por defecto, y se pueden sobrescribir por cliente",
        text: "Si tu relación con la mayoría de los clientes es «neto 30», pero un cliente grande tiene «neto 60», puedes sobrescribir las condiciones de manera global dentro del archivo del cliente.",
      },
    ],
    toc: [
      { id: "branding", text: "Marca y aspecto visual", level: 2 },
      { id: "payment-terms", text: "Condiciones de pago", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Conceptos básicos" },
    next: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "es-MX",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Catálogo B2B",
    description:
      "Agrega productos y variantes a tu catálogo, define opciones de venta por peso y por grado, y comparte el catálogo con tus clientes.",
    keywords: ["catálogo B2B", "gestión de productos", "variantes de producto"],
    readingTime: "6 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "El catálogo es lo que tus clientes ven cuando inician sesión en el portal de pedidos. Está organizado en categorías y cada producto tiene una o más variantes. Wholesalify admite tres estilos principales de venta de productos dentro de un mismo catálogo.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Productos estándar" },
      {
        type: "p",
        text: "Los productos estándar se venden por unidad — por ejemplo, una caja de 24 botellas o un pallet de 50 bolsas. Cada producto tiene una variante por defecto, pero pueden agregarse variantes para distintas especificaciones.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Productos pesados" },
      {
        type: "p",
        text: "Los productos pesados se venden por kilogramo o libra. La variante define la unidad de peso y el precio unitario, y permite al cliente ingresar la cantidad en cualquier múltiplo de la unidad. Es ideal para productos frescos y materiales a granel.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Productos multi-especificación" },
      {
        type: "p",
        text: "Algunos productos vienen en varias especificaciones — por ejemplo, peras con tamaños (chico/mediano/grande), colores o sabores. Las variantes se generan automáticamente a partir de las combinaciones de especificaciones que definas para el producto.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Productos estándar", level: 2 },
      { id: "weighed", text: "Productos pesados", level: 2 },
      { id: "multi-spec", text: "Productos multi-especificación", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configuración del portal de pedidos",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveles de precios y precios por cliente",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "es-MX",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Niveles de precios y precios por cliente",
    description:
      "Crea niveles de precios, descuentos por volumen y reglas de precios para frutas pesadas que se aplican a clientes o productos.",
    keywords: ["nivel de precio", "descuento por volumen", "precios de fruta"],
    readingTime: "7 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify admite modelos de precios flexibles que pueden manejar la complejidad de las operaciones reales de mayoreo — niveles de clientes, descuentos por volumen y precios de frutas por peso.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Niveles de precios" },
      {
        type: "p",
        text: "Un nivel de precios es solo una etiqueta para una categoría de precios — por ejemplo, «menudeo», «mayoreo» o «VIP». Crea tantos como necesites y luego asocia a cada cliente con un nivel predeterminado. El nivel de precios predeterminado determina el precio que el cliente paga por cada producto a menos que se sobrescriba manualmente.",
      },
      { type: "h2", id: "tiered", text: "Descuentos por volumen" },
      {
        type: "p",
        text: "Para productos que se compran en grandes cantidades, puedes configurar descuentos escalonados por nivel de precios. Por ejemplo, las primeras 10 cajas a precio completo, 25 cajas con un 5% de descuento, 50 o más con un 10% de descuento. Los descuentos se aplican automáticamente al ingresar la cantidad en el carrito.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Precios de fruta por grado y peso",
      },
      {
        type: "p",
        text: "Las frutas suelen venderse por grados (A, B, C) a precios diferentes, y a veces en distintas unidades (caja, pallet, kilogramo). El modelo de precios de frutas de Wholesalify admite ambos casos: fija tus grados por unidad o deja la unidad vacía para que el precio se aplique a todas las unidades.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Sobrescrituras de precios por cliente",
      },
      {
        type: "p",
        text: "Algunos de tus clientes grandes negocian precios específicos fuera del nivel de precios predeterminado. En este caso, abre el cliente y agrega reglas de precios específicas en la pestaña «Precios». Estas reglas sobrescriben tanto el nivel de precios como los descuentos por volumen.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Prioridad de reglas de precios",
        text: "Cuando hay varias reglas activas para el mismo producto, se aplica esta prioridad: (1) precio específico del cliente, (2) descuento por volumen en el nivel de precios, (3) precio base del nivel de precios.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Niveles de precios", level: 2 },
      { id: "tiered", text: "Descuentos por volumen", level: 2 },
      { id: "weighed-fruit", text: "Precios de fruta por grado", level: 2 },
      { id: "customer-pricing", text: "Sobrescrituras por cliente", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
    next: { href: "/docs/orders/dashboard", title: "Panel de pedidos" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "es-MX",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Panel de pedidos",
    description:
      "Gestiona cada pedido desde su recepción hasta la entrega — filtra la línea de tiempo, cambia los estados y procesa devoluciones.",
    keywords: ["panel de pedidos", "estado del pedido", "devoluciones"],
    readingTime: "6 minutos de lectura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "El panel de pedidos es el punto de partida para todo lo relacionado con los pedidos al mayoreo. Muestra cada pedido en tu espacio y te permite filtrar, confirmar, enviar, facturar y devolver, todo desde un único lugar.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtros" },
      {
        type: "p",
        text: "Los filtros en la parte superior de la tabla te permiten acotar la lista sin necesidad de búsqueda por texto. Puedes combinar varios filtros para acotar a un rango exacto, como «todos los pedidos confirmados en la última semana de un cliente específico».",
      },
      {
        type: "ul",
        items: [
          "Rango de fechas (hoy, semana pasada, este mes, rango personalizado).",
          "Estado (abierto, confirmado, cancelado, completado, reabierto).",
          "Cliente o nivel de precios.",
          "Almacén desde el que se envió el pedido.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Columnas de la tabla" },
      {
        type: "p",
        text: "Cada fila de la tabla contiene la información que necesitas para procesar rápidamente un pedido: fecha del pedido, nombre del cliente, número de artículos, subtotal y estado actual. Haz clic en cualquier fila para abrir el pedido y tomar una acción.",
      },
      { type: "h2", id: "statuses", text: "Estados del pedido" },
      {
        type: "p",
        text: "Cada pedido pasa por los siguientes estados a lo largo de su ciclo de vida:",
      },
      {
        type: "ol",
        items: [
          "Abierto — creado por el cliente y aún no procesado.",
          "Confirmado — revisado por tu equipo con inventario asignado, listo para enviar.",
          "Enviado — el pedido salió a reparto al cliente.",
          "Completado — entregado y documentado con acuses de recibo.",
          "Cancelado — cerrado antes de la confirmación y no se puede reabrir.",
          "Reabierto — antes cancelado y reabierto para más procesamiento.",
        ],
      },
      { type: "h2", id: "actions", text: "Acciones del pedido" },
      {
        type: "p",
        text: "Para abrir un pedido, haz clic en su fila. El panel lateral muestra los detalles completos del pedido, incluyendo artículos, precios y dirección. Las siguientes acciones están disponibles en la barra superior según el estado actual:",
      },
      {
        type: "ul",
        items: [
          "Confirmar — mover el pedido de «abierto» a «confirmado» y reservar inventario.",
          "Desconfirmar — devolver el pedido a «abierto» para liberar el inventario.",
          "Enviar — mover el pedido de «confirmado» a «enviado».",
          "Devolver — registrar una devolución parcial o total después del envío.",
          "Cancelar — mover el pedido de «confirmado» o «abierto» a «cancelado».",
          "Reabrir — devolver un pedido cancelado al estado «abierto».",
          "Crear factura — generar una factura a partir de un pedido confirmado o enviado.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Impacto de los estados en el inventario",
      },
      {
        type: "p",
        text: "Cada cambio de estado de un pedido se registra como una línea en el libro de inventario y se puede rastrear hasta el pedido original. La siguiente tabla resume el impacto en inventario de cada acción:",
      },
      {
        type: "table",
        headers: [
          "Acción",
          "Cambio de estado",
          "Impacto en inventario",
          "Notas",
        ],
        rows: [
          [
            "Confirmar",
            "Borrador / Reabierto / No confirmado → Confirmado",
            "Salida (−)",
            "Sale del almacén asignado por cada partida; el costo se registra en el pedido al confirmar.",
          ],
          [
            "Desconfirmar",
            "Confirmado → No confirmado",
            "Devolución (+)",
            "Invierte la salida de la última confirmación; se borra el campo de costo del pedido.",
          ],
          [
            "Cancelar",
            "Confirmado → Cancelado",
            "Devolución (+)",
            "Invierte la salida de la última confirmación; el pedido se conserva para auditoría y ya no se puede avanzar.",
          ],
          [
            "Reabrir",
            "Cancelado → Reabierto",
            "Sin cambios",
            "El inventario ya se devolvió al cancelar. Reabrir solo cambia el estado; la siguiente confirmación volverá a sacar inventario.",
          ],
          [
            "Devolución",
            "Confirmado (por partida)",
            "Devolución parcial (+)",
            "Agrega una línea de cantidad negativa para la partida confirmada y devuelve esa cantidad al inventario.",
          ],
          [
            "Cancelar devolución",
            "Confirmado (por partida)",
            "Salida nueva (−)",
            "Elimina la línea de devolución registrada anteriormente y vuelve a sacar la cantidad original del inventario.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Tanto Cancelar como Desconfirmar devuelven inventario",
        text: "Ambas acciones tienen el mismo efecto sobre el inventario: las dos invierten la salida de la última confirmación. La diferencia está en el estado final — Cancelar lleva el pedido a «Cancelado» (terminal, ya no se permiten más cambios de estado); Desconfirmar lo lleva a «No confirmado» (aún editable, una nueva confirmación volverá a sacar inventario).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "No hay operaciones en lote",
        text: "La lista de pedidos de venta no admite selección de filas ni acciones en lote. Cada pedido debe abrirse individualmente para tomar acción.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtros", level: 2 },
      { id: "table-columns", text: "Columnas de la tabla", level: 2 },
      { id: "statuses", text: "Estados del pedido", level: 2 },
      { id: "actions", text: "Acciones del pedido", level: 2 },
      {
        id: "inventory-impact",
        text: "Impacto de los estados en el inventario",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveles de precios y precios por cliente",
    },
    next: { href: "/docs/inventory/stock", title: "Niveles de inventario" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "es-MX",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Niveles de inventario",
    description:
      "Rastrea el inventario por cada ubicación, cada almacén y cada variante de producto. Configura tu unidad base de inventario y las reglas de conversión.",
    keywords: [
      "gestión de inventario",
      "inventario de mayoreo",
      "multi-almacén",
    ],
    readingTime: "5 minutos de lectura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "El módulo de inventario de Wholesalify mantiene un conteo en tiempo real para cada variante de producto y cada almacén. El inventario se concilia automáticamente cuando se confirman pedidos y cuando se registran recibos de compra.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Almacenes" },
      {
        type: "p",
        text: "Agrega tantos almacenes como operes. Cada producto tiene un conteo de inventario separado por almacén, lo que te permite surtir pedidos desde la ubicación más cercana al cliente.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Unidades de inventario y conversiones",
      },
      {
        type: "p",
        text: "Para productos frescos, establece la unidad de inventario en kilogramo. Agrega tamaños de empaque como «caja de 5 kg» o «cesta de 10 kg» con conversiones automáticas para que los clientes puedan pedir en esas unidades sin que tengas que convertir el inventario manualmente.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Ajustes manuales de inventario",
      },
      {
        type: "p",
        text: "¿Perdiste algunas cajas por daño? Abre el producto, elige «Ajustar inventario» e ingresa una cantidad positiva o negativa con un motivo. Los ajustes se registran en el log de auditoría con el usuario, la fecha y una foto opcional.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Almacenes", level: 2 },
      {
        id: "stock-units",
        text: "Unidades de inventario y conversiones",
        level: 2,
      },
      {
        id: "stock-adjustments",
        text: "Ajustes manuales de inventario",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Panel de pedidos" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Crear órdenes de compra",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "es-MX",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Crear órdenes de compra",
    description:
      "Crea órdenes de compra a tus proveedores, rastrea los envíos entrantes y registra recibos que actualizan el inventario automáticamente.",
    keywords: [
      "órdenes de compra",
      "gestión de proveedores",
      "compras al mayoreo",
    ],
    readingTime: "6 minutos de lectura",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Una orden de compra le dice a tus proveedores qué enviar, cuándo y a qué precio. Cuando llega la mercancía, registrar el recibo actualiza el inventario y el registro del proveedor en un solo paso.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Paso 1 — Agrega un proveedor",
      },
      {
        type: "p",
        text: "Abre «Compras» ← «Proveedores» ← «Nuevo proveedor». Ingresa los datos de contacto y el tiempo de entrega habitual del proveedor.",
      },
      { type: "h2", id: "build-po", text: "Paso 2 — Crea una OC" },
      {
        type: "p",
        text: "Haz clic en «Nueva orden de compra», selecciona el proveedor y agrega partidas. El precio se inicia con el último precio del proveedor, pero puedes sobrescribir cada partida.",
      },
      { type: "h2", id: "receive", text: "Paso 3 — Recibe el envío" },
      {
        type: "p",
        text: "Cuando llegue la mercancía, haz clic en «Recibir» en la OC. Ingresa la cantidad realmente entregada — se admiten recibos parciales — y confirma. Los niveles de inventario se actualizan automáticamente y se crea la factura del proveedor.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en el inventario",
      },
      {
        type: "p",
        text: "Las órdenes de compra y las órdenes de venta comparten el mismo libro de inventario, pero fluyen en direcciones opuestas — confirmar una orden de compra aumenta el inventario (+), mientras que confirmar una orden de venta lo reduce (−). La siguiente tabla resume las cuatro acciones principales y su impacto en el inventario:",
      },
      {
        type: "table",
        headers: [
          "Acción",
          "Cambio de estado",
          "Impacto en inventario",
          "Notas",
        ],
        rows: [
          [
            "Confirmar OC",
            "Borrador / Reabierto / No confirmado → Confirmado",
            "Entrada de inventario (+)",
            "La mercancía se recibe en el almacén asignado por cada partida; el costo de compra se registra en el pedido.",
          ],
          [
            "Desconfirmar",
            "Confirmado → No confirmado",
            "Salida de inventario (−)",
            "Invierte el inventario que se agregó al confirmar la OC; se borra el costo de compra.",
          ],
          [
            "Cancelar OC",
            "Confirmado → Cancelado",
            "Salida de inventario (−)",
            "Invierte el inventario que se agregó al confirmar la OC; el pedido se conserva solo para auditoría.",
          ],
          [
            "Reabrir",
            "Cancelado → Reabierto",
            "Sin cambio de inventario",
            "El inventario ya se invirtió con Cancelar. Reabrir solo cambia el estado. La OC puede volver a confirmarse para agregar inventario.",
          ],
          [
            "Devolución",
            "Confirmado (por partida)",
            "Salida parcial de inventario (−)",
            "Devuelve una parte de la partida confirmada al proveedor — se agrega una partida de cantidad negativa y se reduce el inventario.",
          ],
          [
            "Cancelar devolución",
            "Confirmado (por partida)",
            "Re-ingresar inventario (+)",
            "Invierte la devolución — se elimina la partida negativa y se vuelve a agregar la cantidad original al inventario.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Confirmar una OC agrega inventario — no lo saca",
        text: "Confirmar una orden de compra significa que la mercancía ya llegó físicamente y se almacenó, por lo que el inventario sube (+). Esto es lo opuesto a confirmar una orden de venta, que lo baja (−). No confundas las dos direcciones: Desconfirmar no devuelve la mercancía al proveedor — solo invierte el inventario que agregaste al confirmar.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Tanto Cancelar como Desconfirmar invierten el inventario",
        text: "Ambas acciones tienen el mismo efecto sobre el inventario — las dos invierten el inventario agregado por la confirmación anterior. La diferencia está en el estado final: Cancelar lleva el pedido a «Cancelado» (terminal), mientras que Desconfirmar lo lleva a «No confirmado» (aún editable, y la siguiente confirmación volverá a agregar inventario).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Paso 1 — Agrega un proveedor", level: 2 },
      { id: "build-po", text: "Paso 2 — Crea una OC", level: 2 },
      { id: "receive", text: "Paso 3 — Recibe el envío", level: 2 },
      {
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en inventario",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Niveles de inventario" },
  },

  // ===================================================================
  // BRAZILIAN PORTUGUESE (pt-BR)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "pt-BR",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Visão geral do Wholesalify",
    description:
      "Visão geral do Wholesalify — plataforma B2B de pedidos de atacado para empresas de produtos frescos, bens de consumo e atacado multi-especificações.",
    keywords: [
      "plataforma de atacado",
      "pedidos B2B",
      "visão geral SaaS atacado",
    ],
    readingTime: "aprox. 4 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify é uma plataforma moderna de pedidos de atacado B2B projetada para atacadistas, distribuidores e empresascomerciais. Ela combina um portal de pedidos voltado ao cliente com um poderoso painel de administração, permitindo que sua equipe gerencie pedidos, estoque, compras e contas de clientes em um único sistema.",
      },
      {
        type: "p",
        text: "Seja vendendo produtos frescos por peso, frutas por grau ou caixa, ou produtos multi-especificações por SKU, o Wholesalify oferece modelos de catálogo e preços flexíveis que se alinham à forma como seu negócio realmente opera.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "O que o Wholesalify pode fazer por você",
      },
      {
        type: "ul",
        items: [
          "Vender por peso, caixa/palete ou unidade dentro de um único catálogo.",
          "Preços em camadas para frutas e produtos agrícolas por grau, especificação ou volume.",
          "Gerenciar produtos pesados, classificados e multi-especificações em paralelo.",
          "Oferecer um portal de autoatendimento para cada cliente de atacado com histórico de pedidos.",
          "Acompanhar pedidos, cobranças e status de entrega em um único painel de operações.",
          "Gerar relatórios de estoque e disparar recompras automáticas.",
          "Gerenciar fornecedores, pedidos de compra e recebimento de mercadorias.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Como a plataforma se conecta",
      },
      {
        type: "p",
        text: "O Wholesalify é composto por três camadas que compartilham a mesma fonte de dados:",
      },
      {
        type: "ul",
        items: [
          "Portal de pedidos — a loja no lado do cliente para compradores de atacado.",
          "Painel administrativo — o painel de back-end para sua equipe de operações.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Quem usa o Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Atacadistas de produtos frescos (frutas, verduras, pescados).",
          "Distribuidores de alimentos e bens de consumo.",
          "Atacadistas de materiais de construção e ferragens.",
          "Importadores e trading companies com múltiplas unidades.",
          "PMEs de atacado cansadas do Excel e do WhatsApp.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Próximos passos",
      },
      {
        type: "ul",
        items: [
          "Leia o «Guia rápido» para criar seu espaço e fazer seu primeiro pedido de teste.",
          "Consulte o guia do «Portal de pedidos» para montar seu catálogo de atacado.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Pronto para começar?",
        text: "Cadastre-se agora para um teste gratuito, sem cartão de crédito. Crie seu espaço, adicione alguns produtos e faça seu primeiro pedido de teste — tudo em menos de 15 minutos.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Cadastro gratuito",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "O que o Wholesalify pode fazer por você",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Como a plataforma se conecta",
        level: 2,
      },
      { id: "who-uses-it", text: "Quem usa o Wholesalify", level: 2 },
      { id: "next-steps", text: "Próximos passos", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Guia rápido" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "pt-BR",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Guia rápido",
    description:
      "Configure sua conta Wholesalify, adicione seu primeiro produto e envie seu primeiro pedido de atacado em menos de 15 minutos.",
    keywords: ["guia rápido", "configuração de conta", "primeiro pedido"],
    readingTime: "3 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Este guia orienta você na configuração da sua conta e na criação do seu primeiro pedido de atacado. Parte do pressuposto de que é sua primeira vez usando o Wholesalify e que você ainda não tem dados no sistema.",
      },
      { type: "h2", id: "create-account", text: "Passo 1 — Crie sua conta" },
      {
        type: "p",
        text: "Vá até a página de cadastro do Wholesalify. Informe o nome da sua empresa, seu e-mail e uma senha. Você receberá um e-mail de confirmação imediatamente — clique no link para ativar sua conta e fazer login.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Passo 2 — Adicione seu primeiro produto",
      },
      {
        type: "p",
        text: "Após o login você será direcionado ao catálogo de produtos. Clique em «Novo produto» e informe o nome, a unidade básica de venda (por exemplo, quilograma ou caixa) e o preço inicial. Você pode editar tudo depois, então não se preocupe em começar perfeito.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Passo 3 — Convide seu primeiro cliente",
      },
      {
        type: "p",
        text: "No painel administrativo, abra «Clientes» e depois «Novo cliente». Informe o nome, os dados de contato e o nível de preço padrão do cliente. O cliente recebe um convite por e-mail para criar sua senha e começar a navegar no catálogo.",
      },
      { type: "h2", id: "place-order", text: "Passo 4 — Faça um pedido" },
      {
        type: "p",
        text: "Abra o portal de pedidos como o cliente, adicione um produto ao carrinho e conclua o checkout para criar o pedido. O pedido vai imediatamente para o status «aberto» no painel administrativo, pronto para ser processado.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Parabéns!",
        text: "Você acabou de completar totalmente a configuração do Wholesalify. A partir daqui você pode montar o catálogo, configurar níveis de preço ou explorar o restante da documentação.",
      },
    ],
    toc: [
      { id: "create-account", text: "Passo 1 — Crie sua conta", level: 2 },
      {
        id: "add-product",
        text: "Passo 2 — Adicione seu primeiro produto",
        level: 2,
      },
      {
        id: "invite-buyer",
        text: "Passo 3 — Convide seu primeiro cliente",
        level: 2,
      },
      { id: "place-order", text: "Passo 4 — Faça um pedido", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Visão geral" },
    next: { href: "/docs/get-started/concepts", title: "Conceitos básicos" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "pt-BR",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Conceitos básicos",
    description:
      "Conheça os modelos centrais do Wholesalify: catálogo, níveis de preço, clientes e pedidos de compra.",
    keywords: ["terminologia", "modelo de dados", "fundamentos do atacado"],
    readingTime: "5 minutos de leitura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Esta página explica os conceitos fundamentais que você precisa para trabalhar com o Wholesalify. Se você vem de um sistema tradicional de gestão de pedidos ou está começando do zero, entender esses termos torna o restante da documentação muito mais claro.",
      },
      { type: "h2", id: "tenants", text: "Espaços de trabalho e contas" },
      {
        type: "p",
        text: "Cada conta Wholesalify é totalmente isolada das demais. O catálogo, os clientes, o estoque e os pedidos estão contidos dentro do seu espaço. Isso significa que você pode operar várias marcas ou holdings em uma única conta da plataforma, mantendo os dados separados por unidade de negócio.",
      },
      { type: "h2", id: "products", text: "Produtos e variantes" },
      {
        type: "p",
        text: "Um produto é um modelo. Uma variante define a quantidade real que o cliente compra — por exemplo, maçã verde de 5 kg ou pera grau A. Mesmo produtos simples que não exigem complexidade de especificações são armazenados como um produto com uma única variante.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "Níveis de preço e preços por cliente",
      },
      {
        type: "p",
        text: "Um nível de preço define uma categoria de preços — por exemplo, «varejo», «atacado» ou «VIP». Cada cliente é associado a um nível padrão, mas isso pode ser sobrescrito por produto dentro de um pedido. Você pode criar níveis de preço ilimitados e organizar os ajustes por categoria ou volume.",
      },
      { type: "h2", id: "orders", text: "Pedidos e seus status" },
      {
        type: "p",
        text: "Cada pedido passa por uma série de status do seu recebimento até a entrega. Os pedidos começam como «aberto», passam para «confirmado» quando sua equipe os confirma e reserva o estoque, depois «enviado» quando saem para entrega e, por fim, «concluído». O sistema permite reabrir ou cancelar um pedido em qualquer estágio.",
      },
      { type: "h2", id: "stock", text: "Estoque e armazéns" },
      {
        type: "p",
        text: "O estoque é registrado separadamente para cada variante de produto e cada armazém. Quando um pedido é confirmado, a quantidade é reservada automaticamente a partir do armazém atribuído, e pedidos que excedam o estoque disponível não podem ser confirmados sem autorização explícita.",
      },
    ],
    toc: [
      { id: "tenants", text: "Espaços de trabalho e contas", level: 2 },
      { id: "products", text: "Produtos e variantes", level: 2 },
      {
        id: "price-levels",
        text: "Níveis de preço e preços por cliente",
        level: 2,
      },
      { id: "orders", text: "Pedidos e seus status", level: 2 },
      { id: "stock", text: "Estoque e armazéns", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Guia rápido" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configuração do portal",
    },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "pt-BR",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configuração do portal de pedidos",
    description:
      "Adapte o portal de pedidos à sua marca, adicione condições de pagamento e defina por quanto tempo seu catálogo ficará disponível.",
    keywords: ["configuração do portal", "marca", "condições de pagamento"],
    readingTime: "4 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Depois de ter alguns produtos e clientes, personalize o portal de pedidos para que ele pareça e transmita a sensação de ser uma extensão da sua marca. Essas configurações controlam a aparência visual, as condições de pagamento, os dias úteis e por quanto tempo o cliente pode visualizar seu catálogo antes de precisar ser atualizado.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Marca e aparência visual" },
      {
        type: "p",
        text: "Abra «Configurações» ← «Marca». Envie seu logotipo e escolha as cores primária e de destaque que aparecerão em todas as páginas do portal. Essas alterações refletem instantaneamente para todos os clientes autenticados.",
      },
      { type: "h2", id: "payment-terms", text: "Condições de pagamento" },
      {
        type: "p",
        text: "Em «Configurações» ← «Pagamento», defina os métodos de pagamento aceitos. Por exemplo: «Transferência bancária (líquido em 30 dias)», «Cartão de crédito» ou «Dinheiro na entrega». Essas condições aparecem na parte inferior de cada pedido.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "As condições são o padrão, e podem ser sobrescritas por cliente",
        text: "Se a relação com a maioria dos clientes é «líquido 30», mas um cliente grande tem «líquido 60», você pode sobrescrever as condições globalmente dentro do cadastro do cliente.",
      },
    ],
    toc: [
      { id: "branding", text: "Marca e aparência visual", level: 2 },
      { id: "payment-terms", text: "Condições de pagamento", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Conceitos básicos" },
    next: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "pt-BR",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Catálogo B2B",
    description:
      "Adicione produtos e variantes ao seu catálogo, defina opções de venda por peso e por grau e compartilhe o catálogo com seus clientes.",
    keywords: ["catálogo B2B", "gestão de produtos", "variantes de produto"],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O catálogo é o que seus clientes veem quando entram no portal de pedidos. Ele é organizado em categorias e cada produto possui uma ou mais variantes. O Wholesalify suporta três estilos principais de venda de produtos dentro de um único catálogo.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Produtos padrão" },
      {
        type: "p",
        text: "Produtos padrão são vendidos por unidade — por exemplo, uma caixa com 24 garrafas ou um palete com 50 sacos. Cada produto tem uma variante padrão, mas é possível adicionar variantes para especificações diferentes.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Produtos pesados" },
      {
        type: "p",
        text: "Produtos pesados são vendidos por quilograma ou libra. A variante define a unidade de peso e o preço unitário, e permite ao cliente informar a quantidade em qualquer múltiplo da unidade. É ideal para produtos frescos e materiais a granel.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Produtos multi-especificações" },
      {
        type: "p",
        text: "Alguns produtos vêm em várias especificações — por exemplo, peras com tamanhos (P/M/G), cores ou sabores. As variantes são geradas automaticamente a partir das combinações de especificações que você define para o produto.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Produtos padrão", level: 2 },
      { id: "weighed", text: "Produtos pesados", level: 2 },
      { id: "multi-spec", text: "Produtos multi-especificações", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configuração do portal de pedidos",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Níveis de preço e preços por cliente",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "pt-BR",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Níveis de preço e preços por cliente",
    description:
      "Crie níveis de preço, descontos por volume e regras de preço para frutas pesadas que se aplicam a clientes ou produtos.",
    keywords: ["nível de preço", "desconto por volume", "preços de frutas"],
    readingTime: "7 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O Wholesalify oferece modelos de preços flexíveis capazes de lidar com a complexidade das operações reais de atacado — camadas de clientes, descontos por volume e preços de frutas por peso.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Níveis de preço" },
      {
        type: "p",
        text: "Um nível de preço é apenas um rótulo para uma categoria de preços — por exemplo, «varejo», «atacado» ou «VIP». Crie quantos precisar e associe cada cliente a um nível padrão. O nível padrão determina o preço que o cliente paga por cada produto, a menos que seja sobrescrito manualmente.",
      },
      { type: "h2", id: "tiered", text: "Descontos por volume" },
      {
        type: "p",
        text: "Para produtos comprados em grandes quantidades, você pode configurar descontos progressivos no nível de preço. Por exemplo, as primeiras 10 caixas pelo preço cheio, 25 caixas com 5% de desconto, 50 ou mais com 10% de desconto. Os descontos são aplicados automaticamente ao informar a quantidade no carrinho.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Preços de frutas por grau e peso",
      },
      {
        type: "p",
        text: "As frutas geralmente são vendidas por grau (A, B, C) com preços diferentes, e às vezes em unidades diferentes (caixa, palete, quilograma). O modelo de preços de frutas do Wholesalify suporta ambos os casos: precifique seus graus por unidade ou deixe a unidade em branco para que o preço se aplique a todas as unidades.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Sobrescritas de preço por cliente",
      },
      {
        type: "p",
        text: "Alguns clientes grandes negociam preços específicos fora do nível padrão. Nesse caso, abra o cliente e adicione regras de preço específicas na aba «Preços». Essas regras sobrescrevem tanto o nível de preço quanto os descontos por volume.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Prioridade das regras de preço",
        text: "Quando há várias regras ativas para o mesmo produto, aplica-se a seguinte prioridade: (1) preço específico do cliente, (2) desconto por volume no nível de preço, (3) preço base do nível de preço.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Níveis de preço", level: 2 },
      { id: "tiered", text: "Descontos por volume", level: 2 },
      { id: "weighed-fruit", text: "Preços de frutas pesadas", level: 2 },
      { id: "customer-pricing", text: "Sobrescritas por cliente", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
    next: { href: "/docs/orders/dashboard", title: "Painel de pedidos" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "pt-BR",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Painel de pedidos",
    description:
      "Gerencie cada pedido do recebimento à entrega — filtre por período, altere status e processe devoluções.",
    keywords: ["painel de pedidos", "status do pedido", "devolução"],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O painel de pedidos é o ponto de partida para tudo relacionado a pedidos de atacado. Ele lista cada pedido no seu espaço e permite filtrar, confirmar, enviar, faturar e devolver, tudo em um único lugar.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtros" },
      {
        type: "p",
        text: "Os filtros no topo da tabela permitem que você restrinja a lista sem precisar de busca por texto. Você pode combinar vários filtros para delimitar um intervalo exato, por exemplo, «todos os pedidos confirmados na semana passada de um cliente específico».",
      },
      {
        type: "ul",
        items: [
          "Intervalo de datas (hoje, semana passada, este mês, intervalo personalizado).",
          "Status (aberto, confirmado, cancelado, concluído, reaberto).",
          "Cliente ou nível de preço.",
          "Armazém de onde o pedido foi enviado.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Colunas da tabela" },
      {
        type: "p",
        text: "Cada linha da tabela contém as informações de que você precisa para processar rapidamente um pedido: data do pedido, nome do cliente, número de itens, subtotal e status atual. Clique em qualquer linha para abrir o pedido e tomar uma ação.",
      },
      { type: "h2", id: "statuses", text: "Status do pedido" },
      {
        type: "p",
        text: "Cada pedido passa pelos seguintes status ao longo do seu ciclo de vida:",
      },
      {
        type: "ol",
        items: [
          "Aberto — criado pelo cliente e ainda não processado.",
          "Confirmado — revisado pela sua equipe com estoque reservado, pronto para envio.",
          "Enviado — o pedido saiu para entrega ao cliente.",
          "Concluído — entregue e documentado com comprovantes.",
          "Cancelado — encerrado antes da confirmação e não pode ser reaberto.",
          "Reaberto — antes cancelado e reaberto para mais processamento.",
        ],
      },
      { type: "h2", id: "actions", text: "Ações do pedido" },
      {
        type: "p",
        text: "Para abrir um pedido, clique na sua linha. O painel lateral mostra os detalhes completos, incluindo itens, preços e endereço. As seguintes ações estão disponíveis na barra superior, de acordo com o status atual:",
      },
      {
        type: "ul",
        items: [
          "Confirmar — move o pedido de «aberto» para «confirmado» e reserva o estoque.",
          "Desconfirmar — devolve o pedido a «aberto» e libera o estoque.",
          "Enviar — move o pedido de «confirmado» para «enviado».",
          "Devolver — registra uma devolução parcial ou total após o envio.",
          "Cancelar — move o pedido de «confirmado» ou «aberto» para «cancelado».",
          "Reabrir — devolve um pedido cancelado para o status «aberto».",
          "Emitir nota fiscal — gera uma NF a partir de um pedido confirmado ou enviado.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Impacto dos status no estoque",
      },
      {
        type: "p",
        text: "Cada mudança de status de um pedido é registrada como uma linha no livro de estoque e pode ser rastreada até o pedido original. A tabela a seguir resume o impacto no estoque de cada ação:",
      },
      {
        type: "table",
        headers: ["Ação", "Mudança de status", "Impacto no estoque", "Notas"],
        rows: [
          [
            "Confirmar",
            "Rascunho / Reaberto / Não confirmado → Confirmado",
            "Saída (−)",
            "Sai do armazém atribuído para cada item; o custo é registrado no pedido no momento da confirmação.",
          ],
          [
            "Desconfirmar",
            "Confirmado → Não confirmado",
            "Devolução (+)",
            "Inverte a saída da última confirmação; o campo de custo do pedido é apagado.",
          ],
          [
            "Cancelar",
            "Confirmado → Cancelado",
            "Devolução (+)",
            "Inverte a saída da última confirmação; o pedido é mantido para auditoria e não pode mais ser avançado.",
          ],
          [
            "Reabrir",
            "Cancelado → Reaberto",
            "Sem alterações",
            "O estoque já foi devolvido ao cancelar. Reabrir apenas altera o status; a próxima confirmação fará uma nova saída.",
          ],
          [
            "Devolução",
            "Confirmado (por item)",
            "Devolução parcial (+)",
            "Adiciona uma linha de quantidade negativa para o item confirmado e devolve essa quantidade ao estoque.",
          ],
          [
            "Cancelar devolução",
            "Confirmado (por item)",
            "Nova saída (−)",
            "Remove a linha de devolução registrada anteriormente e desconta novamente a quantidade original do estoque.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Cancelar e Desconfirmar ambos devolvem estoque",
        text: "Ambas as ações têm o mesmo efeito sobre o estoque: ambas invertem a saída da última confirmação. A diferença está no status final — Cancelar leva o pedido a «Cancelado» (terminal, sem mais mudanças de status possíveis); Desconfirmar o leva a «Não confirmado» (ainda editável, e uma nova confirmação fará nova saída de estoque).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Não há operações em lote",
        text: "A lista de pedidos de venda não suporta seleção de linhas nem ações em lote. Cada pedido precisa ser aberto individualmente para que uma ação seja tomada.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtros", level: 2 },
      { id: "table-columns", text: "Colunas da tabela", level: 2 },
      { id: "statuses", text: "Status do pedido", level: 2 },
      { id: "actions", text: "Ações do pedido", level: 2 },
      {
        id: "inventory-impact",
        text: "Impacto dos status no estoque",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Níveis de preço e preços por cliente",
    },
    next: { href: "/docs/inventory/stock", title: "Níveis de estoque" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "pt-BR",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Níveis de estoque",
    description:
      "Acompanhe o estoque por localização, armazém e variante de produto. Configure sua unidade de estoque base e regras de conversão.",
    keywords: ["gestão de estoque", "estoque de atacado", "multi-armazém"],
    readingTime: "5 minutos de leitura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "O módulo de estoque do Wholesalify mantém uma contagem em tempo real para cada variante de produto e cada armazém. O estoque é reconciliado automaticamente quando pedidos são confirmados e quando recebimentos de compra são lançados.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Armazéns" },
      {
        type: "p",
        text: "Adicione quantos armazéns você operar. Cada produto possui uma contagem de estoque separada por armazém, permitindo que você atenda pedidos a partir do local mais próximo do cliente.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Unidades de estoque e conversões",
      },
      {
        type: "p",
        text: "Para produtos frescos, defina a unidade de estoque como quilograma. Adicione tamanhos de embalagem como «caixa de 5 kg» ou «cesta de 10 kg» com conversões automáticas, para que os clientes possam pedir nessas unidades sem que você precise converter o estoque manualmente.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Ajustes manuais de estoque",
      },
      {
        type: "p",
        text: "Perdeu algumas caixas por avaria? Abra o produto, escolha «Ajustar estoque» e informe uma quantidade positiva ou negativa com um motivo. Os ajustes são registrados no log de auditoria com o usuário, a data e uma foto opcional.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Armazéns", level: 2 },
      { id: "stock-units", text: "Unidades de estoque e conversões", level: 2 },
      {
        id: "stock-adjustments",
        text: "Ajustes manuais de estoque",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Painel de pedidos" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Criar pedidos de compra",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "pt-BR",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Criar pedidos de compra",
    description:
      "Crie pedidos de compra para seus fornecedores, acompanhe os recebimentos e registre recebimentos que atualizam o estoque automaticamente.",
    keywords: [
      "pedidos de compra",
      "gestão de fornecedores",
      "compras de atacado",
    ],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Um pedido de compra informa aos seus fornecedores o que enviar, quando e a que preço. Quando a mercadoria chega, lançar o recebimento atualiza o estoque e o histórico do fornecedor em um único passo.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Passo 1 — Adicione um fornecedor",
      },
      {
        type: "p",
        text: "Abra «Compras» ← «Fornecedores» ← «Novo fornecedor». Informe os dados de contato e o prazo de entrega habitual do fornecedor.",
      },
      {
        type: "h2",
        id: "build-po",
        text: "Passo 2 — Monte o pedido de compra",
      },
      {
        type: "p",
        text: "Clique em «Novo pedido de compra», selecione o fornecedor e adicione itens. O preço começa com o último preço do fornecedor, mas você pode sobrescrever cada item.",
      },
      { type: "h2", id: "receive", text: "Passo 3 — Receba o envio" },
      {
        type: "p",
        text: "Quando a mercadoria chegar, clique em «Receber» no pedido de compra. Informe a quantidade efetivamente entregue — recebimentos parciais são suportados — e confirme. Os níveis de estoque são atualizados automaticamente e a fatura do fornecedor é gerada.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transições de status e impacto no estoque",
      },
      {
        type: "p",
        text: "Pedidos de compra e pedidos de venda compartilham o mesmo livro de estoque, mas fluem em direções opostas — confirmar um pedido de compra aumenta o estoque (+), enquanto confirmar um pedido de venda o reduz (−). A tabela a seguir resume as quatro ações principais e seu impacto no estoque:",
      },
      {
        type: "table",
        headers: ["Ação", "Mudança de status", "Impacto no estoque", "Notas"],
        rows: [
          [
            "Confirmar PC",
            "Rascunho / Reaberto / Não confirmado → Confirmado",
            "Entrada de estoque (+)",
            "Mercadoria é recebida no armazém atribuído por item; o custo de compra é registrado no pedido.",
          ],
          [
            "Desconfirmar",
            "Confirmado → Não confirmado",
            "Saída de estoque (−)",
            "Inverte o estoque adicionado ao confirmar o PC; o custo de compra é apagado.",
          ],
          [
            "Cancelar PC",
            "Confirmado → Cancelado",
            "Saída de estoque (−)",
            "Inverte o estoque adicionado ao confirmar o PC; o pedido é mantido somente para auditoria.",
          ],
          [
            "Reabrir",
            "Cancelado → Reaberto",
            "Sem alteração de estoque",
            "O estoque já foi invertido pelo Cancelar. Reabrir apenas altera o status. O pedido pode ser confirmado novamente para adicionar estoque.",
          ],
          [
            "Devolução",
            "Confirmado (por item)",
            "Saída parcial de estoque (−)",
            "Devolve parte do item confirmado ao fornecedor — uma linha de quantidade negativa é adicionada e o estoque é reduzido.",
          ],
          [
            "Cancelar devolução",
            "Confirmado (por item)",
            "Reentrada de estoque (+)",
            "Inverte a devolução — a linha negativa é removida e a quantidade original volta ao estoque.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Confirmar um PC adiciona estoque — não tira",
        text: "Confirmar um pedido de compra significa que a mercadoria chegou fisicamente e foi armazenada, então o estoque sobe (+). Isso é o oposto de confirmar um pedido de venda, que o diminui (−). Não confunda as duas direções: Desconfirmar não devolve a mercadoria ao fornecedor — apenas inverte o estoque que você adicionou ao confirmar.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Cancelar e Desconfirmar invertem o estoque",
        text: "Ambas as ações têm o mesmo efeito sobre o estoque — ambas invertem o estoque que foi adicionado pela confirmação anterior. A diferença está no status final: Cancelar leva o pedido a «Cancelado» (terminal), enquanto Desconfirmar o leva a «Não confirmado» (ainda editável, e a próxima confirmação adicionará estoque novamente).",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Passo 1 — Adicione um fornecedor",
        level: 2,
      },
      { id: "build-po", text: "Passo 2 — Monte o PC", level: 2 },
      { id: "receive", text: "Passo 3 — Receba o envio", level: 2 },
      {
        id: "inventory-impact",
        text: "Transições de status e impacto no estoque",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Níveis de estoque" },
  },

  // ===================================================================
  // GERMAN (de)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "de",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Wholesalify im Überblick",
    description:
      "Wholesalify im Überblick — die B2B-Großhandelsbestellplattform für Frischwaren, Schnelldrehprodukte und mehrspezifische Großhandelsunternehmen.",
    keywords: [
      "Großhandelsplattform",
      "B2B-Bestellung",
      "Großhandels-SaaS-Überblick",
    ],
    readingTime: "ca. 4 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify ist eine moderne B2B-Großhandelsbestellplattform, die für Großhändler, Distributoren und Handelsunternehmen entwickelt wurde. Sie kombiniert ein kundenorientiertes Bestellportal mit einem leistungsstarken Verwaltungs-Backend, sodass Ihr Team Bestellungen, Bestände, Einkäufe und Kundenkonten in einem einzigen System verwalten kann.",
      },
      {
        type: "p",
        text: "Egal, ob Sie Frischwaren nach Gewicht, Obst nach Güteklasse und Kiste oder Produkte mit mehreren Spezifikationen pro SKU verkaufen — Wholesalify bietet flexible Katalog- und Preismodelle, die zur tatsächlichen Arbeitsweise Ihres Unternehmens passen.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Was Wholesalify für Sie tun kann",
      },
      {
        type: "ul",
        items: [
          "Verkauf nach Gewicht, Kiste/Palette oder Einheit in einem einzigen Katalog.",
          "Mehrstufige Preise für Obst und landwirtschaftliche Erzeugnisse nach Güteklasse, Spezifikation oder Menge.",
          "Verwaltung von gewogenen, güteklassifizierten und mehrspezifischen Produkten parallel.",
          "Self-Service-Bestellportal für jeden Großhandelskunden mit Bestellverlauf.",
          "Verfolgung von Bestellungen, Zahlungen und Lieferstatus über eine zentrale Operationskonsole.",
          "Erstellung von Bestandsberichten und automatische Nachbestellauslösung.",
          "Verwaltung von Lieferanten, Bestellungen und Wareneingängen.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Wie die Plattform zusammenspielt",
      },
      {
        type: "p",
        text: "Wholesalify besteht aus drei Schichten, die sich dieselbe Datenquelle teilen:",
      },
      {
        type: "ul",
        items: [
          "Bestellportal — der kundenseitige Shop für Großhandelskäufer.",
          "Verwaltungspanel — das Backend-Arbeitspanel für Ihr Operationsteam.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Wer nutzt Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Großhändler für Frischwaren (Obst, Gemüse, Meeresfrüchte).",
          "Distributoren für Lebensmittel und Schnelldrehprodukte.",
          "Großhändler für Baumaterial und Eisenwaren.",
          "Importeure und Handelsunternehmen mit mehreren Einheiten.",
          "KMU-Großhändler, die Excel und WhatsApp satt haben.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Nächste Schritte",
      },
      {
        type: "ul",
        items: [
          "Lesen Sie den «Schnellstart», um Ihren Mandanten anzulegen und eine erste Testbestellung aufzugeben.",
          "Sehen Sie sich die Anleitung zum «Bestellportal» an, um Ihren Großhandelskatalog aufzubauen.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Bereit loszulegen?",
        text: "Melden Sie sich jetzt für eine kostenlose Testversion an, ohne Kreditkarte. Erstellen Sie Ihren Mandanten, fügen Sie ein paar Produkte hinzu und geben Sie Ihre erste Testbestellung auf — alles in weniger als 15 Minuten.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Kostenlos registrieren",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Was Wholesalify für Sie tun kann",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Wie die Plattform zusammenspielt",
        level: 2,
      },
      { id: "who-uses-it", text: "Wer nutzt Wholesalify", level: 2 },
      { id: "next-steps", text: "Nächste Schritte", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Schnellstart" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "de",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Schnellstart",
    description:
      "Richten Sie Ihr Wholesalify-Konto ein, fügen Sie Ihr erstes Produkt hinzu und senden Sie Ihre erste Großhandelsbestellung in weniger als 15 Minuten.",
    keywords: ["Schnellstart", "Kontoeinrichtung", "erste Bestellung"],
    readingTime: "3 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Diese Anleitung führt Sie durch die Einrichtung Ihres Kontos und das Anlegen Ihrer ersten Großhandelsbestellung. Es wird angenommen, dass Sie Wholesalify zum ersten Mal nutzen und noch keine Daten im System haben.",
      },
      { type: "h2", id: "create-account", text: "Schritt 1 — Konto erstellen" },
      {
        type: "p",
        text: "Gehen Sie zur Registrierungsseite von Wholesalify. Geben Sie Ihren Firmennamen, Ihre E-Mail-Adresse und ein Passwort ein. Sie erhalten sofort eine Bestätigungs-E-Mail — klicken Sie auf den Link, um Ihr Konto zu aktivieren und sich anzumelden.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Schritt 2 — Erstes Produkt hinzufügen",
      },
      {
        type: "p",
        text: "Nach der Anmeldung werden Sie automatisch zum Produktkatalog weitergeleitet. Klicken Sie auf «Neues Produkt» und geben Sie den Produktnamen, die Basiseinheit (z. B. Kilogramm oder Kiste) und den Startpreis ein. Sie können später alles bearbeiten — machen Sie sich also keine Sorgen, perfekt zu starten.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Schritt 3 — Ersten Kunden einladen",
      },
      {
        type: "p",
        text: "Öffnen Sie im Verwaltungspanel «Kunden» und dann «Neuer Kunde». Geben Sie den Namen, die Kontaktdaten und die Standardpreisstufe des Kunden ein. Der Kunde erhält eine Einladung per E-Mail, um ein Passwort zu erstellen und mit dem Durchstöbern des Katalogs zu beginnen.",
      },
      {
        type: "h2",
        id: "place-order",
        text: "Schritt 4 — Bestellung aufgeben",
      },
      {
        type: "p",
        text: "Öffnen Sie das Bestellportal als der Kunde, fügen Sie ein Produkt zum Warenkorb hinzu und schließen Sie den Checkout ab, um die Bestellung zu erstellen. Die Bestellung wechselt sofort in den Status «offen» im Verwaltungspanel und ist bereit zur Bearbeitung.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Glückwunsch!",
        text: "Sie haben die Wholesalify-Einrichtung vollständig abgeschlossen. Von hier aus können Sie den Katalog aufbauen, Preisstufen konfigurieren oder den Rest der Dokumentation erkunden.",
      },
    ],
    toc: [
      { id: "create-account", text: "Schritt 1 — Konto erstellen", level: 2 },
      {
        id: "add-product",
        text: "Schritt 2 — Erstes Produkt hinzufügen",
        level: 2,
      },
      {
        id: "invite-buyer",
        text: "Schritt 3 — Ersten Kunden einladen",
        level: 2,
      },
      { id: "place-order", text: "Schritt 4 — Bestellung aufgeben", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Überblick" },
    next: { href: "/docs/get-started/concepts", title: "Grundbegriffe" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "de",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Grundbegriffe",
    description:
      "Lernen Sie die zentralen Modelle von Wholesalify kennen: Katalog, Preisstufen, Kunden und Bestellungen.",
    keywords: ["Terminologie", "Datenmodell", "Großhandelsgrundlagen"],
    readingTime: "5 Minuten Lesezeit",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Diese Seite erklärt die grundlegenden Konzepte, die Sie für die Arbeit mit Wholesalify benötigen. Wenn Sie von einem traditionellen Bestellverwaltungssystem kommen oder bei Null anfangen, wird das Verständnis dieser Begriffe den Rest der Dokumentation viel klarer machen.",
      },
      { type: "h2", id: "tenants", text: "Mandanten und Arbeitsbereiche" },
      {
        type: "p",
        text: "Jedes Wholesalify-Konto ist vollständig von anderen isoliert. Katalog, Kunden, Bestand und Bestellungen sind alle innerhalb Ihres Mandanten enthalten. Das bedeutet, dass Sie mehrere Marken oder Holdingunternehmen unter einem einzigen Plattform-Konto betreiben und die Daten pro Geschäftseinheit getrennt halten können.",
      },
      { type: "h2", id: "products", text: "Produkte und Varianten" },
      {
        type: "p",
        text: "Ein Produkt ist eine Vorlage. Eine Variante definiert die tatsächliche Menge, die der Kunde kauft — zum Beispiel 5 kg grüne Äpfel oder Birnen Güteklasse A. Selbst einfache Produkte, die keine Spezifikationskomplexität benötigen, werden als ein Produkt mit einer einzigen Variante gespeichert.",
      },
      { type: "h2", id: "price-levels", text: "Preisstufen und Kundenpreise" },
      {
        type: "p",
        text: "Eine Preisstufe definiert eine Preiskategorie — zum Beispiel «Einzelhandel», «Großhandel» oder «VIP». Jeder Kunde ist standardmäßig mit einer Stufe verknüpft, aber dies kann pro Produkt innerhalb einer Bestellung überschrieben werden. Sie können unbegrenzte Preisstufen erstellen und die Preisanpassungen nach Kategorie oder Volumen organisieren.",
      },
      { type: "h2", id: "orders", text: "Bestellungen und ihre Status" },
      {
        type: "p",
        text: "Jede Bestellung durchläuft eine Reihe von Status von der Erstellung bis zur Lieferung. Bestellungen beginnen als «offen», wechseln zu «bestätigt», sobald Ihr Team sie bestätigt und Bestand reserviert hat, dann zu «versendet», wenn sie zur Lieferung ausgehen, und schließlich zu «abgeschlossen». Das System ermöglicht es Ihnen, eine Bestellung jederzeit wieder zu öffnen oder zu stornieren.",
      },
      { type: "h2", id: "stock", text: "Bestand und Lager" },
      {
        type: "p",
        text: "Der Bestand wird separat für jede Produktvariante und jedes Lager erfasst. Wenn eine Bestellung bestätigt wird, wird die Menge automatisch aus dem zugewiesenen Lager reserviert, und Bestellungen, die den verfügbaren Bestand überschreiten, können ohne ausdrückliche Genehmigung nicht bestätigt werden.",
      },
    ],
    toc: [
      { id: "tenants", text: "Mandanten und Arbeitsbereiche", level: 2 },
      { id: "products", text: "Produkte und Varianten", level: 2 },
      {
        id: "price-levels",
        text: "Preisstufen und Kundenpreise",
        level: 2,
      },
      { id: "orders", text: "Bestellungen und ihre Status", level: 2 },
      { id: "stock", text: "Bestand und Lager", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Schnellstart" },
    next: { href: "/docs/ordering-portal/setup", title: "Portal einrichten" },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "de",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Bestellportal einrichten",
    description:
      "Passen Sie das Bestellportal an Ihre Marke an, fügen Sie Zahlungsbedingungen hinzu und legen Sie fest, wie lange Ihr Katalog sichtbar bleibt.",
    keywords: ["Portal-Einrichtung", "Branding", "Zahlungsbedingungen"],
    readingTime: "4 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Sobald Sie einige Produkte und Kunden haben, passen Sie das Bestellportal so an, dass es wie eine Erweiterung Ihrer Marke aussieht und sich so anfühlt. Diese Einstellungen steuern das visuelle Erscheinungsbild, die Zahlungsbedingungen, die Werktage und wie lange der Kunde Ihren Katalog sehen kann, bevor eine Aktualisierung erforderlich ist.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "branding",
        text: "Marke und visuelles Erscheinungsbild",
      },
      {
        type: "p",
        text: "Öffnen Sie «Einstellungen» ← «Marke». Laden Sie Ihr Logo hoch und wählen Sie die Primär- und Akzentfarben, die auf allen Portalseiten erscheinen. Diese Änderungen werden sofort für alle angemeldeten Kunden wirksam.",
      },
      { type: "h2", id: "payment-terms", text: "Zahlungsbedingungen" },
      {
        type: "p",
        text: "Unter «Einstellungen» ← «Zahlung» definieren Sie die akzeptierten Zahlungsmethoden. Zum Beispiel: «Banküberweisung (netto 30 Tage)», «Kreditkarte» oder «Bargeld bei Lieferung». Diese Bedingungen erscheinen am Ende jeder Bestellung.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Die Bedingungen sind der Standard und können pro Kunde überschrieben werden",
        text: "Wenn Sie mit den meisten Kunden «netto 30» arbeiten, aber ein Großkunde «netto 60» erhält, können Sie die Bedingungen global innerhalb der Kundendatei überschreiben.",
      },
    ],
    toc: [
      {
        id: "branding",
        text: "Marke und visuelles Erscheinungsbild",
        level: 2,
      },
      { id: "payment-terms", text: "Zahlungsbedingungen", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Grundbegriffe" },
    next: { href: "/docs/ordering-portal/catalog", title: "B2B-Katalog" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "de",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "B2B-Katalog",
    description:
      "Fügen Sie Produkte und Varianten zu Ihrem Katalog hinzu, definieren Sie Verkaufsoptionen nach Gewicht und Güteklasse und teilen Sie den Katalog mit Ihren Kunden.",
    keywords: ["B2B-Katalog", "Produktverwaltung", "Produktvarianten"],
    readingTime: "6 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Der Katalog ist das, was Ihre Kunden sehen, wenn sie sich im Bestellportal anmelden. Er ist in Kategorien organisiert und jedes Produkt hat eine oder mehrere Varianten. Wholesalify unterstützt drei Hauptstile für den Produktverkauf in einem einzigen Katalog.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Standardprodukte" },
      {
        type: "p",
        text: "Standardprodukte werden pro Einheit verkauft — zum Beispiel eine Kiste mit 24 Flaschen oder eine Palette mit 50 Beuteln. Jedes Produkt hat eine Standardvariante, aber es können Varianten für unterschiedliche Spezifikationen hinzugefügt werden.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Gewogene Produkte" },
      {
        type: "p",
        text: "Gewogene Produkte werden pro Kilogramm oder Pfund verkauft. Die Variante definiert die Gewichtseinheit und den Stückpreis und ermöglicht es dem Kunden, die Menge in einem beliebigen Vielfachen der Einheit einzugeben. Es ist ideal für Frischwaren und Schüttgüter.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Mehrspezifische Produkte" },
      {
        type: "p",
        text: "Einige Produkte gibt es in mehreren Spezifikationen — zum Beispiel Birnen mit Größen (klein/mittel/groß), Farben oder Geschmacksrichtungen. Varianten werden automatisch aus den Spezifikationskombinationen generiert, die Sie für das Produkt definieren.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Standardprodukte", level: 2 },
      { id: "weighed", text: "Gewogene Produkte", level: 2 },
      { id: "multi-spec", text: "Mehrspezifische Produkte", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Bestellportal einrichten",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Preisstufen und Kundenpreise",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "de",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Preisstufen und Kundenpreise",
    description:
      "Erstellen Sie Preisstufen, Mengenrabatte und Preisregeln für gewogenes Obst, die auf Kunden oder Produkte angewendet werden.",
    keywords: ["Preisstufe", "Mengenrabatt", "Obstpreisgestaltung"],
    readingTime: "7 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify unterstützt flexible Preismodelle, die die Komplexität realer Großhandelsoperationen bewältigen — Kundenebenen, Mengenrabatte und die Preisgestaltung von gewogenem Obst.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Preisstufen" },
      {
        type: "p",
        text: "Eine Preisstufe ist nur ein Label für eine Preiskategorie — zum Beispiel «Einzelhandel», «Großhandel» oder «VIP». Erstellen Sie so viele Sie benötigen und verknüpfen Sie dann jeden Kunden mit einer Standardstufe. Die Standardpreisstufe bestimmt den Preis, den der Kunde für jedes Produkt zahlt, sofern er nicht manuell überschrieben wird.",
      },
      { type: "h2", id: "tiered", text: "Mengenrabatte" },
      {
        type: "p",
        text: "Für Produkte, die in großen Mengen gekauft werden, können Sie gestaffelte Rabatte auf der Preisstufe einrichten. Zum Beispiel die ersten 10 Kisten zum vollen Preis, 25 Kisten mit 5 % Rabatt, 50 oder mehr mit 10 % Rabatt. Die Rabatte werden automatisch angewendet, sobald die Menge im Warenkorb eingegeben wird.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Preisgestaltung für gewogenes Obst nach Güteklasse",
      },
      {
        type: "p",
        text: "Obst wird normalerweise nach Güteklassen (A, B, C) zu unterschiedlichen Preisen verkauft, manchmal auch in verschiedenen Einheiten (Kiste, Palette, Kilogramm). Das Obstpreismodell von Wholesalify unterstützt beide Fälle: Preisen Sie Ihre Klassen pro Einheit oder lassen Sie die Einheit leer, damit der Preis für alle Einheiten gilt.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Kundenpreis-Überschreibungen",
      },
      {
        type: "p",
        text: "Manche Ihrer Großkunden handeln spezifische Preise außerhalb der Standardpreisstufe aus. Öffnen Sie in diesem Fall den Kunden und fügen Sie unter dem Reiter «Preisgestaltung» kundenspezifische Preisregeln hinzu. Diese Regeln überschreiben sowohl die Preisstufe als auch die Mengenrabatte.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Priorität der Preisregeln",
        text: "Wenn mehrere aktive Regeln für dasselbe Produkt vorhanden sind, gilt die folgende Priorität: (1) kundenspezifischer Preis, (2) Mengenrabatt auf der Preisstufe, (3) Basispreis der Preisstufe.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Preisstufen", level: 2 },
      { id: "tiered", text: "Mengenrabatte", level: 2 },
      {
        id: "weighed-fruit",
        text: "Obstpreisgestaltung nach Güteklasse",
        level: 2,
      },
      {
        id: "customer-pricing",
        text: "Kundenpreis-Überschreibungen",
        level: 2,
      },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "B2B-Katalog" },
    next: { href: "/docs/orders/dashboard", title: "Bestelldashboard" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "de",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Bestelldashboard",
    description:
      "Verwalten Sie jede Bestellung vom Eingang bis zur Lieferung — filtern Sie nach Zeitraum, ändern Sie Status und bearbeiten Sie Retouren.",
    keywords: ["Bestelldashboard", "Bestellstatus", "Retoure"],
    readingTime: "6 Minuten Lesezeit",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Das Bestelldashboard ist der Ausgangspunkt für alles rund um Großhandelsbestellungen. Es listet jede Bestellung in Ihrem Mandanten auf und ermöglicht es Ihnen, von einem einzigen Ort aus zu filtern, zu bestätigen, zu versenden, zu fakturieren und Retouren abzuwickeln.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filter" },
      {
        type: "p",
        text: "Mit den Filtern oben in der Tabelle können Sie die Liste eingrenzen, ohne eine Textsuche zu verwenden. Sie können mehrere Filter kombinieren, um einen exakten Bereich einzugrenzen, z. B. «alle bestätigten Bestellungen der letzten Woche von einem bestimmten Kunden».",
      },
      {
        type: "ul",
        items: [
          "Zeitraum (heute, letzte Woche, diesen Monat, benutzerdefinierter Bereich).",
          "Status (offen, bestätigt, storniert, abgeschlossen, wiedereröffnet).",
          "Kunde oder Preisstufe.",
          "Lager, aus dem die Bestellung versendet wurde.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Tabellenspalten" },
      {
        type: "p",
        text: "Jede Zeile der Tabelle enthält die Informationen, die Sie zur schnellen Bearbeitung einer Bestellung benötigen: Bestelldatum, Kundenname, Anzahl der Artikel, Zwischensumme und aktueller Status. Klicken Sie auf eine beliebige Zeile, um die Bestellung zu öffnen und eine Aktion auszuführen.",
      },
      { type: "h2", id: "statuses", text: "Bestellstatus" },
      {
        type: "p",
        text: "Jede Bestellung durchläuft im Laufe ihres Lebenszyklus die folgenden Status:",
      },
      {
        type: "ol",
        items: [
          "Offen — vom Kunden erstellt und noch nicht bearbeitet.",
          "Bestätigt — von Ihrem Team geprüft und mit reserviertem Bestand, versandbereit.",
          "Versendet — die Bestellung ist zur Lieferung an den Kunden unterwegs.",
          "Abgeschlossen — geliefert und mit Empfangsbestätigungen dokumentiert.",
          "Storniert — vor der Bestätigung geschlossen und kann nicht wiedereröffnet werden.",
          "Wiedereröffnet — zuvor storniert und zur weiteren Bearbeitung wiedereröffnet.",
        ],
      },
      { type: "h2", id: "actions", text: "Bestellaktionen" },
      {
        type: "p",
        text: "Um eine Bestellung zu öffnen, klicken Sie auf ihre Zeile. Das Seitenpanel zeigt die vollständigen Bestelldetails, einschließlich Artikeln, Preisen und Adresse. Die folgenden Aktionen sind je nach aktuellem Status in der oberen Leiste verfügbar:",
      },
      {
        type: "ul",
        items: [
          "Bestätigen — die Bestellung von «offen» auf «bestätigt» setzen und den Bestand reservieren.",
          "Bestätigung aufheben — die Bestellung auf «offen» zurücksetzen und den Bestand freigeben.",
          "Versenden — die Bestellung von «bestätigt» auf «versendet» setzen.",
          "Retournieren — eine teilweise oder vollständige Retoure nach dem Versand erfassen.",
          "Stornieren — die Bestellung von «bestätigt» oder «offen» auf «storniert» setzen.",
          "Wiedereröffnen — eine stornierte Bestellung auf den Status «offen» zurücksetzen.",
          "Rechnung erstellen — eine Rechnung aus einer bestätigten oder versendeten Bestellung erstellen.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Auswirkung der Status auf den Bestand",
      },
      {
        type: "p",
        text: "Jede Statusänderung einer Bestellung wird als eine Zeile im Bestandsbuch erfasst und kann bis zur ursprünglichen Bestellung zurückverfolgt werden. Die folgende Tabelle fasst die Bestandsauswirkung jeder Aktion zusammen:",
      },
      {
        type: "table",
        headers: ["Aktion", "Statusänderung", "Bestandsauswirkung", "Hinweise"],
        rows: [
          [
            "Bestätigen",
            "Entwurf / Wiedereröffnet / Nicht bestätigt → Bestätigt",
            "Abgang (−)",
            "Wird aus dem zugewiesenen Lager pro Position entnommen; die Kosten werden bei der Bestätigung in der Bestellung erfasst.",
          ],
          [
            "Bestätigung aufheben",
            "Bestätigt → Nicht bestätigt",
            "Rückgabe (+)",
            "Kehrt den Abgang aus der letzten Bestätigung um; das Kostenfeld der Bestellung wird geleert.",
          ],
          [
            "Stornieren",
            "Bestätigt → Storniert",
            "Rückgabe (+)",
            "Kehrt den Abgang aus der letzten Bestätigung um; die Bestellung bleibt zur Prüfung erhalten und kann nicht weitergeführt werden.",
          ],
          [
            "Wiedereröffnen",
            "Storniert → Wiedereröffnet",
            "Keine Änderung",
            "Der Bestand wurde bereits durch das Stornieren zurückgegeben. Wiedereröffnen ändert nur den Status; die nächste Bestätigung nimmt den Bestand erneut heraus.",
          ],
          [
            "Retoure",
            "Bestätigt (pro Position)",
            "Teilretoure (+)",
            "Fügt eine Zeile mit negativer Menge für die bestätigte Position hinzu und gibt diese Menge an den Bestand zurück.",
          ],
          [
            "Retoure stornieren",
            "Bestätigt (pro Position)",
            "Erneuter Abgang (−)",
            "Entfernt die zuvor erfasste Retourenzeile und nimmt die ursprüngliche Menge erneut aus dem Bestand.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Sowohl Stornieren als auch Bestätigung aufheben geben den Bestand zurück",
        text: "Beide Aktionen haben dieselbe Auswirkung auf den Bestand: beide kehren den Abgang aus der letzten Bestätigung um. Der Unterschied liegt im Endstatus — Stornieren bringt die Bestellung auf «Storniert» (Endstatus, keine weiteren Statusänderungen mehr möglich); Bestätigung aufheben bringt sie auf «Nicht bestätigt» (weiterhin editierbar, eine erneute Bestätigung nimmt den Bestand wieder heraus).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Keine Massenoperationen",
        text: "Die Liste der Verkaufsbestellungen unterstützt weder Zeilenauswahl noch Massenaktionen. Jede Bestellung muss einzeln geöffnet werden, um eine Aktion auszuführen.",
      },
    ],
    toc: [
      { id: "filters", text: "Filter", level: 2 },
      { id: "table-columns", text: "Tabellenspalten", level: 2 },
      { id: "statuses", text: "Bestellstatus", level: 2 },
      { id: "actions", text: "Bestellaktionen", level: 2 },
      {
        id: "inventory-impact",
        text: "Auswirkung der Status auf den Bestand",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Preisstufen und Kundenpreise",
    },
    next: { href: "/docs/inventory/stock", title: "Bestandsstände" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "de",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Bestandsstände",
    description:
      "Verfolgen Sie den Bestand pro Standort, Lager und Produktvariante. Konfigurieren Sie Ihre Basisbestandseinheit und Umrechnungsregeln.",
    keywords: ["Bestandsverwaltung", "Großhandelsbestand", "Mehrlager"],
    readingTime: "5 Minuten Lesezeit",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Das Bestandsmodul von Wholesalify führt für jede Produktvariante und jedes Lager eine Echtzeit-Zählung. Der Bestand wird automatisch abgeglichen, wenn Bestellungen bestätigt werden und wenn Einkaufseingänge gebucht werden.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Lager" },
      {
        type: "p",
        text: "Fügen Sie so viele Lager hinzu, wie Sie betreiben. Jedes Produkt hat eine separate Bestandszählung pro Lager, sodass Sie Bestellungen vom nächstgelegenen Standort zum Kunden ausführen können.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Bestandseinheiten und Umrechnungen",
      },
      {
        type: "p",
        text: "Stellen Sie für Frischprodukte die Bestandseinheit auf Kilogramm. Fügen Sie Packungsgrößen wie «5-kg-Kiste» oder «10-kg-Korb» mit automatischen Umrechnungen hinzu, damit Kunden in diesen Einheiten bestellen können, ohne dass Sie den Bestand manuell umrechnen müssen.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Manuelle Bestandsanpassungen",
      },
      {
        type: "p",
        text: "Einige Kisten durch Beschädigung verloren? Öffnen Sie das Produkt, wählen Sie «Bestand anpassen» und geben Sie eine positive oder negative Menge mit einem Grund ein. Anpassungen werden im Prüfprotokoll mit Benutzer, Datum und optionalem Foto erfasst.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Lager", level: 2 },
      {
        id: "stock-units",
        text: "Bestandseinheiten und Umrechnungen",
        level: 2,
      },
      {
        id: "stock-adjustments",
        text: "Manuelle Bestandsanpassungen",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Bestelldashboard" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Bestellungen erstellen",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "de",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Bestellungen erstellen",
    description:
      "Erstellen Sie Bestellungen bei Ihren Lieferanten, verfolgen Sie eingehende Lieferungen und buchen Sie Eingänge, die den Bestand automatisch aktualisieren.",
    keywords: ["Bestellungen", "Lieferantenverwaltung", "Großhandelseinkauf"],
    readingTime: "6 Minuten Lesezeit",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Eine Bestellung teilt Ihren Lieferanten mit, was sie wann und zu welchem Preis liefern sollen. Wenn die Ware eintrifft, aktualisiert das Buchen des Eingangs den Bestand und den Lieferanteneintrag in einem Schritt.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Schritt 1 — Lieferant hinzufügen",
      },
      {
        type: "p",
        text: "Öffnen Sie «Einkauf» ← «Lieferanten» ← «Neuer Lieferant». Geben Sie die Kontaktdaten und die übliche Vorlaufzeit des Lieferanten ein.",
      },
      { type: "h2", id: "build-po", text: "Schritt 2 — Bestellung aufbauen" },
      {
        type: "p",
        text: "Klicken Sie auf «Neue Bestellung», wählen Sie den Lieferanten und fügen Sie Positionen hinzu. Der Preis beginnt mit dem letzten Preis des Lieferanten, aber Sie können jede Position überschreiben.",
      },
      { type: "h2", id: "receive", text: "Schritt 3 — Lieferung empfangen" },
      {
        type: "p",
        text: "Wenn die Ware eintrifft, klicken Sie in der Bestellung auf «Empfangen». Geben Sie die tatsächlich gelieferte Menge ein — Teileingänge werden unterstützt — und bestätigen Sie. Die Bestandsstände werden automatisch aktualisiert und die Lieferantenrechnung wird erstellt.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Statusübergänge und Bestandsauswirkung",
      },
      {
        type: "p",
        text: "Bestellungen und Verkaufsbestellungen teilen sich dasselbe Bestandsbuch, fließen aber in entgegengesetzte Richtungen — das Bestätigen einer Bestellung erhöht den Bestand (+), während das Bestätigen einer Verkaufsbestellung ihn verringert (−). Die folgende Tabelle fasst die vier Hauptaktionen und ihre Auswirkungen auf den Bestand zusammen:",
      },
      {
        type: "table",
        headers: ["Aktion", "Statusänderung", "Bestandsauswirkung", "Hinweise"],
        rows: [
          [
            "Bestellung bestätigen",
            "Entwurf / Wiedereröffnet / Nicht bestätigt → Bestätigt",
            "Bestandseingang (+)",
            "Ware wird im zugewiesenen Lager pro Position empfangen; die Einkaufskosten werden in der Bestellung erfasst.",
          ],
          [
            "Bestätigung aufheben",
            "Bestätigt → Nicht bestätigt",
            "Bestandsabgang (−)",
            "Kehrt den bei der Bestätigung hinzugefügten Bestand um; die Einkaufskosten werden geleert.",
          ],
          [
            "Bestellung stornieren",
            "Bestätigt → Storniert",
            "Bestandsabgang (−)",
            "Kehrt den bei der Bestätigung hinzugefügten Bestand um; die Bestellung bleibt nur zur Prüfung erhalten.",
          ],
          [
            "Wiedereröffnen",
            "Storniert → Wiedereröffnet",
            "Keine Bestandsänderung",
            "Der Bestand wurde bereits durch das Stornieren zurückgebucht. Wiedereröffnen ändert nur den Status. Die Bestellung kann erneut bestätigt werden, um den Bestand wieder hinzuzufügen.",
          ],
          [
            "Retoure",
            "Bestätigt (pro Position)",
            "Teilbestandsabgang (−)",
            "Senden Sie einen Teil der bestätigten Position an den Lieferanten zurück — es wird eine Zeile mit negativer Menge hinzugefügt und der Bestand verringert.",
          ],
          [
            "Retoure stornieren",
            "Bestätigt (pro Position)",
            "Bestand wieder hinzufügen (+)",
            "Kehrt die Retoure um — die negative Position wird entfernt und die ursprüngliche Menge dem Bestand wieder hinzugefügt.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Das Bestätigen einer Bestellung erhöht den Bestand — und nimmt ihn nicht weg",
        text: "Das Bestätigen einer Bestellung bedeutet, dass die Ware physisch eingetroffen und eingelagert ist, daher steigt der Bestand (+). Dies ist das Gegenteil der Bestätigung einer Verkaufsbestellung, die ihn verringert (−). Verwechseln Sie die beiden Richtungen nicht: Bestätigung aufheben sendet die Ware nicht an den Lieferanten zurück — sie macht lediglich den Bestand rückgängig, den Sie bei der Bestätigung hinzugefügt haben.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Sowohl Stornieren als auch Bestätigung aufheben machen den Bestand rückgängig",
        text: "Beide Aktionen haben dieselbe Bestandsauswirkung — beide machen den Bestand rückgängig, der durch die vorherige Bestätigung hinzugefügt wurde. Der Unterschied liegt im Endstatus: Stornieren bringt die Bestellung auf «Storniert» (Endstatus), während Bestätigung aufheben sie auf «Nicht bestätigt» bringt (weiterhin editierbar, und eine erneute Bestätigung fügt den Bestand wieder hinzu).",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Schritt 1 — Lieferant hinzufügen",
        level: 2,
      },
      { id: "build-po", text: "Schritt 2 — Bestellung aufbauen", level: 2 },
      { id: "receive", text: "Schritt 3 — Lieferung empfangen", level: 2 },
      {
        id: "inventory-impact",
        text: "Statusübergänge und Bestandsauswirkung",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Bestandsstände" },
  },

  // ===================================================================
  // FRENCH (fr)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "fr",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Aperçu de Wholesalify",
    description:
      "Aperçu de Wholesalify — plateforme B2B de commande en gros pour les entreprises de produits frais, biens de grande consommation et grossistes multi-spécifications.",
    keywords: [
      "plateforme de gros",
      "commande B2B",
      "vue d'ensemble SaaS grossiste",
    ],
    readingTime: "env. 4 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify est une plateforme moderne de commandes B2B en gros, conçue pour les grossistes, les distributeurs et les sociétés commerciales. Elle combine un portail de commandes orienté client avec un puissant tableau de bord d'administration, permettant à votre équipe de gérer les commandes, le stock, les achats et les comptes clients dans un seul système.",
      },
      {
        type: "p",
        text: "Que vous vendiez des produits frais au poids, des fruits par catégorie et par caisse, ou des produits multi-spécifications par SKU, Wholesalify propose des modèles de catalogue et de tarification flexibles qui s'alignent sur le fonctionnement réel de votre entreprise.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Ce que Wholesalify peut faire pour vous",
      },
      {
        type: "ul",
        items: [
          "Vendre au poids, à la caisse/palette ou à l'unité dans un seul catalogue.",
          "Tarifs à plusieurs niveaux pour les fruits et produits agricoles selon la catégorie, la spécification ou le volume.",
          "Gérer en parallèle les produits pesés, classés et multi-spécifications.",
          "Offrir un portail en libre-service pour chaque grossiste avec historique des commandes.",
          "Suivre les commandes, les encaissements et les statuts de livraison depuis un seul tableau de bord opérationnel.",
          "Générer des rapports de stock et déclencher des réapprovisionnements automatiques.",
          "Gérer les fournisseurs, les bons de commande et la réception des marchandises.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Comment la plateforme s'articule",
      },
      {
        type: "p",
        text: "Wholesalify se compose de trois couches qui partagent la même source de données :",
      },
      {
        type: "ul",
        items: [
          "Portail de commande — la boutique côté client pour les acheteurs en gros.",
          "Tableau de bord d'administration — le panneau backend pour votre équipe opérationnelle.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Qui utilise Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Grossistes en produits frais (fruits, légumes, fruits de mer).",
          "Distributeurs de produits alimentaires et de biens de grande consommation.",
          "Grossistes en matériaux de construction et quincaillerie.",
          "Importateurs et sociétés commerciales multi-unités.",
          "PME du gros lassées d'Excel et de WhatsApp.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Étapes suivantes",
      },
      {
        type: "ul",
        items: [
          "Lisez le « Démarrage rapide » pour créer votre espace et passer votre première commande test.",
          "Consultez le guide du « Portail de commande » pour construire votre catalogue grossiste.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Prêt à commencer ?",
        text: "Inscrivez-vous maintenant pour un essai gratuit, sans carte de crédit. Créez votre espace, ajoutez quelques produits et passez votre première commande test — le tout en moins de 15 minutes.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Inscription gratuite",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Ce que Wholesalify peut faire pour vous",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Comment la plateforme s'articule",
        level: 2,
      },
      { id: "who-uses-it", text: "Qui utilise Wholesalify", level: 2 },
      { id: "next-steps", text: "Étapes suivantes", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Démarrage rapide" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "fr",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Démarrage rapide",
    description:
      "Configurez votre compte Wholesalify, ajoutez votre premier produit et envoyez votre première commande en gros en moins de 15 minutes.",
    keywords: [
      "démarrage rapide",
      "configuration du compte",
      "première commande",
    ],
    readingTime: "3 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Ce guide vous accompagne dans la configuration de votre compte et dans la création de votre première commande en gros. Il suppose que c'est votre première utilisation de Wholesalify et que vous n'avez encore aucune donnée dans le système.",
      },
      {
        type: "h2",
        id: "create-account",
        text: "Étape 1 — Créez votre compte",
      },
      {
        type: "p",
        text: "Rendez-vous sur la page d'inscription de Wholesalify. Saisissez le nom de votre entreprise, votre adresse e-mail et un mot de passe. Vous recevrez immédiatement un e-mail de confirmation — cliquez sur le lien pour activer votre compte et vous connecter.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Étape 2 — Ajoutez votre premier produit",
      },
      {
        type: "p",
        text: "Après votre connexion, vous êtes automatiquement dirigé vers le catalogue produits. Cliquez sur « Nouveau produit » et saisissez le nom du produit, l'unité de vente de base (par exemple kilogramme ou caisse) et le prix de départ. Vous pourrez tout modifier plus tard — ne vous inquiétez pas de devoir être parfait.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Étape 3 — Invitez votre premier client",
      },
      {
        type: "p",
        text: "Dans le tableau de bord d'administration, ouvrez « Clients » puis « Nouveau client ». Saisissez le nom du client, ses coordonnées et le niveau de prix par défaut. Le client reçoit une invitation par e-mail pour créer son mot de passe et commencer à parcourir le catalogue.",
      },
      { type: "h2", id: "place-order", text: "Étape 4 — Passez une commande" },
      {
        type: "p",
        text: "Ouvrez le portail de commande en tant que client, ajoutez un produit au panier et finalisez le paiement pour créer la commande. La commande passe immédiatement au statut « ouverte » dans le tableau de bord d'administration, prête à être traitée.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Félicitations !",
        text: "Vous venez de terminer la configuration de Wholesalify. À partir d'ici, vous pouvez bâtir le catalogue, configurer des niveaux de prix ou explorer le reste de la documentation.",
      },
    ],
    toc: [
      { id: "create-account", text: "Étape 1 — Créez votre compte", level: 2 },
      {
        id: "add-product",
        text: "Étape 2 — Ajoutez votre premier produit",
        level: 2,
      },
      {
        id: "invite-buyer",
        text: "Étape 3 — Invitez votre premier client",
        level: 2,
      },
      { id: "place-order", text: "Étape 4 — Passez une commande", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Aperçu" },
    next: {
      href: "/docs/get-started/concepts",
      title: "Concepts fondamentaux",
    },
  },

  // ----- Get started / Concepts -----
  {
    locale: "fr",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Concepts fondamentaux",
    description:
      "Découvrez les modèles centraux de Wholesalify : catalogue, niveaux de prix, clients et bons de commande.",
    keywords: ["terminologie", "modèle de données", "fondamentaux du gros"],
    readingTime: "5 minutes de lecture",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Cette page explique les concepts fondamentaux dont vous avez besoin pour travailler avec Wholesalify. Que vous veniez d'un système traditionnel de gestion des commandes ou que vous partiez de zéro, comprendre ces termes rendra le reste de la documentation beaucoup plus clair.",
      },
      { type: "h2", id: "tenants", text: "Espaces et espaces de travail" },
      {
        type: "p",
        text: "Chaque compte Wholesalify est totalement isolé des autres. Le catalogue, les clients, le stock et les commandes sont tous contenus dans votre espace. Cela signifie que vous pouvez gérer plusieurs marques ou sociétés holding sous un seul compte de plateforme, tout en gardant les données séparées par unité d'activité.",
      },
      { type: "h2", id: "products", text: "Produits et variantes" },
      {
        type: "p",
        text: "Un produit est un modèle. Une variante définit la quantité réellement achetée par le client — par exemple, 5 kg de pommes vertes ou poires catégorie A. Même les produits simples qui ne nécessitent pas de complexité de spécifications sont stockés en tant que produit unique avec une seule variante.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "Niveaux de prix et prix par client",
      },
      {
        type: "p",
        text: "Un niveau de prix définit une catégorie de tarification — par exemple « détail », « gros » ou « VIP ». Chaque client est associé à un niveau par défaut, mais cela peut être remplacé au niveau du produit à l'intérieur d'une commande. Vous pouvez créer un nombre illimité de niveaux de prix et organiser les ajustements par catégorie ou par volume.",
      },
      { type: "h2", id: "orders", text: "Commandes et leurs statuts" },
      {
        type: "p",
        text: "Chaque commande passe par une série de statuts, de sa création à sa livraison. Les commandes commencent comme « ouvertes », passent à « confirmées » une fois que votre équipe les confirme et réserve le stock, puis « expédiées » lorsqu'elles partent en livraison, et enfin « terminées ». Le système vous permet de rouvrir ou d'annuler une commande à n'importe quel stade.",
      },
      { type: "h2", id: "stock", text: "Stock et entrepôts" },
      {
        type: "p",
        text: "Le stock est enregistré séparément pour chaque variante de produit et chaque entrepôt. Lorsqu'une commande est confirmée, la quantité est automatiquement réservée à partir de l'entrepôt attribué, et les commandes dépassant le stock disponible ne peuvent pas être confirmées sans autorisation explicite.",
      },
    ],
    toc: [
      { id: "tenants", text: "Espaces et espaces de travail", level: 2 },
      { id: "products", text: "Produits et variantes", level: 2 },
      {
        id: "price-levels",
        text: "Niveaux de prix et prix par client",
        level: 2,
      },
      { id: "orders", text: "Commandes et leurs statuts", level: 2 },
      { id: "stock", text: "Stock et entrepôts", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Démarrage rapide" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configurer le portail",
    },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "fr",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configurer le portail de commande",
    description:
      "Adaptez le portail de commande à votre marque, ajoutez des conditions de paiement et définissez la durée de visibilité de votre catalogue.",
    keywords: ["configuration du portail", "marque", "conditions de paiement"],
    readingTime: "4 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Une fois que vous avez quelques produits et clients, personnalisez le portail de commande pour qu'il ressemble et donne l'impression d'être une extension de votre marque. Ces paramètres contrôlent l'apparence visuelle, les conditions de paiement, les jours ouvrés et la durée pendant laquelle le client peut voir votre catalogue avant qu'une mise à jour soit nécessaire.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Marque et apparence visuelle" },
      {
        type: "p",
        text: "Ouvrez « Paramètres » ← « Marque ». Téléversez votre logo et choisissez les couleurs primaire et d'accent qui apparaîtront sur toutes les pages du portail. Ces modifications sont prises en compte immédiatement pour tous les clients connectés.",
      },
      { type: "h2", id: "payment-terms", text: "Conditions de paiement" },
      {
        type: "p",
        text: "Dans « Paramètres » ← « Paiement », définissez les modes de paiement acceptés. Par exemple : « Virement bancaire (net 30) », « Carte de crédit » ou « Paiement à la livraison ». Ces conditions apparaissent au bas de chaque commande.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Les conditions sont la valeur par défaut et peuvent être remplacées par client",
        text: "Si votre relation avec la plupart des clients est « net 30 », mais qu'un client important est en « net 60 », vous pouvez remplacer les conditions de manière globale dans la fiche client.",
      },
    ],
    toc: [
      { id: "branding", text: "Marque et apparence visuelle", level: 2 },
      { id: "payment-terms", text: "Conditions de paiement", level: 2 },
    ],
    prev: {
      href: "/docs/get-started/concepts",
      title: "Concepts fondamentaux",
    },
    next: { href: "/docs/ordering-portal/catalog", title: "Catalogue B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "fr",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Catalogue B2B",
    description:
      "Ajoutez des produits et des variantes à votre catalogue, définissez des options de vente au poids et par catégorie, et partagez le catalogue avec vos clients.",
    keywords: ["catalogue B2B", "gestion des produits", "variantes de produit"],
    readingTime: "6 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Le catalogue est ce que vos clients voient lorsqu'ils se connectent au portail de commande. Il est organisé en catégories et chaque produit possède une ou plusieurs variantes. Wholesalify prend en charge trois principaux styles de vente de produits au sein d'un même catalogue.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Produits standards" },
      {
        type: "p",
        text: "Les produits standards sont vendus à l'unité — par exemple, une caisse de 24 bouteilles ou une palette de 50 sacs. Chaque produit dispose d'une variante par défaut, mais des variantes peuvent être ajoutées pour différentes spécifications.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Produits pesés" },
      {
        type: "p",
        text: "Les produits pesés sont vendus au kilogramme ou à la livre. La variante définit l'unité de poids et le prix unitaire, et permet au client de saisir la quantité dans n'importe quel multiple de l'unité. C'est idéal pour les produits frais et les matériaux en vrac.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Produits multi-spécifications" },
      {
        type: "p",
        text: "Certains produits existent en plusieurs spécifications — par exemple, des poires avec tailles (petit/moyen/gros), couleurs ou saveurs. Les variantes sont générées automatiquement à partir des combinaisons de spécifications que vous définissez pour le produit.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Produits standards", level: 2 },
      { id: "weighed", text: "Produits pesés", level: 2 },
      { id: "multi-spec", text: "Produits multi-spécifications", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configurer le portail de commande",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveaux de prix et prix par client",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "fr",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Niveaux de prix et prix par client",
    description:
      "Créez des niveaux de prix, des remises sur volume et des règles de tarification pour les fruits pesés qui s'appliquent aux clients ou aux produits.",
    keywords: [
      "niveau de prix",
      "remise sur volume",
      "tarification des fruits",
    ],
    readingTime: "7 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify prend en charge des modèles de tarification flexibles capables de gérer la complexité des opérations réelles en gros — niveaux clients, remises sur volume et tarification des fruits au poids.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Niveaux de prix" },
      {
        type: "p",
        text: "Un niveau de prix n'est qu'une étiquette pour une catégorie de prix — par exemple, « détail », « gros » ou « VIP ». Créez-en autant que nécessaire, puis associez chaque client à un niveau par défaut. Le niveau par défaut détermine le prix payé par le client pour chaque produit, sauf remplacement manuel.",
      },
      { type: "h2", id: "tiered", text: "Remises sur volume" },
      {
        type: "p",
        text: "Pour les produits achetés en grande quantité, vous pouvez configurer des remises progressives au niveau du prix. Par exemple, les 10 premières caisses au prix plein, 25 caisses avec 5 % de remise, 50 ou plus avec 10 % de remise. Les remises sont appliquées automatiquement lorsque la quantité est saisie dans le panier.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Tarification des fruits pesés par catégorie",
      },
      {
        type: "p",
        text: "Les fruits sont généralement vendus par catégorie (A, B, C) à des prix différents, et parfois dans des unités différentes (caisse, palette, kilogramme). Le modèle de tarification des fruits de Wholesalify prend en charge les deux cas : tariez vos catégories par unité ou laissez l'unité vide pour que le prix s'applique à toutes les unités.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Remplacements de prix par client",
      },
      {
        type: "p",
        text: "Certains de vos gros clients négocient des prix spécifiques en dehors du niveau de prix par défaut. Dans ce cas, ouvrez le client et ajoutez des règles de tarification spécifiques sous l'onglet « Tarification ». Ces règles remplacent à la fois le niveau de prix et les remises sur volume.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Priorité des règles de tarification",
        text: "Lorsque plusieurs règles actives existent pour le même produit, la priorité suivante s'applique : (1) prix spécifique au client, (2) remise sur volume du niveau de prix, (3) prix de base du niveau de prix.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Niveaux de prix", level: 2 },
      { id: "tiered", text: "Remises sur volume", level: 2 },
      {
        id: "weighed-fruit",
        text: "Tarification des fruits par catégorie",
        level: 2,
      },
      { id: "customer-pricing", text: "Remplacements par client", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Catalogue B2B" },
    next: {
      href: "/docs/orders/dashboard",
      title: "Tableau de bord des commandes",
    },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "fr",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Tableau de bord des commandes",
    description:
      "Gérez chaque commande, de sa réception à sa livraison — filtrez par période, modifiez les statuts et traitez les retours.",
    keywords: ["tableau de bord des commandes", "statut de commande", "retour"],
    readingTime: "6 minutes de lecture",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Le tableau de bord des commandes est le point de départ pour tout ce qui concerne les commandes en gros. Il liste chaque commande dans votre espace et vous permet de filtrer, confirmer, expédier, facturer et retourner, le tout depuis un seul endroit.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtres" },
      {
        type: "p",
        text: "Les filtres en haut du tableau vous permettent de réduire la liste sans recourir à une recherche textuelle. Vous pouvez combiner plusieurs filtres pour cibler une plage précise, comme « toutes les commandes confirmées la semaine dernière pour un client spécifique ».",
      },
      {
        type: "ul",
        items: [
          "Plage de dates (aujourd'hui, semaine dernière, ce mois-ci, plage personnalisée).",
          "Statut (ouverte, confirmée, annulée, terminée, rouverte).",
          "Client ou niveau de prix.",
          "Entrepôt depuis lequel la commande a été expédiée.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Colonnes du tableau" },
      {
        type: "p",
        text: "Chaque ligne du tableau contient les informations dont vous avez besoin pour traiter rapidement une commande : date de la commande, nom du client, nombre d'articles, sous-total et statut actuel. Cliquez sur n'importe quelle ligne pour ouvrir la commande et effectuer une action.",
      },
      { type: "h2", id: "statuses", text: "Statuts de commande" },
      {
        type: "p",
        text: "Chaque commande passe par les statuts suivants au cours de son cycle de vie :",
      },
      {
        type: "ol",
        items: [
          "Ouverte — créée par le client et pas encore traitée.",
          "Confirmée — examinée par votre équipe avec stock réservé, prête à être expédiée.",
          "Expédiée — la commande est partie en livraison chez le client.",
          "Terminée — livrée et documentée avec les reçus.",
          "Annulée — clôturée avant confirmation et non réouvrable.",
          "Rouverte — précédemment annulée et rouverte pour traitement.",
        ],
      },
      { type: "h2", id: "actions", text: "Actions de commande" },
      {
        type: "p",
        text: "Pour ouvrir une commande, cliquez sur sa ligne. Le panneau latéral affiche tous les détails de la commande, y compris articles, prix et adresse. Les actions suivantes sont disponibles dans la barre supérieure en fonction du statut actuel :",
      },
      {
        type: "ul",
        items: [
          "Confirmer — faire passer la commande d'« ouverte » à « confirmée » et réserver le stock.",
          "Annuler la confirmation — ramener la commande à « ouverte » et libérer le stock.",
          "Expédier — faire passer la commande de « confirmée » à « expédiée ».",
          "Retourner — enregistrer un retour partiel ou total après expédition.",
          "Annuler — faire passer la commande de « confirmée » ou « ouverte » à « annulée ».",
          "Rouvrir — ramener une commande annulée au statut « ouvert ».",
          "Créer une facture — émettre une facture à partir d'une commande confirmée ou expédiée.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Impact des statuts sur le stock",
      },
      {
        type: "p",
        text: "Chaque changement de statut d'une commande est enregistré comme une ligne dans le grand livre des stocks et peut être retracé jusqu'à la commande d'origine. Le tableau suivant résume l'impact sur le stock de chaque action :",
      },
      {
        type: "table",
        headers: [
          "Action",
          "Changement de statut",
          "Impact sur le stock",
          "Notes",
        ],
        rows: [
          [
            "Confirmer",
            "Brouillon / Rouverte / Non confirmée → Confirmée",
            "Sortie (−)",
            "Sort de l'entrepôt attribué pour chaque ligne ; le coût est enregistré sur la commande au moment de la confirmation.",
          ],
          [
            "Annuler la confirmation",
            "Confirmée → Non confirmée",
            "Retour (+)",
            "Inverse la sortie de la dernière confirmation ; le champ coût de la commande est effacé.",
          ],
          [
            "Annuler",
            "Confirmée → Annulée",
            "Retour (+)",
            "Inverse la sortie de la dernière confirmation ; la commande est conservée pour audit et ne peut plus être avancée.",
          ],
          [
            "Rouvrir",
            "Annulée → Rouverte",
            "Aucun changement",
            "Le stock a déjà été retourné lors de l'annulation. La réouverture ne modifie que le statut ; la prochaine confirmation effectuera une nouvelle sortie de stock.",
          ],
          [
            "Retour",
            "Confirmée (par ligne)",
            "Retour partiel (+)",
            "Ajoute une ligne de quantité négative pour la ligne confirmée et retourne cette quantité au stock.",
          ],
          [
            "Annuler le retour",
            "Confirmée (par ligne)",
            "Nouvelle sortie (−)",
            "Supprime la ligne de retour précédemment enregistrée et déduit à nouveau la quantité d'origine du stock.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Annuler et annuler la confirmation retournent tous deux le stock",
        text: "Les deux actions ont le même effet sur le stock : elles inversent la sortie de la dernière confirmation. La différence réside dans le statut final — Annuler fait passer la commande à « Annulée » (terminal, aucune autre modification de statut possible) ; Annuler la confirmation la fait passer à « Non confirmée » (toujours modifiable, une nouvelle confirmation effectuera à nouveau une sortie de stock).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Pas d'opérations en lot",
        text: "La liste des commandes de vente ne prend pas en charge la sélection de lignes ni les actions en lot. Chaque commande doit être ouverte individuellement pour qu'une action soit effectuée.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtres", level: 2 },
      { id: "table-columns", text: "Colonnes du tableau", level: 2 },
      { id: "statuses", text: "Statuts de commande", level: 2 },
      { id: "actions", text: "Actions de commande", level: 2 },
      {
        id: "inventory-impact",
        text: "Impact des statuts sur le stock",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveaux de prix et prix par client",
    },
    next: { href: "/docs/inventory/stock", title: "Niveaux de stock" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "fr",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Niveaux de stock",
    description:
      "Suivez le stock par emplacement, par entrepôt et par variante de produit. Configurez votre unité de stock de base et vos règles de conversion.",
    keywords: ["gestion des stocks", "stock de gros", "multi-entrepôts"],
    readingTime: "5 minutes de lecture",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Le module de stock de Wholesalify maintient un compte en temps réel pour chaque variante de produit et chaque entrepôt. Le stock est rapproché automatiquement lorsque les commandes sont confirmées et lorsque les réceptions d'achat sont comptabilisées.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Entrepôts" },
      {
        type: "p",
        text: "Ajoutez autant d'entrepôts que vous en exploitez. Chaque produit possède un compte de stock séparé par entrepôt, ce qui vous permet de servir les commandes depuis l'emplacement le plus proche du client.",
      },
      { type: "h2", id: "stock-units", text: "Unités de stock et conversions" },
      {
        type: "p",
        text: "Pour les produits frais, définissez l'unité de stock sur le kilogramme. Ajoutez des tailles d'emballage comme « caisse de 5 kg » ou « panier de 10 kg » avec des conversions automatiques pour que les clients puissent commander dans ces unités sans que vous ayez à convertir le stock manuellement.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Ajustements manuels de stock",
      },
      {
        type: "p",
        text: "Vous avez perdu quelques caisses à cause d'un dommage ? Ouvrez le produit, choisissez « Ajuster le stock » et saisissez une quantité positive ou négative avec un motif. Les ajustements sont consignés dans le journal d'audit avec l'utilisateur, la date et une photo facultative.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Entrepôts", level: 2 },
      { id: "stock-units", text: "Unités de stock et conversions", level: 2 },
      {
        id: "stock-adjustments",
        text: "Ajustements manuels de stock",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/orders/dashboard",
      title: "Tableau de bord des commandes",
    },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Créer des bons de commande",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "fr",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Créer des bons de commande",
    description:
      "Créez des bons de commande auprès de vos fournisseurs, suivez les livraisons entrantes et comptabilisez les réceptions qui mettent à jour le stock automatiquement.",
    keywords: [
      "bons de commande",
      "gestion des fournisseurs",
      "achats en gros",
    ],
    readingTime: "6 minutes de lecture",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Un bon de commande indique à vos fournisseurs quoi livrer, quand et à quel prix. Lorsque la marchandise arrive, comptabiliser la réception met à jour le stock et la fiche fournisseur en une seule étape.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Étape 1 — Ajoutez un fournisseur",
      },
      {
        type: "p",
        text: "Ouvrez « Achats » ← « Fournisseurs » ← « Nouveau fournisseur ». Saisissez les coordonnées et le délai de livraison habituel du fournisseur.",
      },
      {
        type: "h2",
        id: "build-po",
        text: "Étape 2 — Construisez le bon de commande",
      },
      {
        type: "p",
        text: "Cliquez sur « Nouveau bon de commande », sélectionnez le fournisseur et ajoutez des lignes. Le prix commence au dernier prix du fournisseur, mais vous pouvez remplacer chaque ligne.",
      },
      {
        type: "h2",
        id: "receive",
        text: "Étape 3 — Réceptionnez la livraison",
      },
      {
        type: "p",
        text: "Lorsque la marchandise arrive, cliquez sur « Réceptionner » sur le bon de commande. Saisissez la quantité réellement livrée — les réceptions partielles sont prises en charge — et confirmez. Les niveaux de stock sont mis à jour automatiquement et la facture fournisseur est créée.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transitions de statut et impact sur le stock",
      },
      {
        type: "p",
        text: "Les bons de commande et les commandes de vente partagent le même grand livre des stocks, mais circulent dans des directions opposées — confirmer un bon de commande augmente le stock (+), tandis que confirmer une commande de vente le diminue (−). Le tableau suivant résume les quatre actions principales et leur impact sur le stock :",
      },
      {
        type: "table",
        headers: [
          "Action",
          "Changement de statut",
          "Impact sur le stock",
          "Notes",
        ],
        rows: [
          [
            "Confirmer le BC",
            "Brouillon / Rouverte / Non confirmé → Confirmé",
            "Entrée de stock (+)",
            "Marchandise reçue dans l'entrepôt attribué par ligne ; le coût d'achat est enregistré sur la commande.",
          ],
          [
            "Annuler la confirmation",
            "Confirmé → Non confirmé",
            "Sortie de stock (−)",
            "Inverse le stock ajouté lors de la confirmation du BC ; le coût d'achat est effacé.",
          ],
          [
            "Annuler le BC",
            "Confirmé → Annulé",
            "Sortie de stock (−)",
            "Inverse le stock ajouté lors de la confirmation du BC ; la commande est conservée à des fins d'audit.",
          ],
          [
            "Rouvrir",
            "Annulé → Rouverte",
            "Aucun changement de stock",
            "Le stock a déjà été inversé par Annuler. La réouverture ne modifie que le statut. La commande peut être reconfirmée pour ajouter du stock.",
          ],
          [
            "Retour",
            "Confirmé (par ligne)",
            "Sortie partielle de stock (−)",
            "Retourne une partie de la ligne confirmée au fournisseur — une ligne de quantité négative est ajoutée et le stock est réduit.",
          ],
          [
            "Annuler le retour",
            "Confirmé (par ligne)",
            "Réintégration du stock (+)",
            "Inverse le retour — la ligne négative est supprimée et la quantité d'origine est remise en stock.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Confirmer un BC ajoute du stock — n'enlève rien",
        text: "Confirmer un bon de commande signifie que la marchandise est physiquement arrivée et stockée, donc le stock augmente (+). C'est l'inverse de confirmer une commande de vente, qui le diminue (−). Ne confondez pas les deux directions : Annuler la confirmation ne renvoie pas la marchandise au fournisseur — elle inverse seulement le stock que vous avez ajouté en confirmant.",
      },
      {
        type: "callout",
        variant: "info",
        title:
          "Annuler et annuler la confirmation inversent tous deux le stock",
        text: "Les deux actions ont le même effet sur le stock — elles inversent toutes deux le stock ajouté par la confirmation précédente. La différence réside dans le statut final : Annuler fait passer la commande à « Annulée » (terminal), tandis qu'Annuler la confirmation la fait passer à « Non confirmée » (toujours modifiable, et la prochaine confirmation ajoutera à nouveau du stock).",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Étape 1 — Ajoutez un fournisseur",
        level: 2,
      },
      { id: "build-po", text: "Étape 2 — Construisez le BC", level: 2 },
      { id: "receive", text: "Étape 3 — Réceptionnez la livraison", level: 2 },
      {
        id: "inventory-impact",
        text: "Transitions de statut et impact sur le stock",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Niveaux de stock" },
  },

  // ===================================================================
  // POLISH (pl)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "pl",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Przegląd Wholesalify",
    description:
      "Przegląd Wholesalify — platforma B2B do zamówień hurtowych dla firm z branży świeżych produktów, dóbr szybkozbywalnych i hurtowni wielospecyfikacyjnych.",
    keywords: [
      "platforma hurtowa",
      "zamówienia B2B",
      "przegląd SaaS hurtowego",
    ],
    readingTime: "ok. 4 minuty czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify to nowoczesna platforma do zamówień hurtowych B2B, zaprojektowana dla hurtowników, dystrybutorów i firm handlowych. Łączy portal zamówień skierowany do klienta z potężnym panelem administracyjnym, pozwalając Twojemu zespołowi zarządzać zamówieniami, stanami magazynowymi, zakupami i kontami klientów w jednym systemie.",
      },
      {
        type: "p",
        text: "Niezależnie od tego, czy sprzedajesz świeże produkty na wagę, owoce w klasach i skrzynkach, czy produkty wielospecyfikacyjne na SKU, Wholesalify oferuje elastyczne modele katalogów i cen, dopasowane do rzeczywistego sposobu działania Twojej firmy.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Co Wholesalify może dla Ciebie zrobić",
      },
      {
        type: "ul",
        items: [
          "Sprzedaż na wagę, w skrzynkach/paletach lub na sztuki w ramach jednego katalogu.",
          "Ceny warstwowe dla owoców i produktów rolnych według klasy, specyfikacji lub wolumenu.",
          "Równoległe zarządzanie produktami ważonymi, klasyfikowanymi i wielospecyfikacyjnymi.",
          "Portal samoobsługowy dla każdego klienta hurtowego z historią zamówień.",
          "Śledzenie zamówień, płatności i statusów dostaw w jednym panelu operacyjnym.",
          "Generowanie raportów stanów i automatyczne uruchamianie uzupełnień.",
          "Zarządzanie dostawcami, zamówieniami zakupu i przyjęciami towarów.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Jak to wszystko współgra",
      },
      {
        type: "p",
        text: "Wholesalify składa się z trzech warstw, które współdzielą to samo źródło danych:",
      },
      {
        type: "ul",
        items: [
          "Portal zamówień — sklep po stronie klienta dla nabywców hurtowych.",
          "Panel administracyjny — panel backendowy dla Twojego zespołu operacyjnego.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Kto korzysta z Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Hurtownicy świeżych produktów (owoce, warzywa, owoce morza).",
          "Dystrybutorzy żywności i dóbr szybkozbywalnych.",
          "Hurtownicy materiałów budowlanych i narzędzi.",
          "Importerzy i firmy handlowe o wielu jednostkach.",
          "MŚP z branży hurtowej zmęczone Excelem i WhatsAppem.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Następne kroki",
      },
      {
        type: "ul",
        items: [
          "Przeczytaj «Szybki start», aby utworzyć swoją przestrzeń i złożyć pierwsze zamówienie testowe.",
          "Zapoznaj się z przewodnikiem «Portalu zamówień», aby zbudować swój katalog hurtowy.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Gotowy do startu?",
        text: "Zarejestruj się teraz, aby uzyskać bezpłatne testy, bez karty kredytowej. Utwórz przestrzeń, dodaj kilka produktów i złóż pierwsze zamówienie testowe — wszystko w niecałe 15 minut.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Bezpłatna rejestracja",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Co Wholesalify może dla Ciebie zrobić",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Jak to wszystko współgra",
        level: 2,
      },
      { id: "who-uses-it", text: "Kto korzysta z Wholesalify", level: 2 },
      { id: "next-steps", text: "Następne kroki", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Szybki start" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "pl",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Szybki start",
    description:
      "Skonfiguruj swoje konto Wholesalify, dodaj pierwszy produkt i wyślij pierwsze zamówienie hurtowe w niecałe 15 minut.",
    keywords: ["szybki start", "konfiguracja konta", "pierwsze zamówienie"],
    readingTime: "3 minuty czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Ten przewodnik przeprowadzi Cię przez konfigurację konta i utworzenie pierwszego zamówienia hurtowego. Zakładamy, że korzystasz z Wholesalify po raz pierwszy i nie masz jeszcze żadnych danych w systemie.",
      },
      { type: "h2", id: "create-account", text: "Krok 1 — Utwórz konto" },
      {
        type: "p",
        text: "Przejdź na stronę rejestracji Wholesalify. Wpisz nazwę firmy, adres e-mail i hasło. Natychmiast otrzymasz e-mail potwierdzający — kliknij link, aby aktywować konto i zalogować się.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Krok 2 — Dodaj pierwszy produkt",
      },
      {
        type: "p",
        text: "Po zalogowaniu zostaniesz automatycznie przeniesiony do katalogu produktów. Kliknij «Nowy produkt» i wpisz nazwę produktu, podstawową jednostkę sprzedaży (np. kilogram lub skrzynkę) oraz cenę początkową. Wszystko możesz później zmienić — nie musisz zaczynać idealnie.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Krok 3 — Zaproś pierwszego klienta",
      },
      {
        type: "p",
        text: "W panelu administracyjnym otwórz «Klienci», a następnie «Nowy klient». Wpisz nazwę klienta, dane kontaktowe i domyślny poziom cenowy. Klient otrzyma zaproszenie e-mailem, aby utworzyć hasło i rozpocząć przeglądanie katalogu.",
      },
      { type: "h2", id: "place-order", text: "Krok 4 — Złóż zamówienie" },
      {
        type: "p",
        text: "Otwórz portal zamówień jako klient, dodaj produkt do koszyka i dokończ zamówienie. Zamówienie natychmiast przechodzi w status «otwarte» w panelu administracyjnym, gotowe do przetworzenia.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Gratulacje!",
        text: "Właśnie ukończyłeś konfigurację Wholesalify. Stąd możesz budować katalog, konfigurować poziomy cenowe lub eksplorować resztę dokumentacji.",
      },
    ],
    toc: [
      { id: "create-account", text: "Krok 1 — Utwórz konto", level: 2 },
      { id: "add-product", text: "Krok 2 — Dodaj pierwszy produkt", level: 2 },
      {
        id: "invite-buyer",
        text: "Krok 3 — Zaproś pierwszego klienta",
        level: 2,
      },
      { id: "place-order", text: "Krok 4 — Złóż zamówienie", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Przegląd" },
    next: { href: "/docs/get-started/concepts", title: "Podstawowe pojęcia" },
  },

  // ----- Get started / Concepts -----
  {
    locale: "pl",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Podstawowe pojęcia",
    description:
      "Poznaj kluczowe modele Wholesalify: katalog, poziomy cenowe, klienci i zamówienia zakupu.",
    keywords: ["terminologia", "model danych", "podstawy hurtu"],
    readingTime: "5 minut czytania",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Ta strona wyjaśnia podstawowe pojęcia potrzebne do pracy z Wholesalify. Niezależnie od tego, czy przechodzisz z tradycyjnego systemu zarządzania zamówieniami, czy zaczynasz od zera, zrozumienie tych terminów uczyni resztę dokumentacji znacznie bardziej przejrzystą.",
      },
      { type: "h2", id: "tenants", text: "Przestrzenie i obszary robocze" },
      {
        type: "p",
        text: "Każde konto Wholesalify jest całkowicie odizolowane od pozostałych. Katalog, klienci, stany magazynowe i zamówienia są zawarte w Twojej przestrzeni. Oznacza to, że możesz obsługiwać wiele marek lub spółek holdingowych pod jednym kontem platformy, utrzymując dane oddzielnie dla każdej jednostki biznesowej.",
      },
      { type: "h2", id: "products", text: "Produkty i warianty" },
      {
        type: "p",
        text: "Produkt jest szablonem. Wariant definiuje rzeczywistą ilość kupowaną przez klienta — na przykład 5 kg zielonych jabłek lub gruszki klasy A. Nawet proste produkty, które nie wymagają złożoności specyfikacji, są przechowywane jako jeden produkt z jednym wariantem.",
      },
      { type: "h2", id: "price-levels", text: "Poziomy cenowe i ceny klienta" },
      {
        type: "p",
        text: "Poziom cenowy definiuje kategorię cenową — na przykład «detal», «hurt» lub «VIP». Każdy klient jest domyślnie powiązany z jednym poziomem, ale można to nadpisać na poziomie produktu w ramach zamówienia. Możesz tworzyć nieograniczoną liczbę poziomów cenowych i organizować korekty według kategorii lub wolumenu.",
      },
      { type: "h2", id: "orders", text: "Zamówienia i ich statusy" },
      {
        type: "p",
        text: "Każde zamówienie przechodzi przez szereg statusów od utworzenia do dostawy. Zamówienia zaczynają się jako «otwarte», przechodzą w «potwierdzone», gdy Twój zespół je potwierdzi i zarezerwuje stan, następnie «wysłane», gdy wyruszają do dostawy, a na końcu «zakończone». System pozwala Ci ponownie otworzyć lub anulować zamówienie na każdym etapie.",
      },
      { type: "h2", id: "stock", text: "Stany magazynowe i magazyny" },
      {
        type: "p",
        text: "Stany są rejestrowane osobno dla każdego wariantu produktu i każdego magazynu. Gdy zamówienie zostaje potwierdzone, ilość jest automatycznie rezerwowana z przypisanego magazynu, a zamówienia przekraczające dostępny stan nie mogą zostać potwierdzone bez wyraźnej zgody.",
      },
    ],
    toc: [
      { id: "tenants", text: "Przestrzenie i obszary robocze", level: 2 },
      { id: "products", text: "Produkty i warianty", level: 2 },
      {
        id: "price-levels",
        text: "Poziomy cenowe i ceny klienta",
        level: 2,
      },
      { id: "orders", text: "Zamówienia i ich statusy", level: 2 },
      { id: "stock", text: "Stany magazynowe i magazyny", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Szybki start" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Konfiguracja portalu",
    },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "pl",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Konfiguracja portalu zamówień",
    description:
      "Dostosuj portal zamówień do swojej marki, dodaj warunki płatności i określ, jak długo Twój katalog będzie widoczny.",
    keywords: ["konfiguracja portalu", "brandowanie", "warunki płatności"],
    readingTime: "4 minuty czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Gdy masz już kilka produktów i klientów, spersonalizuj portal zamówień tak, aby wyglądał i sprawiał wrażenie przedłużenia Twojej marki. Te ustawienia kontrolują wygląd, warunki płatności, dni robocze i czas, przez jaki klient może widzieć Twój katalog zanim będzie wymagał odświeżenia.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Marka i wygląd" },
      {
        type: "p",
        text: "Otwórz «Ustawienia» ← «Marka». Prześlij swoje logo i wybierz kolor podstawowy oraz akcentujący, które pojawią się na wszystkich stronach portalu. Zmiany są natychmiast widoczne dla wszystkich zalogowanych klientów.",
      },
      { type: "h2", id: "payment-terms", text: "Warunki płatności" },
      {
        type: "p",
        text: "W «Ustawienia» ← «Płatność» określ akceptowane metody płatności. Na przykład: «Przelew bankowy (netto 30 dni)», «Karta kredytowa» lub «Płatność przy odbiorze». Warunki te pojawiają się na dole każdego zamówienia.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Warunki są wartością domyślną i można je nadpisać dla klienta",
        text: "Jeśli Twoja relacja z większością klientów to «netto 30», ale jeden duży klient ma «netto 60», możesz nadpisać warunki globalnie w karcie klienta.",
      },
    ],
    toc: [
      { id: "branding", text: "Marka i wygląd", level: 2 },
      { id: "payment-terms", text: "Warunki płatności", level: 2 },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Podstawowe pojęcia" },
    next: { href: "/docs/ordering-portal/catalog", title: "Katalog B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "pl",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Katalog B2B",
    description:
      "Dodaj produkty i warianty do swojego katalogu, zdefiniuj opcje sprzedaży na wagę i w klasach, i udostępnij katalog swoim klientom.",
    keywords: ["katalog B2B", "zarządzanie produktami", "warianty produktów"],
    readingTime: "6 minut czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Katalog to to, co widzą Twoi klienci po zalogowaniu się do portalu zamówień. Jest zorganizowany w kategorie, a każdy produkt ma jeden lub więcej wariantów. Wholesalify obsługuje trzy główne style sprzedaży produktów w ramach jednego katalogu.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Produkty standardowe" },
      {
        type: "p",
        text: "Produkty standardowe są sprzedawane na sztuki — na przykład skrzynka 24 butelek lub paleta 50 worków. Każdy produkt ma wariant domyślny, ale można dodać warianty dla różnych specyfikacji.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Produkty ważone" },
      {
        type: "p",
        text: "Produkty ważone są sprzedawane na kilogramy lub funty. Wariant definiuje jednostkę wagi i cenę jednostkową, umożliwiając klientowi wprowadzenie ilości w dowolnej wielokrotności jednostki. To idealne rozwiązanie dla świeżych produktów i materiałów sypkich.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Produkty wielospecyfikacyjne" },
      {
        type: "p",
        text: "Niektóre produkty są dostępne w wielu specyfikacjach — na przykład gruszki z rozmiarami (mały/średni/duży), kolorami lub smakami. Warianty są generowane automatycznie na podstawie kombinacji specyfikacji, które zdefiniujesz dla produktu.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Produkty standardowe", level: 2 },
      { id: "weighed", text: "Produkty ważone", level: 2 },
      { id: "multi-spec", text: "Produkty wielospecyfikacyjne", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Konfiguracja portalu zamówień",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Poziomy cenowe i ceny klienta",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "pl",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Poziomy cenowe i ceny klienta",
    description:
      "Twórz poziomy cenowe, rabaty ilościowe i zasady cenowe dla ważonych owoców, stosowane do klientów lub produktów.",
    keywords: ["poziom cenowy", "rabat ilościowy", "cennik owoców"],
    readingTime: "7 minut czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify obsługuje elastyczne modele cenowe, które radzą sobie ze złożonością rzeczywistych operacji hurtowych — warstwy klientów, rabaty ilościowe i ceny ważonych owoców.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Poziomy cenowe" },
      {
        type: "p",
        text: "Poziom cenowy to tylko etykieta kategorii cenowej — na przykład «detal», «hurt» lub «VIP». Utwórz ich tyle, ile potrzebujesz, a następnie powiąż każdego klienta z poziomem domyślnym. Domyślny poziom cenowy określa cenę, jaką klient płaci za każdy produkt, chyba że zostanie ręcznie nadpisany.",
      },
      { type: "h2", id: "tiered", text: "Rabaty ilościowe" },
      {
        type: "p",
        text: "Dla produktów kupowanych w dużych ilościach możesz skonfigurować rabaty progresywne na poziomie cenowym. Na przykład pierwsze 10 skrzynek w pełnej cenie, 25 skrzynek z 5% rabatem, 50 lub więcej z 10% rabatem. Rabaty są stosowane automatycznie po wprowadzeniu ilości do koszyka.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Ceny ważonych owoców w klasach",
      },
      {
        type: "p",
        text: "Owoce są zazwyczaj sprzedawane w klasach (A, B, C) w różnych cenach, a czasem w różnych jednostkach (skrzynka, paleta, kilogram). Model cen owoców Wholesalify obsługuje oba przypadki: ustal ceny dla swoich klas na jednostkę lub pozostaw jednostkę pustą, aby cena dotyczyła wszystkich jednostek.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Nadpisania cen dla klienta",
      },
      {
        type: "p",
        text: "Niektórzy Twoi duzi klienci negocjują konkretne ceny poza domyślnym poziomem cenowym. W takim przypadku otwórz klienta i dodaj specyficzne zasady cenowe w zakładce «Cennik». Zasady te nadpisują zarówno poziom cenowy, jak i rabaty ilościowe.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Priorytet zasad cenowych",
        text: "Gdy dla tego samego produktu obowiązuje kilka aktywnych zasad, stosowany jest następujący priorytet: (1) cena specyficzna dla klienta, (2) rabat ilościowy na poziomie cenowym, (3) cena bazowa poziomu cenowego.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Poziomy cenowe", level: 2 },
      { id: "tiered", text: "Rabaty ilościowe", level: 2 },
      { id: "weighed-fruit", text: "Ceny ważonych owoców", level: 2 },
      { id: "customer-pricing", text: "Nadpisania dla klienta", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Katalog B2B" },
    next: { href: "/docs/orders/dashboard", title: "Panel zamówień" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "pl",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Panel zamówień",
    description:
      "Zarządzaj każdym zamówieniem od przyjęcia do dostawy — filtruj wg czasu, zmieniaj statusy i obsługuj zwroty.",
    keywords: ["panel zamówień", "status zamówienia", "zwrot"],
    readingTime: "6 minut czytania",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Panel zamówień jest punktem wyjścia dla wszystkiego, co dotyczy zamówień hurtowych. Wyświetla każde zamówienie w Twojej przestrzeni i pozwala filtrować, potwierdzać, wysyłać, fakturować i obsługiwać zwroty — wszystko z jednego miejsca.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtry" },
      {
        type: "p",
        text: "Filtry u góry tabeli pozwalają zawęzić listę bez konieczności wyszukiwania tekstowego. Możesz łączyć wiele filtrów, aby uzyskać dokładny zakres, na przykład «wszystkie potwierdzone zamówienia z ostatniego tygodnia od konkretnego klienta».",
      },
      {
        type: "ul",
        items: [
          "Zakres dat (dziś, zeszły tydzień, ten miesiąc, zakres niestandardowy).",
          "Status (otwarte, potwierdzone, anulowane, zakończone, ponownie otwarte).",
          "Klient lub poziom cenowy.",
          "Magazyn, z którego wysłano zamówienie.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Kolumny tabeli" },
      {
        type: "p",
        text: "Każdy wiersz tabeli zawiera informacje potrzebne do szybkiego przetworzenia zamówienia: datę zamówienia, nazwę klienta, liczbę pozycji, sumę częściową i aktualny status. Kliknij dowolny wiersz, aby otworzyć zamówienie i podjąć akcję.",
      },
      { type: "h2", id: "statuses", text: "Statusy zamówienia" },
      {
        type: "p",
        text: "Każde zamówienie przechodzi przez następujące statusy w swoim cyklu życia:",
      },
      {
        type: "ol",
        items: [
          "Otwarte — utworzone przez klienta i jeszcze nieprzetworzone.",
          "Potwierdzone — zweryfikowane przez Twój zespół z zarezerwowanym stanem, gotowe do wysyłki.",
          "Wysłane — zamówienie jest w drodze do klienta.",
          "Zakończone — dostarczone i udokumentowane pokwitowaniami.",
          "Anulowane — zamknięte przed potwierdzeniem i nie można go ponownie otworzyć.",
          "Ponownie otwarte — wcześniej anulowane i ponownie otwarte do dalszego przetwarzania.",
        ],
      },
      { type: "h2", id: "actions", text: "Akcje na zamówieniu" },
      {
        type: "p",
        text: "Aby otworzyć zamówienie, kliknij jego wiersz. Panel boczny pokazuje pełne szczegóły zamówienia, w tym pozycje, ceny i adres. Następujące akcje są dostępne na górnym pasku w zależności od bieżącego statusu:",
      },
      {
        type: "ul",
        items: [
          "Potwierdź — przenieś zamówienie z «otwarte» na «potwierdzone» i zarezerwuj stan.",
          "Cofnij potwierdzenie — przywróć zamówienie do «otwarte» i zwolnij stan.",
          "Wyślij — przenieś zamówienie z «potwierdzone» na «wysłane».",
          "Zwróć — zarejestruj częściowy lub pełny zwrot po wysyłce.",
          "Anuluj — przenieś zamówienie z «potwierdzone» lub «otwarte» na «anulowane».",
          "Ponownie otwórz — przywróć anulowane zamówienie do statusu «otwarte».",
          "Utwórz fakturę — wystaw fakturę z potwierdzonego lub wysłanego zamówienia.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Wpływ statusów na stan magazynowy",
      },
      {
        type: "p",
        text: "Każda zmiana statusu zamówienia jest rejestrowana jako wiersz w księdze stanów i można ją prześledzić do pierwotnego zamówienia. Poniższa tabela podsumowuje wpływ każdej akcji na stan magazynowy:",
      },
      {
        type: "table",
        headers: ["Akcja", "Zmiana statusu", "Wpływ na stan", "Uwagi"],
        rows: [
          [
            "Potwierdź",
            "Szkic / Ponownie otwarte / Niepotwierdzone → Potwierdzone",
            "Wydanie (−)",
            "Wychodzi z przypisanego magazynu dla każdej pozycji; koszt jest rejestrowany na zamówieniu w momencie potwierdzenia.",
          ],
          [
            "Cofnij potwierdzenie",
            "Potwierdzone → Niepotwierdzone",
            "Zwrot (+)",
            "Odwraca wydanie z ostatniego potwierdzenia; pole kosztu zamówienia jest czyszczone.",
          ],
          [
            "Anuluj",
            "Potwierdzone → Anulowane",
            "Zwrot (+)",
            "Odwraca wydanie z ostatniego potwierdzenia; zamówienie jest zachowane do audytu i nie można go dalej przesuwać.",
          ],
          [
            "Ponownie otwórz",
            "Anulowane → Ponownie otwarte",
            "Bez zmian",
            "Stan został już zwrócony przez anulowanie. Ponowne otwarcie zmienia tylko status; następne potwierdzenie ponownie dokona wydania.",
          ],
          [
            "Zwrot",
            "Potwierdzone (na pozycję)",
            "Częściowy zwrot (+)",
            "Dodaje wiersz z ilością ujemną dla potwierdzonej pozycji i zwraca tę ilość do stanu.",
          ],
          [
            "Cofnij zwrot",
            "Potwierdzone (na pozycję)",
            "Ponowne wydanie (−)",
            "Usuwa wcześniej zarejestrowany wiersz zwrotu i ponownie wydaje pierwotną ilość ze stanu.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Zarówno Anuluj, jak i Cofnij potwierdzenie zwracają stan",
        text: "Obie akcje mają ten sam efekt na stan: obie odwracają wydanie z ostatniego potwierdzenia. Różnica tkwi w statusie końcowym — Anuluj przenosi zamówienie do «Anulowane» (stan końcowy, bez dalszych zmian statusu); Cofnij potwierdzenie przenosi je do «Niepotwierdzone» (nadal edytowalne, nowe potwierdzenie ponownie dokona wydania stanu).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Brak operacji zbiorczych",
        text: "Lista zamówień sprzedaży nie obsługuje zaznaczania wierszy ani akcji zbiorczych. Każde zamówienie musi być otwarte indywidualnie, aby podjąć akcję.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtry", level: 2 },
      { id: "table-columns", text: "Kolumny tabeli", level: 2 },
      { id: "statuses", text: "Statusy zamówienia", level: 2 },
      { id: "actions", text: "Akcje na zamówieniu", level: 2 },
      {
        id: "inventory-impact",
        text: "Wpływ statusów na stan magazynowy",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Poziomy cenowe i ceny klienta",
    },
    next: { href: "/docs/inventory/stock", title: "Stany magazynowe" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "pl",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Stany magazynowe",
    description:
      "Śledź stany magazynowe dla każdej lokalizacji, każdego magazynu i każdego wariantu produktu. Skonfiguruj bazową jednostkę stanu i zasady przeliczania.",
    keywords: ["zarządzanie stanami", "stan hurtowy", "wiele magazynów"],
    readingTime: "5 minut czytania",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Moduł stanów Wholesalify utrzymuje bieżące liczby dla każdego wariantu produktu i każdego magazynu. Stan jest automatycznie uzgadniany, gdy zamówienia są potwierdzane i gdy przyjęcia zakupu są księgowane.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Magazyny" },
      {
        type: "p",
        text: "Dodaj tyle magazynów, ile prowadzisz. Każdy produkt ma oddzielne liczby stanów na magazyn, co pozwala realizować zamówienia z lokalizacji najbliższej klientowi.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Jednostki stanów i przeliczniki",
      },
      {
        type: "p",
        text: "Dla świeżych produktów ustaw jednostkę stanu na kilogram. Dodaj rozmiary opakowań, takie jak «skrzynka 5 kg» lub «kosz 10 kg», z automatycznymi przelicznikami, aby klienci mogli zamawiać w tych jednostkach bez konieczności ręcznego przeliczania stanów.",
      },
      { type: "h2", id: "stock-adjustments", text: "Ręczne korekty stanów" },
      {
        type: "p",
        text: "Straciłeś kilka skrzynek z powodu uszkodzenia? Otwórz produkt, wybierz «Skoryguj stan» i wprowadź ilość dodatnią lub ujemną z powodem. Korekty są rejestrowane w dzienniku audytu z użytkownikiem, datą i opcjonalnym zdjęciem.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Magazyny", level: 2 },
      { id: "stock-units", text: "Jednostki stanów i przeliczniki", level: 2 },
      {
        id: "stock-adjustments",
        text: "Ręczne korekty stanów",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Panel zamówień" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Tworzenie zamówień zakupu",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "pl",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Tworzenie zamówień zakupu",
    description:
      "Twórz zamówienia zakupu do swoich dostawców, śledź przychodzące dostawy i księguj przyjęcia, które automatycznie aktualizują stany.",
    keywords: ["zamówienia zakupu", "zarządzanie dostawcami", "zakupy hurtowe"],
    readingTime: "6 minut czytania",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Zamówienie zakupu mówi Twoim dostawcom, co mają dostarczyć, kiedy i w jakiej cenie. Gdy towar dotrze, zaksięgowanie przyjęcia aktualizuje stan i kartotekę dostawcy w jednym kroku.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "Krok 1 — Dodaj dostawcę" },
      {
        type: "p",
        text: "Otwórz «Zakupy» ← «Dostawcy» ← «Nowy dostawca». Wpisz dane kontaktowe i typowy czas realizacji dostawy.",
      },
      { type: "h2", id: "build-po", text: "Krok 2 — Zbuduj zamówienie zakupu" },
      {
        type: "p",
        text: "Kliknij «Nowe zamówienie zakupu», wybierz dostawcę i dodaj pozycje. Cena domyślnie zaczyna się od ostatniej ceny dostawcy, ale możesz nadpisać każdą pozycję.",
      },
      { type: "h2", id: "receive", text: "Krok 3 — Przyjmij dostawę" },
      {
        type: "p",
        text: "Gdy towar dotrze, kliknij «Przyjmij» na zamówieniu. Wpisz rzeczywiście dostarczoną ilość — częściowe przyjęcia są obsługiwane — i potwierdź. Stany są aktualizowane automatycznie, a faktura dostawcy jest tworzona.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Zmiany statusów i ich wpływ na stan",
      },
      {
        type: "p",
        text: "Zamówienia zakupu i zamówienia sprzedaży współdzielą tę samą księgę stanów, ale płyną w przeciwnych kierunkach — potwierdzenie zamówienia zakupu zwiększa stan (+), natomiast potwierdzenie zamówienia sprzedaży go zmniejsza (−). Poniższa tabela podsumowuje cztery główne akcje i ich wpływ na stan:",
      },
      {
        type: "table",
        headers: ["Akcja", "Zmiana statusu", "Wpływ na stan", "Uwagi"],
        rows: [
          [
            "Potwierdź ZZ",
            "Szkic / Ponownie otwarte / Niepotwierdzone → Potwierdzone",
            "Przyjęcie stanu (+)",
            "Towar jest przyjmowany do przypisanego magazynu dla każdej pozycji; koszt zakupu jest rejestrowany na zamówieniu.",
          ],
          [
            "Cofnij potwierdzenie",
            "Potwierdzone → Niepotwierdzone",
            "Wydanie stanu (−)",
            "Odwraca stan dodany przy potwierdzeniu ZZ; koszt zakupu jest czyszczony.",
          ],
          [
            "Anuluj ZZ",
            "Potwierdzone → Anulowane",
            "Wydanie stanu (−)",
            "Odwraca stan dodany przy potwierdzeniu ZZ; zamówienie jest zachowane wyłącznie do audytu.",
          ],
          [
            "Ponownie otwórz",
            "Anulowane → Ponownie otwarte",
            "Bez zmian stanu",
            "Stan został już odwrócony przez anulowanie. Ponowne otwarcie zmienia tylko status. Zamówienie można ponownie potwierdzić, aby dodać stan.",
          ],
          [
            "Zwrot",
            "Potwierdzone (na pozycję)",
            "Częściowe wydanie stanu (−)",
            "Zwróć część potwierdzonej pozycji do dostawcy — dodawany jest wiersz o ujemnej ilości i stan jest zmniejszany.",
          ],
          [
            "Cofnij zwrot",
            "Potwierdzone (na pozycję)",
            "Przywróć stan (+)",
            "Odwraca zwrot — ujemny wiersz jest usuwany i pierwotna ilość wraca do stanu.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Potwierdzenie ZZ zwiększa stan — nie zmniejsza go",
        text: "Potwierdzenie zamówienia zakupu oznacza, że towar fizycznie dotarł i został złożony, więc stan rośnie (+). To jest przeciwieństwo potwierdzenia zamówienia sprzedaży, które go zmniejsza (−). Nie mieszaj tych dwóch kierunków: Cofnij potwierdzenie nie odsyła towaru do dostawcy — tylko odwraca stan, który dodałeś przy potwierdzeniu.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Zarówno Anuluj, jak i Cofnij potwierdzenie odwracają stan",
        text: "Obie akcje mają ten sam wpływ na stan — obie odwracają stan dodany przez poprzednie potwierdzenie. Różnica tkwi w statusie końcowym: Anuluj przenosi zamówienie do «Anulowane» (końcowe), podczas gdy Cofnij potwierdzenie przenosi je do «Niepotwierdzone» (nadal edytowalne, a następne potwierdzenie ponownie doda stan).",
      },
    ],
    toc: [
      { id: "supplier-first", text: "Krok 1 — Dodaj dostawcę", level: 2 },
      { id: "build-po", text: "Krok 2 — Zbuduj zamówienie zakupu", level: 2 },
      { id: "receive", text: "Krok 3 — Przyjmij dostawę", level: 2 },
      {
        id: "inventory-impact",
        text: "Zmiany statusów i ich wpływ na stan",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Stany magazynowe" },
  },

  // ===================================================================
  // EUROPEAN PORTUGUESE (pt-PT)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "pt-PT",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Visão geral do Wholesalify",
    description:
      "Visão geral do Wholesalify — plataforma B2B de encomendas por grosso para empresas de produtos frescos, bens de grande consumo e grossistas multi-especificações.",
    keywords: [
      "plataforma de grossistas",
      "encomendas B2B",
      "visão geral SaaS grossista",
    ],
    readingTime: "aprox. 4 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O Wholesalify é uma plataforma moderna de encomendas B2B por grosso, concebida para grossistas, distribuidores e empresas comerciais. Combina um portal de encomendas orientado ao cliente com um poderoso painel de administração, permitindo à sua equipa gerir encomendas, stock, compras e contas de clientes num único sistema.",
      },
      {
        type: "p",
        text: "Quer venda produtos frescos a peso, fruta por categoria e por caixa, ou produtos multi-especificações por SKU, o Wholesalify oferece modelos de catálogo e preços flexíveis que se alinham com a forma como o seu negócio realmente funciona.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "O que o Wholesalify pode fazer por si",
      },
      {
        type: "ul",
        items: [
          "Vender a peso, à caixa/palete ou à unidade dentro de um único catálogo.",
          "Preços por níveis para fruta e produtos agrícolas conforme a categoria, especificação ou volume.",
          "Gerir produtos pesados, categorizados e multi-especificações em paralelo.",
          "Oferecer um portal de self-service para cada cliente grossista com histórico de encomendas.",
          "Acompanhar encomendas, cobranças e estados de entrega a partir de um único painel operacional.",
          "Gerar relatórios de stock e acionar reposições automáticas.",
          "Gerir fornecedores, encomendas de compra e receção de mercadorias.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Como a plataforma se articula",
      },
      {
        type: "p",
        text: "O Wholesalify é composto por três camadas que partilham a mesma fonte de dados:",
      },
      {
        type: "ul",
        items: [
          "Portal de encomendas — a loja do lado do cliente para compradores por grosso.",
          "Painel de administração — o painel de back-end para a sua equipa operacional.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      {
        type: "h2",
        id: "who-uses-it",
        text: "Quem utiliza o Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Grossistas de produtos frescos (fruta, legumes, marisco).",
          "Distribuidores de alimentos e bens de grande consumo.",
          "Grossistas de materiais de construção e ferragens.",
          "Importadores e trading companies com múltiplas unidades.",
          "PME de distribuição saturadas do Excel e do WhatsApp.",
        ],
      },
      {
        type: "h2",
        id: "next-steps",
        text: "Próximos passos",
      },
      {
        type: "ul",
        items: [
          "Leia o «Início rápido» para criar o seu espaço e fazer a sua primeira encomenda de teste.",
          "Consulte o guia do «Portal de encomendas» para construir o seu catálogo grossista.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Pronto para começar?",
        text: "Registe-se agora para um teste gratuito, sem cartão de crédito. Crie o seu espaço, adicione alguns produtos e faça a sua primeira encomenda de teste — tudo em menos de 15 minutos.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Registo gratuito",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "O que o Wholesalify pode fazer por si",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Como a plataforma se articula",
        level: 2,
      },
      { id: "who-uses-it", text: "Quem utiliza o Wholesalify", level: 2 },
      { id: "next-steps", text: "Próximos passos", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Início rápido" },
  },

  // ----- Get started / Quickstart -----
  {
    locale: "pt-PT",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Início rápido",
    description:
      "Configure a sua conta Wholesalify, adicione o seu primeiro produto e envie a sua primeira encomenda por grosso em menos de 15 minutos.",
    keywords: ["início rápido", "configuração da conta", "primeira encomenda"],
    readingTime: "3 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Este guia acompanha-o na configuração da sua conta e na criação da sua primeira encomenda por grosso. Pressupõe que é a sua primeira vez a usar o Wholesalify e que ainda não tem dados no sistema.",
      },
      { type: "h2", id: "create-account", text: "Passo 1 — Crie a sua conta" },
      {
        type: "p",
        text: "Vá à página de registo do Wholesalify. Insira o nome da sua empresa, o seu e-mail e uma palavra-passe. Receberá imediatamente um e-mail de confirmação — clique na ligação para ativar a sua conta e iniciar sessão.",
      },
      {
        type: "h2",
        id: "add-product",
        text: "Passo 2 — Adicione o seu primeiro produto",
      },
      {
        type: "p",
        text: "Depois de iniciar sessão, será encaminhado para o catálogo de produtos. Clique em «Novo produto» e introduza o nome do produto, a unidade base de venda (por exemplo, quilograma ou caixa) e o preço inicial. Pode editar tudo mais tarde — não se preocupe em começar de forma perfeita.",
      },
      {
        type: "h2",
        id: "invite-buyer",
        text: "Passo 3 — Convide o seu primeiro cliente",
      },
      {
        type: "p",
        text: "No painel de administração, abra «Clientes» e depois «Novo cliente». Introduza o nome do cliente, os contactos e o nível de preço predefinido. O cliente recebe um convite por e-mail para criar a sua palavra-passe e começar a navegar no catálogo.",
      },
      { type: "h2", id: "place-order", text: "Passo 4 — Faça uma encomenda" },
      {
        type: "p",
        text: "Abra o portal de encomendas enquanto cliente, adicione um produto ao carrinho e finalize a compra para criar a encomenda. A encomenda passa imediatamente para o estado «aberta» no painel de administração, pronta a ser processada.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Parabéns!",
        text: "Acabou de completar na íntegra a configuração do Wholesalify. A partir daqui pode construir o catálogo, configurar níveis de preços ou explorar o resto da documentação.",
      },
    ],
    toc: [
      { id: "create-account", text: "Passo 1 — Crie a sua conta", level: 2 },
      {
        id: "add-product",
        text: "Passo 2 — Adicione o seu primeiro produto",
        level: 2,
      },
      {
        id: "invite-buyer",
        text: "Passo 3 — Convide o seu primeiro cliente",
        level: 2,
      },
      { id: "place-order", text: "Passo 4 — Faça uma encomenda", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Visão geral" },
    next: {
      href: "/docs/get-started/concepts",
      title: "Conceitos fundamentais",
    },
  },

  // ----- Get started / Concepts -----
  {
    locale: "pt-PT",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Conceitos fundamentais",
    description:
      "Conheça os modelos centrais do Wholesalify: catálogo, níveis de preços, clientes e encomendas de compra.",
    keywords: ["terminologia", "modelo de dados", "fundamentos do grosso"],
    readingTime: "5 minutos de leitura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Esta página explica os conceitos fundamentais de que precisa para trabalhar com o Wholesalify. Quer venha de um sistema tradicional de gestão de encomendas ou esteja a começar do zero, compreender estes termos tornará o resto da documentação muito mais claro.",
      },
      { type: "h2", id: "tenants", text: "Espaços e áreas de trabalho" },
      {
        type: "p",
        text: "Cada conta Wholesalify está totalmente isolada das restantes. O catálogo, os clientes, o stock e as encomendas estão contidos no seu espaço. Isto significa que pode operar várias marcas ou holdings sob uma única conta da plataforma, mantendo os dados separados por unidade de negócio.",
      },
      { type: "h2", id: "products", text: "Produtos e variantes" },
      {
        type: "p",
        text: "Um produto é um modelo. Uma variante define a quantidade efetivamente comprada pelo cliente — por exemplo, 5 kg de maçãs verdes ou peras categoria A. Mesmo os produtos simples, que não exigem complexidade de especificações, são armazenados como um único produto com uma única variante.",
      },
      {
        type: "h2",
        id: "price-levels",
        text: "Níveis de preços e preços por cliente",
      },
      {
        type: "p",
        text: "Um nível de preços define uma categoria de preços — por exemplo «retalho», «grosso» ou «VIP». Cada cliente está associado por predefinição a um nível, mas isso pode ser substituído ao nível do produto dentro de uma encomenda. Pode criar níveis de preços ilimitados e organizar os ajustes por categoria ou volume.",
      },
      { type: "h2", id: "orders", text: "Encomendas e os seus estados" },
      {
        type: "p",
        text: "Cada encomenda passa por uma série de estados desde a criação até à entrega. As encomendas começam como «abertas», passam a «confirmadas» assim que a sua equipa as confirma e reserva stock, depois «enviadas» quando seguem para entrega e, finalmente, «concluídas». O sistema permite reabrir ou cancelar uma encomenda em qualquer fase.",
      },
      { type: "h2", id: "stock", text: "Stock e armazéns" },
      {
        type: "p",
        text: "O stock é registado separadamente para cada variante de produto e cada armazém. Quando uma encomenda é confirmada, a quantidade é reservada automaticamente a partir do armazém atribuído, e as encomendas que excedam o stock disponível não podem ser confirmadas sem autorização explícita.",
      },
    ],
    toc: [
      { id: "tenants", text: "Espaços e áreas de trabalho", level: 2 },
      { id: "products", text: "Produtos e variantes", level: 2 },
      {
        id: "price-levels",
        text: "Níveis de preços e preços por cliente",
        level: 2,
      },
      { id: "orders", text: "Encomendas e os seus estados", level: 2 },
      { id: "stock", text: "Stock e armazéns", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Início rápido" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configuração do portal",
    },
  },

  // ----- Ordering portal / Setup -----
  {
    locale: "pt-PT",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configuração do portal de encomendas",
    description:
      "Adapte o portal de encomendas à sua marca, adicione condições de pagamento e defina por quanto tempo o seu catálogo ficará visível.",
    keywords: ["configuração do portal", "marca", "condições de pagamento"],
    readingTime: "4 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Depois de ter alguns produtos e clientes, personalize o portal de encomendas para que pareça e dê a sensação de ser uma extensão da sua marca. Estas definições controlam a aparência visual, as condições de pagamento, os dias úteis e por quanto tempo o cliente pode ver o seu catálogo antes de ser necessária uma atualização.",
      },
      { type: "mockup", variant: "settings" },
      { type: "h2", id: "branding", text: "Marca e aparência visual" },
      {
        type: "p",
        text: "Abra «Definições» ← «Marca». Carregue o seu logótipo e escolha as cores primária e de destaque que aparecerão em todas as páginas do portal. Estas alterações refletem-se de imediato em todos os clientes com sessão iniciada.",
      },
      { type: "h2", id: "payment-terms", text: "Condições de pagamento" },
      {
        type: "p",
        text: "Em «Definições» ← «Pagamento», defina os métodos de pagamento aceites. Por exemplo: «Transferência bancária (líquido a 30 dias)», «Cartão de crédito» ou «Numerário na entrega». Estas condições aparecem no fundo de cada encomenda.",
      },
      {
        type: "callout",
        variant: "info",
        title: "As condições são o padrão e podem ser substituídas por cliente",
        text: "Se a sua relação com a maioria dos clientes é «líquido a 30», mas um cliente grande tem «líquido a 60», pode substituir as condições globalmente na ficha do cliente.",
      },
    ],
    toc: [
      { id: "branding", text: "Marca e aparência visual", level: 2 },
      { id: "payment-terms", text: "Condições de pagamento", level: 2 },
    ],
    prev: {
      href: "/docs/get-started/concepts",
      title: "Conceitos fundamentais",
    },
    next: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
  },

  // ----- Ordering portal / Catalog -----
  {
    locale: "pt-PT",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Catálogo B2B",
    description:
      "Adicione produtos e variantes ao seu catálogo, defina opções de venda a peso e por categoria e partilhe o catálogo com os seus clientes.",
    keywords: ["catálogo B2B", "gestão de produtos", "variantes de produto"],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O catálogo é o que os seus clientes veem quando iniciam sessão no portal de encomendas. Está organizado em categorias e cada produto tem uma ou mais variantes. O Wholesalify suporta três estilos principais de venda de produtos dentro de um único catálogo.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h2", id: "standard", text: "Produtos padrão" },
      {
        type: "p",
        text: "Os produtos padrão são vendidos à unidade — por exemplo, uma caixa de 24 garrafas ou uma palete de 50 sacos. Cada produto tem uma variante predefinida, mas é possível adicionar variantes para diferentes especificações.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h2", id: "weighed", text: "Produtos a peso" },
      {
        type: "p",
        text: "Os produtos a peso são vendidos por quilograma ou libra. A variante define a unidade de peso e o preço unitário e permite ao cliente introduzir a quantidade em qualquer múltiplo da unidade. É ideal para produtos frescos e materiais a granel.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h2", id: "multi-spec", text: "Produtos multi-especificações" },
      {
        type: "p",
        text: "Alguns produtos existem em múltiplas especificações — por exemplo, peras com tamanhos (P/M/G), cores ou sabores. As variantes são geradas automaticamente a partir das combinações de especificações que definir para o produto.",
      },
      { type: "mockup", variant: "product-multi-spec" },
    ],
    toc: [
      { id: "standard", text: "Produtos padrão", level: 2 },
      { id: "weighed", text: "Produtos a peso", level: 2 },
      { id: "multi-spec", text: "Produtos multi-especificações", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configuração do portal de encomendas",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Níveis de preços e preços por cliente",
    },
  },

  // ----- Ordering portal / Pricing -----
  {
    locale: "pt-PT",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Níveis de preços e preços por cliente",
    description:
      "Crie níveis de preços, descontos por volume e regras de preços para fruta a peso que se aplicam a clientes ou produtos.",
    keywords: ["nível de preço", "desconto por volume", "preços de fruta"],
    readingTime: "7 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O Wholesalify suporta modelos de preços flexíveis que lidam com a complexidade das operações reais por grosso — camadas de clientes, descontos por volume e preços de fruta a peso.",
      },
      { type: "mockup", variant: "tier-price" },
      { type: "h2", id: "price-levels", text: "Níveis de preços" },
      {
        type: "p",
        text: "Um nível de preços é apenas uma etiqueta para uma categoria de preços — por exemplo, «retalho», «grosso» ou «VIP». Crie quantos forem necessários e associe cada cliente a um nível predefinido. O nível predefinido determina o preço pago pelo cliente em cada produto, salvo substituição manual.",
      },
      { type: "h2", id: "tiered", text: "Descontos por volume" },
      {
        type: "p",
        text: "Para produtos comprados em grande quantidade, pode configurar descontos progressivos ao nível do preço. Por exemplo, as primeiras 10 caixas pelo preço cheio, 25 caixas com 5% de desconto, 50 ou mais com 10% de desconto. Os descontos aplicam-se automaticamente assim que a quantidade é introduzida no carrinho.",
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-fruit",
        text: "Preços de fruta a peso por categoria",
      },
      {
        type: "p",
        text: "A fruta é geralmente vendida por categorias (A, B, C) a preços diferentes e, por vezes, em unidades diferentes (caixa, palete, quilograma). O modelo de preços de fruta do Wholesalify suporta ambos os casos: precifique as suas categorias por unidade ou deixe a unidade vazia para que o preço se aplique a todas as unidades.",
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "customer-pricing",
        text: "Substituições de preços por cliente",
      },
      {
        type: "p",
        text: "Alguns dos seus grandes clientes negociam preços específicos fora do nível de preço predefinido. Nesse caso, abra o cliente e adicione regras de preços específicas no separador «Preços». Estas regras substituem tanto o nível de preços como os descontos por volume.",
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Prioridade das regras de preços",
        text: "Quando existem várias regras ativas para o mesmo produto, aplica-se a seguinte prioridade: (1) preço específico do cliente, (2) desconto por volume no nível de preços, (3) preço base do nível de preços.",
      },
    ],
    toc: [
      { id: "price-levels", text: "Níveis de preços", level: 2 },
      { id: "tiered", text: "Descontos por volume", level: 2 },
      { id: "weighed-fruit", text: "Preços de fruta por categoria", level: 2 },
      { id: "customer-pricing", text: "Substituições por cliente", level: 2 },
    ],
    prev: { href: "/docs/ordering-portal/catalog", title: "Catálogo B2B" },
    next: { href: "/docs/orders/dashboard", title: "Painel de encomendas" },
  },

  // ----- Orders / Dashboard -----
  {
    locale: "pt-PT",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Painel de encomendas",
    description:
      "Gira cada encomenda desde a sua receção até à entrega — filtre por período, altere estados e processe devoluções.",
    keywords: ["painel de encomendas", "estado da encomenda", "devolução"],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "O painel de encomendas é o ponto de partida para tudo o que diz respeito às encomendas por grosso. Lista cada encomenda no seu espaço e permite-lhe filtrar, confirmar, enviar, faturar e devolver, tudo a partir de um único local.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtros" },
      {
        type: "p",
        text: "Os filtros no topo da tabela permitem-lhe restringir a lista sem precisar de pesquisa de texto. Pode combinar vários filtros para delimitar um intervalo exato, como «todas as encomendas confirmadas na última semana de um cliente específico».",
      },
      {
        type: "ul",
        items: [
          "Intervalo de datas (hoje, semana passada, este mês, intervalo personalizado).",
          "Estado (aberta, confirmada, cancelada, concluída, reaberta).",
          "Cliente ou nível de preço.",
          "Armazém a partir do qual a encomenda foi enviada.",
        ],
      },
      { type: "h2", id: "table-columns", text: "Colunas da tabela" },
      {
        type: "p",
        text: "Cada linha da tabela contém as informações necessárias para processar rapidamente uma encomenda: data da encomenda, nome do cliente, número de artigos, subtotal e estado atual. Clique em qualquer linha para abrir a encomenda e tomar uma ação.",
      },
      { type: "h2", id: "statuses", text: "Estados da encomenda" },
      {
        type: "p",
        text: "Cada encomenda passa pelos seguintes estados ao longo do seu ciclo de vida:",
      },
      {
        type: "ol",
        items: [
          "Aberta — criada pelo cliente e ainda não processada.",
          "Confirmada — analisada pela sua equipa com stock reservado, pronta para envio.",
          "Enviada — a encomenda saiu para entrega ao cliente.",
          "Concluída — entregue e documentada com comprovativos.",
          "Cancelada — fechada antes da confirmação e não pode ser reaberta.",
          "Reaberta — anteriormente cancelada e reaberta para mais processamento.",
        ],
      },
      { type: "h2", id: "actions", text: "Ações da encomenda" },
      {
        type: "p",
        text: "Para abrir uma encomenda, clique na respetiva linha. O painel lateral mostra os detalhes completos da encomenda, incluindo artigos, preços e morada. As seguintes ações estão disponíveis na barra superior de acordo com o estado atual:",
      },
      {
        type: "ul",
        items: [
          "Confirmar — mover a encomenda de «aberta» para «confirmada» e reservar stock.",
          "Desconfirmar — voltar a colocar a encomenda em «aberta» e libertar o stock.",
          "Enviar — mover a encomenda de «confirmada» para «enviada».",
          "Devolver — registar uma devolução parcial ou total após o envio.",
          "Cancelar — mover a encomenda de «confirmada» ou «aberta» para «cancelada».",
          "Reabrir — voltar a colocar uma encomenda cancelada no estado «aberta».",
          "Emitir fatura — gerar uma fatura a partir de uma encomenda confirmada ou enviada.",
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Impacto dos estados no stock",
      },
      {
        type: "p",
        text: "Cada alteração de estado de uma encomenda é registada como uma linha no livro de stock e pode ser rastreada até à encomenda original. A tabela seguinte resume o impacto no stock de cada ação:",
      },
      {
        type: "table",
        headers: ["Ação", "Mudança de estado", "Impacto no stock", "Notas"],
        rows: [
          [
            "Confirmar",
            "Rascunho / Reaberta / Não confirmada → Confirmada",
            "Saída (−)",
            "Sai do armazém atribuído por cada item; o custo é registado na encomenda no momento da confirmação.",
          ],
          [
            "Desconfirmar",
            "Confirmada → Não confirmada",
            "Devolução (+)",
            "Inverte a saída da última confirmação; o campo de custo da encomenda é limpo.",
          ],
          [
            "Cancelar",
            "Confirmada → Cancelada",
            "Devolução (+)",
            "Inverte a saída da última confirmação; a encomenda fica conservada para auditoria e já não pode avançar.",
          ],
          [
            "Reabrir",
            "Cancelada → Reaberta",
            "Sem alterações",
            "O stock já foi devolvido ao cancelar. Reabrir só altera o estado; a próxima confirmação voltará a dar saída ao stock.",
          ],
          [
            "Devolução",
            "Confirmada (por item)",
            "Devolução parcial (+)",
            "Adiciona uma linha de quantidade negativa para o item confirmado e devolve essa quantidade ao stock.",
          ],
          [
            "Cancelar devolução",
            "Confirmada (por item)",
            "Nova saída (−)",
            "Remove a linha de devolução anteriormente registada e tira novamente a quantidade original do stock.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Tanto Cancelar como Desconfirmar devolvem o stock",
        text: "Ambas as ações têm o mesmo efeito sobre o stock: ambas invertem a saída da última confirmação. A diferença está no estado final — Cancelar coloca a encomenda em «Cancelada» (terminal, sem mais mudanças de estado possíveis); Desconfirmar coloca-a em «Não confirmada» (ainda editável, uma nova confirmação fará nova saída de stock).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Não existem operações em lote",
        text: "A lista de encomendas de venda não suporta seleção de linhas nem ações em lote. Cada encomenda tem de ser aberta individualmente para tomar uma ação.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtros", level: 2 },
      { id: "table-columns", text: "Colunas da tabela", level: 2 },
      { id: "statuses", text: "Estados da encomenda", level: 2 },
      { id: "actions", text: "Ações da encomenda", level: 2 },
      {
        id: "inventory-impact",
        text: "Impacto dos estados no stock",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Níveis de preços e preços por cliente",
    },
    next: { href: "/docs/inventory/stock", title: "Níveis de stock" },
  },

  // ----- Inventory / Stock -----
  {
    locale: "pt-PT",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Níveis de stock",
    description:
      "Acompanhe o stock por cada localização, cada armazém e cada variante de produto. Configure a sua unidade base de stock e as regras de conversão.",
    keywords: ["gestão de stock", "stock grossista", "multi-armazém"],
    readingTime: "5 minutos de leitura",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "O módulo de stock do Wholesalify mantém uma contagem em tempo real para cada variante de produto e cada armazém. O stock é reconciliado automaticamente quando as encomendas são confirmadas e quando os recibos de compra são lançados.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Armazéns" },
      {
        type: "p",
        text: "Adicione tantos armazéns quantos os que opera. Cada produto tem uma contagem de stock separada por armazém, permitindo-lhe servir as encomendas a partir do local mais próximo do cliente.",
      },
      { type: "h2", id: "stock-units", text: "Unidades de stock e conversões" },
      {
        type: "p",
        text: "Para produtos frescos, defina a unidade de stock como quilograma. Adicione tamanhos de embalagem como «caixa de 5 kg» ou «cesto de 10 kg» com conversões automáticas para que os clientes possam encomendar nessas unidades sem que tenha de converter o stock manualmente.",
      },
      { type: "h2", id: "stock-adjustments", text: "Ajustes manuais de stock" },
      {
        type: "p",
        text: "Perdeu algumas caixas por dano? Abra o produto, escolha «Ajustar stock» e introduza uma quantidade positiva ou negativa com um motivo. Os ajustes são registados no registo de auditoria com o utilizador, a data e uma fotografia opcional.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Armazéns", level: 2 },
      { id: "stock-units", text: "Unidades de stock e conversões", level: 2 },
      {
        id: "stock-adjustments",
        text: "Ajustes manuais de stock",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Painel de encomendas" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Criar encomendas de compra",
    },
  },

  // ----- Purchasing / Purchase orders -----
  {
    locale: "pt-PT",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Criar encomendas de compra",
    description:
      "Crie encomendas de compra para os seus fornecedores, acompanhe as entregas recebidas e lance recebimentos que atualizam o stock automaticamente.",
    keywords: [
      "encomendas de compra",
      "gestão de fornecedores",
      "compras por grosso",
    ],
    readingTime: "6 minutos de leitura",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "Uma encomenda de compra indica aos seus fornecedores o que entregar, quando e a que preço. Quando a mercadoria chega, lançar o recebimento atualiza o stock e o registo do fornecedor num único passo.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Passo 1 — Adicione um fornecedor",
      },
      {
        type: "p",
        text: "Abra «Compras» ← «Fornecedores» ← «Novo fornecedor». Introduza os dados de contacto e o prazo de entrega habitual do fornecedor.",
      },
      {
        type: "h2",
        id: "build-po",
        text: "Passo 2 — Construa a encomenda de compra",
      },
      {
        type: "p",
        text: "Clique em «Nova encomenda de compra», selecione o fornecedor e adicione itens. O preço começa pelo último preço do fornecedor, mas pode substituir cada item.",
      },
      { type: "h2", id: "receive", text: "Passo 3 — Rececione a entrega" },
      {
        type: "p",
        text: "Quando a mercadoria chegar, clique em «Rececionar» na encomenda de compra. Introduza a quantidade efetivamente entregue — são suportados recebimentos parciais — e confirme. Os níveis de stock são atualizados automaticamente e é criada a fatura do fornecedor.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transições de estado e impacto no stock",
      },
      {
        type: "p",
        text: "As encomendas de compra e as encomendas de venda partilham o mesmo livro de stock, mas fluem em direções opostas — confirmar uma encomenda de compra aumenta o stock (+), ao passo que confirmar uma encomenda de venda o diminui (−). A tabela seguinte resume as quatro ações principais e o seu impacto no stock:",
      },
      {
        type: "table",
        headers: ["Ação", "Mudança de estado", "Impacto no stock", "Notas"],
        rows: [
          [
            "Confirmar EC",
            "Rascunho / Reaberta / Não confirmada → Confirmada",
            "Entrada de stock (+)",
            "A mercadoria é recebida no armazém atribuído por cada item; o custo de compra é registado na encomenda.",
          ],
          [
            "Desconfirmar",
            "Confirmada → Não confirmada",
            "Saída de stock (−)",
            "Inverte o stock adicionado ao confirmar a EC; o custo de compra é limpo.",
          ],
          [
            "Cancelar EC",
            "Confirmada → Cancelada",
            "Saída de stock (−)",
            "Inverte o stock adicionado ao confirmar a EC; a encomenda fica conservada apenas para auditoria.",
          ],
          [
            "Reabrir",
            "Cancelada → Reaberta",
            "Sem alteração de stock",
            "O stock já foi invertido pelo Cancelar. Reabrir só altera o estado. A encomenda pode voltar a ser confirmada para adicionar stock.",
          ],
          [
            "Devolução",
            "Confirmada (por item)",
            "Saída parcial de stock (−)",
            "Devolva parte do item confirmado ao fornecedor — é adicionada uma linha de quantidade negativa e o stock é reduzido.",
          ],
          [
            "Cancelar devolução",
            "Confirmada (por item)",
            "Reingresso de stock (+)",
            "Inverte a devolução — a linha negativa é removida e a quantidade original volta ao stock.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Confirmar uma EC adiciona stock — não tira",
        text: "Confirmar uma encomenda de compra significa que a mercadoria chegou fisicamente e foi armazenada, por isso o stock sobe (+). Isto é o oposto de confirmar uma encomenda de venda, que o diminui (−). Não confunda as duas direções: Desconfirmar não devolve a mercadoria ao fornecedor — apenas inverte o stock que adicionou ao confirmar.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Tanto Cancelar como Desconfirmar invertem o stock",
        text: "Ambas as ações têm o mesmo efeito sobre o stock — ambas invertem o stock que a confirmação anterior adicionou. A diferença está no estado final: Cancelar leva a encomenda a «Cancelada» (terminal), enquanto Desconfirmar a leva a «Não confirmada» (ainda editável, e a próxima confirmação voltará a adicionar stock).",
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Passo 1 — Adicione um fornecedor",
        level: 2,
      },
      { id: "build-po", text: "Passo 2 — Construa a EC", level: 2 },
      { id: "receive", text: "Passo 3 — Rececione a entrega", level: 2 },
      {
        id: "inventory-impact",
        text: "Transições de estado e impacto no stock",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Níveis de stock" },
  },

  // ===================================================================
  // ITALIAN (it)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "it",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Panoramica di Wholesalify",
    description:
      "Una panoramica concisa di Wholesalify — la piattaforma di ordinazione all'ingrosso B2B per prodotti freschi, beni di largo consumo e aziende all'ingrosso multi-unità.",
    keywords: [
      "piattaforma all'ingrosso",
      "ordinazione B2B",
      "panoramica SaaS all'ingrosso",
    ],
    readingTime: "Lettura 4 min",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify è una moderna piattaforma di ordinazione all'ingrosso B2B pensata per grossisti, distributori e aziende commerciali. Combina un portale di ordinazione rivolto al cliente con un potente pannello di amministrazione, consentendo al tuo team di gestire ordini, magazzino, acquisti e account clienti in un unico posto.",
      },
      {
        type: "p",
        text: "Che tu venda prodotti freschi a peso, frutta selezionata a casse o prodotti multi-specifica per SKU, Wholesalify offre un catalogo e un modello di prezzo flessibili che rispecchiano il modo in cui opera davvero la tua attività.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Cosa puoi fare con Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Gestisci nello stesso catalogo articoli venduti a peso, a cassa/pallet o a unità.",
          "Applica prezzi differenziati per frutta e prodotti agricoli in base a grado, specifica o volume d'acquisto.",
          "Gestisci in parallelo articoli a peso, a grado e multi-specifica.",
          "Offri a ogni cliente all'ingrosso un portale self-service con storico ordini.",
          "Monitora ordini, incassi e consegne in un'unica postazione di lavoro.",
          "Genera report di magazzino e attiva automaticamente i riordini.",
          "Gestisci fornitori, ordini d'acquisto e ricevimenti merci.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Come si compone la piattaforma",
      },
      {
        type: "p",
        text: "Wholesalify è formato da tre livelli che condividono la stessa fonte di dati:",
      },
      {
        type: "ul",
        items: [
          "Portale ordini — il negozio online rivolto ai clienti all'ingrosso.",
          "Pannello di amministrazione — la postazione operativa per il tuo team.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "Chi usa Wholesalify" },
      {
        type: "ul",
        items: [
          "Grossisti di prodotti freschi (frutta, verdura, pesce).",
          "Distributori alimentari e di beni di largo consumo.",
          "Grossisti di materiali edili e ferramenta.",
          "Importatori multi-unità e aziende commerciali.",
          "Piccole e medie aziende all'ingrosso stufe di Excel e WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Prossimi passi" },
      {
        type: "ul",
        items: [
          "Leggi la Guida rapida per creare il tuo primo tenant ed effettuare un ordine di prova.",
          "Consulta la guida al Portale ordini per costruire il tuo catalogo all'ingrosso.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Pronto a iniziare?",
        text: "Registrati subito per una prova gratuita, senza carta di credito. Crea il tenant, aggiungi qualche articolo ed effettua un ordine di prova in meno di 15 minuti.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Registrati gratis",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Cosa puoi fare con Wholesalify",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Come si compone la piattaforma",
        level: 2,
      },
      { id: "who-uses-it", text: "Chi usa Wholesalify", level: 2 },
      { id: "next-steps", text: "Prossimi passi", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Guida rapida" },
  },
  {
    locale: "it",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Guida rapida",
    description:
      "Configura il tuo tenant Wholesalify in 15 minuti: crea l'account, aggiungi articoli, invita i clienti ed effettua il primo ordine all'ingrosso.",
    keywords: [
      "avvio all'ingrosso",
      "guida rapida B2B",
      "inizializzazione tenant",
    ],
    readingTime: "Lettura 6 min",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Questa Guida rapida ti porta, con il percorso più breve, a un tenant Wholesalify utilizzabile. Alla fine avrai un catalogo con alcuni articoli d'esempio e un cliente all'ingrosso in grado di effettuare ordini.",
      },
      { type: "h2", id: "prerequisites", text: "Prerequisiti" },
      {
        type: "ul",
        items: [
          "Un account Wholesalify. Se non ne hai uno, richiedilo dalla pagina di registrazione.",
          "Un'email aziendale — il sistema vi invierà i link di invito.",
          "Circa 15 minuti per completare la configurazione.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Crea l'account e il tenant",
      },
      {
        type: "p",
        text: "Vai alla pagina di registrazione di Wholesalify, inserisci la tua email aziendale e imposta una password. Dopo aver verificato l'email verrai reindirizzato alla postazione di lavoro del tenant. Ogni tenant è completamente isolato: cataloghi, clienti e ordini restano in spazi di lavoro separati.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Aggiungi i primi articoli",
      },
      {
        type: "p",
        text: "Apri l'area Catalogo e clicca su Nuovo articolo. Wholesalify supporta nativamente tre tipi di articolo:",
      },
      {
        type: "table",
        headers: ["Tipo di articolo", "Caso d'uso", "Esempio"],
        rows: [
          [
            "Articolo a peso",
            "Venduto a peso (kg / libbre)",
            "Cassetta di pomodori da 5 kg",
          ],
          [
            "Articolo a grado",
            "Con diversi gradi o livelli di qualità",
            "Mele — grado A / grado B",
          ],
          [
            "Articolo multi-specifica",
            "SKU diversi per colore / taglia / profumo",
            "Sapone 100 g — rosa / lavanda / senza profumo",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Invita un cliente all'ingrosso",
      },
      {
        type: "p",
        text: "Nella pagina Clienti clicca su Invita cliente. Inserisci la sua email e seleziona il listino prezzi e i termini di pagamento visibili. Il cliente riceverà un'email con un link di attivazione; dopo aver impostato la password potrà accedere.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Consiglio",
        text: "Per i test puoi usare un'email personale (ad esempio Gmail), così verifichi il flusso di invito senza dover configurare una casella di posta aggiuntiva.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Effettua il primo ordine",
      },
      {
        type: "p",
        text: "Passa all'account del cliente, apri il portale ordini, aggiungi qualche articolo al carrello, scegli una data di consegna e invia l'ordine. Apparirà immediatamente nell'area Ordini del pannello di amministrazione.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "step-5-explore", text: "5. Continua a esplorare" },
      {
        type: "p",
        text: "Da qui puoi configurare il magazzino, creare il primo ordine d'acquisto e invitare i colleghi operativi. I prossimi capitoli della documentazione approfondiscono ogni area, modulo per modulo.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Prerequisiti", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Crea l'account e il tenant",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Aggiungi i primi articoli",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Invita un cliente all'ingrosso",
        level: 2,
      },
      {
        id: "step-4-place-order",
        text: "4. Effettua il primo ordine",
        level: 2,
      },
      { id: "step-5-explore", text: "5. Continua a esplorare", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Panoramica" },
    next: { href: "/docs/get-started/concepts", title: "Concetti chiave" },
  },
  {
    locale: "it",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Concetti chiave",
    description:
      "Impara i componenti fondamentali di Wholesalify: tenant, catalogo, livelli di prezzo, account cliente e ciclo di vita dell'ordine.",
    keywords: [
      "tenant",
      "catalogo",
      "livelli di prezzo",
      "concetti chiave all'ingrosso",
    ],
    readingTime: "Lettura 7 min",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Prima di addentrarti nelle funzionalità, vale la pena familiarizzare con alcuni termini ricorrenti nel prodotto e nella documentazione.",
      },
      { type: "h2", id: "tenant", text: "Tenant" },
      {
        type: "p",
        text: "Un tenant è uno spazio di lavoro Wholesalify isolato, di proprietà di una singola azienda all'ingrosso. Ogni tenant ha catalogo, clienti, ordini, magazzino e utenti propri. I dati tra tenant diversi sono completamente separati.",
      },
      { type: "h2", id: "product-kinds", text: "Tipi di articolo" },
      {
        type: "p",
        text: "Ogni articolo del catalogo appartiene a uno di questi tre tipi:",
      },
      {
        type: "ul",
        items: [
          "Articolo standard — venduto in unità discrete (pezzi, casse, pallet).",
          "Articolo a peso — venduto a peso (kg / libbre), con più formati di confezione opzionali.",
          "Articolo multi-specifica — più SKU sotto lo stesso articolo padre (taglia, colore, profumo, ecc.).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Livelli di prezzo e listini cliente",
      },
      {
        type: "p",
        text: "Un livello di prezzo è un gruppo di clienti che dovrebbero vedere lo stesso prezzo. Puoi assegnare ogni cliente a uno o più livelli (ad esempio VIP, ingrosso, dettaglio). Il portale ordini mostra automaticamente il listino corretto in base al cliente che ha effettuato l'accesso.",
      },
      { type: "h2", id: "order-lifecycle", text: "Ciclo di vita dell'ordine" },
      {
        type: "p",
        text: "Ogni ordine passa attraverso un insieme finito di stati, fatti avanzare dal team:",
      },
      {
        type: "ol",
        items: [
          "Bozza — il cliente sta ancora modificando l'ordine nel portale.",
          "Inviato — il cliente ha inoltrato l'ordine, in attesa di conferma.",
          "Confermato — il tuo team ha accettato e le scorte sono state riservate.",
          "Annullato — stato terminale, l'ordine non è più valido.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Unità di magazzino" },
      {
        type: "p",
        text: "Ogni articolo può specificare un'unità di magazzino di base — kg per i freschi, casse per le bevande, pezzi per la ferramenta. Il sistema converte automaticamente le unità di vendita in unità di magazzino in base alle conversioni configurate sull'articolo.",
      },
      { type: "h2", id: "users-and-roles", text: "Utenti e ruoli" },
      {
        type: "p",
        text: "I membri di un tenant appartengono ai seguenti ruoli:",
      },
      {
        type: "table",
        headers: ["Ruolo", "Responsabilità"],
        rows: [
          [
            "Proprietario",
            "Gestisce fatturazione, utenti e tutte le impostazioni di sistema.",
          ],
          [
            "Amministratore",
            "Gestisce catalogo, ordini, magazzino e acquisti.",
          ],
          ["Operatore", "Si occupa dell'evasione quotidiana degli ordini."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Tenant", level: 2 },
      { id: "product-kinds", text: "Tipi di articolo", level: 2 },
      {
        id: "price-tiers",
        text: "Livelli di prezzo e listini cliente",
        level: 2,
      },
      { id: "order-lifecycle", text: "Ciclo di vita dell'ordine", level: 2 },
      { id: "inventory-units", text: "Unità di magazzino", level: 2 },
      { id: "users-and-roles", text: "Utenti e ruoli", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Guida rapida" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configurare il portale ordini",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "it",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configurare il portale ordini",
    description:
      "Configura il portale ordini all'ingrosso — informazioni merchant, vetrina privata, vetrina pubblica, messaggi di checkout e personalizzazioni per cliente.",
    keywords: [
      "configurazione portale ordini",
      "negozio all'ingrosso",
      "impostazioni vetrina",
    ],
    readingTime: "Lettura 6 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "Il portale ordini è il negozio che i clienti usano davvero. Tutte le configurazioni lato merchant sono raccolte nel pannello Impostazioni, suddivise in 12 sezioni che coprono negozio, articoli, pagamenti e team. Questa guida si concentra sulle sezioni più usate quando si avvia un nuovo negozio.",
      },
      { type: "h2", id: "merchant", text: "Informazioni merchant" },
      {
        type: "p",
        text: "Impostazioni → Merchant serve a definire nome del merchant, telefono, valuta predefinita, lingua, fuso orario e formato data. Questi campi compaiono su ogni ordine, fattura e pagina rivolta al cliente. Dopo il salvataggio potrebbe essere richiesto un nuovo accesso affinché la nuova lingua abbia effetto.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Vetrina all'ingrosso (cuore del portale ordini)",
      },
      {
        type: "p",
        text: "Impostazioni → Vetrina all'ingrosso è il pannello di controllo di tutto ciò che i clienti autenticati vedono, organizzato in 5 tab in quest'ordine:",
      },
      {
        type: "ol",
        items: [
          "Impostazioni di attivazione — un interruttore generale per abilitare o disabilitare il portale B2B a livello di tenant. Se disattivato, i clienti vedono solo la vetrina pubblica.",
          "Account cliente — elenca tutti i clienti e le loro personalizzazioni di vetrina privata. Ogni cliente può ereditare le impostazioni predefinite a livello merchant o avere banner, tema e restrizioni articoli propri.",
          "Vetrina pubblica — ciò che vedono i visitatori non autenticati: testo di invito alla registrazione, livello di prezzo di vendita, livello di prezzo originale (prezzo barrato).",
          "Vetrina privata — tutte le configurazioni visive e comportamentali per i clienti autenticati.",
          "Impostazioni di checkout — email di promemoria del carrello, testi del checkout, testi post-ordine.",
        ],
      },
      { type: "h3", id: "public", text: "Vetrina pubblica" },
      {
        type: "p",
        text: "Scegli per i visitatori non autenticati il livello di prezzo che vedranno (livello di prezzo di vendita) e il livello da usare come prezzo barrato di riferimento (livello prezzo originale). Il testo di invito alla registrazione è una breve frase che invita l'utente a registrarsi per sbloccare i prezzi all'ingrosso.",
      },
      { type: "h3", id: "private", text: "Vetrina privata" },
      {
        type: "p",
        text: "Queste configurazioni definiscono l'esperienza di navigazione di ogni cliente autenticato. Il tab Vetrina privata è suddiviso in 5 gruppi:",
      },
      {
        type: "ul",
        items: [
          "Banner — banner mobile (16:9) e banner web (caricamento separato). Consigliato 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Le due immagini si caricano o rimuovono in modo indipendente.",
          "Impostazioni di visualizzazione — se nascondere gli articoli esauriti; modalità di visualizzazione magazzino tra tre opzioni: nascondi magazzino / mostra solo disponibile-esaurito / mostra numeri + stato.",
          "Visualizzazione articolo — interruttori indipendenti per mostrare immagini, categorie, descrizioni e note dell'articolo.",
          "Informazioni di contatto — email di contatto, telefono e un testo libero di contatto mostrato ai clienti.",
          "Ambito di visibilità — seleziona gli articoli e i magazzini (Location) accessibili al cliente. Un elenco vuoto significa nessuna restrizione.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Regimi fiscali e sconti",
        text: "Anche i regimi fiscali (imposta principale + imposta secondaria opzionale) e gli sconti (percentuale o importo fisso) si configurano qui e partecipano automaticamente al calcolo del carrello e del checkout.",
      },
      { type: "h3", id: "checkout", text: "Testi del checkout" },
      {
        type: "p",
        text: "Tre brevi testi controllano l'esperienza prima e dopo il checkout: promemoria carrello (email di promemoria automatica predefinita dopo 1 ora), testo del checkout (mostrato su carrello/checkout), testo post-ordine (mostrato dopo l'invio dell'ordine). Tutti e tre supportano solo testo semplice.",
      },
      {
        type: "h2",
        id: "payment",
        text: "Metodi di pagamento e regimi fiscali",
      },
      {
        type: "p",
        text: "Impostazioni → Metodi di pagamento abilita le opzioni di pagamento selezionabili dai clienti al checkout (bonifico, contrassegno, termine di credito, ecc.). Impostazioni → Regimi fiscali definisce i regimi fiscali referenziati dal negozio — per ogni zona si possono impostare l'imposta principale e un'eventuale imposta secondaria.",
      },
      { type: "h2", id: "open-storefront", text: "Apri il tuo negozio" },
      {
        type: "p",
        text: "Con l'interruttore di attivazione acceso e almeno un account cliente attivo, in cima al pannello Vetrina all'ingrosso compare l'indirizzo di accesso al negozio. Clicca su Visita negozio per vedere in anteprima esattamente ciò che il cliente vedrà dopo l'accesso; dopo la verifica puoi inviare gli inviti.",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "Anteprima del negozio per l'acquirente",
      },
      {
        type: "p",
        text: "Quello che segue è il negozio che il cliente vede dopo l'accesso: stessa testata, banner e griglia articoli del marchio — identica a quella che userà dal telefono o dal computer. Prima di inviare il link all'acquirente, usa questa anteprima per verificare visibilità del catalogo, ordinamento e l'interazione inline di \"Aggiungi al carrello\".",
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "Informazioni merchant", level: 2 },
      {
        id: "showroom",
        text: "Vetrina all'ingrosso (cuore del portale ordini)",
        level: 2,
      },
      { id: "public", text: "Vetrina pubblica", level: 3 },
      { id: "private", text: "Vetrina privata", level: 3 },
      { id: "checkout", text: "Testi del checkout", level: 3 },
      { id: "payment", text: "Metodi di pagamento e regimi fiscali", level: 2 },
      { id: "open-storefront", text: "Apri il tuo negozio", level: 2 },
      {
        id: "showroom-preview",
        text: "Anteprima del negozio per l'acquirente",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Concetti chiave" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Costruire il catalogo articoli",
    },
  },
  {
    locale: "it",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Costruire il catalogo articoli",
    description:
      "Crea articoli a peso, a grado e multi-specifica, organizzali per categorie e tag e gestisci immagini e testi multilingua.",
    keywords: ["catalogo articoli", "catalogo all'ingrosso", "articolo a peso"],
    readingTime: "Lettura 8 min",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "Il catalogo articoli è il fondamento del portale ordini. Il modello di articolo di Wholesalify è pensato per i tre scenari reali dell'ingrosso: prodotti agricoli venduti a peso, frutta venduta a grado e SKU con più specifiche.",
      },
      { type: "h2", id: "create-product", text: "Creare un articolo" },
      {
        type: "p",
        text: "Vai su Catalogo → Articoli → Nuovo articolo, scegli prima il tipo di articolo e poi configura. I tipi disponibili sono 4: articolo standard, articolo a peso, articolo non a magazzino, articolo di servizio.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Articolo standard" },
      {
        type: "p",
        text: "Articolo standard venduto in unità discrete (pezzo / cassa / pallet). Imposta SKU, unità di magazzino e prezzo di vendita unitario; se servono più formati di vendita, passa al tab Unità di vendita e aggiungine, ogni riga mantiene in autonomia prezzo, opzione imposte e 5 livelli di prezzo.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Articolo a peso" },
      {
        type: "p",
        text: "L'articolo a peso non ha uno SKU fisso: il cliente può inserire qualsiasi quantità decimale nel portale ordini. Imposta l'unità di base (kg / lb) e il prezzo di vendita per unità di base; il sistema arrotonderà automaticamente alla precisione configurata.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Articolo multi-specifica" },
      {
        type: "p",
        text: 'Attivando l\'interruttore "Modalità multi-specifica" su un articolo standard puoi definire più specifiche (ad esempio Taglia × Profumo); il sistema genera automaticamente la matrice SKU come prodotto cartesiano. Crea prima nomi e valori delle specifiche in Catalogo → Attributi.',
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Articolo multi-grado" },
      {
        type: "p",
        text: 'Per gli articoli a peso, ogni SKU può mantenere un ulteriore tab Gradi articolo: aggiungi più righe di grado per lo stesso articolo (ad esempio "Premium / Prima / Seconda"), ognuna con nome del grado, prezzo di vendita, opzione imposte e 5 livelli di prezzo. Il cliente deve scegliere un grado prima dell\'ordine e il calcolo usa il prezzo di quel grado. Sono supportati fino a 10 gradi.',
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Categorie e tag" },
      {
        type: "p",
        text: "Le categorie controllano l'ordine di visualizzazione nella sidebar del portale e la gamma navigabile dai clienti. I tag sono testo libero, utili per filtri e ricerche.",
      },
      { type: "h2", id: "images", text: "Immagini e testi multilingua" },
      {
        type: "p",
        text: "Ogni articolo può avere fino a 1 immagine; la prima diventa l'immagine principale della vetrina. Se operi in più aree geografiche, puoi aggiungere nome e descrizione nelle varie lingue dalla pagina di modifica dell'articolo: il sistema li applicherà automaticamente alla lingua corrispondente.",
      },
    ],
    toc: [
      { id: "create-product", text: "Creare un articolo", level: 2 },
      { id: "standard", text: "Articolo standard", level: 3 },
      { id: "weighed", text: "Articolo a peso", level: 3 },
      { id: "multi-spec", text: "Articolo multi-specifica", level: 3 },
      { id: "multi-grade", text: "Articolo multi-grado", level: 3 },
      { id: "categories", text: "Categorie articolo", level: 2 },
      { id: "images", text: "Immagini", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configurare il portale ordini",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Livelli di prezzo e listini cliente",
    },
  },
  {
    locale: "it",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Livelli di prezzo e listini cliente",
    description:
      "Configura 5 livelli di prezzo per ogni SKU, gestisci più righe di grado sugli articoli a peso e assegna il livello di prezzo nella scheda cliente.",
    keywords: [
      "livelli di prezzo",
      "prezzi all'ingrosso",
      "grado frutta",
      "livello cliente",
    ],
    readingTime: "Lettura 6 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: 'La determinazione dei prezzi in Wholesalify ruota attorno a due concetti: i "Livelli di prezzo" lato articolo (lo stesso articolo mostra 5 prezzi diversi a clienti diversi) e il campo "Livello di prezzo" nella scheda cliente (decide quale dei 5 vede quel cliente dopo l\'accesso). I due lati corrispondono 1-a-1 tramite i livelli 1~5 e si configurano in due posti: Modifica articolo → SKU e Gestione clienti → Modifica cliente.',
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Livelli di prezzo per tutti i tipi di articolo",
      },
      {
        type: "p",
        text: "Nel tab Informazioni base di qualsiasi SKU trovi la casella Prezzo di vendita con un'icona a cursore sulla destra. Cliccandola si apre la finestra Livelli di prezzo, dove puoi compilare fino a 5 livelli (Livello 1 ~ 5) e impostare indipendentemente l'opzione \"IVA inclusa\" per ciascuno.",
      },
      {
        type: "ul",
        items: [
          "I 5 livelli corrispondono ai 5 livelli di prezzo del cliente (impostati nella scheda cliente, vedi sotto).",
          "Il pallino in alto a destra dell'icona indica che almeno un livello è stato impostato (>0); è solo un indicatore di stato.",
          "Una SKU mantiene un unico set di 5 prezzi; l'importo finale dipende anche da unità di base / unità di vendita, aliquota e valuta.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Impostazione dei gradi sugli articoli a peso",
      },
      {
        type: "p",
        text: 'Per un articolo di tipo "a peso", nella pagina di modifica della SKU compare un tab aggiuntivo Gradi articolo. Qui puoi mantenere più righe di grado per la stessa SKU (ad esempio "Premium / Prima / Seconda"), ognuna con: nome del grado, prezzo di vendita (fisso all\'unità di base, es. /kg), opzione IVA e l\'icona a cursore a destra del prezzo, che apre anch\'essa la finestra dei 5 livelli di prezzo per configurare prezzi e IVA specifici del grado.',
      },
      {
        type: "ul",
        items: [
          "Puoi aggiungere fino a 10 righe di grado; quando elimini fino all'ultima, ne resta sempre una vuota, senza rimuovere l'intero blocco.",
          'Il suffisso del prezzo di vendita è fisso su "/{unità di base}" (es. /kg), coerente con la vendita a peso.',
          "Il cliente deve selezionare un grado prima dell'ordine; il sistema calcola l'importo dovuto sul prezzo del grado scelto.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Livelli di prezzo per le unità di vendita multiple",
      },
      {
        type: "p",
        text: 'Per gli articoli non a peso puoi aggiungere più unità di vendita nel tab Unità di vendita (ad esempio "cassa / pezzo / set"). Anche ogni riga di unità di vendita ha la propria casella Prezzo di vendita, la cui icona a cursore apre la finestra dei 5 livelli di prezzo per configurare prezzi e opzione IVA specifici di quell\'unità.',
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Livello di prezzo del cliente",
      },
      {
        type: "p",
        text: 'In Gestione clienti apri qualsiasi scheda cliente: nell\'area dati anagrafici trovi un menu a tendina Livello di prezzo con cinque opzioni (Livello 1 ~ 5). Il campo determina quale fascia di prezzo di vendita il cliente vede dopo l\'accesso: ad esempio, se il cliente è impostato su "Livello 3", tutti gli articoli del portale mostreranno il prezzo del "Livello 3" di quella SKU.',
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Corrispondenza tra lato articolo e lato cliente",
        text: 'Lato articolo (5 livelli di prezzo) e lato cliente (livelli 1~5) corrispondono 1-a-1: il livello N nella scheda cliente mostra automaticamente il prezzo di "Livello N" di quell\'articolo; se il livello non è compilato, si usa il prezzo di vendita di fallback (salePrice).',
      },
    ],
    toc: [
      {
        id: "sku-price-levels",
        text: "Livelli di prezzo per tutti i tipi di articolo",
        level: 2,
      },
      {
        id: "weighed-grades",
        text: "Impostazione dei gradi sugli articoli a peso",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Livelli di prezzo per le unità di vendita multiple",
        level: 2,
      },
      {
        id: "customer-price-level",
        text: "Livello di prezzo del cliente",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Costruire il catalogo articoli",
    },
    next: { href: "/docs/orders/dashboard", title: "Postazione ordini" },
  },

  // ----- Orders -----
  {
    locale: "it",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Postazione ordini",
    description:
      "Scopri la lista delle vendite — i cinque stati reali dei documenti, i filtri disponibili, le colonne della tabella e le azioni eseguibili dalla scheda dell'ordine.",
    keywords: [
      "postazione ordini",
      "ordini all'ingrosso",
      "gestione ordini B2B",
    ],
    readingTime: "Lettura 4 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "La lista Documenti di vendita è il punto d'ingresso quotidiano del team operativo per revisionare e modificare gli ordini. Questa pagina illustra i controlli, le colonne e le azioni disponibili nella scheda di ciascun ordine.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtri" },
      {
        type: "ul",
        items: [
          "Ricerca per parola chiave — numero d'ordine, nome cliente, PO cliente o qualsiasi testo nell'ordine.",
          "Stato — menu a discesa singolo: tutti / bozza / confermato / annullato / riaperto / conferma annullata.",
          "Intervallo di date — tre preset rapidi: oggi / ultimi 7 giorni / ultimi 30 giorni, oppure intervallo personalizzato sul calendario.",
          "Magazzino — filtro multi-magazzino; vuoto significa senza restrizioni.",
          "Stato pagamento — multi-selezione: non pagato / parzialmente pagato / pagato / pagato in eccesso.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Reimposta filtri",
        text: "L'icona di reset a destra della riga filtri riporta tutti i valori ai predefiniti (ultimi 30 giorni, tutti gli stati, tutti i magazzini, tutti gli stati di pagamento).",
      },
      { type: "h2", id: "table-columns", text: "Colonne della tabella" },
      {
        type: "p",
        text: "Ogni riga della lista mostra le seguenti 12 colonne:",
      },
      {
        type: "ol",
        items: [
          "# — numero di riga (page × size + n).",
          "Numero d'ordine — collegamento cliccabile che apre la scheda in una nuova scheda.",
          "Cliente — nome dell'acquirente.",
          "Data operazione — data operativa sull'ordine.",
          "Importo dovuto — formattato nella valuta predefinita del merchant.",
          "Magazzino — magazzino di uscita.",
          'Stato pagamento — derivato automaticamente da "ricevuto vs dovuto".',
          'Stato — stato attuale dell\'ordine (vedi "Stati del documento" sotto).',
          "Data di creazione / Creato da / Data aggiornamento / Aggiornato da — campi di audit.",
        ],
      },
      { type: "h2", id: "statuses", text: "Stati del documento" },
      {
        type: "p",
        text: "Ogni ordine si trova sempre in uno dei 5 stati seguenti. Il badge di stato è statico e non cliccabile: per cambiare stato apri la scheda dell'ordine e usa i pulsanti d'azione.",
      },
      {
        type: "table",
        headers: ["Stato", "Codice", "Significato"],
        rows: [
          ["Bozza", "0", "Salvato come bozza, non ancora inviato al cliente."],
          ["Confermato", "1", "Inviato al cliente, pronto per l'evasione."],
          [
            "Annullato",
            "2",
            "Annullato; conservato solo per audit, non più gestibile.",
          ],
          [
            "Riaperto",
            "3",
            "Un ordine precedentemente annullato è stato riaperto per modifiche.",
          ],
          [
            "Conferma annullata",
            "4",
            'Torna da "Confermato" a uno stato modificabile simile alla bozza.',
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Azioni sull'ordine" },
      {
        type: "p",
        text: "Clicca sul numero d'ordine per aprire la scheda. In alto vengono mostrati i pulsanti d'azione coerenti con lo stato attuale; tutte le azioni sono controllate da permessi e il pulsante è nascosto se non si hanno i diritti.",
      },
      {
        type: "ul",
        items: [
          "Salva — salva le modifiche correnti negli stati Bozza / Riaperto / Conferma annullata.",
          'Conferma documento di vendita — porta la bozza a "Confermato".',
          'Annulla conferma — riporta "Confermato" a "Conferma annullata" (modificabile, riconfermabile).',
          'Annulla documento di vendita — porta un ordine "Confermato" allo stato "Annullato".',
          'Riapri — porta un ordine "Annullato" allo stato "Riaperto", consentendone la modifica.',
          "Elimina — elimina definitivamente l'ordine. Disponibile solo negli stati Bozza / Conferma annullata / Riaperto.",
          'Reso / Annulla reso — gestisce i resi (parziali) del cliente sulle righe di un ordine "Confermato"; Annulla reso annulla un reso effettuato.',
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transizioni di stato e impatto sul magazzino",
      },
      {
        type: "p",
        text: "Tutte le movimentazioni di magazzino passano da un flusso unificato, sempre consultabile in Movimenti di magazzino per numero di documento. La tabella mostra l'effetto delle 4 azioni principali sul magazzino:",
      },
      {
        type: "table",
        headers: [
          "Azione",
          "Cambio di stato",
          "Impatto magazzino",
          "Descrizione",
        ],
        rows: [
          [
            "Conferma documento di vendita",
            "Bozza / Riaperto / Conferma annullata → Confermato",
            "Scarico magazzino (−)",
            "Scarica le quantità delle righe dal magazzino corrispondente; il costo viene registrato sull'ordine.",
          ],
          [
            "Annulla conferma",
            "Confermato → Conferma annullata",
            "Rientro magazzino (+)",
            "Rientra tutta la quantità scaricata con l'ultima \"Conferma documento\"; il costo dell'ordine si azzera.",
          ],
          [
            "Annulla documento di vendita",
            "Confermato → Annullato",
            "Rientro magazzino (+)",
            "Rientra tutta la quantità scaricata con l'ultima \"Conferma documento\"; l'ordine resta solo per audit.",
          ],
          [
            "Riapri",
            "Annullato → Riaperto",
            "Nessun impatto",
            'Il magazzino è già rientrato con "Annulla documento"; Riapri cambia solo lo stato ed è possibile una nuova "Conferma documento".',
          ],
          [
            "Reso",
            "Confermato (a livello di riga)",
            "Rientro parziale (+)",
            "Reso parziale su una riga di un ordine Confermato: crea una riga a quantità negativa e rientra il magazzino per quella quantità.",
          ],
          [
            "Annulla reso",
            "Confermato (a livello di riga)",
            "Nuovo scarico (−)",
            "Annulla un reso: elimina la riga a quantità negativa e ricarica la quantità originale.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title:
          '"Annulla documento di vendita" e "Annulla conferma" rientrano entrambi il magazzino',
        text: 'Le due azioni hanno lo stesso effetto sul magazzino: riportano indietro tutta la quantità scaricata dall\'ultima "Conferma documento". La differenza è nello stato finale: dopo Annulla documento l\'ordine è "Annullato" (stato terminale, non più avanzabile); dopo Annulla conferma è "Conferma annullata" (modificabile e, se riconfermato, scarica di nuovo il magazzino).',
      },
      {
        type: "callout",
        variant: "warning",
        title: "Nessuna azione in massa",
        text: "La lista dei documenti di vendita non supporta selezione multipla o azioni in massa. Ogni ordine va gestito singolarmente aprendo la scheda.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtri", level: 2 },
      { id: "table-columns", text: "Colonne della tabella", level: 2 },
      { id: "statuses", text: "Stati del documento", level: 2 },
      { id: "actions", text: "Azioni sull'ordine", level: 2 },
      {
        id: "inventory-impact",
        text: "Transizioni di stato e impatto sul magazzino",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Livelli di prezzo e listini cliente",
    },
    next: { href: "/docs/inventory/stock", title: "Livelli di scorta" },
  },

  // ----- Inventory -----
  {
    locale: "it",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Livelli di scorta",
    description:
      "Traccia le scorte per ubicazione, magazzino e variante di articolo, configura l'unità di magazzino di base e le conversioni tra unità.",
    keywords: [
      "gestione magazzino",
      "magazzino all'ingrosso",
      "multi-magazzino",
    ],
    readingTime: "Lettura 5 min",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "Il modulo magazzino di Wholesalify mantiene una scorta in tempo reale per ogni variante di articolo in ogni magazzino. La conferma degli ordini d'acquisto aggiorna automaticamente il magazzino.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Magazzini" },
      {
        type: "p",
        text: "Puoi aggiungere tutti i magazzini che ti servono. Ogni articolo ha conteggi indipendenti in ogni magazzino, così puoi spedire dal magazzino più vicino al cliente.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Unità di magazzino e conversioni",
      },
      {
        type: "p",
        text: "Per i prodotti freschi puoi impostare l'unità di magazzino sui kg. Aggiungi formati come cassa da 5 kg o cassa da 10 kg con conversione automatica: il cliente può ordinare in quei formati senza che tu debba gestire manualmente le quantità.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Rettifiche manuali di magazzino",
      },
      {
        type: "p",
        text: "Hai perso qualche cassa per deterioramento? Apri l'articolo, scegli Rettifica magazzino e inserisci una quantità positiva o negativa con il motivo. La rettifica viene registrata nel log di audit con operatore, data e immagine opzionale.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Magazzini", level: 2 },
      { id: "stock-units", text: "Unità di magazzino e conversioni", level: 2 },
      {
        id: "stock-adjustments",
        text: "Rettifiche manuali di magazzino",
        level: 2,
      },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Postazione ordini" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Creare un ordine d'acquisto",
    },
  },

  // ----- Purchasing -----
  {
    locale: "it",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Creare un ordine d'acquisto",
    description:
      "Invia ordini d'acquisto ai fornitori, monitora le ricezioni in transito e, con un'unica operazione, registra i carichi a magazzino.",
    keywords: [
      "ordine d'acquisto",
      "gestione fornitori",
      "acquisti all'ingrosso",
    ],
    readingTime: "Lettura 6 min",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "L'ordine d'acquisto comunica al fornitore articoli, tempi e prezzi di consegna. Quando la merce arriva, basta confermare la ricezione per aggiornare magazzino e scheda fornitore in un solo passaggio.",
      },
      { type: "mockup", variant: "purchase" },
      {
        type: "h2",
        id: "supplier-first",
        text: "Passo 1 — Aggiungi un fornitore",
      },
      {
        type: "p",
        text: "Vai su Acquisti → Fornitori → Nuovo fornitore e compila i contatti insieme ai tempi di consegna normalmente richiesti.",
      },
      {
        type: "h2",
        id: "build-po",
        text: "Passo 2 — Crea l'ordine d'acquisto",
      },
      {
        type: "p",
        text: "Clicca su Nuovo ordine d'acquisto, seleziona il fornitore e aggiungi le righe. Il prezzo unitario riprende di default la cronologia fornitore; ogni riga può essere sovrascritta.",
      },
      { type: "h2", id: "receive", text: "Passo 3 — Registra la ricezione" },
      {
        type: "p",
        text: "Quando la merce arriva, clicca su Conferma nell'ordine d'acquisto. Inserisci le quantità effettivamente ricevute per riga e conferma: il magazzino verrà aggiornato automaticamente.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transizioni di stato e impatto sul magazzino",
      },
      {
        type: "p",
        text: 'Gli ordini d\'acquisto condividono il flusso di magazzino con i documenti di vendita, ma con direzione opposta: la "Conferma" di un acquisto è un carico (+), mentre la "Conferma" di una vendita è uno scarico (−). La tabella mostra l\'effetto delle 4 azioni principali sul magazzino:',
      },
      {
        type: "table",
        headers: [
          "Azione",
          "Cambio di stato",
          "Impatto magazzino",
          "Descrizione",
        ],
        rows: [
          [
            "Conferma ordine d'acquisto",
            "Bozza / Riaperto / Conferma annullata → Confermato",
            "Carico (+)",
            "Carica le quantità delle righe nel magazzino corrispondente; il costo d'acquisto viene registrato sull'ordine.",
          ],
          [
            "Annulla conferma",
            "Confermato → Conferma annullata",
            "Scarico (−)",
            "Scarica tutta la quantità caricata con l'ultima \"Conferma ordine\"; il costo d'acquisto si azzera.",
          ],
          [
            "Annulla ordine d'acquisto",
            "Confermato → Annullato",
            "Scarico (−)",
            "Scarica tutta la quantità caricata con l'ultima \"Conferma ordine\"; l'ordine resta solo per audit.",
          ],
          [
            "Riapri",
            "Annullato → Riaperto",
            "Nessun impatto",
            'Il magazzino è già stato scaricato con "Annulla ordine"; Riapri cambia solo lo stato ed è possibile una nuova "Conferma ordine".',
          ],
          [
            "Reso",
            "Confermato (a livello di riga)",
            "Scarico parziale (−)",
            "Reso parziale al fornitore su una riga di un ordine Confermato: crea una riga a quantità negativa e scarica il magazzino per quella quantità.",
          ],
          [
            "Annulla reso",
            "Confermato (a livello di riga)",
            "Nuovo carico (+)",
            "Annulla un reso: elimina la riga a quantità negativa e ricarica la quantità originale.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: '"Conferma ordine d\'acquisto" è un carico, non uno scarico',
        text: 'La "Conferma" di un ordine d\'acquisto indica che la merce è effettivamente arrivata e caricata in magazzino, quindi è +; è esattamente l\'opposto della "Conferma" di una vendita (−). Prestare attenzione alla direzione: "Annulla conferma" non "restituisce" la merce al fornitore, ma scarica nuovamente quanto era appena stato caricato.',
      },
      {
        type: "callout",
        variant: "info",
        title:
          '"Annulla ordine d\'acquisto" e "Annulla conferma" scaricano entrambi il magazzino',
        text: 'Le due azioni hanno lo stesso effetto sul magazzino: scaricano tutta la quantità caricata dall\'ultima "Conferma ordine". La differenza è nello stato finale: dopo Annulla ordine l\'ordine è "Annullato" (stato terminale, non più avanzabile); dopo Annulla conferma è "Conferma annullata" (modificabile e, se riconfermato, ricarica il magazzino).',
      },
    ],
    toc: [
      {
        id: "supplier-first",
        text: "Passo 1 — Aggiungi un fornitore",
        level: 2,
      },
      { id: "build-po", text: "Passo 2 — Crea l'ordine d'acquisto", level: 2 },
      { id: "receive", text: "Passo 3 — Registra la ricezione", level: 2 },
      {
        id: "inventory-impact",
        text: "Transizioni di stato e impatto sul magazzino",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Livelli di scorta" },
  },

  // ===================================================================
  // SPANISH (SPAIN) (es-ES)
  // ===================================================================

  // ----- Get started / Overview -----
  {
    locale: "es-ES",
    slug: "overview",
    category: "get-started",
    href: "/docs/get-started/overview",
    title: "Visión general de Wholesalify",
    description:
      "Una visión general concisa de Wholesalify — la plataforma de pedidos al por mayor B2B para productos frescos, bienes de consumo y negocios mayoristas multiunidad.",
    keywords: [
      "plataforma mayorista",
      "pedidos B2B",
      "visión general SaaS mayorista",
    ],
    readingTime: "Lectura de 4 min",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Wholesalify es una moderna plataforma de pedidos al por mayor B2B pensada para mayoristas, distribuidores y empresas comerciales. Combina un portal de pedidos orientado al cliente con un potente panel de administración, para que tu equipo gestione pedidos, inventario, compras y cuentas de clientes en un solo lugar.",
      },
      {
        type: "p",
        text: "Tanto si vendes productos frescos a peso, fruta seleccionada por cajas, como productos con múltiples especificaciones por SKU, Wholesalify te ofrece un catálogo y un modelo de precios flexibles que se ajustan al funcionamiento real de tu negocio.",
      },
      {
        type: "h2",
        id: "what-you-can-do",
        text: "Qué puedes hacer con Wholesalify",
      },
      {
        type: "ul",
        items: [
          "Gestiona en un mismo catálogo artículos vendidos a peso, por caja/palet o por unidad.",
          "Aplica precios escalonados a frutas y productos agrícolas según grado, especificación o volumen de compra.",
          "Combina artículos a peso, por grado y multi-especificación en una misma gestión.",
          "Ofrece a cada cliente mayorista un portal de autoservicio con histórico de pedidos.",
          "Controla pedidos, cobros y entregas desde una única mesa de trabajo.",
          "Genera informes de inventario y activa reposiciones automáticas.",
          "Gestiona proveedores, pedidos de compra y recepciones de mercancía.",
        ],
      },
      {
        type: "h2",
        id: "how-it-fits-together",
        text: "Cómo se articula la plataforma",
      },
      {
        type: "p",
        text: "Wholesalify se compone de tres capas que comparten la misma fuente de datos:",
      },
      {
        type: "ul",
        items: [
          "Portal de pedidos — la tienda online para los clientes mayoristas.",
          "Panel de administración — la mesa de trabajo operativa para tu equipo.",
        ],
      },
      { type: "mockup", variant: "dashboard" },
      { type: "h2", id: "who-uses-it", text: "Quién utiliza Wholesalify" },
      {
        type: "ul",
        items: [
          "Mayoristas de productos frescos (frutas, verduras, pescado).",
          "Distribuidores de alimentación y bienes de consumo.",
          "Mayoristas de materiales de construcción y ferretería.",
          "Importadores multi-unidad y empresas comerciales.",
          "Pequeñas y medianas empresas mayoristas cansadas de Excel y WhatsApp.",
        ],
      },
      { type: "h2", id: "next-steps", text: "Próximos pasos" },
      {
        type: "ul",
        items: [
          "Lee la Guía de inicio rápido para crear tu primer espacio y lanzar un pedido de prueba.",
          "Consulta la guía del Portal de pedidos para montar tu catálogo mayorista.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Listo para empezar?",
        text: "Regístrate gratis sin tarjeta de crédito. Crea tu espacio, añade algunos artículos y realiza un pedido de prueba en menos de 15 minutos.",
        action: {
          href: "https://admin.wholesalify.com/register",
          label: "Registro gratuito",
        },
      },
    ],
    toc: [
      {
        id: "what-you-can-do",
        text: "Qué puedes hacer con Wholesalify",
        level: 2,
      },
      {
        id: "how-it-fits-together",
        text: "Cómo se articula la plataforma",
        level: 2,
      },
      { id: "who-uses-it", text: "Quién utiliza Wholesalify", level: 2 },
      { id: "next-steps", text: "Próximos pasos", level: 2 },
    ],
    next: { href: "/docs/get-started/quickstart", title: "Inicio rápido" },
  },
  {
    locale: "es-ES",
    slug: "quickstart",
    category: "get-started",
    href: "/docs/get-started/quickstart",
    title: "Inicio rápido",
    description:
      "Configura tu espacio Wholesalify en 15 minutos: crea la cuenta, añade artículos, invita clientes y completa tu primer pedido mayorista.",
    keywords: [
      "alta mayorista",
      "inicio rápido B2B",
      "inicialización de espacio",
    ],
    readingTime: "Lectura de 6 min",
    lastUpdated: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "Esta guía de inicio rápido te lleva por el camino más corto hasta tener un espacio Wholesalify funcional. Al terminar tendrás un catálogo con algunos artículos de ejemplo y un cliente mayorista capaz de hacer pedidos.",
      },
      { type: "h2", id: "prerequisites", text: "Requisitos previos" },
      {
        type: "ul",
        items: [
          "Una cuenta de Wholesalify. Si todavía no la tienes, solicítala desde la página de registro.",
          "Un correo corporativo — el sistema enviará ahí los enlaces de invitación.",
          "Unos 15 minutos para completar la configuración.",
        ],
      },
      {
        type: "h2",
        id: "step-1-create-account",
        text: "1. Crea la cuenta y el espacio",
      },
      {
        type: "p",
        text: "Ve a la página de registro de Wholesalify, introduce tu correo corporativo y define una contraseña. Tras verificar el correo, accederás a la mesa de trabajo del espacio. Cada espacio está totalmente aislado: catálogos, clientes y pedidos se guardan en espacios de trabajo independientes.",
      },
      { type: "mockup", variant: "settings" },
      {
        type: "h2",
        id: "step-2-add-products",
        text: "2. Añade los primeros artículos",
      },
      {
        type: "p",
        text: "Abre el área Catálogo y haz clic en Nuevo artículo. Wholesalify admite de forma nativa tres tipos de artículo:",
      },
      {
        type: "table",
        headers: ["Tipo de artículo", "Caso de uso", "Ejemplo"],
        rows: [
          [
            "Artículo a peso",
            "Vendido a peso (kg / libras)",
            "Caja de tomates sueltos de 5 kg",
          ],
          [
            "Artículo por grado",
            "Con diferentes grados o niveles de calidad",
            "Manzanas — grado A / grado B",
          ],
          [
            "Artículo multi-especificación",
            "SKU distintos por color / talla / aroma",
            "Jabón 100 g — rosa / lavanda / sin perfume",
          ],
        ],
      },
      {
        type: "h2",
        id: "step-3-invite-buyer",
        text: "3. Invita a un cliente mayorista",
      },
      {
        type: "p",
        text: "En la página Clientes, haz clic en Invitar cliente. Indica su correo y selecciona la tarifa de precios y las condiciones de pago visibles. El cliente recibirá un correo con un enlace de activación y, tras definir su contraseña, podrá iniciar sesión.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Consejo",
        text: "Para probar puedes usar un correo personal (por ejemplo Gmail) y verificar el flujo de invitación sin tener que configurar un buzón adicional.",
      },
      {
        type: "h2",
        id: "step-4-place-order",
        text: "4. Realiza el primer pedido",
      },
      {
        type: "p",
        text: "Cambia a la cuenta del cliente, abre el portal de pedidos, añade unos artículos al carrito, elige una fecha de entrega y envía el pedido. Aparecerá al instante en el área Pedidos del panel de administración.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "step-5-explore", text: "5. Sigue explorando" },
      {
        type: "p",
        text: "A partir de aquí puedes configurar el inventario, crear tu primer pedido de compra e invitar a tus compañeros de operaciones. Los capítulos siguientes de la documentación profundizan área por área en cada módulo.",
      },
    ],
    toc: [
      { id: "prerequisites", text: "Requisitos previos", level: 2 },
      {
        id: "step-1-create-account",
        text: "1. Crea la cuenta y el espacio",
        level: 2,
      },
      {
        id: "step-2-add-products",
        text: "2. Añade los primeros artículos",
        level: 2,
      },
      {
        id: "step-3-invite-buyer",
        text: "3. Invita a un cliente mayorista",
        level: 2,
      },
      {
        id: "step-4-place-order",
        text: "4. Realiza el primer pedido",
        level: 2,
      },
      { id: "step-5-explore", text: "5. Sigue explorando", level: 2 },
    ],
    prev: { href: "/docs/get-started/overview", title: "Visión general" },
    next: { href: "/docs/get-started/concepts", title: "Conceptos clave" },
  },
  {
    locale: "es-ES",
    slug: "concepts",
    category: "get-started",
    href: "/docs/get-started/concepts",
    title: "Conceptos clave",
    description:
      "Conoce los componentes básicos de Wholesalify: espacios, catálogo, niveles de precios, cuentas de cliente y ciclo de vida del pedido.",
    keywords: [
      "espacio",
      "catálogo",
      "niveles de precios",
      "conceptos mayoristas clave",
    ],
    readingTime: "Lectura de 7 min",
    lastUpdated: "2026-07-05",
    blocks: [
      {
        type: "p",
        text: "Antes de profundizar en las funciones, conviene familiarizarse con algunos términos recurrentes en el producto y en la documentación.",
      },
      { type: "h2", id: "tenant", text: "Espacio (tenant)" },
      {
        type: "p",
        text: "Un espacio es un entorno Wholesalify aislado propiedad de una única empresa mayorista. Cada espacio tiene su propio catálogo, clientes, pedidos, inventario y usuarios. Los datos entre espacios están completamente separados.",
      },
      { type: "h2", id: "product-kinds", text: "Tipos de artículo" },
      {
        type: "p",
        text: "Cada artículo del catálogo pertenece a uno de estos tres tipos:",
      },
      {
        type: "ul",
        items: [
          "Artículo estándar — vendido en unidades discretas (piezas, cajas, palés).",
          "Artículo a peso — vendido a peso (kg / libras), con varios formatos de envase opcionales.",
          "Artículo multi-especificación — varios SKU bajo el mismo artículo padre (talla, color, aroma, etc.).",
        ],
      },
      {
        type: "h2",
        id: "price-tiers",
        text: "Niveles de precios y tarifas por cliente",
      },
      {
        type: "p",
        text: "Un nivel de precio es un grupo de clientes que deben ver el mismo precio. Puedes asignar cada cliente a uno o varios niveles (por ejemplo VIP, mayorista, reventa). El portal de pedidos muestra automáticamente la tarifa correspondiente al cliente que ha iniciado sesión.",
      },
      { type: "h2", id: "order-lifecycle", text: "Ciclo de vida del pedido" },
      {
        type: "p",
        text: "Cada pedido pasa por un conjunto finito de estados que el equipo va avanzando:",
      },
      {
        type: "ol",
        items: [
          "Borrador — el cliente todavía está editando el pedido en el portal.",
          "Enviado — el cliente ha enviado el pedido y espera confirmación.",
          "Confirmado — tu equipo lo ha aceptado y el inventario está reservado.",
          "Cancelado — estado terminal; el pedido deja de ser válido.",
        ],
      },
      { type: "h2", id: "inventory-units", text: "Unidades de inventario" },
      {
        type: "p",
        text: "Cada artículo puede definir una unidad básica de inventario — kg para frescos, cajas para bebidas, piezas para ferretería. El sistema convierte automáticamente las unidades de venta en unidades de inventario según las conversiones configuradas en el artículo.",
      },
      { type: "h2", id: "users-and-roles", text: "Usuarios y roles" },
      {
        type: "p",
        text: "Los miembros del espacio se distribuyen en los siguientes roles:",
      },
      {
        type: "table",
        headers: ["Rol", "Responsabilidad"],
        rows: [
          [
            "Propietario",
            "Gestiona facturación, usuarios y todos los ajustes del sistema.",
          ],
          [
            "Administrador",
            "Gestiona catálogo, pedidos, inventario y compras.",
          ],
          ["Operador", "Se ocupa del procesamiento diario de pedidos."],
        ],
      },
    ],
    toc: [
      { id: "tenant", text: "Espacio (tenant)", level: 2 },
      { id: "product-kinds", text: "Tipos de artículo", level: 2 },
      {
        id: "price-tiers",
        text: "Niveles de precios y tarifas por cliente",
        level: 2,
      },
      { id: "order-lifecycle", text: "Ciclo de vida del pedido", level: 2 },
      { id: "inventory-units", text: "Unidades de inventario", level: 2 },
      { id: "users-and-roles", text: "Usuarios y roles", level: 2 },
    ],
    prev: { href: "/docs/get-started/quickstart", title: "Inicio rápido" },
    next: {
      href: "/docs/ordering-portal/setup",
      title: "Configurar el portal de pedidos",
    },
  },

  // ----- Ordering portal -----
  {
    locale: "es-ES",
    slug: "setup",
    category: "ordering-portal",
    href: "/docs/ordering-portal/setup",
    title: "Configurar el portal de pedidos",
    description:
      "Configura el portal de pedidos mayorista — datos del comercio, escaparate privado, escaparate público, mensajes de checkout y personalizaciones por cliente.",
    keywords: [
      "configuración portal de pedidos",
      "tienda mayorista",
      "ajustes del escaparate",
    ],
    readingTime: "Lectura de 6 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "El portal de pedidos es la tienda que usan realmente los clientes. Toda la configuración del lado del comercio se agrupa en el panel de Ajustes, repartida en 12 secciones que cubren tienda, artículos, pagos y equipo. Esta guía se centra en las secciones más habituales al poner en marcha una nueva tienda.",
      },
      { type: "h2", id: "merchant", text: "Datos del comercio" },
      {
        type: "p",
        text: "Ajustes → Comercio permite definir el nombre del comercio, teléfono, moneda predeterminada, idioma, zona horaria y formato de fecha. Estos campos aparecen en cada pedido, factura y página orientada al cliente. Tras guardar, puede que se solicite volver a iniciar sesión para que el nuevo idioma surta efecto.",
      },
      {
        type: "h2",
        id: "showroom",
        text: "Escaparate mayorista (núcleo del portal de pedidos)",
      },
      {
        type: "p",
        text: "Ajustes → Escaparate mayorista es el panel de control de todo lo que ven los clientes autenticados, organizado en 5 pestañas en este orden:",
      },
      {
        type: "ol",
        items: [
          "Ajustes de activación — un interruptor general para activar o desactivar el portal B2B a nivel de espacio. Si está desactivado, los clientes solo verán el escaparate público.",
          "Cuentas de cliente — lista todos los clientes y sus personalizaciones de escaparate privado. Cada cliente puede heredar los valores predeterminados del comercio o tener su propio banner, tema y restricciones de artículos.",
          "Escaparate público — lo que ven los visitantes no autenticados: texto de invitación a registrarse, nivel de precio de venta, nivel de precio original (tachado).",
          "Escaparate privado — toda la configuración visual y de comportamiento para clientes autenticados.",
          "Ajustes de checkout — correo de recordatorio del carrito, textos del checkout, textos tras finalizar el pedido.",
        ],
      },
      { type: "h3", id: "public", text: "Escaparate público" },
      {
        type: "p",
        text: "Elige para los visitantes no autenticados el nivel de precio que verán (nivel de precio de venta) y el nivel que se mostrará como precio tachado de referencia (nivel de precio original). El texto de invitación a registrarse es una breve frase que suele animar al visitante a registrarse y desbloquear los precios mayoristas.",
      },
      { type: "h3", id: "private", text: "Escaparate privado" },
      {
        type: "p",
        text: "Esta configuración define la experiencia de navegación de cada cliente autenticado. La pestaña Escaparate privado se divide en 5 grupos:",
      },
      {
        type: "ul",
        items: [
          "Banner — banner móvil (16:9) y banner web (carga independiente). Recomendado 1920×1080 px, JPG/PNG/WebP, ≤ 5 MB. Las dos imágenes se suben o eliminan por separado.",
          "Ajustes de visualización — si ocultar los artículos sin stock; modo de visualización de inventario con tres opciones: ocultar inventario / mostrar solo disponible-agotado / mostrar números + estado.",
          "Visualización del artículo — interruptores independientes para mostrar imagen, categoría, descripción y notas del artículo.",
          "Información de contacto — correo de contacto, teléfono y un texto libre de contacto que se muestra a los clientes.",
          "Alcance visible — elige los artículos y almacenes (Location) a los que el cliente puede acceder. Una lista vacía significa sin restricción.",
        ],
      },
      { type: "mockup", variant: "showroom-private" },
      {
        type: "callout",
        variant: "info",
        title: "Regímenes de impuestos y descuentos",
        text: "Los regímenes de impuestos (impuesto principal + impuesto secundario opcional) y los descuentos (porcentaje o importe fijo) también se configuran aquí y participan automáticamente en el cálculo del carrito y del checkout.",
      },
      { type: "h3", id: "checkout", text: "Textos del checkout" },
      {
        type: "p",
        text: "Tres textos breves controlan la experiencia antes y después del checkout: recordatorio del carrito (correo automático por defecto a 1 hora), texto del checkout (mostrado en carrito/checkout) y texto tras finalizar el pedido (tras enviarlo). Los tres admiten texto sin formato.",
      },
      {
        type: "h2",
        id: "payment",
        text: "Métodos de pago y regímenes de impuestos",
      },
      {
        type: "p",
        text: "Ajustes → Métodos de pago activa las opciones de pago disponibles en el checkout (transferencia bancaria, pago contra reembolso, plazo de crédito, etc.). Ajustes → Regímenes de impuestos define los regímenes referenciados por la tienda: para cada zona se pueden fijar el impuesto principal y un impuesto secundario opcional.",
      },
      { type: "h2", id: "open-storefront", text: "Abre tu tienda" },
      {
        type: "p",
        text: "Con el interruptor de activación encendido y al menos una cuenta de cliente activa, en la parte superior del panel Escaparate mayorista aparecerá la URL de acceso a la tienda. Haz clic en Visitar tienda para previsualizar exactamente lo que verá el cliente tras iniciar sesión; tras verificar, envía las invitaciones.",
      },
      {
        type: "h2",
        id: "showroom-preview",
        text: "Vista previa de la tienda del comprador",
      },
      {
        type: "p",
        text: 'Lo que sigue es la tienda que el cliente ve tras iniciar sesión: misma cabecera, banner y cuadrícula de artículos de tu marca, idéntica a la que usará desde el móvil o el ordenador. Antes de enviar el enlace al comprador, utiliza esta vista previa para comprobar la visibilidad del catálogo, el orden y la interacción inline de "Añadir al carrito".',
      },
      { type: "mockup", variant: "showroom" },
    ],
    toc: [
      { id: "merchant", text: "Datos del comercio", level: 2 },
      {
        id: "showroom",
        text: "Escaparate mayorista (núcleo del portal de pedidos)",
        level: 2,
      },
      { id: "public", text: "Escaparate público", level: 3 },
      { id: "private", text: "Escaparate privado", level: 3 },
      { id: "checkout", text: "Textos del checkout", level: 3 },
      {
        id: "payment",
        text: "Métodos de pago y regímenes de impuestos",
        level: 2,
      },
      { id: "open-storefront", text: "Abre tu tienda", level: 2 },
      {
        id: "showroom-preview",
        text: "Vista previa de la tienda del comprador",
        level: 2,
      },
    ],
    prev: { href: "/docs/get-started/concepts", title: "Conceptos clave" },
    next: {
      href: "/docs/ordering-portal/catalog",
      title: "Construir el catálogo de artículos",
    },
  },
  {
    locale: "es-ES",
    slug: "catalog",
    category: "ordering-portal",
    href: "/docs/ordering-portal/catalog",
    title: "Construir el catálogo de artículos",
    description:
      "Crea artículos a peso, por grado y multi-especificación, organízalos por categorías y etiquetas, y gestiona imágenes y textos multilenguaje.",
    keywords: [
      "catálogo de artículos",
      "catálogo mayorista",
      "artículo a peso",
    ],
    readingTime: "Lectura de 8 min",
    lastUpdated: "2026-07-07",
    blocks: [
      {
        type: "p",
        text: "El catálogo de artículos es la base del portal de pedidos. El modelo de artículo de Wholesalify está pensado para los tres escenarios reales del mayor: productos agrícolas vendidos a peso, fruta vendida por grado y SKU con múltiples especificaciones.",
      },
      { type: "h2", id: "create-product", text: "Crear un artículo" },
      {
        type: "p",
        text: "Entra en Catálogo → Artículos → Nuevo artículo, elige primero el tipo de artículo y luego configura. Hay 4 tipos disponibles: artículo estándar, artículo a peso, artículo sin inventario, artículo de servicio.",
      },
      { type: "mockup", variant: "product-list" },
      { type: "h3", id: "standard", text: "Artículo estándar" },
      {
        type: "p",
        text: "Artículo estándar vendido en unidades discretas (pieza / caja / palé). Define SKU, unidad de inventario y precio unitario de venta; si necesitas varios formatos de venta, cambia a la pestaña Unidades de venta para añadirlos; cada fila mantiene su propio precio, opción de impuestos y 5 niveles de precios.",
      },
      { type: "mockup", variant: "product-standard" },
      { type: "h3", id: "weighed", text: "Artículo a peso" },
      {
        type: "p",
        text: "El artículo a peso no tiene SKU fijo: el cliente puede introducir cualquier cantidad decimal en el portal de pedidos. Define la unidad base (kg / lb) y el precio de venta por unidad base; el sistema redondeará automáticamente a la precisión configurada.",
      },
      { type: "mockup", variant: "product-weighed" },
      { type: "h3", id: "multi-spec", text: "Artículo multi-especificación" },
      {
        type: "p",
        text: 'Activando el interruptor "Modo multi-especificación" sobre un artículo estándar puedes definir varias especificaciones (por ejemplo Talla × Aroma); el sistema genera automáticamente la matriz de SKU como producto cartesiano. Crea primero los nombres y valores de especificación en Catálogo → Atributos.',
      },
      { type: "mockup", variant: "product-multi-spec" },
      { type: "h3", id: "multi-grade", text: "Artículo multi-grado" },
      {
        type: "p",
        text: 'Para los artículos a peso, cada SKU puede mantener una pestaña adicional Grados del artículo: añade varias filas de grado para el mismo artículo (por ejemplo "Extra / Primera / Segunda"), cada una con nombre de grado, precio de venta, opción de impuestos y 5 niveles de precios. El cliente debe elegir un grado antes de hacer el pedido, y el cálculo se realiza al precio del grado elegido. Se admiten hasta 10 grados.',
      },
      { type: "mockup", variant: "weighed-grades" },
      { type: "h2", id: "categories", text: "Categorías y etiquetas" },
      {
        type: "p",
        text: "Las categorías controlan el orden de aparición en la barra lateral del portal y el recorrido navegable por el cliente. Las etiquetas son texto libre, útiles para filtros y búsquedas.",
      },
      { type: "h2", id: "images", text: "Imágenes y textos multilenguaje" },
      {
        type: "p",
        text: "Cada artículo admite hasta 1 imagen; la primera se convierte en la imagen principal del escaparate. Si operas en varias regiones, puedes añadir nombre y descripción en distintos idiomas desde la página de edición del artículo; el sistema los aplicará automáticamente al idioma correspondiente.",
      },
    ],
    toc: [
      { id: "create-product", text: "Crear un artículo", level: 2 },
      { id: "standard", text: "Artículo estándar", level: 3 },
      { id: "weighed", text: "Artículo a peso", level: 3 },
      { id: "multi-spec", text: "Artículo multi-especificación", level: 3 },
      { id: "multi-grade", text: "Artículo multi-grado", level: 3 },
      { id: "categories", text: "Categorías de artículo", level: 2 },
      { id: "images", text: "Imágenes", level: 2 },
    ],
    prev: {
      href: "/docs/ordering-portal/setup",
      title: "Configurar el portal de pedidos",
    },
    next: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveles de precios y tarifas por cliente",
    },
  },
  {
    locale: "es-ES",
    slug: "pricing",
    category: "ordering-portal",
    href: "/docs/ordering-portal/pricing",
    title: "Niveles de precios y tarifas por cliente",
    description:
      "Configura 5 niveles de precio por SKU, mantén varias filas de grado en los artículos a peso y asigna el nivel de precio en la ficha del cliente.",
    keywords: [
      "niveles de precios",
      "tarificación mayorista",
      "grado de fruta",
      "nivel de cliente",
    ],
    readingTime: "Lectura de 6 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: 'La tarificación en Wholesalify gira en torno a dos conceptos: los "Niveles de precio" del lado del artículo (el mismo artículo muestra 5 precios distintos a clientes diferentes) y el campo "Nivel de precio" en la ficha del cliente (decide cuál de los 5 verá ese cliente tras iniciar sesión). Ambos lados se corresponden 1-a-1 con los niveles 1~5 y se configuran en dos lugares: Gestión de artículos → SKU y Gestión de clientes → Editar cliente.',
      },
      {
        type: "h2",
        id: "sku-price-levels",
        text: "Niveles de precio para todos los tipos de artículo",
      },
      {
        type: "p",
        text: 'En la pestaña Información básica de cualquier SKU encontrarás la casilla Precio de venta con un icono de cursor a la derecha. Al pulsarlo se abre la ventana Niveles de precio, donde puedes rellenar hasta 5 niveles (Nivel 1 ~ 5) y activar de forma independiente la opción "IVA incluido" para cada uno.',
      },
      {
        type: "ul",
        items: [
          "Los 5 niveles corresponden a los 5 niveles de precio del cliente (definidos en la ficha de cliente, ver más abajo).",
          "El pequeño círculo en la esquina superior derecha del icono indica que se ha definido al menos un nivel (>0); es solo un indicador de estado.",
          "Una SKU solo mantiene un único conjunto de 5 precios; el importe final depende también de la unidad base / unidad de venta, el tipo impositivo y la moneda.",
        ],
      },
      { type: "mockup", variant: "tier-price" },
      {
        type: "h2",
        id: "weighed-grades",
        text: "Configuración de grados en artículos a peso",
      },
      {
        type: "p",
        text: 'Para un artículo de tipo "a peso", en la página de edición de la SKU aparece una pestaña adicional Grados del artículo. Aquí puedes mantener varias filas de grado para la misma SKU (por ejemplo "Extra / Primera / Segunda"), cada una con: nombre de grado, precio de venta (fijo a la unidad base, ej. /kg), opción de IVA y el icono de cursor a la derecha del precio, que abre también la ventana de los 5 niveles de precio para configurar precios e IVA específicos del grado.',
      },
      {
        type: "ul",
        items: [
          "Puedes añadir hasta 10 filas de grado; al eliminar hasta la última siempre queda una fila vacía, sin eliminar el bloque entero.",
          'El sufijo del precio de venta es fijo en "/{unidad base}" (ej. /kg), coherente con la venta a peso.',
          "El cliente debe elegir un grado antes de hacer el pedido; el sistema calcula el importe a cobrar al precio del grado seleccionado.",
        ],
      },
      { type: "mockup", variant: "weighed-grades" },
      {
        type: "h2",
        id: "sale-unit-tiers",
        text: "Niveles de precio para múltiples unidades de venta",
      },
      {
        type: "p",
        text: 'Los artículos que no son a peso pueden añadir varias unidades de venta en la pestaña Unidades de venta (por ejemplo "caja / pieza / set"). Cada fila de unidad de venta tiene también su propia casilla Precio de venta, cuyo icono de cursor abre la ventana de los 5 niveles de precio para mantener precios y opción de IVA específicos de esa unidad.',
      },
      { type: "mockup", variant: "order" },
      {
        type: "h2",
        id: "customer-price-level",
        text: "Nivel de precio del cliente",
      },
      {
        type: "p",
        text: 'En Gestión de clientes abre cualquier ficha de cliente: en el área de datos básicos encontrarás un desplegable Nivel de precio con cinco opciones (Nivel 1 ~ 5). El campo determina qué nivel de precio de venta verá el cliente tras iniciar sesión: por ejemplo, si el cliente está asignado a "Nivel 3", todos los artículos del portal mostrarán el precio del "Nivel 3" de esa SKU.',
      },
      { type: "mockup", variant: "customer-price-level" },
      {
        type: "callout",
        variant: "info",
        title: "Correspondencia entre el lado artículo y el lado cliente",
        text: 'Lado artículo (5 niveles de precio) y lado cliente (niveles 1~5) se corresponden 1-a-1: el nivel N en la ficha del cliente muestra automáticamente el precio del "Nivel N" de ese artículo; si ese nivel no está cumplimentado, se mostrará el precio de venta de fallback (salePrice).',
      },
    ],
    toc: [
      {
        id: "sku-price-levels",
        text: "Niveles de precio para todos los tipos de artículo",
        level: 2,
      },
      {
        id: "weighed-grades",
        text: "Configuración de grados en artículos a peso",
        level: 2,
      },
      {
        id: "sale-unit-tiers",
        text: "Niveles de precio para múltiples unidades de venta",
        level: 2,
      },
      {
        id: "customer-price-level",
        text: "Nivel de precio del cliente",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/catalog",
      title: "Construir el catálogo de artículos",
    },
    next: { href: "/docs/orders/dashboard", title: "Mesa de pedidos" },
  },

  // ----- Orders -----
  {
    locale: "es-ES",
    slug: "dashboard",
    category: "orders",
    href: "/docs/orders/dashboard",
    title: "Mesa de pedidos",
    description:
      "Conoce la lista de ventas — los cinco estados reales del documento, los filtros disponibles, las columnas de la tabla y las acciones disponibles en la ficha del pedido.",
    keywords: [
      "mesa de pedidos",
      "pedidos mayoristas",
      "gestión de pedidos B2B",
    ],
    readingTime: "Lectura de 4 min",
    lastUpdated: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "La lista de documentos de venta es el punto de entrada diario del equipo operativo para revisar y modificar pedidos. Esta página repasa los controles, las columnas y las acciones disponibles en la ficha de cada pedido.",
      },
      { type: "mockup", variant: "order" },
      { type: "h2", id: "filters", text: "Filtros" },
      {
        type: "ul",
        items: [
          "Búsqueda por palabra clave — número de pedido, nombre del cliente, pedido del cliente o cualquier texto del pedido.",
          "Estado — desplegable único: todos / borrador / confirmado / cancelado / reabierto / confirmación anulada.",
          "Rango de fechas — tres accesos rápidos: hoy / últimos 7 días / últimos 30 días, o un intervalo personalizado en el calendario.",
          "Almacén — filtro multi-almacén; vacío significa sin restricción.",
          "Estado de pago — multi-selección: no pagado / parcialmente pagado / pagado / pago en exceso.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Restablecer filtros",
        text: "El icono de reset a la derecha de la fila de filtros restaura todos los valores predeterminados (últimos 30 días, todos los estados, todos los almacenes, todos los estados de pago).",
      },
      { type: "h2", id: "table-columns", text: "Columnas de la tabla" },
      {
        type: "p",
        text: "Cada fila de la lista muestra las siguientes 12 columnas:",
      },
      {
        type: "ol",
        items: [
          "# — número de fila (page × size + n).",
          "Número de pedido — enlace clicable que abre la ficha en una pestaña nueva.",
          "Cliente — nombre del comprador.",
          "Fecha de operación — fecha operativa del pedido.",
          "Importe a cobrar — formateado en la moneda predeterminada del comercio.",
          "Almacén — almacén de salida.",
          'Estado de pago — derivado automáticamente de "recibido vs a cobrar".',
          'Estado — estado actual del pedido (ver "Estados del documento" abajo).',
          "Creado el / Creado por / Actualizado el / Actualizado por — campos de auditoría.",
        ],
      },
      { type: "h2", id: "statuses", text: "Estados del documento" },
      {
        type: "p",
        text: "Cada pedido se encuentra siempre en uno de los 5 estados siguientes. La insignia de estado es estática y no se puede pulsar para avanzar el pedido. Para cambiar de estado, abre la ficha del pedido y usa los botones de acción.",
      },
      {
        type: "table",
        headers: ["Estado", "Código", "Significado"],
        rows: [
          [
            "Borrador",
            "0",
            "Guardado como borrador, aún no enviado al cliente.",
          ],
          ["Confirmado", "1", "Enviado al cliente, listo para su preparación."],
          [
            "Cancelado",
            "2",
            "Anulado; se conserva solo para auditoría y no se puede operar más.",
          ],
          [
            "Reabierto",
            "3",
            "Un pedido cancelado anteriormente se ha reabierto para su modificación.",
          ],
          [
            "Confirmación anulada",
            "4",
            'Vuelve desde "Confirmado" a un estado modificable similar al borrador.',
          ],
        ],
      },
      { type: "h2", id: "actions", text: "Acciones del pedido" },
      {
        type: "p",
        text: "Haz clic en el número de pedido para abrir la ficha. En la parte superior se muestran los botones de acción correspondientes al estado actual; todas las acciones están controladas por permisos y el botón se oculta si no tienes derechos.",
      },
      {
        type: "ul",
        items: [
          "Guardar — guarda los cambios actuales en los estados Borrador / Reabierto / Confirmación anulada.",
          'Confirmar documento de venta — pasa el borrador a "Confirmado".',
          'Anular confirmación — devuelve "Confirmado" a "Confirmación anulada" (modificable y reconfirmable).',
          'Anular documento de venta — lleva un pedido "Confirmado" al estado "Cancelado".',
          'Reabrir — lleva un pedido "Cancelado" al estado "Reabierto" para su modificación.',
          "Eliminar — elimina el pedido de forma permanente. Solo disponible en los estados Borrador / Confirmación anulada / Reabierto.",
          'Devolución / Anular devolución — gestiona devoluciones (parciales) del cliente sobre las líneas de un pedido "Confirmado"; Anular devolución cancela una devolución realizada.',
        ],
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en inventario",
      },
      {
        type: "p",
        text: "Todos los movimientos de inventario pasan por un flujo único, siempre consultable en Movimientos de inventario por número de documento. La tabla muestra el efecto de las 4 acciones principales sobre el inventario:",
      },
      {
        type: "table",
        headers: [
          "Acción",
          "Cambio de estado",
          "Impacto en inventario",
          "Descripción",
        ],
        rows: [
          [
            "Confirmar documento de venta",
            "Borrador / Reabierto / Confirmación anulada → Confirmado",
            "Salida de inventario (−)",
            "Descuenta las cantidades de las líneas del almacén correspondiente; el coste se registra en el pedido.",
          ],
          [
            "Anular confirmación",
            "Confirmado → Confirmación anulada",
            "Reentrada de inventario (+)",
            'Devuelve toda la cantidad descontada con la última "Confirmar documento"; el coste del pedido se pone a cero.',
          ],
          [
            "Anular documento de venta",
            "Confirmado → Cancelado",
            "Reentrada de inventario (+)",
            'Devuelve toda la cantidad descontada con la última "Confirmar documento"; el pedido queda solo para auditoría.',
          ],
          [
            "Reabrir",
            "Cancelado → Reabierto",
            "Sin impacto",
            'El inventario ya se devolvió con "Anular documento"; Reabrir solo cambia el estado y permite volver a "Confirmar documento".',
          ],
          [
            "Devolución",
            "Confirmado (a nivel de línea)",
            "Reentrada parcial (+)",
            "Devolución parcial sobre una línea de un pedido Confirmado: crea una línea con cantidad negativa y reentra el inventario en esa cantidad.",
          ],
          [
            "Anular devolución",
            "Confirmado (a nivel de línea)",
            "Nueva salida (−)",
            "Anula una devolución: elimina la línea de cantidad negativa y vuelve a descontar la cantidad original.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title:
          '"Anular documento de venta" y "Anular confirmación" devuelven inventario',
        text: 'Las dos acciones tienen el mismo efecto sobre el inventario: revierten toda la cantidad descontada por la última "Confirmar documento". La diferencia está en el estado final: tras Anular documento el pedido queda en "Cancelado" (estado terminal, no se puede avanzar); tras Anular confirmación queda en "Confirmación anulada" (modificable y, si se vuelve a confirmar, descuenta de nuevo el inventario).',
      },
      {
        type: "callout",
        variant: "warning",
        title: "Sin acciones en lote",
        text: "La lista de documentos de venta no admite selección múltiple ni acciones en lote. Cada pedido debe gestionarse abriendo su ficha de forma individual.",
      },
    ],
    toc: [
      { id: "filters", text: "Filtros", level: 2 },
      { id: "table-columns", text: "Columnas de la tabla", level: 2 },
      { id: "statuses", text: "Estados del documento", level: 2 },
      { id: "actions", text: "Acciones del pedido", level: 2 },
      {
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en inventario",
        level: 2,
      },
    ],
    prev: {
      href: "/docs/ordering-portal/pricing",
      title: "Niveles de precios y tarifas por cliente",
    },
    next: { href: "/docs/inventory/stock", title: "Niveles de stock" },
  },

  // ----- Inventory -----
  {
    locale: "es-ES",
    slug: "stock",
    category: "inventory",
    href: "/docs/inventory/stock",
    title: "Niveles de stock",
    description:
      "Haz un seguimiento del stock por ubicación, almacén y variante de artículo, configura la unidad básica de inventario y las conversiones entre unidades.",
    keywords: ["gestión de inventario", "stock mayorista", "multi-almacén"],
    readingTime: "Lectura de 5 min",
    lastUpdated: "2026-07-03",
    blocks: [
      {
        type: "p",
        text: "El módulo de inventario de Wholesalify mantiene un stock en tiempo real para cada variante de artículo en cada almacén. La confirmación de los pedidos de compra ajusta automáticamente el inventario.",
      },
      { type: "mockup", variant: "inventory" },
      { type: "h2", id: "warehouses", text: "Almacenes" },
      {
        type: "p",
        text: "Puedes añadir tantos almacenes como necesites. Cada artículo tiene conteos independientes en cada almacén, lo que te permite enviar desde el almacén más cercano al cliente.",
      },
      {
        type: "h2",
        id: "stock-units",
        text: "Unidades de inventario y conversiones",
      },
      {
        type: "p",
        text: "Para productos frescos puedes fijar la unidad de inventario en kg. Añade formatos como caja de 5 kg o cesta de 10 kg con conversión automática: el cliente puede pedir en esos formatos sin que tengas que mantener las cantidades manualmente.",
      },
      {
        type: "h2",
        id: "stock-adjustments",
        text: "Ajustes manuales de stock",
      },
      {
        type: "p",
        text: "¿Has perdido algunas cajas por merma? Abre el artículo, elige Ajustar stock e introduce una cantidad positiva o negativa con el motivo. El ajuste queda registrado en el log de auditoría con el operario, la fecha y una imagen opcional.",
      },
    ],
    toc: [
      { id: "warehouses", text: "Almacenes", level: 2 },
      {
        id: "stock-units",
        text: "Unidades de inventario y conversiones",
        level: 2,
      },
      { id: "stock-adjustments", text: "Ajustes manuales de stock", level: 2 },
    ],
    prev: { href: "/docs/orders/dashboard", title: "Mesa de pedidos" },
    next: {
      href: "/docs/purchasing/purchase-orders",
      title: "Crear un pedido de compra",
    },
  },

  // ----- Purchasing -----
  {
    locale: "es-ES",
    slug: "purchase-orders",
    category: "purchasing",
    href: "/docs/purchasing/purchase-orders",
    title: "Crear un pedido de compra",
    description:
      "Envía pedidos de compra a tus proveedores, haz seguimiento de las recepciones en tránsito y registra las entradas de mercancía en una sola operación.",
    keywords: [
      "pedido de compra",
      "gestión de proveedores",
      "compras mayoristas",
    ],
    readingTime: "Lectura de 6 min",
    lastUpdated: "2026-07-02",
    blocks: [
      {
        type: "p",
        text: "El pedido de compra comunica al proveedor los artículos, plazos y precios de la entrega. Cuando la mercancía llega, basta con confirmar la recepción para actualizar inventario y ficha del proveedor en un solo paso.",
      },
      { type: "mockup", variant: "purchase" },
      { type: "h2", id: "supplier-first", text: "Paso 1 — Añade un proveedor" },
      {
        type: "p",
        text: "Entra en Compras → Proveedores → Nuevo proveedor y rellena los datos de contacto junto con los plazos de entrega habituales.",
      },
      { type: "h2", id: "build-po", text: "Paso 2 — Crea el pedido de compra" },
      {
        type: "p",
        text: "Haz clic en Nuevo pedido de compra, selecciona el proveedor y añade las líneas. El precio unitario parte por defecto del histórico del proveedor; cada línea puede sobrescribirse.",
      },
      { type: "h2", id: "receive", text: "Paso 3 — Registra la recepción" },
      {
        type: "p",
        text: "Cuando llegue la mercancía, haz clic en Confirmar en el pedido de compra. Introduce las cantidades efectivamente recibidas por línea y confirma; el inventario se actualizará automáticamente.",
      },
      {
        type: "h2",
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en inventario",
      },
      {
        type: "p",
        text: 'Los pedidos de compra comparten el flujo de inventario con los documentos de venta, pero con la dirección opuesta: la "Confirmación" de una compra es una entrada (+), mientras que la "Confirmación" de una venta es una salida (−). La tabla muestra el efecto de las 4 acciones principales sobre el inventario:',
      },
      {
        type: "table",
        headers: [
          "Acción",
          "Cambio de estado",
          "Impacto en inventario",
          "Descripción",
        ],
        rows: [
          [
            "Confirmar pedido de compra",
            "Borrador / Reabierto / Confirmación anulada → Confirmado",
            "Entrada (+)",
            "Entran las cantidades de las líneas al almacén correspondiente; el coste de compra se registra en el pedido.",
          ],
          [
            "Anular confirmación",
            "Confirmado → Confirmación anulada",
            "Salida (−)",
            'Sale toda la cantidad que entró con la última "Confirmar pedido"; el coste de compra se pone a cero.',
          ],
          [
            "Anular pedido de compra",
            "Confirmado → Cancelado",
            "Salida (−)",
            'Sale toda la cantidad que entró con la última "Confirmar pedido"; el pedido queda solo para auditoría.',
          ],
          [
            "Reabrir",
            "Cancelado → Reabierto",
            "Sin impacto",
            'El inventario ya salió con "Anular pedido"; Reabrir solo cambia el estado y permite volver a "Confirmar pedido".',
          ],
          [
            "Devolución",
            "Confirmado (a nivel de línea)",
            "Salida parcial (−)",
            "Devolución parcial al proveedor sobre una línea de un pedido Confirmado: crea una línea con cantidad negativa y descuenta el inventario en esa cantidad.",
          ],
          [
            "Anular devolución",
            "Confirmado (a nivel de línea)",
            "Nueva entrada (+)",
            "Anula una devolución: elimina la línea de cantidad negativa y vuelve a entrar la cantidad original.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: '"Confirmar pedido de compra" es una entrada, no una salida',
        text: 'La "Confirmación" de un pedido de compra indica que la mercancía ha llegado físicamente y se ha entrado al almacén, por lo que es +; es justo lo contrario de la "Confirmación" de una venta (−). Presta atención a la dirección: "Anular confirmación" no "devuelve" la mercancía al proveedor, sino que descuenta de nuevo lo que acababa de entrar.',
      },
      {
        type: "callout",
        variant: "info",
        title:
          '"Anular pedido de compra" y "Anular confirmación" descuentan inventario',
        text: 'Las dos acciones tienen el mismo efecto sobre el inventario: descuentan toda la cantidad que había entrado con la última "Confirmar pedido". La diferencia está en el estado final: tras Anular pedido el pedido queda en "Cancelado" (estado terminal, no se puede avanzar); tras Anular confirmación queda en "Confirmación anulada" (modificable y, si se vuelve a confirmar, entra de nuevo el inventario).',
      },
    ],
    toc: [
      { id: "supplier-first", text: "Paso 1 — Añade un proveedor", level: 2 },
      { id: "build-po", text: "Paso 2 — Crea el pedido de compra", level: 2 },
      { id: "receive", text: "Paso 3 — Registra la recepción", level: 2 },
      {
        id: "inventory-impact",
        text: "Transiciones de estado e impacto en inventario",
        level: 2,
      },
    ],
    prev: { href: "/docs/inventory/stock", title: "Niveles de stock" },
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
  // Documented locales: en, zh, vi, th, id, ms, ar, tr, es-MX, pt-BR, de, fr, pl, pt-PT. Other locales will fall back to English content.
  if (locale === "zh") return "zh";
  if (locale === "vi") return "vi";
  if (locale === "th") return "th";
  if (locale === "id") return "id";
  if (locale === "ms") return "ms";
  if (locale === "ar") return "ar";
  if (locale === "tr") return "tr";
  if (locale === "es-MX") return "es-MX";
  if (locale === "es-ES") return "es-ES";
  if (locale === "pt-BR") return "pt-BR";
  if (locale === "de") return "de";
  if (locale === "fr") return "fr";
  if (locale === "pl") return "pl";
  if (locale === "pt-PT") return "pt-PT";
  if (locale === "it") return "it";
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
