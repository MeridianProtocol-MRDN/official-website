import LegalPage from "./legal/LegalPage";

const DOC = {
  eyebrow: "Community",
  title: "Community Guidelines",
  sections: [
    {
      heading: "Be respectful",
      body: "Harassment, hate speech, and personal attacks are not tolerated in any official Meridian channel.",
    },
    {
      heading: "No financial advice",
      body: "Community members should not present their own opinions as official project guidance, price predictions, or investment advice.",
    },
    {
      heading: "No impersonation",
      body: "Do not impersonate the founder, moderators, or the project itself. Only the channels listed on the Community page are official.",
    },
    {
      heading: "Report scams",
      body: "If you see anyone requesting seed phrases, private keys, or claiming to represent Meridian outside official channels, report it immediately — Meridian will never DM first or ask for wallet credentials.",
    },
    {
      heading: "Enforcement",
      body: "Moderators may remove content or restrict access for violations of these guidelines, at their discretion.",
    },
  ],
};

export default function CommunityGuidelines() {
  return <LegalPage doc={DOC} docId="MRDN-LGL-012" />;
}
