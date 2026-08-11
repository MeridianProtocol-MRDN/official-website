export interface RegulatoryItem {
  id: string;
  name: string;
  status: string;
  description: string;
}

export const REGULATORY_ITEMS: RegulatoryItem[] = [
  {
    id: "MRDN-LGL-015",
    name: "Token Legal Classification",
    status: "PENDING EXTERNAL LEGAL REVIEW",
    description: "Whether MRDN is classified as a security, utility token, or other instrument in any given jurisdiction has not been assessed by qualified counsel.",
  },
  {
    id: "MRDN-LGL-016",
    name: "Regulatory Analysis",
    status: "PENDING EXTERNAL REVIEW",
    description: "A jurisdiction-by-jurisdiction regulatory assessment has not yet been commissioned.",
  },
  {
    id: "MRDN-LGL-017",
    name: "Jurisdictional Analysis",
    status: "NOT YET COMPLETED",
    description: "Which jurisdictions MRDN can lawfully be offered, marketed, or traded in has not been determined.",
  },
  {
    id: "MRDN-LGL-018",
    name: "KYC/AML Assessment",
    status: "TO BE DETERMINED",
    description: "Whether KYC/AML processes are required depends on what activities the project actually conducts — no assessment applies until that's decided.",
  },
  {
    id: "MRDN-LGL-019",
    name: "Token Sale Legal Documentation",
    status: "NOT YET REQUIRED",
    description: "No token sale is currently planned. If one is, the required legal documentation will be prepared and reviewed before any sale occurs — not after.",
  },
];
