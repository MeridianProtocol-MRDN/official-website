import { Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface DocPageProps {
  eyebrow: string;
  title: string;
  pages: number;
  updated: string;
  href: string;
}

export default function DocumentPage({ eyebrow, title, pages, updated, href }: DocPageProps) {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">{eyebrow}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-medium text-ink">{title}</h1>
          <div className="flex gap-2">
            <a
              href={href}
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-4 py-2 text-[13px] text-ink hover:border-line/50"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-line px-4 py-2 text-[13px] font-semibold text-base-deep hover:bg-line-soft"
            >
              Open <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <p className="mt-2 font-mono text-[12px] text-ink-faint">
          v1 · {pages} pages · Updated {updated} ·{" "}
          <Link to="/changelog" className="underline hover:text-ink">
            Change history
          </Link>
        </p>

        <div className="mt-8 overflow-hidden rounded-lg border border-surface-border bg-surface/30" style={{ height: "80vh" }}>
          <iframe title={title} src={href} className="h-full w-full" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
