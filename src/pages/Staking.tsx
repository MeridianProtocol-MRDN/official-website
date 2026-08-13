import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { TOKEN_CONFIG } from "@/data/token";

const STAKING_CONTRACT_ADDRESS = "0xE4679e407A4967f7182E87C1bc25Dcc786c3D3eb";
const STAKING_EXPLORER_URL = `https://bscscan.com/address/${STAKING_CONTRACT_ADDRESS}`;

const FACTS: { label: string; value: string }[] = [
  { label: "Contract", value: "MeridianStaking" },
  { label: "Network", value: TOKEN_CONFIG.chain },
  { label: "Lock period", value: "None — unstake your principal at any time" },
  { label: "Reward asset", value: TOKEN_CONFIG.symbol },
];

const SECURITY_FACTS: { label: string; value: string }[] = [
  { label: "Source code verification", value: "Verified on BscScan" },
  { label: "Automated scan (SolidityScan)", value: "90.77/100 — 0 Critical, 0 High findings" },
  { label: "Independent manual audit", value: "PLANNED — not yet commissioned" },
  { label: "Owner permissions", value: "Set reward rate and fund the reward pool only. No function exists for the owner to withdraw staker principal." },
];

export default function Staking() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(STAKING_CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Protocol</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Staking</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          Stake {TOKEN_CONFIG.symbol} and earn continuously accruing rewards directly from a
          verified, non-custodial contract. No lock-in — unstake your full principal whenever
          you choose.
        </p>

        <div className="mt-10 rounded-lg border border-surface-border bg-surface/50 p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Staking Contract Address
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="break-all font-mono text-[13px] text-ink">{STAKING_CONTRACT_ADDRESS}</p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-2 text-[12.5px] text-ink-dim hover:text-ink"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                href={STAKING_EXPLORER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-line px-3 py-2 text-[12.5px] font-semibold text-base-deep"
              >
                BscScan <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
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
          <h2 className="text-xl font-medium text-ink">How it works</h2>
          <ol className="mt-4 space-y-3 text-[14px] text-ink-dim">
            <li><span className="text-ink">1.</span> Approve the staking contract to spend your {TOKEN_CONFIG.symbol}.</li>
            <li><span className="text-ink">2.</span> Stake any amount — rewards begin accruing continuously from that point.</li>
            <li><span className="text-ink">3.</span> Claim accrued rewards at any time, and unstake your full principal whenever you choose — there is no lock period.</li>
          </ol>
          <p className="mt-3 text-[12px] text-ink-faint">
            Rewards are only paid out while the reward pool is funded and an active reward rate
            is set — see the reward pool balance directly on BscScan before relying on projected
            returns. Meridian Protocol does not promise a fixed or guaranteed APY.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-medium text-ink">Security</h2>
          <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {SECURITY_FACTS.map((f) => (
              <div key={f.label} className="border-b border-surface-border pb-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{f.label}</p>
                <p className="mt-1 text-[13.5px] text-ink">{f.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-ink-faint">
            Staking involves smart contract risk. This contract has not had an independent
            manual security audit — see the Security Center for full status.
          </p>
        </div>
      </div>
    </div>
  );
}
