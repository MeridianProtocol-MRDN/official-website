export type AllocationStatus =
  | "Confirmed"
  | "Locked"
  | "Vesting"
  | "Planned"
  | "TBD";

export interface AllocationCategory {
  id: string;
  name: string;
  status: AllocationStatus;
  note?: string;
}

// No allocation percentages have been assigned to wallets yet. This is a
// structural framework under consideration, not a distribution that has
// happened. Update with real percentages only once wallet addresses, a
// treasury multisig, and any vesting contracts actually exist and are
// published on-chain.
export const ALLOCATION_CATEGORIES: AllocationCategory[] = [
  { id: "community", name: "Community & Ecosystem", status: "TBD" },
  { id: "liquidity", name: "Liquidity", status: "TBD" },
  { id: "treasury", name: "Treasury", status: "TBD" },
  { id: "team", name: "Founder / Team", status: "TBD" },
  { id: "marketing", name: "Marketing", status: "TBD" },
  { id: "reserve", name: "Strategic Reserve", status: "TBD" },
];

export const TOKENOMICS_NOTE =
  "Total supply is a fact about the contract. Circulating supply depends on which wallets are actually distributed and unlocked — since no distribution has happened, it is undefined rather than equal to total supply.";
