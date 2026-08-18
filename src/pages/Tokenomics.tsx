import { TOKEN_CONFIG } from "@/data/token";
import { ALLOCATION_CATEGORIES, TOKENOMICS_NOTE } from "@/data/tokenomics";
import StatusBadge from "@/components/StatusBadge";

export default function Tokenomics() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Economics</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Tokenomics</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">{TOKENOMICS_NOTE}</p>

        <div className="mt-10 rounded-lg border border-surface-border bg-surface/50 p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Total Supply</p>
          <p className="mt-1 text-2xl font-medium text-ink">
            {TOKEN_CONFIG.totalSupply} <span className="text-ink-dim">{TOKEN_CONFIG.symbol}</span>
          </p>
          <p className="mt-1 text-[12.5px] text-ink-faint">Fixed at deployment. No mint function exists.</p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-medium text-ink">Allocation</h2>
          <p className="mt-2 text-[13.5px] text-ink-dim">
            Percentages finalized; on-chain distribution mechanisms are being deployed
            progressively. Status reflects exactly what is live today.
          </p>
          <div className="mt-5 divide-y divide-surface-border rounded-lg border border-surface-border">
            {ALLOCATION_CATEGORIES.map((c) => (
              <div key={c.id} className="px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-ink">{c.name}</span>
                  <div className="flex items-center gap-3">
                    {c.percent && (
                      <span className="text-[13px] text-ink-dim">{c.percent}</span>
                    )}
                    <StatusBadge status={c.status} tone="planned" />
                  </div>
                </div>
                {c.tokens && (
                  <p className="mt-1 text-[12px] text-ink-faint">{c.tokens} MRDN</p>
                )}
                {c.note && (
                  <p className="mt-1 text-[12px] text-ink-faint">{c.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-[12.5px] leading-relaxed text-ink-faint">
          Tokenomics figures on this page are informational and subject to the official project
          documentation (whitepaper / litepaper). This is not financial advice.
        </p>
      </div>
    </div>
  );
                    }
