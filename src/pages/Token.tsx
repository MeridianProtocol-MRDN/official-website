import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { TOKEN_CONFIG } from "@/data/token";
import StatusBadge from "@/components/StatusBadge";

const FACTS: { label: string; value: string }[] = [
  { label: "Token Name", value: TOKEN_CONFIG.name },
  { label: "Symbol", value: TOKEN_CONFIG.symbol },
  { label: "Blockchain", value: TOKEN_CONFIG.chain },
  { label: "Token Standard", value: TOKEN_CONFIG.standard },
  { label: "Total Supply", value: `${TOKEN_CONFIG.totalSupply} ${TOKEN_CONFIG.symbol}` },
  { label: "Circulating Supply", value: TOKEN_CONFIG.circulatingSupply },
];

const UTILITY = [
  { label: "Governance participation", status: "PLANNED" },
  { label: "Staking", status: "LIVE" },
  { label: "Ecosystem rewards", status: "PLANNED" },
  { label: "Community structure", status: "IN DEVELOPMENT" },
];

export default function Token() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Token</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">MRDN</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          A fixed-supply {TOKEN_CONFIG.standard} token on {TOKEN_CONFIG.chain}, built as
          transparent Web3 infrastructure with utility developed openly.
        </p>

        <div className="mt-10 rounded-lg border border-surface-border bg-surface/50 p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Contract Address</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="break-all font-mono text-[13px] text-ink">{TOKEN_CONFIG.contractAddress}</p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-2 text-[12.5px] text-ink-dim hover:text-ink"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                href={TOKEN_CONFIG.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-line px-3 py-2 text-[12.5px] font-semibold text-base-deep"
              >
                BscScan <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Verify MRDN on-chain</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {[
              { label: "View Contract", suffix: "" },
              { label: "View Holders", suffix: "#balances" },
              { label: "View Transactions", suffix: "#" },
              { label: "View Source Code", suffix: "#code" },
            ].map((l) => (
              <a
                key={l.label}
                href={`${TOKEN_CONFIG.explorerUrl}${l.suffix}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3.5 py-2 text-[12.5px] text-ink-dim hover:border-line/50 hover:text-ink"
              >
                {l.label} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-ink-faint">
            This gives you independent verification instead of asking you to trust this website.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {FACTS.map((f) => (
            <div key={f.label} className="border-b border-surface-border pb-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{f.label}</p>
              <p className="mt-1 text-[14.5px] text-ink">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-medium text-ink">Utility</h2>
          <p className="mt-2 text-[13.5px] text-ink-dim">
            None of the following is live on-chain today. Each is labeled by actual status.
          </p>
          <div className="mt-5 space-y-3">
            {UTILITY.map((u) => (
              <div
                key={u.label}
                className="flex items-center justify-between rounded-md border border-surface-border bg-surface/30 px-4 py-3"
              >
                <span className="text-[13.5px] text-ink">{u.label}</span>
                <StatusBadge status={u.status} tone="planned" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
