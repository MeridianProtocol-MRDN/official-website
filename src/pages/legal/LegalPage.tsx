import { Printer } from "lucide-react";
import { LegalDoc } from "@/data/legal";
import StatusBadge from "@/components/StatusBadge";
import { getDocMeta, statusTone } from "@/data/legalMeta";

export default function LegalPage({ doc, docId }: { doc: LegalDoc; docId?: string }) {
  const meta = docId ? getDocMeta(docId) : undefined;

  return (
    <div className="container-page py-20 print:py-4">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">{doc.eyebrow}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-medium text-ink">{doc.title}</h1>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-1.5 text-[12px] text-ink-dim hover:text-ink print:hidden"
          >
            <Printer className="h-3.5 w-3.5" /> Print / Save PDF
          </button>
        </div>

        {meta && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusBadge status={meta.status} tone={statusTone(meta.status)} />
            <span className="font-mono text-[11px] text-ink-faint">{meta.id}</span>
            <span className="font-mono text-[11px] text-ink-faint">v{meta.version}</span>
          </div>
        )}

        {doc.notice && (
          <div className="mt-6 rounded-lg border border-status-progress/30 bg-status-progress/10 p-4 text-[13.5px] leading-relaxed text-ink-dim">
            {doc.notice}
          </div>
        )}

        <div className="mt-10 space-y-8">
          {doc.sections.map((s) => (
            <div key={s.heading} id={s.heading.toLowerCase().replace(/\s+/g, "-")}>
              <h2 className="text-[15px] font-medium text-ink">{s.heading}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{s.body}</p>
            </div>
          ))}
        </div>

        {meta && (
          <div className="mt-14 rounded-lg border border-surface-border bg-surface/30 p-5 print:border-0 print:bg-transparent print:p-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Document metadata</p>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[12.5px] sm:grid-cols-3">
              <div><dt className="text-ink-faint">Document ID</dt><dd className="text-ink">{meta.id}</dd></div>
              <div><dt className="text-ink-faint">Version</dt><dd className="text-ink">{meta.version}</dd></div>
              <div><dt className="text-ink-faint">Effective date</dt><dd className="text-ink">{meta.effectiveDate}</dd></div>
              <div><dt className="text-ink-faint">Last updated</dt><dd className="text-ink">{meta.lastUpdated}</dd></div>
              <div><dt className="text-ink-faint">Next review</dt><dd className="text-ink">{meta.nextReview}</dd></div>
              <div><dt className="text-ink-faint">Owner</dt><dd className="text-ink">{meta.owner}</dd></div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
