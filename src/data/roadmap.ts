export type PhaseStatus = "COMPLETED" | "IN PROGRESS" | "PLANNED" | "FUTURE";

export interface RoadmapPhase {
  id: string;
  phase: string;
  status: PhaseStatus;
  title: string;
  description: string;
}

export const ROADMAP: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    status: "COMPLETED",
    title: "Foundation",
    description:
      "Smart contract development, automated unit tests, testnet and mainnet deployment on BNB Smart Chain, contract verification, core website infrastructure.",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    status: "IN PROGRESS",
    title: "Security & documentation",
    description:
      "Independent smart-contract audit, whitepaper, litepaper, legal documentation, risk disclosure, tokenomics finalization.",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    status: "PLANNED",
    title: "Liquidity & market infrastructure",
    description:
      "Liquidity deployment, liquidity-lock implementation with public proof, trading infrastructure, community expansion — only after Phase 2 is complete.",
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    status: "PLANNED",
    title: "Ecosystem",
    description:
      "Utility development, applications, developer ecosystem, governance research, broader ecosystem integrations — scoped to what can actually be delivered.",
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    status: "FUTURE",
    title: "Expansion",
    description:
      "Future ecosystem expansion based on actual development progress. Exploratory only — not a commitment, and will only be announced if and when actually built.",
  },
];
