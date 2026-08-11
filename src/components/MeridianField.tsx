// The site's signature visual element: a field of converging meridian
// (longitude) lines, evoking navigation charts — a literal, honest
// expression of the brand name rather than a generic crypto glow.
// Purely decorative: no counters, no fabricated data, respects
// prefers-reduced-motion via the global stylesheet.

interface MeridianFieldProps {
  className?: string;
  dense?: boolean;
}

export default function MeridianField({ className = "", dense = false }: MeridianFieldProps) {
  const lineCount = dense ? 14 : 9;
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMin slice"
        className="h-full w-full opacity-60"
      >
        <defs>
          <linearGradient id="meridianFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((i) => {
          const topX = 600 + (i - lineCount / 2) * 26;
          return (
            <path
              key={i}
              d={`M ${topX} -40 Q 600 300 ${600 + (topX - 600) * 2.4} 640`}
              stroke="url(#meridianFade)"
              strokeWidth={i === Math.floor(lineCount / 2) ? 1.4 : 0.7}
              fill="none"
            />
          );
        })}
        {/* equatorial arcs */}
        {[220, 340, 460].map((ry) => (
          <ellipse
            key={ry}
            cx="600"
            cy="60"
            rx="560"
            ry={ry}
            stroke="rgba(232,236,244,0.06)"
            strokeWidth="0.6"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}
