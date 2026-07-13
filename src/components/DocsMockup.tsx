// HTML/CSS "screenshots" of the Wholesalify admin dashboard.
// These are styled to feel like real product screenshots while remaining fully responsive
// and avoiding any external image assets.

const FRAME_SHELL =
  "rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white my-8";

const CHROME_BAR = (
  <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-gray-50 border-b border-gray-200">
    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
    <div className="ml-3 text-[11px] text-gray-500 font-mono">
      admin.wholesalify.com
    </div>
  </div>
);

const SIDEBAR_LINK = (active: boolean) =>
  `flex items-center gap-2 px-3 py-1.5 text-xs rounded-md ${
    active ? "bg-cta/10 text-cta font-semibold" : "text-gray-600"
  }`;

interface NavSpec {
  id: string;
  label: string;
  icon: string;
  children?: { id: string; label: string; icon: string }[];
}

const NAV_SPEC: NavSpec[] = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "product", label: "Products", icon: "▣" },
  {
    id: "purchase",
    label: "Purchase",
    icon: "▥",
    children: [
      { id: "purchase/orders", label: "Purchase Orders", icon: "▤" },
      { id: "purchase/vendors", label: "Vendors", icon: "▤" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    icon: "↗",
    children: [
      { id: "sales/orders", label: "Sales Orders", icon: "▤" },
      { id: "sales/customers", label: "Customers", icon: "▤" },
    ],
  },
  {
    id: "stock",
    label: "Stock",
    icon: "▢",
    children: [
      { id: "stock/query", label: "Stock Query", icon: "▤" },
      { id: "stock/adjustment", label: "Stock Adjustment", icon: "▤" },
      { id: "stock/transfer", label: "Stock Transfer", icon: "↔" },
      { id: "stock/count", label: "Stock Count", icon: "☷" },
    ],
  },
  { id: "reports", label: "Reports", icon: "◐" },
];

function NavItem({
  spec,
  active,
  expanded,
}: {
  spec: NavSpec;
  active: string;
  expanded: boolean;
}) {
  const isActive = active === spec.id;
  const hasChildren = !!spec.children?.length;
  const childActive =
    hasChildren && spec.children!.some((c) => c.id === active);
  return (
    <>
      <div
        className={`${SIDEBAR_LINK(isActive || childActive)} ${
          hasChildren && expanded ? "rounded-b-none" : ""
        }`}
      >
        <span className="w-3 h-3 inline-flex items-center justify-center">
          {spec.icon}
        </span>
        {spec.label}
      </div>
      {hasChildren && expanded && (
        <div className="ml-3 border-l border-gray-200 pl-1 space-y-0.5">
          {spec.children!.map((c) => (
            <div key={c.id} className={SIDEBAR_LINK(active === c.id)}>
              <span className="w-3 h-3 inline-flex items-center justify-center">
                {c.icon}
              </span>
              {c.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Nav({ active }: { active: string }) {
  // Determine which parents should be auto-expanded based on active child
  const expandedIds = new Set<string>();
  for (const spec of NAV_SPEC) {
    if (spec.children?.some((c) => c.id === active)) {
      expandedIds.add(spec.id);
    }
  }
  return (
    <div className="hidden sm:block w-48 shrink-0 bg-slate-50 border-r border-gray-200 py-3 px-2">
      <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-[11px] font-bold">
          W
        </div>
        <span className="text-xs font-semibold text-primary truncate">
          Sunny Fields Co.
        </span>
      </div>
      <div className="space-y-0.5 text-xs">
        {NAV_SPEC.map((spec) => (
          <NavItem
            key={spec.id}
            spec={spec}
            active={active}
            expanded={expandedIds.has(spec.id)}
          />
        ))}
      </div>
    </div>
  );
}

const TOP_BAR = (
  <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
    <div className="text-xs font-medium text-gray-700">Dashboard</div>
    <div className="flex items-center gap-2">
      <div className="hidden sm:block w-40 h-6 rounded-md bg-gray-100" />
      <div className="w-6 h-6 rounded-full bg-cta/10 text-cta flex items-center justify-center text-[10px] font-bold">
        A
      </div>
    </div>
  </div>
);

function Pill({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const colors: Record<string, string> = {
    blue: "bg-cta/10 text-cta",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-50 text-red-700",
    purple: "bg-violet-50 text-violet-700",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
        colors[color] ?? colors.gray
      }`}
    >
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-3 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dashboard mockup: home / KPI overview
// ---------------------------------------------------------------------------

function DashboardMockup({ active = "dashboard" }: { active?: string }) {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          {TOP_BAR}
          <div className="p-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Today", value: "184", delta: "+12%", color: "blue" },
              {
                label: "Revenue",
                value: "$24.1k",
                delta: "+8%",
                color: "green",
              },
              {
                label: "Low stock",
                value: "7",
                delta: "items",
                color: "amber",
              },
              {
                label: "Open POs",
                value: "5",
                delta: "awaiting",
                color: "purple",
              },
            ].map((kpi) => (
              <Card key={kpi.label}>
                <div className="text-[10px] uppercase tracking-wide text-gray-500">
                  {kpi.label}
                </div>
                <div className="mt-0.5 text-base font-bold text-primary">
                  {kpi.value}
                </div>
                <div className="mt-0.5 text-[10px] text-gray-500">
                  {kpi.delta}
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 pt-0">
            <Card>
              <div className="text-xs font-semibold text-primary mb-3">
                Orders this week
              </div>
              <div className="flex items-end gap-1 h-24">
                {[40, 60, 35, 80, 95, 70, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-full rounded-t bg-cta/80"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-gray-500">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-primary mb-3">
                Low stock alerts
              </div>
              <ul className="space-y-1.5">
                {[
                  ["Apples — Grade A", "12 kg left"],
                  ["Tomato — Loose", "8 kg left"],
                  ["Soap 100 g — Lavender", "24 pcs left"],
                ].map(([name, left]) => (
                  <li
                    key={name}
                    className="flex items-center justify-between text-[11px]"
                  >
                    <span className="text-gray-700">{name}</span>
                    <Pill color="amber">{left}</Pill>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="p-4 pt-0">
            <Card>
              <div className="text-xs font-semibold text-primary mb-3">
                Recent orders
              </div>
              <table className="w-full text-[11px]">
                <thead className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <th className="text-left font-medium py-1.5">Order</th>
                    <th className="text-left font-medium py-1.5">Customer</th>
                    <th className="text-left font-medium py-1.5">Total</th>
                    <th className="text-left font-medium py-1.5">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ["#1042", "Sunny Mart", "$1,840", "green", "Draft"],
                    ["#1041", "Farm Direct Co.", "$2,950", "blue", "Confirmed"],
                    ["#1040", "Green Grocer", "$480", "amber", "Confirmed"],
                    [
                      "#1039",
                      "Ocean Seafood",
                      "$3,210",
                      "green",
                      "Unconfirmed",
                    ],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-gray-50 last:border-b-0"
                    >
                      <td className="py-1.5 font-mono">{row[0]}</td>
                      <td className="py-1.5">{row[1]}</td>
                      <td className="py-1.5">{row[2]}</td>
                      <td className="py-1.5">
                        <Pill color={row[3]}>{row[4]}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Order mockup: order dashboard (list page + state-keyed action panel)
// Matches the actual /sales/orders list and the [id] detail header actions.
// ---------------------------------------------------------------------------

function OrderMockup({ active = "sales/orders" }: { active?: string }) {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          {/* Header — matches site-header (page title left, action button right) */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Sales orders
            </div>
            <div className="px-2.5 h-7 rounded-md bg-cta text-white text-[10px] font-medium flex items-center gap-1">
              <span>+</span>
              <span>New order</span>
            </div>
          </div>

          {/* Filter row — matches sale-order list page */}
          <div className="px-4 pt-4 flex flex-wrap items-center gap-2">
            <div className="w-48 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[10px] text-gray-500">
              Search order no…
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[140px] justify-between">
              <span>All statuses</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[200px] justify-between">
              <span>📅 2026-07-06 — 2026-07-12</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[120px] justify-between">
              <span>Customer…</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[120px] justify-between">
              <span>Location…</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[140px] justify-between">
              <span>Payment status</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-500">
              ↻
            </div>
          </div>

          {/* Table — 12 columns, scrollable */}
          <div className="p-4">
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-[28px_1.1fr_1.1fr_0.9fr_0.9fr_0.8fr_0.9fr_0.8fr_1fr_0.7fr_1fr_0.7fr] text-[9.5px] uppercase tracking-wide text-gray-500 bg-gray-50 border-b border-gray-100">
                <div className="px-2 py-2 text-center">#</div>
                <div className="px-2 py-2">Order No</div>
                <div className="px-2 py-2">Customer</div>
                <div className="px-2 py-2">Biz Date</div>
                <div className="px-2 py-2 text-right">Payable</div>
                <div className="px-2 py-2">Location</div>
                <div className="px-2 py-2">Payment</div>
                <div className="px-2 py-2">Status</div>
                <div className="px-2 py-2">Created</div>
                <div className="px-2 py-2">By</div>
                <div className="px-2 py-2">Updated</div>
                <div className="px-2 py-2">By</div>
              </div>
              {[
                {
                  no: "SO-1042",
                  customer: "Sunny Mart",
                  date: "2026-07-12",
                  payable: "$1,840.00",
                  loc: "Main DC",
                  pay: "amber",
                  payL: "Unpaid",
                  st: "gray",
                  stL: "Draft",
                  cAt: "07-12 14:02",
                  cBy: "Alex",
                  uAt: "07-12 14:02",
                  uBy: "Alex",
                },
                {
                  no: "SO-1041",
                  customer: "Farm Direct Co.",
                  date: "2026-07-12",
                  payable: "$2,950.00",
                  loc: "Main DC",
                  pay: "green",
                  payL: "Paid",
                  st: "blue",
                  stL: "Confirmed",
                  cAt: "07-12 11:48",
                  cBy: "Alex",
                  uAt: "07-12 13:55",
                  uBy: "Sarah",
                },
                {
                  no: "SO-1040",
                  customer: "Green Grocer",
                  date: "2026-07-12",
                  payable: "$480.00",
                  loc: "Annex WH",
                  pay: "amber",
                  payL: "Partial",
                  st: "blue",
                  stL: "Confirmed",
                  cAt: "07-12 10:11",
                  cBy: "Maria",
                  uAt: "07-12 10:11",
                  uBy: "Maria",
                },
                {
                  no: "SO-1039",
                  customer: "Ocean Seafood",
                  date: "2026-07-11",
                  payable: "$3,210.00",
                  loc: "Main DC",
                  pay: "amber",
                  payL: "Partial",
                  st: "amber",
                  stL: "Reopened",
                  cAt: "07-11 09:18",
                  cBy: "Alex",
                  uAt: "07-12 08:20",
                  uBy: "Sarah",
                },
                {
                  no: "SO-1038",
                  customer: "Sunrise Bakery",
                  date: "2026-07-10",
                  payable: "$1,250.00",
                  loc: "Annex WH",
                  pay: "red",
                  payL: "Unpaid",
                  st: "red",
                  stL: "Cancelled",
                  cAt: "07-10 16:31",
                  cBy: "Maria",
                  uAt: "07-11 09:02",
                  uBy: "Alex",
                },
                {
                  no: "SO-1037",
                  customer: "Green Grocer",
                  date: "2026-07-09",
                  payable: "$960.00",
                  loc: "Main DC",
                  pay: "amber",
                  payL: "Partial",
                  st: "purple",
                  stL: "Unconfirmed",
                  cAt: "07-09 13:00",
                  cBy: "Alex",
                  uAt: "07-10 11:00",
                  uBy: "Alex",
                },
              ].map((r, i) => (
                <div
                  key={r.no}
                  className={`grid grid-cols-[28px_1.1fr_1.1fr_0.9fr_0.9fr_0.8fr_0.9fr_0.8fr_1fr_0.7fr_1fr_0.7fr] items-center text-[10px] py-1.5 border-b border-gray-50 last:border-b-0 ${
                    i === 1 ? "bg-cta/5" : ""
                  }`}
                >
                  <div className="px-2 text-center text-gray-500">{i + 1}</div>
                  <div className="px-2 font-mono text-primary">{r.no}</div>
                  <div className="px-2 text-gray-700 truncate">
                    {r.customer}
                  </div>
                  <div className="px-2 text-gray-500">{r.date}</div>
                  <div className="px-2 text-right font-mono text-gray-800">
                    {r.payable}
                  </div>
                  <div className="px-2 text-gray-500 truncate">{r.loc}</div>
                  <div className="px-2">
                    <Pill color={r.pay}>{r.payL}</Pill>
                  </div>
                  <div className="px-2">
                    <Pill color={r.st}>{r.stL}</Pill>
                  </div>
                  <div className="px-2 text-gray-500">{r.cAt}</div>
                  <div className="px-2 text-gray-700 truncate">{r.cBy}</div>
                  <div className="px-2 text-gray-500">{r.uAt}</div>
                  <div className="px-2 text-gray-700 truncate">{r.uBy}</div>
                </div>
              ))}
            </Card>
            <div className="mt-3 flex items-center justify-between text-[10px] text-gray-500">
              <div>6 total · Page 1 / 1</div>
              <div className="flex items-center gap-1">
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ‹
                </div>
                <div className="px-2 h-6 rounded border border-cta/40 bg-cta/10 text-cta flex items-center">
                  1
                </div>
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ›
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inventory mockup
// ---------------------------------------------------------------------------

function InventoryMockup({ active = "stock/query" }: { active?: string }) {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">Inventory</div>
            <div className="text-[11px] text-gray-500">Warehouse: Main DC</div>
          </div>
          <div className="p-4">
            <Card>
              <div className="grid grid-cols-12 text-[10px] uppercase tracking-wide text-gray-500 border-b border-gray-100 pb-2">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-right">Quantity</div>
                <div className="col-span-2 text-right">Unit</div>
                <div className="col-span-3 text-right">Stock Amount</div>
              </div>
              {[
                ["Apples — Grade A", 124, "kg", 50],
                ["Apples — Grade B", 22, "kg", 50, 50],
                ["Tomato — Loose", 30, "kg", 50],
                ["Soap 100 g — Lavender", 240, "pcs", 100, 50],
                ["Soap 100 g — Rose", 60, 100, "pcs", 50],
                ["Oranges — Premium", 75, "kg", 40, 50],
              ].map(([name, qty, unit, costAmount]) => (
                <div
                  key={name as string}
                  className="grid grid-cols-12 items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0"
                >
                  <div className="col-span-5 text-gray-800">
                    <div className="font-medium">{name}</div>
                  </div>
                  <div className="col-span-2 text-right font-mono text-primary">
                    {qty}
                  </div>
                  <div className="col-span-2 text-right font-mono text-gray-500">
                    {unit}
                  </div>
                  <div className="col-span-3 text-right">{costAmount}</div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Purchase order mockup
// ---------------------------------------------------------------------------

function PurchaseMockup({ active = "purchase/orders" }: { active?: string }) {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <div className="text-xs font-medium text-gray-700">
              Purchase orders
            </div>
            <div className="px-2.5 h-7 rounded-md bg-cta text-white text-[10px] font-medium flex items-center gap-1">
              <span>+</span>
              <span>New purchase order</span>
            </div>
          </div>

          {/* Filter row */}
          <div className="px-4 pt-4 flex flex-wrap items-center gap-2">
            <div className="w-48 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[10px] text-gray-500">
              Search order no…
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[120px] justify-between">
              <span>All statuses</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[200px] justify-between">
              <span>📅 2026-07-06 — 2026-07-12</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[120px] justify-between">
              <span>Vendor…</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="w-36 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center justify-between text-[10px] text-gray-700">
              <span>In location…</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="w-36 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center justify-between text-[10px] text-gray-700">
              <span>Payment status…</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-500">
              ↻
            </div>
          </div>

          {/* Table */}
          <div className="p-4">
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-[40px_1.1fr_1.1fr_0.9fr_0.9fr_0.9fr_0.8fr_1fr_0.7fr_1fr_0.7fr] text-[10px] uppercase tracking-wide text-gray-500 bg-gray-50 border-b border-gray-100">
                <div className="px-2 py-2 text-center">#</div>
                <div className="px-2 py-2">Order No</div>
                <div className="px-2 py-2">Vendor</div>
                <div className="px-2 py-2">Business Date</div>
                <div className="px-2 py-2">In Location</div>
                <div className="px-2 py-2">Payment</div>
                <div className="px-2 py-2">Status</div>
                <div className="px-2 py-2">Created At</div>
                <div className="px-2 py-2">Created By</div>
                <div className="px-2 py-2">Updated At</div>
                <div className="px-2 py-2">By</div>
              </div>
              {[
                [
                  "PO-2026-087",
                  "Greenfields Farm",
                  "2026-07-10",
                  "Main DC",
                  "amber",
                  "Partial",
                  "blue",
                  "Confirmed",
                  "2026-07-10 14:02",
                  "Alex",
                  "2026-07-11 09:18",
                  "Sarah",
                ],
                [
                  "PO-2026-086",
                  "Pacific Trading",
                  "2026-07-09",
                  "Main DC",
                  "red",
                  "Unpaid",
                  "gray",
                  "Draft",
                  "2026-07-09 11:48",
                  "Maria",
                  "—",
                  "—",
                ],
                [
                  "PO-2026-085",
                  "Greenfields Farm",
                  "2026-07-08",
                  "Annex WH",
                  "green",
                  "Paid",
                  "blue",
                  "Confirmed",
                  "2026-07-08 16:31",
                  "Alex",
                  "2026-07-09 10:02",
                  "Alex",
                ],
                [
                  "PO-2026-084",
                  "Sunrise Baker Co.",
                  "2026-07-06",
                  "Main DC",
                  "amber",
                  "Partial",
                  "amber",
                  "Reopened",
                  "2026-07-06 09:12",
                  "Sarah",
                  "2026-07-10 17:44",
                  "Sarah",
                ],
                [
                  "PO-2026-083",
                  "Pacific Trading",
                  "2026-07-04",
                  "Annex WH",
                  "purple",
                  "Overpaid",
                  "red",
                  "Canceled",
                  "2026-07-04 13:55",
                  "Maria",
                  "2026-07-05 08:20",
                  "Alex",
                ],
                [
                  "PO-2026-082",
                  "Greenfields Farm",
                  "2026-07-02",
                  "Main DC",
                  "amber",
                  "Partial",
                  "purple",
                  "Unconfirmed",
                  "2026-07-02 16:30",
                  "Sarah",
                  "2026-07-03 11:00",
                  "Sarah",
                ],
              ].map(
                (
                  [
                    no,
                    vendor,
                    bizDate,
                    loc,
                    payColor,
                    payLabel,
                    stColor,
                    stLabel,
                    cAt,
                    cBy,
                    uAt,
                    uBy,
                  ],
                  idx,
                ) => (
                  <div
                    key={no as string}
                    className="grid grid-cols-[40px_1.1fr_1.1fr_0.9fr_0.9fr_0.9fr_0.8fr_1fr_0.7fr_1fr_0.7fr] items-center text-[10px] py-1.5 border-b border-gray-50 last:border-b-0"
                  >
                    <div className="px-2 text-center text-gray-500">
                      {idx + 1}
                    </div>
                    <div className="px-2 font-mono text-primary">{no}</div>
                    <div className="px-2 text-gray-700 truncate">{vendor}</div>
                    <div className="px-2 text-gray-500">{bizDate}</div>
                    <div className="px-2 text-gray-500 truncate">{loc}</div>
                    <div className="px-2">
                      <Pill color={payColor as string}>
                        {payLabel as string}
                      </Pill>
                    </div>
                    <div className="px-2">
                      <Pill color={stColor as string}>{stLabel as string}</Pill>
                    </div>
                    <div className="px-2 text-gray-500">{cAt}</div>
                    <div className="px-2 text-gray-700 truncate">{cBy}</div>
                    <div className="px-2 text-gray-500">{uAt}</div>
                    <div className="px-2 text-gray-700 truncate">{uBy}</div>
                  </div>
                ),
              )}
            </Card>

            {/* Pagination */}
            <div className="mt-3 flex items-center justify-between text-[10px] text-gray-500">
              <div>6 total · Page 1 / 1</div>
              <div className="flex items-center gap-1">
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ‹
                </div>
                <div className="px-2 h-6 rounded border border-cta/40 bg-cta/10 text-cta flex items-center">
                  1
                </div>
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ›
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Customer / portal mockup (buyer-facing storefront)
// ---------------------------------------------------------------------------

function CustomerMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-[11px] font-bold">
              W
            </div>
            <span className="text-xs font-semibold text-primary">
              Sunny Mart — Ordering portal
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-gray-600">
            <span>Cart (3)</span>
            <div className="w-6 h-6 rounded-full bg-cta/10 text-cta flex items-center justify-center text-[10px] font-bold">
              S
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            ["Apples Grade A", "10 kg", "$48.00", "blue"],
            ["Tomato Loose", "5 kg", "$18.00", "blue"],
            ["Soap 100 g Lavender", "1 pc", "$3.50", "purple"],
            ["Oranges Premium", "10 kg", "$35.00", "blue"],
            ["Soap 100 g Rose", "1 pc", "$3.50", "purple"],
            ["Avocado Hass", "5 kg", "$55.00", "blue"],
          ].map((row) => (
            <Card key={row[0]}>
              <div
                className={`h-16 rounded-md mb-2 bg-gradient-to-br from-cta/10 to-cta/30 flex items-center justify-center text-[10px] text-cta font-medium`}
              >
                Image
              </div>
              <div className="text-[11px] font-semibold text-primary">
                {row[0]}
              </div>
              <div className="text-[10px] text-gray-500">Pack: {row[1]}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-primary">{row[2]}</span>
                <button className="text-[10px] bg-cta text-white px-2 py-0.5 rounded">
                  Add
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Settings / tenants mockup
// ---------------------------------------------------------------------------

function SettingsMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <div className="hidden sm:block w-44 shrink-0 bg-slate-50 border-r border-gray-200 py-3 px-2">
          <div className="text-[10px] uppercase text-gray-500 px-2 mb-2">
            Settings
          </div>
          {[
            ["Store", false],
            ["Locations", false],
            ["Payments", false],
            ["Users & roles", true],
            ["Tax schemes", false],
            ["Showroom", false],
          ].map(([t, active]) => (
            <div
              key={t as string}
              className={`px-3 py-1.5 text-xs rounded-md ${
                active ? "bg-cta/10 text-cta font-semibold" : "text-gray-600"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0 p-4">
          <div className="text-sm font-semibold text-primary mb-3">
            Users & roles
          </div>
          <Card>
            <div className="space-y-2 text-[11px]">
              {[
                ["Alex Tan", "alex@wholesalify.com", "Owner", "blue"],
                ["Sarah Liu", "sarah@wholesalify.com", "Admin", "blue"],
                ["Maria", "maria@wholesalify.com", "Operator", "purple"],
              ].map(([name, email, role, color]) => (
                <div
                  key={email as string}
                  className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-cta/10 text-cta flex items-center justify-center text-[10px] font-bold">
                      {(name as string).charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium">{name}</div>
                      <div className="text-gray-500 text-[10px]">{email}</div>
                    </div>
                  </div>
                  <Pill color={color as string}>{role as string}</Pill>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Showroom Private mockup — Settings → Showroom → Private tab
// (matches /Users/.../wholesale-admin-web/src/components/settings/settings-showroom-private.tsx)
// ---------------------------------------------------------------------------

function ShowroomPrivateMockup() {
  const Switch = ({ on }: { on: boolean }) => (
    <span
      className={`w-7 h-4 rounded-full p-0.5 flex ${on ? "bg-cta justify-end" : "bg-gray-300 justify-start"}`}
    >
      <span className="w-3 h-3 rounded-full bg-white shadow" />
    </span>
  );
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        {/* Settings drawer */}
        <div className="hidden sm:block w-44 shrink-0 bg-slate-50 border-r border-gray-200 py-3 px-2">
          <div className="text-[10px] uppercase text-gray-500 px-2 mb-2">
            Settings
          </div>
          {[
            ["Store", false],
            ["Locations", false],
            ["Payments", false],
            ["Users & roles", false],
            ["Tax schemes", false],
            ["Showroom", true],
          ].map(([t, active]) => (
            <div
              key={t as string}
              className={`px-3 py-1.5 text-xs rounded-md ${
                active ? "bg-cta/10 text-cta font-semibold" : "text-gray-600"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0 p-4 space-y-4 bg-slate-50/40">
          {/* Enable card (top, always visible) */}
          <Card>
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-primary">
                Enable Private Showroom
              </div>
              <Switch on={true} />
            </div>
            {/* URL row shown when enabled */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-gray-500">Storefront URL</div>
                <div className="text-[11px] font-mono text-primary truncate">
                  https://sunnyfields.showroom.wholesalify.com/
                </div>
              </div>
              <div className="px-2.5 h-6 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1">
                <span>↗</span>
                <span>Open storefront</span>
              </div>
            </div>
          </Card>

          {/* Tabs row (3 tabs, Public hidden) */}
          <div className="flex items-center gap-1 border-b border-gray-200">
            <div className="px-3 py-1.5 text-[11px] text-gray-500">
              Customer Accounts
            </div>
            <div className="px-3 py-1.5 text-[11px] text-cta font-semibold border-b-2 border-cta -mb-px">
              Private
            </div>
            <div className="px-3 py-1.5 text-[11px] text-gray-500">
              Checkout
            </div>
          </div>

          {/* Private card */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold text-primary">
                Private Showroom
              </div>
              <div className="px-2.5 h-6 rounded-md bg-cta text-white text-[10px] font-medium flex items-center">
                Save
              </div>
            </div>

            <div className="space-y-4">
              {/* Mobile banner */}
              <div className="space-y-2">
                <div className="text-[11px] font-medium text-gray-700">
                  Mobile banner URL
                </div>
                <div className="relative size-32 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cta/30 to-cta/60 flex items-center justify-center text-[10px] text-white font-medium">
                    IMG
                  </div>
                  <span className="absolute top-1 right-1 size-5 bg-black/50 text-white rounded-full text-[11px] flex items-center justify-center">
                    ×
                  </span>
                </div>
                <div className="text-[10px] text-gray-500">
                  1920×1080 px (16:9) · ≤ 5 MB · JPG/PNG/WebP
                </div>
              </div>

              {/* Web banner */}
              <div className="space-y-2">
                <div className="text-[11px] font-medium text-gray-700">
                  Web banner URL
                </div>
                <div className="relative size-32 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/60 flex items-center justify-center text-[10px] text-white font-medium">
                    IMG
                  </div>
                  <span className="absolute top-1 right-1 size-5 bg-black/50 text-white rounded-full text-[11px] flex items-center justify-center">
                    ×
                  </span>
                </div>
                <div className="text-[10px] text-gray-500">
                  1800×300 px (6:1) · ≤ 5 MB · JPG/PNG/WebP
                </div>
              </div>

              {/* Display settings */}
              <div className="space-y-2">
                <div className="text-[11px] font-medium text-gray-700">
                  Display settings
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Switch on={true} />
                    <span className="text-gray-700">
                      Hide out-of-stock products
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 whitespace-nowrap">
                      Stock level mode
                    </span>
                    <span className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center min-w-[160px] justify-between">
                      <span>Show Stock Level</span>
                      <span className="text-gray-400">▾</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch on={true} />
                    <span className="text-gray-700">Show product image</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch on={true} />
                    <span className="text-gray-700">Show category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch on={true} />
                    <span className="text-gray-700">Show description</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch on={false} />
                    <span className="text-gray-700">Show remark</span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-[11px] font-medium text-gray-700">
                    Contact email
                  </div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[11px] text-gray-800">
                    hello@sunnyfields.com
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-medium text-gray-700">
                    Contact phone
                  </div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[11px] text-gray-800">
                    +1 415 555 0192
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-medium text-gray-700">
                  Contact message
                </div>
                <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[11px] text-gray-800">
                  Reach us Mon–Fri, 9 am–6 pm.
                </div>
              </div>

              {/* Select products */}
              <div className="space-y-2">
                <div className="px-2.5 h-7 rounded-md border border-gray-200 bg-white text-[11px] text-primary flex items-center gap-1 w-fit">
                  <span>+</span>
                  <span>Select products</span>
                </div>
                <div className="text-[10px] text-gray-500 py-1">
                  All products
                </div>
              </div>

              {/* Select locations */}
              <div className="space-y-2">
                <div className="px-2.5 h-7 rounded-md border border-gray-200 bg-white text-[11px] text-primary flex items-center gap-1 w-fit">
                  <span>+</span>
                  <span>Select locations</span>
                </div>
                <div className="text-[10px] text-gray-500 py-1">
                  All locations
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Showroom mockup — buyer-facing storefront (logged-in private showroom)
// (matches /Users/.../wholesale-showroom/src/app/[locale]/(app)/showroom/page.tsx)
// TopBar = components/layout/TopBar.tsx (logo / search / location / locale / cart / user)
// ShowroomGrid = 4-col desktop grid of ProductCard (image 4:3, title, price, stock, +/- cart)
// ---------------------------------------------------------------------------

function ShowroomMockup() {
  const products = [
    {
      title: "Premium Apples — Grade A",
      specs: "10kg case",
      price: "$48.00",
      unit: "/10kg",
      stockColor: "green",
      stockLabel: "In stock",
      qty: 0,
      imgFrom: "from-amber-100",
      imgTo: "to-amber-200",
    },
    {
      title: "Loose Tomato",
      specs: "Sold by kg",
      price: "$18.00",
      unit: "/kg",
      stockColor: "green",
      stockLabel: "In stock",
      qty: 2,
      imgFrom: "from-red-100",
      imgTo: "to-red-200",
    },
    {
      title: "Handmade Soap — 100g Lavender",
      specs: "100g · Lavender",
      price: "$3.50",
      unit: "/pc",
      stockColor: "amber",
      stockLabel: "Low stock",
      qty: 0,
      imgFrom: "from-violet-100",
      imgTo: "to-violet-200",
    },
    {
      title: "Hass Avocado",
      specs: "Sold by kg",
      price: "$11.00",
      unit: "/kg",
      stockColor: "red",
      stockLabel: "Out of stock",
      qty: 0,
      imgFrom: "from-emerald-100",
      imgTo: "to-emerald-200",
    },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      {/* TopBar (sticky) — 3-col grid: logo / search / right group */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto grid h-14 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4">
          {/* Left: tenant logo (links to /showroom/seller) */}
          <div className="text-base font-semibold tracking-tight text-slate-900">
            LSD32
          </div>
          {/* Center: search */}
          <div className="flex w-full max-w-md items-center gap-2 rounded-md border border-slate-200 bg-white px-2">
            <svg
              viewBox="0 0 24 24"
              className="size-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <div className="h-9 flex-1 text-sm text-slate-400 flex items-center">
              Search products…
            </div>
          </div>
          {/* Right: location + locale + cart + user */}
          <div className="flex items-center justify-end gap-1">
            <div className="mr-1 inline-flex h-9 w-40 items-center justify-between gap-1 rounded-md border border-slate-200 bg-white px-2 text-sm text-slate-700">
              <span className="truncate">Default Location</span>
              <span className="text-slate-400">▾</span>
            </div>
            <div className="inline-flex h-9 items-center gap-1 rounded-md px-2 text-sm text-slate-700">
              <span>EN</span>
              <span className="text-slate-400">▾</span>
            </div>
            <div className="relative inline-flex size-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="17" cy="20" r="1.5" />
                <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17H17a2 2 0 0 0 2-1.6L21 8H6" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-cta px-1 text-[9px] font-semibold text-white">
                2
              </span>
            </div>
            <div className="inline-flex size-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main content: banner + control bar + product grid */}
      <div className="bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6">
          {/* Banner (16:9) */}
          <div className="block w-full overflow-hidden rounded-lg">
            <div className="aspect-video w-full bg-gradient-to-br from-emerald-200 via-amber-100 to-rose-200 flex items-center justify-center text-xs font-medium text-slate-600">
              Mobile banner · 1920×1080
            </div>
          </div>

          {/* Control bar: flex-1 + Sort + Layout toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-0 flex-1" />
            <div className="inline-flex h-9 items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 text-sm text-slate-700">
              <span>Recommended</span>
              <span className="text-slate-400">▾</span>
            </div>
            <div className="inline-flex h-9 items-center gap-0.5 rounded-md border border-slate-200 bg-white p-0.5 text-sm">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded bg-slate-100 text-slate-900">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className="inline-flex h-7 w-7 items-center justify-center rounded text-slate-500">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </div>
            </div>
          </div>

          {/* Product grid (4 cols desktop) */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="group/card flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3"
              >
                {/* 4:3 image */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-md bg-gradient-to-br ${p.imgFrom} ${p.imgTo}`}
                >
                  <div className="flex size-full items-center justify-center text-[10px] text-slate-500">
                    IMG
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="line-clamp-2 text-sm font-medium text-slate-900">
                    {p.title}
                  </h3>
                  {p.specs && (
                    <p className="text-sm text-slate-600">{p.specs}</p>
                  )}
                  <div className="flex items-baseline gap-1 text-base font-semibold text-slate-900">
                    <span>{p.price}</span>
                    {p.unit && (
                      <span className="text-xs font-normal text-slate-500">
                        {p.unit}
                      </span>
                    )}
                  </div>
                  <Pill color={p.stockColor}>{p.stockLabel}</Pill>
                  {/* Inline cart control: - [qty] + */}
                  {p.qty > 0 ? (
                    <div className="mt-1 inline-flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-white text-sm">
                      <div className="flex h-full w-9 items-center justify-center text-slate-700 hover:bg-slate-50">
                        −
                      </div>
                      <div className="font-mono text-slate-900">{p.qty}</div>
                      <div className="flex h-full w-9 items-center justify-center rounded-r-md text-slate-700 hover:bg-slate-50">
                        +
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 inline-flex h-9 w-full items-center justify-center rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">
                      Add to cart
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product list mockup — Products catalog list page
// ---------------------------------------------------------------------------

function ProductListMockup({ active = "product" }: { active?: string }) {
  const products = [
    {
      name: "Apples — Grade A",
      sku: "SKU-001",
      mode: "Weighed",
      modeColor: "amber",
      price: "$48.00 /10kg",
      stock: "124 kg",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Tomato — Loose",
      sku: "SKU-002",
      mode: "Weighed",
      modeColor: "amber",
      price: "$18.00 /5kg",
      stock: "30 kg",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Soap 100 g — Lavender",
      sku: "SKU-003",
      mode: "Multi-spec",
      modeColor: "purple",
      price: "$3.50 /pc",
      stock: "240 pcs",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Oranges — Premium",
      sku: "SKU-004",
      mode: "Weighed",
      modeColor: "amber",
      price: "$35.00 /10kg",
      stock: "75 kg",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Avocado Hass",
      sku: "SKU-005",
      mode: "Standard",
      modeColor: "blue",
      price: "$55.00 /5kg",
      stock: "12 kg",
      status: "Low stock",
      statusColor: "amber",
    },
    {
      name: "Honey 500 g",
      sku: "SKU-006",
      mode: "Standard",
      modeColor: "blue",
      price: "$12.00 /pc",
      stock: "0 pc",
      status: "Out of stock",
      statusColor: "red",
    },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">Products</div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 h-7 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700">
                <span>≡</span>
                <span>Import</span>
              </div>
              <div className="px-2.5 h-7 rounded-md bg-cta text-white text-[10px] font-medium flex items-center gap-1">
                <span>+</span>
                <span>New product</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="px-4 pt-3 flex flex-wrap items-center gap-2">
            <div className="w-48 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-[10px] text-gray-500">
              Search product / SKU…
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[110px] justify-between">
              <span>All modes</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[110px] justify-between">
              <span>All categories</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[110px] justify-between">
              <span>All status</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="h-7 px-2 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1 min-w-[140px] justify-between">
              <span>All locations</span>
              <span className="text-gray-400">▾</span>
            </div>
            <div className="w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-500">
              ↻
            </div>
          </div>

          {/* Table */}
          <div className="p-4">
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-[2.4fr_1.1fr_1fr_1.2fr_0.9fr_0.9fr_0.6fr] text-[10px] uppercase tracking-wide text-gray-500 bg-gray-50 border-b border-gray-100">
                <div className="px-3 py-2">Product</div>
                <div className="px-3 py-2">SKU</div>
                <div className="px-3 py-2">Mode</div>
                <div className="px-3 py-2">Sale price</div>
                <div className="px-3 py-2 text-right">Stock</div>
                <div className="px-3 py-2">Status</div>
                <div className="px-3 py-2 text-center">···</div>
              </div>
              {products.map((p) => (
                <div
                  key={p.sku}
                  className="grid grid-cols-[2.4fr_1.1fr_1fr_1.2fr_0.9fr_0.9fr_0.6fr] items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60"
                >
                  <div className="px-3 flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cta/10 to-cta/30 flex items-center justify-center text-[9px] text-cta shrink-0">
                      IMG
                    </div>
                    <span className="text-gray-800 font-medium truncate">
                      {p.name}
                    </span>
                  </div>
                  <div className="px-3 font-mono text-gray-500">{p.sku}</div>
                  <div className="px-3">
                    <Pill color={p.modeColor}>{p.mode}</Pill>
                  </div>
                  <div className="px-3 font-mono text-primary">{p.price}</div>
                  <div className="px-3 text-right font-mono text-gray-700">
                    {p.stock}
                  </div>
                  <div className="px-3">
                    <Pill color={p.statusColor}>{p.status}</Pill>
                  </div>
                  <div className="px-3 text-center text-gray-400">···</div>
                </div>
              ))}
            </Card>

            {/* Pagination */}
            <div className="mt-3 flex items-center justify-between text-[10px] text-gray-500">
              <div>6 total · Page 1 / 1</div>
              <div className="flex items-center gap-1">
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ‹
                </div>
                <div className="px-2 h-6 rounded border border-cta/40 bg-cta/10 text-cta flex items-center">
                  1
                </div>
                <div className="px-2 h-6 rounded border border-gray-200 bg-white flex items-center">
                  ›
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product Standard mockup — 标准商品 SKU 编辑器（多销售单位 Tab 可见）
// ---------------------------------------------------------------------------

function ProductStandardMockup({ active = "product" }: { active?: string }) {
  const saleUnits = [
    { unit: "case", rate: "12", price: "120.00" },
    { unit: "box", rate: "6", price: "65.00" },
    { unit: "piece", rate: "1", price: "12.00" },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Edit SKU — Honey 500g
            </div>
            <div className="flex gap-1.5">
              <div className="px-2.5 h-6 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center">
                Cancel
              </div>
              <div className="px-2.5 h-6 rounded-md bg-cta text-white text-[10px] font-medium flex items-center">
                Save
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-4 border-b border-gray-200 px-4 py-2 bg-white">
            <div className="text-[11px] text-gray-500 pb-1">Basic info</div>
            <div className="text-[11px] text-cta font-semibold border-b-2 border-cta pb-1.5 -mb-2.5">
              Sale units
            </div>
            <div className="text-[11px] text-gray-500 pb-1">Vendors</div>
          </div>

          {/* Sale units table */}
          <div className="p-4 space-y-3">
            <Card>
              <div className="grid grid-cols-[1.1fr_1fr_2.4fr_0.5fr] text-[10px] uppercase tracking-wide text-gray-500 border-b border-gray-100 pb-2">
                <div className="px-2">Sale unit</div>
                <div className="px-2">Conversion</div>
                <div className="px-2">Sale price</div>
                <div className="px-2 text-center"></div>
              </div>
              {saleUnits.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.1fr_1fr_2.4fr_0.5fr] items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0"
                >
                  <div className="px-2">
                    <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center justify-between text-gray-800">
                      <span>{row.unit}</span>
                      <span className="text-gray-400">▾</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center gap-1">
                      <span className="flex-1 text-right font-mono text-primary">
                        {row.rate}
                      </span>
                      <span className="text-gray-500">/piece</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center gap-1">
                      <span className="text-gray-500">$</span>
                      <span className="flex-1 text-right font-mono text-primary">
                        {row.price}
                      </span>
                      <span className="text-gray-500">/{row.unit}</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-cta/10 text-cta relative">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="4" y1="6" x2="20" y2="6" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                        {i === 0 && (
                          <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="px-2 text-center">
                    <span className="text-[10px] text-destructive">Delete</span>
                  </div>
                </div>
              ))}
            </Card>
            <div className="text-[10px] text-cta font-medium">
              + Add sale unit
            </div>
            <div className="text-[10px] text-gray-500">
              Up to 10 sale units per SKU
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product Weighed mockup — 称重商品 SKU 编辑器（基本单位 kg，按重量计价）
// ---------------------------------------------------------------------------

function ProductWeighedMockup({ active = "product" }: { active?: string }) {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Edit SKU — Loose Tomato
            </div>
            <div className="flex gap-1.5">
              <div className="px-2.5 h-6 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center">
                Cancel
              </div>
              <div className="px-2.5 h-6 rounded-md bg-cta text-white text-[10px] font-medium flex items-center">
                Save
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-4 py-2 bg-white">
            <div className="text-[11px] text-cta font-semibold border-b-2 border-cta pb-1.5 -mb-2.5">
              Basic info
            </div>
            <div className="text-[11px] text-gray-500 pb-1">Product grade</div>
            <div className="text-[11px] text-gray-500 pb-1">Vendors</div>
          </div>

          <div className="p-4 space-y-3">
            <Card>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">SKU title *</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Loose Tomato
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">SKU code</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800 font-mono">
                    SKU-002
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">Base unit *</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center justify-between text-gray-800">
                    <span>kg</span>
                    <span className="text-gray-400">▾</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">Stock unit</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    kg
                  </div>
                </div>

                {/* Sale price row */}
                <div className="space-y-1 col-span-2">
                  <div className="text-[10px] text-gray-500">Sale price *</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center gap-1">
                      <span className="text-[11px] text-gray-500">$</span>
                      <span className="flex-1 text-right font-mono text-primary">
                        18.00
                      </span>
                      <span className="text-[10px] text-gray-500">/kg</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-cta/10 text-cta relative ml-1">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="4" y1="6" x2="20" y2="6" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                        <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary" />
                      </span>
                    </div>
                    <span className="w-7 h-4 rounded-full p-0.5 bg-cta flex justify-end shrink-0">
                      <span className="w-3 h-3 rounded-full bg-white shadow" />
                    </span>
                    <span className="text-[10px] text-gray-600 whitespace-nowrap">
                      Tax Incl
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-[10px] text-gray-500">
              Buyers enter any decimal quantity at checkout. The system rounds
              each order line to the configured precision.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product Multi-Spec mockup — 多规格商品（变体矩阵）
// ---------------------------------------------------------------------------

function ProductMultiSpecMockup({ active = "product" }: { active?: string }) {
  const skus = [
    {
      spec: "100g · Rose",
      sku: "SKU-003-01",
      price: "3.50",
      stock: "120 pcs",
      statusColor: "green",
      status: "Active",
    },
    {
      spec: "100g · Lavender",
      sku: "SKU-003-02",
      price: "3.50",
      stock: "240 pcs",
      statusColor: "green",
      status: "Active",
    },
    {
      spec: "100g · Unscented",
      sku: "SKU-003-03",
      price: "3.00",
      stock: "80 pcs",
      statusColor: "green",
      status: "Active",
    },
    {
      spec: "200g · Rose",
      sku: "SKU-003-04",
      price: "6.50",
      stock: "0 pcs",
      statusColor: "red",
      status: "Out",
    },
    {
      spec: "200g · Lavender",
      sku: "SKU-003-05",
      price: "6.50",
      stock: "45 pcs",
      statusColor: "green",
      status: "Active",
    },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Edit Product — Soap 100g
            </div>
            <div className="flex gap-1.5">
              <div className="px-2.5 h-6 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center">
                Cancel
              </div>
              <div className="px-2.5 h-6 rounded-md bg-cta text-white text-[10px] font-medium flex items-center">
                Save
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* Basic info card */}
            <Card>
              <div className="text-xs font-semibold text-primary mb-2">
                Basic info
              </div>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">
                    Product name *
                  </div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Soap 100g
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">
                    Product type *
                  </div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center justify-between text-gray-800">
                    <span>Standard</span>
                    <span className="text-gray-400">▾</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">Category</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Personal care
                  </div>
                </div>
                {/* Multi-spec switch — KEY element */}
                <div className="space-y-1">
                  <div className="text-[10px] text-gray-500">
                    Multi-spec mode
                  </div>
                  <div className="h-7 flex items-center gap-2">
                    <span className="w-8 h-4 rounded-full p-0.5 bg-cta flex justify-end">
                      <span className="w-3 h-3 rounded-full bg-white shadow" />
                    </span>
                    <span className="text-[11px] text-gray-700">
                      Enabled — 5 variants
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Variant selector */}
            <Card>
              <div className="text-xs font-semibold text-primary mb-2">
                Variants
              </div>
              <div className="space-y-2 text-[11px]">
                {[
                  { name: "Size", values: ["100g", "200g"] },
                  { name: "Scent", values: ["Rose", "Lavender", "Unscented"] },
                ].map((attr) => (
                  <div key={attr.name} className="flex items-center gap-2">
                    <div className="w-16 text-[10px] text-gray-500">
                      {attr.name}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {attr.values.map((v) => (
                        <div
                          key={v}
                          className="px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center gap-1"
                        >
                          <span>{v}</span>
                          <span className="text-gray-400">×</span>
                        </div>
                      ))}
                      <div className="px-2 py-0.5 rounded-full border border-dashed border-cta/40 bg-cta/5 text-[10px] text-cta">
                        + Add
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[10px] text-gray-500">
                Cartesian product: 2 sizes × 3 scents = 6 SKU combinations (1
                disabled)
              </div>
            </Card>

            {/* Sku table */}
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-[2fr_1.1fr_1fr_0.9fr_0.9fr_0.5fr] text-[10px] uppercase tracking-wide text-gray-500 bg-gray-50 border-b border-gray-100">
                <div className="px-3 py-2">Variant</div>
                <div className="px-3 py-2">SKU</div>
                <div className="px-3 py-2 text-right">Price</div>
                <div className="px-3 py-2 text-right">Stock</div>
                <div className="px-3 py-2">Status</div>
                <div className="px-3 py-2 text-center">···</div>
              </div>
              {skus.map((s) => (
                <div
                  key={s.sku}
                  className="grid grid-cols-[2fr_1.1fr_1fr_0.9fr_0.9fr_0.5fr] items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/60"
                >
                  <div className="px-3 text-gray-800 font-medium">{s.spec}</div>
                  <div className="px-3 font-mono text-gray-500">{s.sku}</div>
                  <div className="px-3 text-right font-mono text-primary">
                    ${s.price}
                  </div>
                  <div className="px-3 text-right font-mono text-gray-700">
                    {s.stock}
                  </div>
                  <div className="px-3">
                    <Pill color={s.statusColor}>{s.status}</Pill>
                  </div>
                  <div className="px-3 text-center text-gray-400">···</div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Weighed grades mockup — Product grade tab with multiple grade rows
// ---------------------------------------------------------------------------

function WeighedGradesMockup({ active = "product" }: { active?: string }) {
  const grades = [
    { name: "特级", price: "48.00", taxIncl: true },
    { name: "一级", price: "38.00", taxIncl: true },
    { name: "二级", price: "28.00", taxIncl: false },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Edit SKU — Apples (Weighed)
            </div>
            <div className="text-[11px] text-gray-500">
              SKU-001 · Base unit: kg
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-4 border-b border-gray-200 px-4 py-2 bg-white">
            <div className="text-[11px] text-gray-500">Basic info</div>
            <div className="text-[11px] text-gray-500">Sale units</div>
            <div className="text-[11px] text-cta font-semibold border-b-2 border-cta pb-1.5 -mb-2.5">
              Product grade
            </div>
            <div className="text-[11px] text-gray-500">Vendors</div>
          </div>

          {/* Grade table */}
          <div className="p-4">
            <Card>
              <div className="grid grid-cols-[1.2fr_2fr_1.6fr_0.4fr] text-[10px] uppercase tracking-wide text-gray-500 border-b border-gray-100 pb-2">
                <div className="px-2 text-center">Grade name</div>
                <div className="px-2 text-center">Sale price</div>
                <div className="px-2 text-center">Tax incl.</div>
                <div className="px-2 text-center"></div>
              </div>
              {grades.map((g) => (
                <div
                  key={g.name}
                  className="grid grid-cols-[1.2fr_2fr_1.6fr_0.4fr] items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0"
                >
                  <div className="px-2">
                    <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                      {g.name}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center gap-1">
                      <span className="text-gray-500">$</span>
                      <span className="flex-1 text-right font-mono text-primary">
                        {g.price}
                      </span>
                      <span className="text-gray-500">/kg</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-cta/10 text-cta relative">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="4" y1="6" x2="20" y2="6" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                        <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary" />
                      </span>
                    </div>
                  </div>
                  <div className="px-2 flex items-center justify-center gap-1">
                    <span
                      className={`w-7 h-4 rounded-full p-0.5 flex ${g.taxIncl ? "bg-cta justify-end" : "bg-gray-300 justify-start"}`}
                    >
                      <span className="w-3 h-3 rounded-full bg-white shadow" />
                    </span>
                    <span className="text-[10px] text-gray-600">Tax Incl</span>
                  </div>
                  <div className="px-2 text-center">
                    <span className="text-[10px] text-destructive">Delete</span>
                  </div>
                </div>
              ))}
            </Card>
            <div className="mt-2 text-[10px] text-cta font-medium">
              + Add grade price
            </div>
            <div className="mt-1 text-[10px] text-gray-500">
              Up to 10 grades · Last empty row is preserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Customer price level mockup — Edit Customer page with Price Level dropdown open
// ---------------------------------------------------------------------------

function CustomerPriceLevelMockup({
  active = "sales/customers",
}: {
  active?: string;
}) {
  const levels = [
    "Price Level 1",
    "Price Level 2",
    "Price Level 3",
    "Price Level 4",
    "Price Level 5",
  ];
  const selected = "Price Level 3";
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">
              Edit Customer — Sunny Mart
            </div>
            <div className="flex gap-1.5">
              <div className="px-2.5 h-6 rounded-md border border-gray-200 bg-white text-[10px] text-gray-700 flex items-center">
                Cancel
              </div>
              <div className="px-2.5 h-6 rounded-md bg-cta text-white text-[10px] font-medium flex items-center">
                Save
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs font-semibold text-primary mb-3">
              Basic info
            </div>
            <Card>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                {/* Customer name */}
                <div className="space-y-1">
                  <div className="text-gray-500">Customer name *</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Sunny Mart
                  </div>
                </div>
                {/* Contact */}
                <div className="space-y-1">
                  <div className="text-gray-500">Contact</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Jenny Wong
                  </div>
                </div>
                {/* Phone */}
                <div className="space-y-1">
                  <div className="text-gray-500">Phone</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    +1 415 555 0192
                  </div>
                </div>
                {/* Email */}
                <div className="space-y-1">
                  <div className="text-gray-500">Email</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    jenny@sunnymart.com
                  </div>
                </div>
                {/* Credit */}
                <div className="space-y-1">
                  <div className="text-gray-500">Credit limit</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    $20,000.00
                  </div>
                </div>
                {/* Price Level — dropdown OPEN with 5 options, level 3 selected */}
                <div className="space-y-1 relative">
                  <div className="text-gray-500 flex items-center gap-1">
                    Price Level
                    <span className="inline-block w-1 h-1 rounded-full bg-cta" />
                  </div>
                  <div className="h-7 rounded-md border border-cta/60 bg-white px-2 flex items-center justify-between text-gray-800 ring-1 ring-cta/30">
                    <span>{selected}</span>
                    <span className="text-gray-400">▾</span>
                  </div>
                  {/* Open dropdown menu */}
                  <div className="absolute z-10 top-full mt-1 left-0 right-0 rounded-md border border-gray-200 bg-white shadow-lg overflow-hidden">
                    {levels.map((lvl) => {
                      const isSelected = lvl === selected;
                      return (
                        <div
                          key={lvl}
                          className={`px-2.5 py-1.5 text-[11px] flex items-center justify-between ${
                            isSelected
                              ? "bg-cta/10 text-cta font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          <span>{lvl}</span>
                          <span className="text-[10px] text-gray-500">
                            Tier {lvl.split(" ")[2]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Discount */}
                <div className="space-y-1">
                  <div className="text-gray-500">Discount</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    5%
                  </div>
                </div>
                {/* Payment terms */}
                <div className="space-y-1">
                  <div className="text-gray-500">Payment terms</div>
                  <div className="h-7 rounded-md border border-gray-200 bg-white px-2 flex items-center text-gray-800">
                    Net 30
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-3 text-[10px] text-gray-500">
              The level selected here decides which of the SKU's 5 tier prices
              the customer sees in the ordering portal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tier price dialog mockup — Price Level popup with 5 tier prices
// ---------------------------------------------------------------------------

function TierPriceMockup({ active = "product" }: { active?: string }) {
  const tiers = [
    { label: "Price Level 1", price: "48.00", taxIncl: true },
    { label: "Price Level 2", price: "45.00", taxIncl: true },
    { label: "Price Level 3", price: "42.00", taxIncl: false },
    { label: "Price Level 4", price: "39.00", taxIncl: false },
    { label: "Price Level 5", price: "36.00", taxIncl: false },
  ];
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        <Nav active={active} />
        <div className="flex-1 min-w-0 bg-slate-50/50">
          {/* Dimmed context: SKU list with one row's sale price + the sliders icon */}
          <div className="opacity-40">
            {TOP_BAR}
            <div className="p-4">
              <Card>
                <div className="grid grid-cols-12 text-[10px] uppercase tracking-wide text-gray-500 border-b border-gray-100 pb-2">
                  <div className="col-span-3">SKU</div>
                  <div className="col-span-2 text-right">Sale price</div>
                  <div className="col-span-2 text-right">Unit</div>
                  <div className="col-span-5">Note</div>
                </div>
                {[
                  [
                    "Apples — Grade A",
                    "48.00",
                    "/10kg",
                    "Premium tiered fruit",
                  ],
                  ["Tomato — Loose", "18.00", "/5kg", "Loose by weight"],
                  ["Soap 100 g — Lavender", "3.50", "/pc", "Skincare"],
                ].map(([name, price, unit, note]) => (
                  <div
                    key={name}
                    className="grid grid-cols-12 items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0"
                  >
                    <div className="col-span-3 text-gray-800 font-medium">
                      {name}
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="inline-flex items-center gap-1 font-mono text-primary">
                        ${price}
                        <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded bg-cta/10 text-cta">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-2.5 h-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-mono text-gray-500">
                      {unit}
                    </div>
                    <div className="col-span-5 text-gray-500">{note}</div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
          {/* Modal overlay */}
          <div className="relative">
            <div className="absolute inset-0 bg-slate-900/30" />
            <div className="relative flex items-start justify-center pt-8 pb-10">
              <div className="w-[360px] rounded-lg border border-gray-200 bg-white shadow-xl">
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <div className="text-sm font-semibold text-primary">
                    Price Level
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    Set 5 tier prices for this SKU. Each tier maps to a customer
                    price level.
                  </div>
                </div>
                <div className="px-5 py-3 space-y-2">
                  {tiers.map((t, i) => (
                    <div key={t.label} className="flex items-center gap-3">
                      <div className="w-24 shrink-0 text-[11px] text-gray-700 font-medium">
                        {t.label}
                      </div>
                      <div className="flex-1 flex items-center gap-1 h-7 rounded-md border border-gray-200 bg-white px-2">
                        <span className="text-[11px] text-gray-500">$</span>
                        <span className="flex-1 text-right text-[11px] font-mono text-primary">
                          {t.price}
                        </span>
                        <span className="text-[10px] text-gray-500">/10kg</span>
                      </div>
                      <div className="flex items-center gap-1 w-20 justify-end">
                        <span
                          className={`w-7 h-4 rounded-full p-0.5 flex ${t.taxIncl ? "bg-cta justify-end" : "bg-gray-300 justify-start"}`}
                        >
                          <span className="w-3 h-3 rounded-full bg-white shadow" />
                        </span>
                        <span className="text-[10px] text-gray-600 whitespace-nowrap">
                          Tax Incl
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
                  <div className="px-3 h-7 rounded-md bg-cta text-white text-[11px] font-medium flex items-center">
                    Confirm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

export default function DocsMockup({
  variant,
  active,
}: {
  variant: string;
  active?: string;
}) {
  switch (variant) {
    case "dashboard":
      return <DashboardMockup active={active} />;
    case "order":
      return <OrderMockup active={active} />;
    case "inventory":
      return <InventoryMockup active={active} />;
    case "purchase":
      return <PurchaseMockup active={active} />;
    case "customer":
      return <CustomerMockup />;
    case "settings":
      return <SettingsMockup />;
    case "tier-price":
      return <TierPriceMockup active={active} />;
    case "weighed-grades":
      return <WeighedGradesMockup active={active} />;
    case "customer-price-level":
      return <CustomerPriceLevelMockup active={active} />;
    case "showroom-private":
      return <ShowroomPrivateMockup />;
    case "showroom":
      return <ShowroomMockup />;
    case "product-list":
      return <ProductListMockup active={active} />;
    case "product-standard":
      return <ProductStandardMockup active={active} />;
    case "product-weighed":
      return <ProductWeighedMockup active={active} />;
    case "product-multi-spec":
      return <ProductMultiSpecMockup active={active} />;
    default:
      return null;
  }
}
