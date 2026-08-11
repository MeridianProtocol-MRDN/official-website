import { CHANGELOG } from "@/data/changelog";

export default function Changelog() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">History</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Changelog</h1>
        <p className="mt-3 text-[14.5px] text-ink-dim">How the project and this website have actually evolved.</p>

        <div className="relative mt-12 space-y-10 border-l border-surface-border pl-8">
          {CHANGELOG.map((entry) => (
            <div key={entry.version} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-base bg-line" />
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h2 className="font-mono text-[13px] text-line">{entry.version}</h2>
                <span className="text-[12px] text-ink-faint">{entry.date}</span>
              </div>
              <h3 className="mt-1 text-[15px] font-medium text-ink">{entry.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {entry.changes.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
