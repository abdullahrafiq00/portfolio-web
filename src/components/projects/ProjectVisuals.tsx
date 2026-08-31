import { Activity, BarChart3, Bell, CreditCard, Database, LayoutGrid, Mail, Search, ShieldCheck, ShoppingCart, Users, Workflow } from "lucide-react";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border-strong bg-bg-elevated px-2 py-0.5 font-mono text-[9px] text-fg-subtle">
      {children}
    </span>
  );
}

export function NCCPLVisual() {
  const rows = [
    { id: "TXN-2291", type: "Redemption", status: "Cleared" },
    { id: "TXN-2292", type: "Transfer", status: "Pending" },
    { id: "TXN-2293", type: "Auction", status: "Cleared" },
    { id: "TXN-2294", type: "Redemption", status: "Failed" },
  ];
  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
      <div className="hidden w-[120px] shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
        {["Overview", "Customers", "Auctions", "Transactions", "Transfers", "Config"].map((item, i) => (
          <div
            key={item}
            className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] ${
              i === 3 ? "bg-accent-dim text-accent-strong" : "text-fg-subtle"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Customers", value: "12,4XX", icon: Users },
            { label: "Auctions", value: "38", icon: BarChart3 },
            { label: "Redemptions", value: "216", icon: ShieldCheck },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-lg border border-border bg-surface p-2.5">
              <Icon size={13} className="mb-2 text-accent" />
              <p className="font-display text-sm font-semibold text-fg">{value}</p>
              <p className="font-mono text-[9px] text-fg-subtle">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-hidden rounded-lg border border-border bg-surface">
          <div className="grid grid-cols-3 gap-2 border-b border-border px-3 py-2 font-mono text-[9px] text-fg-subtle">
            <span>ID</span>
            <span>TYPE</span>
            <span>STATUS</span>
          </div>
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-3 gap-2 border-b border-border/60 px-3 py-2 font-mono text-[10px] text-fg-muted last:border-0">
              <span>{r.id}</span>
              <span>{r.type}</span>
              <span
                className={
                  r.status === "Cleared"
                    ? "text-emerald-400"
                    : r.status === "Pending"
                      ? "text-amber-400"
                      : "text-red-400"
                }
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaysalVisual({ variant }: { variant: "user" | "admin" }) {
  if (variant === "admin") {
    return (
      <div className="flex h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
        <div className="hidden w-[120px] shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
          {["Super Admin", "Users", "Roles", "Permissions", "Services", "Notifications"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] ${
                i === 2 ? "bg-accent-dim text-accent-strong" : "text-fg-subtle"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-2.5 font-mono text-[9px] text-fg-subtle">ROLE ASSIGNMENT</p>
            {[
              { name: "S. Ahmed", role: "Super Admin" },
              { name: "F. Khan", role: "Operations" },
              { name: "M. Tariq", role: "Support" },
            ].map((u) => (
              <div key={u.name} className="flex items-center justify-between border-b border-border/60 py-2 last:border-0">
                <span className="font-mono text-[10px] text-fg-muted">{u.name}</span>
                <Chip>{u.role}</Chip>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {["Transfers", "KYC Review", "IBFT", "Redemptions"].map((s, i) => (
              <div key={s} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5">
                <span className="font-mono text-[10px] text-fg-muted">{s}</span>
                <span className={`h-4 w-7 rounded-full ${i % 3 === 0 ? "bg-fg-subtle/30" : "bg-accent"} relative`}>
                  <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${i % 3 === 0 ? "left-0.5" : "left-3.5"}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl border border-border bg-bg-elevated p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[9px] text-fg-subtle">TOTAL BALANCE</p>
          <p className="font-display text-xl font-semibold text-fg">PKR 4,82X,XXX</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[9px] text-emerald-400">
          <ShieldCheck size={11} /> KYC Verified
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg border border-border bg-surface p-3">
          <CreditCard size={13} className="mb-3 text-accent" />
          <p className="font-mono text-[9px] text-fg-subtle">IBFT Transfer</p>
          <p className="font-display text-sm text-fg">Available</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3">
          <BarChart3 size={13} className="mb-3 text-accent" />
          <p className="font-mono text-[9px] text-fg-subtle">Investments</p>
          <p className="font-display text-sm text-fg">3 Active Funds</p>
        </div>
      </div>
      <div className="flex-1 rounded-lg border border-border bg-surface p-3">
        <p className="mb-2.5 font-mono text-[9px] text-fg-subtle">RECENT ACTIVITY</p>
        {[
          { label: "KuickPay Investment", amount: "+ 25,000" },
          { label: "Fund Redemption", amount: "− 10,000" },
          { label: "IBFT Transfer", amount: "− 5,500" },
        ].map((tx) => (
          <div key={tx.label} className="flex items-center justify-between border-b border-border/60 py-2 last:border-0">
            <span className="font-mono text-[10px] text-fg-muted">{tx.label}</span>
            <span className="font-mono text-[10px] text-fg">{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScatchVisual() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
      <div className="hidden w-[110px] shrink-0 flex-col gap-3 border-r border-border p-3 sm:flex">
        <p className="font-mono text-[9px] text-fg-subtle">FILTERS</p>
        {["Price", "New", "Discount", "In Stock"].map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span className="h-3 w-3 rounded border border-border-strong" />
            <span className="font-mono text-[9px] text-fg-muted">{f}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5">
            <Search size={11} className="text-fg-subtle" />
            <span className="font-mono text-[9px] text-fg-subtle">Search products</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5">
            <ShoppingCart size={11} className="text-accent" />
            <span className="font-mono text-[9px] text-fg-muted">3</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[1, 2, 3].map((p) => (
            <div key={p} className="rounded-lg border border-border bg-surface p-2">
              <div className="mb-2 aspect-square rounded-md bg-gradient-to-br from-surface-hover to-bg-elevated" />
              <p className="font-mono text-[9px] text-fg-muted">Product {p}</p>
              <p className="font-mono text-[9px] text-accent-strong">$4{p}.00</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-fg-muted">
            <LayoutGrid size={11} /> Admin · Product CRUD
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-fg-subtle">
            <Bell size={11} /> Flash message sent
          </span>
        </div>
      </div>
    </div>
  );
}

export function PingUpMicroservicesVisual() {
  const services = [
    { name: "users", label: "Users Service", icon: Users },
    { name: "goals", label: "Goals Service", icon: BarChart3 },
    { name: "products", label: "Products Service", icon: LayoutGrid },
    { name: "education", label: "Education Service", icon: ShieldCheck },
    { name: "engine", label: "Engine", icon: Activity },
    { name: "email-engine", label: "Email Engine", icon: Mail },
    { name: "integration", label: "Integration Service", icon: Workflow },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl border border-border bg-bg-elevated p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-fg-subtle">
          <Workflow size={11} className="text-accent" /> SERVICE MESH
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[9px] text-emerald-400">
          <Activity size={11} /> All services healthy
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="flex flex-col justify-between rounded-lg border border-border bg-surface p-2.5">
            <div className="flex items-center justify-between">
              <s.icon size={13} className="text-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="mt-2 font-mono text-[9px] text-fg-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-fg-muted">
          <Database size={11} /> Redis · pub/sub &amp; caching
        </span>
        <span className="font-mono text-[9px] text-fg-subtle">Node.js · Express</span>
      </div>
    </div>
  );
}

export function getProjectVisual(key: "nccpl" | "faysal-user" | "faysal-admin" | "scatch" | "psx" | "pingup-microservices") {
  switch (key) {
    case "nccpl":
      return <NCCPLVisual />;
    case "faysal-user":
      return <FaysalVisual variant="user" />;
    case "faysal-admin":
      return <FaysalVisual variant="admin" />;
    case "scatch":
      return <ScatchVisual />;
    case "psx":
      return <NCCPLVisual />;
    case "pingup-microservices":
      return <PingUpMicroservicesVisual />;
  }
}
