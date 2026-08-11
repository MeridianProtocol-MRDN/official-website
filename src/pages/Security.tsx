import { SECURITY_ITEMS, CONTRACT_ADMIN_SURFACE, SEED_PHRASE_WARNING } from "@/data/security";
import StatusBadge from "@/components/StatusBadge";
import { ShieldAlert } from "lucide-react";

export default function Security() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Trust status</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Security & legal status</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          This page will be updated with auditor name, report link, date, scope, and findings once real
          work is completed — nothing here is filled in until it's true.
        </p>

        <div className="mt-10 space-y-4">
          {SECURITY_ITEMS.map((item) => (
            <div key={item.id} className="rounded-lg border border-surface-border bg-surface/40 p-5">
              <StatusBadge status={item.status} />
              <h2 className="mt-3 text-[15px] font-medium text-ink">{item.title}</h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-dim">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-surface-border bg-surface/20 p-5">
          <h2 className="text-[15px] font-medium text-ink">Contract admin surface</h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-dim">{CONTRACT_ADMIN_SURFACE}</p>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-lg border border-status-danger/30 bg-status-danger/10 p-5">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-status-danger" />
          <p className="text-[13.5px] leading-relaxed text-ink">{SEED_PHRASE_WARNING}</p>
        </div>
      </div>
    </div>
  );
}
