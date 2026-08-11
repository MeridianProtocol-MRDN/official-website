// Single source of truth for all token facts referenced across the site.
// Update values here only — never hardcode the contract address, supply,
// or links inside individual components.

export const TOKEN_CONFIG = {
  name: "Meridian Protocol",
  symbol: "MRDN",
  chain: "BNB Smart Chain",
  chainId: 56,
  standard: "BEP-20",
  contractAddress: "0xd4025a390a0b2a606f24Ea33A902D10D978715F2",
  totalSupply: "1,000,000,000",
  totalSupplyRaw: 1_000_000_000,
  circulatingSupply: "Not yet defined",
  explorerUrl:
    "https://bscscan.com/token/0xd4025a390a0b2a606f24Ea33A902D10D978715F2",
  contractVerified: true,
  auditStatus: "pending" as const, // "pending" | "in-progress" | "completed"
} as const;

export const SITE_CONFIG = {
  domain: "meridianprotocol.site",
  url: "https://meridianprotocol.site",
  contactEmail: "admin@meridianprotocol.site",
  githubUrl: "https://github.com/meridian-protocol", // update once repo is public
  twitterUrl: "https://x.com/Meridian_MRDN",
  twitterHandle: "@Meridian_MRDN",
  discordUrl: "https://discord.gg/2K3B69k3A",
  telegramUrl: "https://t.me/MeridianProtocol",
} as const;

export const PROJECT_STATUS = {
  // Keep this in sync with reality. Do not mark LIVE unless the product
  // functionality described is actually shipped.
  stage: "DEVELOPMENT" as
    | "PRE-LAUNCH"
    | "DEVELOPMENT"
    | "LIVE"
    | "COMING SOON",
  label: "Token deployed · Product in active development",
} as const;

export const DOCUMENTS = {
  whitepaper: {
    href: "/documents/meridian-whitepaper.pdf",
    pages: 22,
    updated: "2026",
  },
  litepaper: {
    href: "/documents/meridian-litepaper.pdf",
    pages: 13,
    updated: "2026",
  },
} as const;
