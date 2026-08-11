export default function InvestorDisclosure() {
  const items = [
    "Technical architecture",
    "Tokenomics, once wallet-level allocation is finalized and published",
    "Roadmap",
    "Independent audit results, once completed",
    "Legal review outcome",
    "Liquidity strategy",
    "Ecosystem development plan",
  ];

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">For investors & partners</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Structured materials — in preparation</h1>
        <p className="mt-4 text-[14.5px] leading-relaxed text-ink-dim">
          Meridian is preparing a structured documentation package covering:
        </p>
        <ul className="mt-5 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink-dim">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-lg border border-status-progress/30 bg-status-progress/10 p-5 text-[13.5px] leading-relaxed text-ink-dim">
          No funding, partnership, or investment commitment currently exists. This page will link to
          real documents as each one is actually completed — not before.
        </div>
      </div>
    </div>
  );
}
