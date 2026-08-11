import { Link } from "react-router-dom";
import { DOCUMENT_INDEX, statusTone } from "@/data/legalMeta";
import { LEGAL_CHANGELOG } from "@/data/legalChangelog";
import StatusBadge from "@/components/StatusBadge";

export default function DocumentIndex() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Document Index</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Legal Documentation Index</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          Every legal and compliance document, its status, and whether external professional review is
          required and has occurred — one table, nothing hidden.
        </p>

        <div className="mt-10 overflow-x-auto rounded-lg border border-surface-border">
          <table className="w-full min-w-[720px] text-left text-[13px]">
            <thead>
              <tr className="border-b border-surface-border bg-surface/40 text-[11px] uppercase tracking-wider text-ink-faint">
                <th className="px-4 py-3 font-mono">ID</th>
                <th className="px-4 py-3">Document</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Ext. review req.</th>
                <th className="px-4 py-3">Ext. review done</th>
                <th className="px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {DOCUMENT_INDEX.map((d) => (
                <tr key={d.id} className="border-b border-surface-border last:border-0 hover:bg-surface/30">
                  <td className="px-4 py-3 font-mono text-[11px] text-ink-faint">{d.id}</td>
                  <td className="px-4 py-3">
                    <Link to={d.href} className="text-ink hover:text-line">
                      {d.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={d.status} tone={statusTone(d.status)} />
                  </td>
                  <td className="px-4 py-3 text-ink-dim">{d.externalReviewRequired ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-ink-dim">{d.externalReviewOccurred ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 font-mono text-[11px] text-ink-faint">{d.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 text-xl font-medium text-ink">Legal documentation changelog</h2>
        <div className="relative mt-6 space-y-8 border-l border-surface-border pl-8">
          {LEGAL_CHANGELOG.map((entry) => (
            <div key={entry.version} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-base bg-line" />
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h3 className="font-mono text-[13px] text-line">{entry.version}</h3>
                <span className="text-[12px] text-ink-faint">{entry.date}</span>
              </div>
              <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-ink-dim">{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
