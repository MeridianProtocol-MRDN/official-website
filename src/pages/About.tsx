import { TOKEN_CONFIG, PROJECT_STATUS } from "@/data/token";
import StatusBadge from "@/components/StatusBadge";

export default function About() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Overview</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">About Meridian</h1>

        <div className="mt-5">
          <StatusBadge status={PROJECT_STATUS.stage} tone="progress" />
        </div>

        <div className="mt-8 space-y-6 text-[14.5px] leading-relaxed text-ink-dim">
          <p>
            Meridian Protocol is a Web3 project built around {TOKEN_CONFIG.symbol}, a fixed-supply{" "}
            {TOKEN_CONFIG.standard} token deployed on {TOKEN_CONFIG.chain}. The project is in active
            development: the token contract is live and verified, while the surrounding ecosystem —
            audit, tokenomics allocation, liquidity, and utility — is being built and disclosed in
            stages, in the order shown on the roadmap.
          </p>
          <p>
            The guiding principle of this site is that status pages should describe what is actually
            true right now, not what is intended. Where something is planned rather than shipped, it is
            labeled PLANNED, IN PROGRESS, or COMING SOON rather than presented as live.
          </p>
          <p>
            For the full technical and economic design, read the whitepaper and litepaper. For what has
            and hasn't been verified from a security standpoint, read the security page.
          </p>
        </div>
      </div>
    </div>
  );
}
