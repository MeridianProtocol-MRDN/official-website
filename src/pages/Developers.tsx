import { Github, FileCode, BookOpen, ShieldAlert, Bug } from "lucide-react";
import { SITE_CONFIG, TOKEN_CONFIG } from "@/data/token";
import StatusBadge from "@/components/StatusBadge";

const RESOURCES = [
  {
    icon: Github,
    title: "Source repository",
    desc: "Website source code, issue tracker, and release history.",
    href: SITE_CONFIG.githubUrl,
    status: "LIVE",
  },
  {
    icon: FileCode,
    title: "Smart contract",
    desc: "Verified MRDN contract source, read directly on BscScan.",
    href: TOKEN_CONFIG.explorerUrl,
    status: "LIVE",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Whitepaper, litepaper, and every status page on this site.",
    href: "/documentation",
    status: "LIVE",
  },
  {
    icon: Bug,
    title: "Bug / vulnerability reports",
    desc: "Responsible disclosure process for security issues.",
    href: "/security-policy",
    status: "LIVE",
  },
];

export default function Developers() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Developers</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Developer Portal</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          Everything needed to independently inspect, verify, or contribute to Meridian — no separate
          request required.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-lg border border-surface-border bg-surface/40 p-5 transition-colors hover:border-line/50"
            >
              <div className="flex items-start justify-between">
                <r.icon className="h-5 w-5 text-line" />
                <StatusBadge status={r.status} />
              </div>
              <h3 className="mt-3 text-[14.5px] font-medium text-ink">{r.title}</h3>
              <p className="mt-1.5 text-[13px] text-ink-dim">{r.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-status-progress/30 bg-status-progress/10 p-5">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-status-progress" />
          <p className="text-[13.5px] leading-relaxed text-ink-dim">
            A dedicated SDK or public API is not currently planned or in development. If that changes,
            it will be listed here — not before.
          </p>
        </div>
      </div>
    </div>
  );
}
