import LegalPage from "./legal/LegalPage";

const DOC = {
  eyebrow: "Security",
  title: "Vulnerability Disclosure Policy",
  notice:
    "A formal bug-bounty program does not currently exist. This page describes how to report a suspected issue responsibly in the meantime.",
  sections: [
    {
      heading: "Scope",
      body: "This policy covers the MRDN smart contract and the meridianprotocol.site website.",
    },
    {
      heading: "How to report",
      body: "Email admin@meridianprotocol.site with a clear description of the issue, steps to reproduce, and potential impact. Do not disclose the issue publicly before it has been addressed.",
    },
    {
      heading: "What to expect",
      body: "As a small, early-stage project, response times are best-effort rather than SLA-backed. You will receive an acknowledgment once the report is reviewed.",
    },
    {
      heading: "Safe harbor",
      body: "Good-faith security research conducted in line with this policy, without accessing or modifying other users' data, will not be treated as a violation of these terms.",
    },
  ],
};

export default function SecurityPolicy() {
  return <LegalPage doc={DOC} docId="MRDN-LGL-009" />;
}
