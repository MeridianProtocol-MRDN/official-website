import { LegalDoc } from "./legal";
import { TOKEN_CONFIG } from "./token";

export const TOKEN_DISCLOSURE: LegalDoc = {
  eyebrow: "Legal",
  title: "MRDN Token Disclosure",
  notice:
    "This document consolidates verified token facts for due-diligence purposes. It is pending external legal review and is not investment advice.",
  sections: [
    { heading: "Token name", body: TOKEN_CONFIG.name },
    { heading: "Symbol", body: TOKEN_CONFIG.symbol },
    { heading: "Blockchain", body: TOKEN_CONFIG.chain },
    { heading: "Token standard", body: TOKEN_CONFIG.standard },
    { heading: "Contract address", body: TOKEN_CONFIG.contractAddress },
    { heading: "Total supply", body: `${TOKEN_CONFIG.totalSupply} ${TOKEN_CONFIG.symbol}, fixed at deployment. No mint function exists.` },
    { heading: "Contract verification", body: TOKEN_CONFIG.contractVerified ? "Source code verified on BscScan." : "Not yet verified." },
    { heading: "Administrative controls", body: "No owner address, mint function, pause function, or blacklist function exists in the deployed contract." },
    { heading: "Audit status", body: "No independent third-party security audit has been completed as of this document's last update." },
    { heading: "Current utility", body: "None. No utility is live on-chain as of this document's last update." },
    { heading: "Planned utility", body: "Governance participation, staking, and ecosystem rewards are exploratory roadmap directions — not committed features with a delivery date." },
    { heading: "Distribution & liquidity", body: "No token distribution or liquidity provisioning has occurred as of this document's last update. This section will be updated with wallet-level evidence once either happens." },
    { heading: "Token risks", body: "See the Risk Disclosure (MRDN-LGL-005) for the full risk set, including volatility, liquidity, smart-contract, and regulatory risk." },
  ],
};
