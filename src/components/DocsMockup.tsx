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

const NAV = (
  <div className="hidden sm:block w-44 shrink-0 bg-slate-50 border-r border-gray-200 py-3 px-2">
    <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
      <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-[11px] font-bold">
        W
      </div>
      <span className="text-xs font-semibold text-primary">Wholesalify</span>
    </div>
    <div className="space-y-0.5 text-xs">
      <div className={SIDEBAR_LINK(true)}>
        <span className="w-3 h-3">▦</span> Dashboard
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">▤</span> Orders
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">▣</span> Catalog
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">▢</span> Inventory
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">▥</span> Purchasing
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">▤</span> Customers
      </div>
      <div className={SIDEBAR_LINK(false)}>
        <span className="w-3 h-3">⚙</span> Settings
      </div>
    </div>
  </div>
);

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

function Pill({ children, color }: { children: React.ReactNode; color: string }) {
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

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-3 ${className ?? ""}`}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dashboard mockup: home / KPI overview
// ---------------------------------------------------------------------------

function DashboardMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        {NAV}
        <div className="flex-1 min-w-0">
          {TOP_BAR}
          <div className="p-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Today", value: "184", delta: "+12%", color: "blue" },
              { label: "Revenue", value: "$24.1k", delta: "+8%", color: "green" },
              { label: "Low stock", value: "7", delta: "items", color: "amber" },
              { label: "Open POs", value: "5", delta: "awaiting", color: "purple" },
            ].map((kpi) => (
              <Card key={kpi.label}>
                <div className="text-[10px] uppercase tracking-wide text-gray-500">{kpi.label}</div>
                <div className="mt-0.5 text-base font-bold text-primary">{kpi.value}</div>
                <div className="mt-0.5 text-[10px] text-gray-500">{kpi.delta}</div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 pt-0">
            <Card>
              <div className="text-xs font-semibold text-primary mb-3">Orders this week</div>
              <div className="flex items-end gap-1 h-24">
                {[40, 60, 35, 80, 95, 70, 88].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
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
              <div className="text-xs font-semibold text-primary mb-3">Low stock alerts</div>
              <ul className="space-y-1.5">
                {[
                  ["Apples — Grade A", "12 kg left"],
                  ["Tomato — Loose", "8 kg left"],
                  ["Soap 100 g — Lavender", "24 pcs left"],
                ].map(([name, left]) => (
                  <li key={name} className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-700">{name}</span>
                    <Pill color="amber">{left}</Pill>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="p-4 pt-0">
            <Card>
              <div className="text-xs font-semibold text-primary mb-3">Recent orders</div>
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
                    ["#1042", "Sunny Mart", "$1,840", "green", "Dispatched"],
                    ["#1041", "Farm Direct Co.", "$2,950", "blue", "Confirmed"],
                    ["#1040", "Green Grocer", "$480", "amber", "Picking"],
                    ["#1039", "Ocean Seafood", "$3,210", "green", "Delivered"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-gray-50 last:border-b-0">
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
// Order mockup: order dashboard with list + detail
// ---------------------------------------------------------------------------

function OrderMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        {NAV}
        <div className="flex-1 min-w-0">
          {TOP_BAR}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
            <div className="lg:col-span-2">
              <Card>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-primary">Orders</div>
                  <div className="flex gap-1.5">
                    {["All", "Submitted", "Confirmed", "Picking"].map((t, i) => (
                      <Pill key={t} color={i === 0 ? "blue" : "gray"}>
                        {t}
                      </Pill>
                    ))}
                  </div>
                </div>
                <table className="w-full text-[11px]">
                  <thead className="text-gray-500">
                    <tr className="border-b border-gray-100">
                      <th className="text-left font-medium py-1.5">Order</th>
                      <th className="text-left font-medium py-1.5">Date</th>
                      <th className="text-left font-medium py-1.5">Customer</th>
                      <th className="text-left font-medium py-1.5">Items</th>
                      <th className="text-left font-medium py-1.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      ["#1042", "Today, 14:02", "Sunny Mart", "12", "green", "Dispatched"],
                      ["#1041", "Today, 11:48", "Farm Direct", "18", "blue", "Confirmed"],
                      ["#1040", "Today, 10:11", "Green Grocer", "5", "amber", "Picking"],
                      ["#1039", "Yesterday", "Ocean Seafood", "21", "green", "Delivered"],
                      ["#1038", "Yesterday", "Sunny Mart", "9", "green", "Delivered"],
                    ].map((row, i) => (
                      <tr
                        key={row[0]}
                        className={`border-b border-gray-50 last:border-b-0 ${
                          i === 1 ? "bg-cta/5" : ""
                        }`}
                      >
                        <td className="py-1.5 font-mono">{row[0]}</td>
                        <td className="py-1.5">{row[1]}</td>
                        <td className="py-1.5">{row[2]}</td>
                        <td className="py-1.5">{row[3]}</td>
                        <td className="py-1.5">
                          <Pill color={row[4]}>{row[5]}</Pill>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
            <Card>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-primary">Order #1041</div>
                <Pill color="blue">Confirmed</Pill>
              </div>
              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="text-gray-500">Customer</div>
                  <div className="text-gray-800 font-medium">Farm Direct Co.</div>
                </div>
                <div>
                  <div className="text-gray-500">Delivery zone</div>
                  <div className="text-gray-800">North Bay — 2-day lead time</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Line items (3)</div>
                  <ul className="space-y-1">
                    {[
                      ["Apples Grade A 10kg", "12 × $48", "$576"],
                      ["Tomato Loose 5kg", "30 × $18", "$540"],
                      ["Soap 100g Lavender", "60 × $3.5", "$210"],
                    ].map(([n, q, t]) => (
                      <li key={n} className="flex justify-between">
                        <span className="text-gray-700">{n}</span>
                        <span className="text-gray-500">{q}</span>
                        <span className="font-medium text-gray-800">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 pt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span className="text-primary">$2,950.00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inventory mockup
// ---------------------------------------------------------------------------

function InventoryMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        {NAV}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
            <div className="text-xs font-medium text-gray-700">Inventory</div>
            <div className="text-[11px] text-gray-500">Warehouse: Main DC</div>
          </div>
          <div className="p-4">
            <Card>
              <div className="grid grid-cols-12 text-[10px] uppercase tracking-wide text-gray-500 border-b border-gray-100 pb-2">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-right">On hand</div>
                <div className="col-span-2 text-right">Reorder</div>
                <div className="col-span-3 text-right">Status</div>
              </div>
              {[
                ["Apples — Grade A", "kg", 124, 50, "green", "In stock"],
                ["Apples — Grade B", "kg", 22, 50, "amber", "Low stock"],
                ["Tomato — Loose", "kg", 8, 30, "red", "Out soon"],
                ["Soap 100 g — Lavender", "pcs", 240, 100, "green", "In stock"],
                ["Soap 100 g — Rose", "pcs", 60, 100, "amber", "Low stock"],
                ["Oranges — Premium", "kg", 75, 40, "green", "In stock"],
              ].map(([name, unit, on, reorder, color, label]) => (
                <div
                  key={name as string}
                  className="grid grid-cols-12 items-center text-[11px] py-2 border-b border-gray-50 last:border-b-0"
                >
                  <div className="col-span-5 text-gray-800">
                    <div className="font-medium">{name}</div>
                    <div className="text-gray-500 text-[10px]">Stock unit: {unit}</div>
                  </div>
                  <div className="col-span-2 text-right font-mono text-primary">
                    {on}
                  </div>
                  <div className="col-span-2 text-right font-mono text-gray-500">
                    {reorder}
                  </div>
                  <div className="col-span-3 text-right">
                    <Pill color={color as string}>{label as string}</Pill>
                  </div>
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

function PurchaseMockup() {
  return (
    <div className={FRAME_SHELL}>
      {CHROME_BAR}
      <div className="flex">
        {NAV}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <div className="text-xs font-medium text-gray-700">Purchase orders</div>
            <div className="text-[10px] text-white bg-cta px-2.5 py-1 rounded-md">
              + New PO
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs font-semibold text-primary">PO-2026-087</div>
                  <div className="text-[10px] text-gray-500">To Greenfields Farm</div>
                </div>
                <Pill color="amber">Awaiting receipt</Pill>
              </div>
              <ul className="space-y-1 text-[11px]">
                {[
                  ["Apples — Premium", "150 kg", "$3,600"],
                  ["Tomato — Loose", "100 kg", "$1,500"],
                ].map((row) => (
                  <li key={row[0]} className="flex justify-between text-gray-700">
                    <span>{row[0]}</span>
                    <span className="text-gray-500">{row[1]}</span>
                    <span className="font-medium text-primary">{row[2]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-[10px] text-gray-500">ETA: 3 days</div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs font-semibold text-primary">PO-2026-085</div>
                  <div className="text-[10px] text-gray-500">To Pacific Trading</div>
                </div>
                <Pill color="green">Received</Pill>
              </div>
              <ul className="space-y-1 text-[11px]">
                {[
                  ["Soap 100 g — Lavender", "500 pcs", "$1,250"],
                  ["Soap 100 g — Rose", "500 pcs", "$1,250"],
                ].map((row) => (
                  <li key={row[0]} className="flex justify-between text-gray-700">
                    <span>{row[0]}</span>
                    <span className="text-gray-500">{row[1]}</span>
                    <span className="font-medium text-primary">{row[2]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-[10px] text-emerald-700">Stock updated — Aug 8</div>
            </Card>
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
            <span className="text-xs font-semibold text-primary">Sunny Mart — Ordering portal</span>
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
              <div className="text-[11px] font-semibold text-primary">{row[0]}</div>
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
          <div className="text-[10px] uppercase text-gray-500 px-2 mb-2">Settings</div>
          {[
            ["Store", false],
            ["Delivery zones", false],
            ["Payments", false],
            ["Users & roles", true],
            ["Notifications", false],
            ["Billing", false],
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
          <div className="text-sm font-semibold text-primary mb-3">Users & roles</div>
          <Card>
            <div className="space-y-2 text-[11px]">
              {[
                ["Alex Tan", "alex@wholesalify.com", "Owner", "blue"],
                ["Sarah Liu", "sarah@wholesalify.com", "Admin", "blue"],
                ["Maria", "maria@wholesalify.com", "Operator", "purple"],
                ["David", "david@wholesalify.com", "Buyer", "gray"],
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
// Public entry point
// ---------------------------------------------------------------------------

export default function DocsMockup({ variant }: { variant: string }) {
  switch (variant) {
    case "dashboard":
      return <DashboardMockup />;
    case "order":
      return <OrderMockup />;
    case "inventory":
      return <InventoryMockup />;
    case "purchase":
      return <PurchaseMockup />;
    case "customer":
      return <CustomerMockup />;
    case "settings":
      return <SettingsMockup />;
    default:
      return null;
  }
}
