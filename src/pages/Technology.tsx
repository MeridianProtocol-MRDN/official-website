import { Layers, ShieldCheck, Link2, GitBranch } from "lucide-react";
import { TOKEN_CONFIG } from "@/data/token";
import StatusBadge from "@/components/StatusBadge";

const ARCHITECTURE_LAYERS = [
  { layer: "BNB Smart Chain", status: "LIVE", desc: "Base settlement layer MRDN is deployed on." },
  { layer: "MRDN Smart Contract", status: "LIVE", desc: "Deployed, verified, fixed-supply BEP-20 contract." },
  { layer: "Meridian Ecosystem", status: "IN DEVELOPMENT", desc: "Documentation, governance model, and community structure." },
  { layer: "Future Modules / Applications", status: "PLANNED", desc: "Any application layer built on top — scoped only once justified." },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    body: "Every status claim on this site is labeled by what's actually true, with a source to verify it independently.",
  },
  {
    icon: Link2,
    title: "On-chain verification",
    body: "Contract facts (address, supply, admin surface) are verifiable directly on BscScan, not just asserted here.",
  },
  {
    icon: Layers,
    title: "Deterministic execution",
    body: "MRDN's behavior is defined entirely by its deployed, verified bytecode — no off-chain admin override exists.",
  },
  {
    icon: GitBranch,
    title: "Composability",
    body: "As a standard BEP-20 token, MRDN is compatible with standard wallets, explorers, and BNB Chain tooling by default.",
  },
];

export default function Technology() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Technology</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">How Meridian is built</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          Meridian is currently a token and its surrounding documentation on {TOKEN_CONFIG.chain} — not
          a Layer-1 or a custom virtual machine. This page describes exactly what that means today, and
          what's planned rather than live.
        </p>

        <h2 className="mt-14 text-xl font-medium text-ink">Architecture</h2>
        <div className="relative mt-6 space-y-4 border-l border-surface-border pl-8">
          {ARCHITECTURE_LAYERS.map((l) => (
            <div key={l.layer} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-base bg-line" />
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-[14.5px] font-medium text-ink">{l.layer}</h3>
                <StatusBadge status={l.status} />
              </div>
              <p className="mt-1.5 max-w-md text-[13px] text-ink-dim">{l.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-xl font-medium text-ink">Smart contract</h2>
        <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {[
            { label: "Blockchain", value: TOKEN_CONFIG.chain },
            { label: "Standard", value: TOKEN_CONFIG.standard },
            { label: "Contract address", value: TOKEN_CONFIG.contractAddress, mono: true },
            { label: "Source verification", value: TOKEN_CONFIG.contractVerified ? "Verified on BscScan" : "Unverified" },
          ].map((f) => (
            <div key={f.label} className="border-b border-surface-border pb-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{f.label}</p>
              <p className={`mt-1 text-[13.5px] text-ink ${f.mono ? "break-all font-mono" : ""}`}>{f.value}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-xl font-medium text-ink">Technical principles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-lg border border-surface-border bg-surface/40 p-5">
              <p.icon className="h-5 w-5 text-line" />
              <h3 className="mt-3 text-[14.5px] font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
