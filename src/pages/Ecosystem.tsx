import StatusBadge from "@/components/StatusBadge";

const ECOSYSTEM_ITEMS = [
  { name: "Governance research", status: "PLANNED" },
  { name: "Staking", status: "PLANNED" },
  { name: "Developer tooling", status: "PLANNED" },
  { name: "Ecosystem integrations", status: "PLANNED" },
];

export default function Ecosystem() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Ecosystem</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Ecosystem</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">
          Utility development, applications, developer ecosystem, governance research, and broader
          integrations are Phase 4 of the roadmap — scoped to what can actually be delivered, and only
          pursued after security and documentation (Phase 2) and liquidity infrastructure (Phase 3) are
          in place.
        </p>

        <div className="mt-8 space-y-3">
          {ECOSYSTEM_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-md border border-surface-border bg-surface/30 px-4 py-3"
            >
              <span className="text-[13.5px] text-ink">{item.name}</span>
              <StatusBadge status={item.status} tone="planned" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
