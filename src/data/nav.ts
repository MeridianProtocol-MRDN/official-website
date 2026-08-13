export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "Overview", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "MRDN", href: "/token" },
  { label: "Staking", href: "/staking" },
  { label: "Tokenomics", href: "/tokenomics" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Security", href: "/security" },
  { label: "Documentation", href: "/documentation" },
  { label: "Community", href: "/community" },
];

export const FOOTER_NAV = {
  protocol: [
    { label: "Overview", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "MRDN", href: "/token" },
    { label: "Staking", href: "/staking" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Governance", href: "/governance" },
  ],
  resources: [
    { label: "Whitepaper", href: "/whitepaper" },
    { label: "Litepaper", href: "/litepaper" },
    { label: "Documentation", href: "/documentation" },
    { label: "Developers", href: "/developers" },
    { label: "Open Source", href: "/open-source" },
    { label: "Changelog", href: "/changelog" },
    { label: "FAQ", href: "/faq" },
  ],
  trust: [
    { label: "Security Center", href: "/security" },
    { label: "Transparency Center", href: "/transparency" },
    { label: "Official Links", href: "/official-links" },
    { label: "Investors", href: "/investor-disclosure" },
  ],
  community: [
    { label: "X", href: "https://x.com/Meridian_MRDN" },
    { label: "Telegram", href: "https://t.me/MeridianProtocolMRDN" },
    { label: "Discord", href: "https://discord.gg/ymBr23ppCq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Legal & Compliance Center", href: "/legal" },
    { label: "Document Index", href: "/document-index" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Risk Disclosure", href: "/risk-disclosure" },
    { label: "Token Disclosure", href: "/token-disclosure" },
    { label: "Regulatory Review", href: "/regulatory-review" },
  ],
};
