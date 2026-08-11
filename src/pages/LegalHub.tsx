import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList } from "lucide-react";
import { DOCUMENT_INDEX, statusTone } from "@/data/legalMeta";
import StatusBadge from "@/components/StatusBadge";

const CATEGORIES = ["Legal", "Security", "Community", "Corporate & IP", "Regulatory"] as const;

export default function LegalHub() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Legal</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Legal & Compliance Center</h1>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-dim">
          All documents below are project disclosures, not certified legal advice, pending review by
          qualified external counsel unless their status says otherwise.
        </p>

        <Link
          to="/document-index"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-line/40 bg-line/5 px-4 py-2.5 text-[13px] text-ink hover:border-line/70"
        >
          <ClipboardList className="h-4 w-4" /> View full document index & status table
        </Link>

        {CATEGORIES.map((cat) => {
          const docs = DOCUMENT_INDEX.filter((d) => d.category === cat);
          if (docs.length === 0) return null;
          return (
            <div key={cat} className="mt-12">
              <h2 className="text-[13px] font-mono uppercase tracking-wider text-ink-faint">{cat}</h2>
              <div className="mt-4 divide-y divide-surface-border rounded-lg border border-surface-border">
                {docs.map((d) => (
                  <Link
                    key={d.id}
                    to={d.href}
                    className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-surface/40"
                  >
                    <div>
                      <p className="text-[14px] text-ink">{d.name}</p>
                      <p className="mt-1 font-mono text-[10.5px] text-ink-faint">{d.id}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <StatusBadge status={d.status} tone={statusTone(d.status)} />
                      <ArrowRight className="h-3.5 w-3.5 text-ink-faint transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
