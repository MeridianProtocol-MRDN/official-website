export interface LegalChangeEntry {
  version: string;
  date: string;
  summary: string;
}

export const LEGAL_CHANGELOG: LegalChangeEntry[] = [
  {
    version: "v2.0",
    date: "2026-08",
    summary:
      "Expanded the legal system into a full documentation package: added Token Disclosure, Investor Disclosure, Meridian Security Policy, Acceptable Use Policy, Intellectual Property Policy, and the Regulatory & Professional Review center. Introduced the formal document status system (Draft / In Review / Pending External Review / Verified / Approved).",
  },
  {
    version: "v1.0",
    date: "2026",
    summary:
      "Initial legal set: Terms of Use, Privacy Policy, Risk Disclosure, Disclaimer, Cookie Policy, Community Guidelines, Security Policy (vulnerability disclosure), Incident Response.",
  },
];
