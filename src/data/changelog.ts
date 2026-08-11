export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "v1.0.0",
    date: "2026",
    title: "Production website rebuild",
    changes: [
      "Rebuilt the site on React, TypeScript, Vite, and Tailwind CSS",
      "Centralized all project facts into a single data layer to prevent inconsistent figures across pages",
      "Added Security Center, Transparency Center, Governance, Technology, Developer Portal, and Official Links Registry pages",
      "Added CI/CD pipeline (typecheck, lint, dependency audit, build, deploy)",
      "Added Cloudflare Pages security headers (CSP, HSTS, and related)",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026",
    title: "Initial static site",
    changes: [
      "Initial static HTML/CSS/JS website covering token facts, tokenomics framework, roadmap, and legal disclosures",
    ],
  },
];
