import { ExternalLink, ShieldAlert } from "lucide-react";
import { TOKEN_CONFIG, SITE_CONFIG } from "@/data/token";

const LINKS = [
  { label: "Website", value: SITE_CONFIG.domain, href: SITE_CONFIG.url },
  { label: "Explorer (contract)", value: "BscScan", href: TOKEN_CONFIG.explorerUrl },
  { label: "GitHub", value: "Official repository", href: SITE_CONFIG.githubUrl },
  { label: "Telegram", value: "@MeridianProtocol", href: "https://t.me/MeridianProtocol" },
  { label: "X (Twitter)", value: SITE_CONFIG.twitterHandle, href: SITE_CONFIG.twitterUrl },
  { label: "Discord", value: "Official server", href: SITE_CONFIG.discordUrl },
  { label: "Email", value: SITE_CONFIG.contactEmail, href: `mailto:${SITE_CONFIG.contactEmail}` },
];

export default function OfficialLinks() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Official links</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Official Links Registry</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-dim">
          Bookmark this page. No other account, group, or website currently speaks for Meridian
          Protocol.
        </p>

        <div className="mt-8 divide-y divide-surface-border rounded-lg border border-surface-border">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 hover:bg-surface/40"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{l.label}</p>
                <p className="mt-0.5 text-[13.5px] text-ink">{l.value}</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-ink-faint" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-lg border border-status-danger/30 bg-status-danger/10 p-5">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-status-danger" />
          <div className="text-[13.5px] leading-relaxed text-ink">
            <p>Meridian Protocol will never DM you first, and will never request your seed phrase, private key, or wallet password.</p>
            <p className="mt-2">Always verify the contract address against this page before interacting with MRDN.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
