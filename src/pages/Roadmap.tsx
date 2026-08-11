import { ROADMAP } from "@/data/roadmap";
import StatusBadge from "@/components/StatusBadge";

export default function Roadmap() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Sequence</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Detailed roadmap</h1>
        <p className="mt-3 text-[14.5px] text-ink-dim">
          Status reflects reality, not intent. A phase is only marked completed when it is actually
          completed.
        </p>

        <div className="relative mt-14 space-y-10 border-l border-surface-border pl-8">
          {ROADMAP.map((phase) => (
            <div key={phase.id} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-base bg-line" />
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{phase.phase}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
                <h2 className="text-[17px] font-medium text-ink">{phase.title}</h2>
                <StatusBadge status={phase.status} />
              </div>
              <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-ink-dim">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
