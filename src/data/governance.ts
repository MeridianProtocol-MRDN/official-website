export interface GovernanceControl {
  label: string;
  detail: string;
}

// Describes who actually controls what today. No DAO exists — do not
// imply one. Update the moment any of this changes on-chain.
export const CURRENT_GOVERNANCE: GovernanceControl[] = [
  {
    label: "Contract parameters",
    detail:
      "The MRDN contract has no owner address, mint function, pause function, or blacklist function. There is nothing for a privileged account to control post-deployment.",
  },
  {
    label: "Website & documentation",
    detail: "Maintained directly by the project founder via the official GitHub repository.",
  },
  {
    label: "Treasury / funds",
    detail: "No treasury multisig or fund has been established yet.",
  },
  {
    label: "Roadmap direction",
    detail: "Set by the founder based on what can realistically be delivered and verified.",
  },
];

export const FUTURE_GOVERNANCE =
  "Community participation in decision-making (proposals, voting, or a formal governance process) is an exploratory direction, not a committed feature. If pursued, it will be scoped and announced on the roadmap before implementation — not presented as live before it exists.";
