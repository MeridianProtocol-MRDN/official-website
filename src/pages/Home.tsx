import { ArrowRight, FileText, Github, ShieldCheck, Copy, Check, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import StatusBadge from "@/components/StatusBadge";
import MeridianField from "@/components/MeridianField";
import { TOKEN_CONFIG, PROJECT_STATUS, DOCUMENTS, SITE_CONFIG } from "@/data/token";
import { ROADMAP } from "@/data/roadmap";

function ContractRow() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-surface-border bg-surface/60 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Contract address</p>
        <p className="mt-1 truncate font-mono text-[13px] text-ink">{TOKEN_CONFIG.contractAddress}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-2 text-[12.5px] text-ink-dim hover:text-ink transition-colors"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
        <a
          href={TOKEN_CONFIG.explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-line px-3 py-2 text-[12.5px] font-semibold text-base-deep hover:bg-line-soft transition-colors"
        >
          BscScan
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border">
        <MeridianField className="grid-field" />
        <div className="container-page relative py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center animate-fadeUp">
              <StatusBadge status={PROJECT_STATUS.stage} tone="progress" />
            </div>
            <h1 className="animate-fadeUp text-4xl font-medium leading-[1.1] text-ink sm:text-5xl" style={{ animationDelay: "80ms" }}>
              Coordinates for a
              <br /> transparent Web3 protocol.
            </h1>
            <p
              className="mx-auto mt-6 max-w-lg animate-fadeUp text-[15.5px] leading-relaxed text-ink-dim"
              style={{ animationDelay: "160ms" }}
            >
              Meridian Protocol is a Web3 project built around MRDN on {TOKEN_CONFIG.chain}.
              Every claim on this site is labeled by what's actually true today —
              not what's planned.
            </p>
            <div
              className="mt-9 flex animate-fadeUp flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="/about" icon={<ArrowRight className="h-4 w-4" />}>
                Explore Protocol
              </Button>
              <Button href={DOCUMENTS.whitepaper.href} variant="secondary" external icon={<FileText className="h-4 w-4" />}>
                Read Whitepaper
              </Button>
              <Button href="/documentation" variant="secondary" icon={<BookOpen className="h-4 w-4" />}>
                Documentation
              </Button>
              <Button href={SITE_CONFIG.githubUrl} variant="ghost" external icon={<Github className="h-4 w-4" />}>
                GitHub
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl animate-fadeUp" style={{ animationDelay: "320ms" }}>
            <ContractRow />
          </div>
        </div>
      </section>

      {/* Trust & transparency strip */}
      <section className="border-b border-surface-border bg-surface/30">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {[
            { label: "Blockchain", value: TOKEN_CONFIG.chain },
            { label: "Token Standard", value: TOKEN_CONFIG.standard },
            { label: "Total Supply", value: `${TOKEN_CONFIG.totalSupply} ${TOKEN_CONFIG.symbol}` },
            { label: "Contract Status", value: TOKEN_CONFIG.contractVerified ? "Verified" : "Unverified" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{item.label}</p>
              <p className="mt-1.5 text-[14.5px] font-medium text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Meridian */}
      <section className="border-b border-surface-border">
        <div className="container-page py-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-line">Why Meridian?</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {[
              {
                q: "Problem",
                a: "Many token websites present intentions as facts — marking unfinished work as done, or product features as live before they exist.",
              },
              {
                q: "Approach",
                a: "Every status on this site is labeled by what's actually true today, with a way to check it independently — not by what's planned.",
              },
              {
                q: "Technology",
                a: `A fixed-supply ${TOKEN_CONFIG.standard} token on ${TOKEN_CONFIG.chain}, verified on-chain, with no owner, mint, pause, or blacklist function.`,
              },
              {
                q: "Evidence",
                a: "The contract, the source code, the supply, and every document referenced here can be checked directly — see the Transparency Center.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-[13px] font-mono uppercase tracking-wider text-ink-faint">{item.q}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Security-first disclosure",
              body: "Audit status, contract admin surface, and legal review status are all shown plainly — including what has not happened yet.",
            },
            {
              icon: FileText,
              title: "Documented, not hyped",
              body: "A 22-page whitepaper and 13-page litepaper lay out the technical and economic design without guaranteed-return language.",
            },
            {
              icon: Github,
              title: "Built in the open",
              body: "Development, deployment history, and roadmap status are tracked publicly as the project actually progresses.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-surface-border bg-surface/40 p-6">
              <f.icon className="h-5 w-5 text-line" />
              <h3 className="mt-4 text-[15px] font-medium text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-dim">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap teaser */}
      <section className="border-t border-surface-border bg-surface/20">
        <div className="container-page py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-line">Sequence</p>
              <h2 className="mt-2 text-2xl font-medium text-ink">Roadmap status</h2>
            </div>
            <Link to="/roadmap" className="hidden text-[13.5px] text-ink-dim hover:text-ink sm:inline-flex items-center gap-1">
              Full roadmap <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ROADMAP.map((phase) => (
              <div key={phase.id} className="rounded-lg border border-surface-border bg-base p-5">
                <StatusBadge status={phase.status} />
                <p className="mt-3 font-mono text-[11px] text-ink-faint">{phase.phase}</p>
                <h3 className="mt-1 text-[14.5px] font-medium text-ink">{phase.title}</h3>
              </div>
            ))}
          </div>
          <Link to="/roadmap" className="mt-8 inline-flex items-center gap-1 text-[13.5px] text-ink-dim hover:text-ink sm:hidden">
            Full roadmap <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-page py-20">
        <div className="rounded-xl border border-surface-border bg-surface/40 p-10 text-center sm:p-14">
          <h2 className="text-2xl font-medium text-ink">Read the documentation before anything else.</h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-ink-dim">
            The whitepaper, litepaper, and security page describe exactly what exists today and what's still planned.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/documentation">Browse documentation</Button>
            <Button href="/security" variant="secondary">
              Security status
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
