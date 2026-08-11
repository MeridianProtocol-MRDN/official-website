import LegalPage from "./legal/LegalPage";

const DOC = {
  eyebrow: "Security",
  title: "Incident Response",
  notice:
    "No security incident has occurred as of this writing. This page describes the intended process if one does.",
  sections: [
    {
      heading: "Detection",
      body: "Reports arrive via the vulnerability disclosure channel, on-chain monitoring, or community reports.",
    },
    {
      heading: "Assessment",
      body: "Any credible report is assessed for validity and severity before any public statement is made, to avoid causing unnecessary alarm from unverified claims.",
    },
    {
      heading: "Disclosure",
      body: "Confirmed incidents affecting users or the contract will be disclosed through the official Community channels as soon as accurate information is available.",
    },
    {
      heading: "Remediation",
      body: "Given the contract has no owner, mint, pause, or blacklist function, on-chain remediation options are limited by design. Any response will be described honestly, including where it can't fix an on-chain issue directly.",
    },
  ],
};

export default function IncidentResponse() {
  return <LegalPage doc={DOC} docId="MRDN-LGL-010" />;
}
