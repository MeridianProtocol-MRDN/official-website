import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { PRIMARY_NAV } from "@/data/nav";
import { TOKEN_CONFIG } from "@/data/token";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-base/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon/token-icon.png" alt="" className="h-7 w-7 rounded-full" />
          <span className="font-display text-[15px] font-medium tracking-wide text-ink">
            MERIDIAN <span className="text-ink-dim">{TOKEN_CONFIG.symbol}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {PRIMARY_NAV.map((item) => (
            <RouterNavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-[13.5px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-ink-dim hover:text-ink"
                }`
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={TOKEN_CONFIG.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-4 py-2 text-[13px] font-medium text-ink hover:border-line/50 hover:text-white transition-colors"
          >
            View Contract
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border bg-base lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {PRIMARY_NAV.map((item) => (
              <RouterNavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2.5 text-[14px] font-medium ${
                    isActive ? "text-ink bg-surface" : "text-ink-dim"
                  }`
                }
              >
                {item.label}
              </RouterNavLink>
            ))}
            <a
              href={TOKEN_CONFIG.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md border border-surface-border px-2 py-2.5 text-center text-[14px] font-medium text-ink"
            >
              View Contract
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
