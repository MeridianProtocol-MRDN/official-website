interface StatusBadgeProps {
  status: string;
  tone?: "live" | "progress" | "planned" | "danger" | "neutral";
}

const TONE_CLASSES: Record<string, string> = {
  live: "bg-status-live/10 text-status-live border-status-live/30",
  progress: "bg-status-progress/10 text-status-progress border-status-progress/30",
  planned: "bg-status-planned/10 text-ink-dim border-surface-border",
  danger: "bg-status-danger/10 text-status-danger border-status-danger/30",
  neutral: "bg-line/10 text-line border-line/30",
};

function inferTone(status: string): NonNullable<StatusBadgeProps["tone"]> {
  const s = status.toUpperCase();
  if (s.includes("COMPLETED") || s === "VERIFIED" || s === "LIVE") return "live";
  if (s.includes("PROGRESS")) return "progress";
  if (s.includes("PLANNED") || s.includes("TBD") || s.includes("FUTURE")) return "planned";
  return "neutral";
}

export default function StatusBadge({ status, tone }: StatusBadgeProps) {
  const resolvedTone = tone ?? inferTone(status);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${TONE_CLASSES[resolvedTone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
