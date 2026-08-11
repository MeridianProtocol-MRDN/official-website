import { REGULATORY_ITEMS } from "@/data/regulatory";
import StatusBadge from "@/components/StatusBadge";
import { statusTone, DocStatus } from "@/data/legalMeta";

export default function RegulatoryReview() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Regulatory</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Regulatory & Professional Review</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">
          These are the analyses a mature project needs before claiming regulatory clarity. None of
          them exist yet for Meridian. That's stated here plainly rather than left unaddressed.
        </p>

        <div className="mt-10 space-y-4">
          {REGULATORY_ITEMS.map((item) => (
            <div key={item.id} className="rounded-lg border border-surface-border bg-surface/40 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-[14.5px] font-medium text-ink">{item.name}</h2>
                <StatusBadge status={item.status} tone={statusTone(item.status as DocStatus)} />
              </div>
              <p className="mt-1 font-mono text-[11px] text-ink-faint">{item.id}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-dim">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12.5px] leading-relaxed text-ink-faint">
          Nothing on this page should be read as a legal opinion. It is a transparent account of what
          has and hasn't been assessed, so due diligence can start from an accurate baseline.
        </p>
      </div>
    </div>
  );
}
