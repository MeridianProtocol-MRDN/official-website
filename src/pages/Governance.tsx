import { CURRENT_GOVERNANCE, FUTURE_GOVERNANCE } from "@/data/governance";

export default function Governance() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Governance</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Governance</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">
          There is no DAO and no on-chain voting today. This page describes who actually controls what
          right now, and what community participation might look like later — not before it exists.
        </p>

        <h2 className="mt-12 text-xl font-medium text-ink">Current model</h2>
        <div className="mt-5 space-y-4">
          {CURRENT_GOVERNANCE.map((c) => (
            <div key={c.label} className="rounded-lg border border-surface-border bg-surface/40 p-5">
              <h3 className="text-[14px] font-medium text-ink">{c.label}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-dim">{c.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-medium text-ink">Future governance</h2>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-dim">{FUTURE_GOVERNANCE}</p>
      </div>
    </div>
  );
}
