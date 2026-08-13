export interface SecurityItem {
  id: string;
  status: "VERIFIED" | "PLANNED / IN PROGRESS" | "PLANNED";
  title: string;
  description: string;
}

export const SECURITY_ITEMS: SecurityItem[] = [
  {
    id: "source-verification",
    status: "VERIFIED",
    title: "Source code verification",
    description:
      "Deployed bytecode matches published source, confirmed on BscScan. This confirms what code is running — it is not a security audit.",
  },
  {
    id: "solidityscan-token",
    status: "VERIFIED",
    title: "Automated scan — MRDN token (SolidityScan)",
    description:
      "SolidityScan automated score: 95.57/100 — 0 Critical, 0 High, 2 Low, 8 Informational, 4 Gas findings. This is an automated static-analysis tool, not a substitute for the independent manual audit below. Report link to be added.",
  },
  {
    id: "solidityscan-staking",
    status: "VERIFIED",
    title: "Automated scan — MeridianStaking contract (SolidityScan)",
    description:
      "SolidityScan automated score: 90.77/100 — 0 Critical, 0 High, 1 Medium, 4 Low, 24 Informational, 26 Gas findings. This is an automated static-analysis tool, not a substitute for the independent manual audit below. Report link to be added.",
  },
  {
    id: "audit",
    status: "PLANNED / IN PROGRESS",
    title: "Independent security audit",
    description:
      "No third-party Solidity audit has been commissioned yet. Do not treat MRDN as audited until a named auditor's report is linked here. An informal, non-certified read-through exists — it is[...]
  },
  {
    id: "legal-review",
    status: "PLANNED",
    title: "Legal & securities review",
    description:
      "Professional legal review of the token structure and this site's language has not yet been obtained.",
  },
];

export const CONTRACT_ADMIN_SURFACE =
  "Per the deployed and verified source: no owner address, no mint function, no pause function, no blacklist function. This is a factual description of the contract as deployed, not a claim that i[...]

export const SEED_PHRASE_WARNING =
  "Meridian Protocol will never request your seed phrase, private key, or wallet password.";
