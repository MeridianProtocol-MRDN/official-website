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
    id: "audit",
    status: "PLANNED / IN PROGRESS",
    title: "Independent security audit",
    description:
      "No third-party Solidity audit has been commissioned yet. Do not treat MRDN as audited until a named auditor's report is linked here. An informal, non-certified read-through exists — it is not a substitute.",
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
  "Per the deployed and verified source: no owner address, no mint function, no pause function, no blacklist function. This is a factual description of the contract as deployed, not a claim that it has been independently audited for correctness or vulnerabilities.";

export const SEED_PHRASE_WARNING =
  "Meridian Protocol will never request your seed phrase, private key, or wallet password.";
