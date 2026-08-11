import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DOC_LINKS = [
  { num: "01", title: "Introduction", href: "/about", desc: "What Meridian is and current project status." },
  { num: "02", title: "Meridian Protocol", href: "/about", desc: "Problem, approach, and long-term direction." },
  { num: "03", title: "Architecture", href: "/technology", desc: "Current and future technical architecture." },
  { num: "04", title: "MRDN Token", href: "/token", desc: "Contract facts, supply, and on-chain verification." },
  { num: "05", title: "Tokenomics", href: "/tokenomics", desc: "Allocation framework and supply mechanics." },
  { num: "06", title: "Ecosystem", href: "/ecosystem", desc: "What's being built around the token." },
  { num: "07", title: "Security", href: "/security", desc: "Verification status, audit status, admin surface." },
  { num: "08", title: "Governance", href: "/governance", desc: "Who controls what today, and what's planned." },
  { num: "09", title: "Roadmap", href: "/roadmap", desc: "Phase-by-phase sequence and real status." },
  { num: "10", title: "FAQ", href: "/faq", desc: "Common questions, answered directly." },
  { num: "11", title: "Developers", href: "/developers", desc: "Source, contract, and contribution resources." },
  { num: "12", title: "Legal", href: "/legal", desc: "Terms, privacy, risk disclosure, and disclaimers." },
];

export default function Documentation() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Documentation</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Everything, in one place</h1>
        <p className="mt-3 max-w-lg text-[14.5px] text-ink-dim">
          Every claim made elsewhere on this site traces back to a page here. Whitepaper and litepaper
          sit at the center — the pages below are the expanded, always-current version of the same
          facts.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/whitepaper"
            className="flex-1 rounded-lg border border-line/40 bg-line/5 p-5 transition-colors hover:border-line/70"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-line">Technical / Comprehensive</p>
            <p className="mt-1.5 text-[15px] font-medium text-ink">Whitepaper</p>
          </Link>
          <Link
            to="/litepaper"
            className="flex-1 rounded-lg border border-surface-border bg-surface/40 p-5 transition-colors hover:border-line/50"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Executive / Quick overview</p>
            <p className="mt-1.5 text-[15px] font-medium text-ink">Litepaper</p>
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {DOC_LINKS.map((doc) => (
            <Link
              key={doc.num}
              to={doc.href}
              className="group flex items-center justify-between gap-4 rounded-lg border border-surface-border bg-surface/40 p-5 transition-colors hover:border-line/50"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-ink-faint">{doc.num}</span>
                <div>
                  <p className="text-[14.5px] font-medium text-ink">{doc.title}</p>
                  <p className="mt-1 text-[13px] text-ink-dim">{doc.desc}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-line" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
