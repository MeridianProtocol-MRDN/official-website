import { ExternalLink } from "lucide-react";
import { TOKEN_CONFIG, SITE_CONFIG, DOCUMENTS } from "@/data/token";
import StatusBadge from "@/components/StatusBadge";

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-border py-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 break-all text-[13.5px] text-ink hover:text-line"
        >
          {value}
          <ExternalLink className="h-3 w-3 shrink-0" />
        </a>
      ) : (
        <span className="break-all text-[13.5px] text-ink">{value}</span>
      )}
    </div>
  );
}

export default function Transparency() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Transparency</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Transparency Center</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">
          Every fact below can be independently verified — you don't have to trust this website for any
          of it.
        </p>

        <div className="mt-10 rounded-lg border border-surface-border bg-surface/30 px-5">
          <Row label="Contract address" value={TOKEN_CONFIG.contractAddress} href={TOKEN_CONFIG.explorerUrl} />
          <Row label="Network" value={TOKEN_CONFIG.chain} />
          <Row label="Token" value={`${TOKEN_CONFIG.name} (${TOKEN_CONFIG.symbol})`} />
          <Row label="Total supply" value={`${TOKEN_CONFIG.totalSupply} ${TOKEN_CONFIG.symbol}`} />
          <Row label="Source code" value={TOKEN_CONFIG.contractVerified ? "Verified" : "Unverified"} href={TOKEN_CONFIG.explorerUrl} />
          <Row label="Whitepaper" value={`v1 · ${DOCUMENTS.whitepaper.pages} pages`} href={DOCUMENTS.whitepaper.href} />
          <Row label="Litepaper" value={`v1 · ${DOCUMENTS.litepaper.pages} pages`} href={DOCUMENTS.litepaper.href} />
          <Row label="GitHub" value="Official repository" href={SITE_CONFIG.githubUrl} />
          <Row label="X (Twitter)" value={SITE_CONFIG.twitterHandle} href={SITE_CONFIG.twitterUrl} />
          <Row label="Telegram" value="@MeridianProtocol" href="https://t.me/MeridianProtocol" />
          <Row label="Discord" value="Official server" href={SITE_CONFIG.discordUrl} />
          <Row label="Contact" value={SITE_CONFIG.contactEmail} href={`mailto:${SITE_CONFIG.contactEmail}`} />
        </div>

        <div className="mt-6 flex items-center justify-between rounded-lg border border-surface-border bg-surface/30 px-5 py-4">
          <span className="text-[13.5px] text-ink">Independent security audit</span>
          <StatusBadge status="PENDING" tone="progress" />
        </div>

        <p className="mt-8 text-[12.5px] leading-relaxed text-ink-faint">
          Team profiles are shown here only if and when a real, verifiable person is publicly associated
          with the project — no placeholder or anonymous "team" entries are listed.
        </p>
      </div>
    </div>
  );
}
