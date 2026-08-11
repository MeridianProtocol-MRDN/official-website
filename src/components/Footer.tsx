import { Link } from "react-router-dom";
import { TOKEN_CONFIG, SITE_CONFIG } from "@/data/token";
import { FOOTER_NAV } from "@/data/nav";
import { truncateAddress } from "@/lib/format";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            {l.href.startsWith("http") ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] text-ink-dim hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link to={l.href} className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-base-deep">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/favicon/token-icon.png" alt="" className="h-6 w-6 rounded-full" />
              <span className="font-display text-[14px] text-ink">MERIDIAN PROTOCOL</span>
            </div>
            <p className="mt-3 font-mono text-[11px] text-ink-faint">
              {TOKEN_CONFIG.symbol} · {TOKEN_CONFIG.chain}
            </p>
            <p className="mt-1 break-all font-mono text-[11px] text-ink-faint" title={TOKEN_CONFIG.contractAddress}>
              {truncateAddress(TOKEN_CONFIG.contractAddress)}
            </p>
          </div>
          <FooterColumn title="Protocol" links={FOOTER_NAV.protocol} />
          <FooterColumn title="Resources" links={FOOTER_NAV.resources} />
          <FooterColumn title="Trust" links={FOOTER_NAV.trust} />
          <FooterColumn title="Community" links={FOOTER_NAV.community} />
          <FooterColumn title="Legal" links={FOOTER_NAV.legal} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-surface-border pt-6 text-[12px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Meridian Protocol. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wide">
            {SITE_CONFIG.domain} · Fixed Supply {TOKEN_CONFIG.totalSupply} · Not a solicitation to buy tokens
          </p>
        </div>
        <p className="mt-4 text-center text-[11.5px] text-ink-faint sm:text-left">
          Meridian Protocol will never DM you first or request your seed phrase or private key. Always verify the contract address against the{" "}
          <Link to="/official-links" className="underline hover:text-ink">
            Official Links Registry
          </Link>{" "}
          before interacting with MRDN.
        </p>
      </div>
    </footer>
  );
}
