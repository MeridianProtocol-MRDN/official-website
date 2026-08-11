// Central metadata registry for every legal/compliance document. This is
// the single source of truth for status badges, the Document Index table,
// and the standalone legal archive — update a document's status here only.

export type DocStatus =
  | "DRAFT"
  | "IN REVIEW"
  | "PENDING EXTERNAL REVIEW"
  | "PENDING EXTERNAL LEGAL REVIEW"
  | "VERIFIED"
  | "APPROVED"
  | "NOT APPLICABLE"
  | "NOT YET REQUIRED"
  | "NOT YET COMPLETED"
  | "TO BE DETERMINED";

export function statusTone(status: DocStatus): "live" | "progress" | "planned" {
  if (status === "VERIFIED" || status === "APPROVED") return "live";
  if (status === "DRAFT" || status === "IN REVIEW" || status.startsWith("PENDING")) return "progress";
  return "planned";
}

export interface DocMeta {
  id: string;
  name: string;
  category: "Legal" | "Security" | "Community" | "Corporate & IP" | "Regulatory";
  status: DocStatus;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  nextReview: string;
  owner: string;
  externalReviewRequired: boolean;
  externalReviewOccurred: boolean;
  href: string;
}

const OWNER = "Meridian Protocol";
const DATE = "2026-08";

export const DOCUMENT_INDEX: DocMeta[] = [
  { id: "MRDN-LGL-001", name: "Terms of Use", category: "Legal", status: "IN REVIEW", version: "2.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/terms" },
  { id: "MRDN-LGL-002", name: "Privacy Policy", category: "Legal", status: "IN REVIEW", version: "2.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/privacy" },
  { id: "MRDN-LGL-003", name: "Cookie Policy", category: "Legal", status: "IN REVIEW", version: "2.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/cookie-policy" },
  { id: "MRDN-LGL-004", name: "General Disclaimer", category: "Legal", status: "IN REVIEW", version: "2.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/disclaimer" },
  { id: "MRDN-LGL-005", name: "Risk Disclosure", category: "Legal", status: "PENDING EXTERNAL LEGAL REVIEW", version: "2.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material project/legal change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/risk-disclosure" },
  { id: "MRDN-LGL-006", name: "MRDN Token Disclosure", category: "Legal", status: "PENDING EXTERNAL LEGAL REVIEW", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon contract or allocation change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/token-disclosure" },
  { id: "MRDN-LGL-007", name: "Investor Information & Disclosure", category: "Legal", status: "PENDING EXTERNAL LEGAL REVIEW", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/investor-disclosure" },
  { id: "MRDN-LGL-008", name: "Meridian Security Policy", category: "Security", status: "DRAFT", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Annually or upon incident", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/security-practices" },
  { id: "MRDN-LGL-009", name: "Vulnerability Disclosure Policy", category: "Security", status: "IN REVIEW", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Annually", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/security-policy" },
  { id: "MRDN-LGL-010", name: "Incident Response Policy", category: "Security", status: "IN REVIEW", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Annually or upon incident", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/incident-response" },
  { id: "MRDN-LGL-011", name: "Official Links / Anti-Phishing Policy", category: "Security", status: "DRAFT", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "As channels change", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/official-links" },
  { id: "MRDN-LGL-012", name: "Community Guidelines", category: "Community", status: "DRAFT", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "As community grows", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/community-guidelines" },
  { id: "MRDN-LGL-013", name: "Acceptable Use Policy", category: "Community", status: "DRAFT", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "As needed", owner: OWNER, externalReviewRequired: false, externalReviewOccurred: false, href: "/acceptable-use" },
  { id: "MRDN-LGL-014", name: "Intellectual Property & Copyright Policy", category: "Corporate & IP", status: "IN REVIEW", version: "1.0", effectiveDate: DATE, lastUpdated: DATE, nextReview: "Upon material change", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/intellectual-property" },
  { id: "MRDN-LGL-015", name: "Token Legal Classification", category: "Regulatory", status: "PENDING EXTERNAL LEGAL REVIEW", version: "—", effectiveDate: "—", lastUpdated: DATE, nextReview: "Upon counsel engagement", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/regulatory-review" },
  { id: "MRDN-LGL-016", name: "Regulatory Analysis", category: "Regulatory", status: "PENDING EXTERNAL REVIEW", version: "—", effectiveDate: "—", lastUpdated: DATE, nextReview: "Upon counsel engagement", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/regulatory-review" },
  { id: "MRDN-LGL-017", name: "Jurisdictional Analysis", category: "Regulatory", status: "NOT YET COMPLETED", version: "—", effectiveDate: "—", lastUpdated: DATE, nextReview: "Upon counsel engagement", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/regulatory-review" },
  { id: "MRDN-LGL-018", name: "KYC/AML Assessment", category: "Regulatory", status: "TO BE DETERMINED", version: "—", effectiveDate: "—", lastUpdated: DATE, nextReview: "Based on applicable activities", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/regulatory-review" },
  { id: "MRDN-LGL-019", name: "Token Sale Legal Documentation", category: "Regulatory", status: "NOT YET REQUIRED", version: "—", effectiveDate: "—", lastUpdated: DATE, nextReview: "Pending business model decision", owner: OWNER, externalReviewRequired: true, externalReviewOccurred: false, href: "/regulatory-review" },
];

export function getDocMeta(id: string): DocMeta | undefined {
  return DOCUMENT_INDEX.find((d) => d.id === id);
}
