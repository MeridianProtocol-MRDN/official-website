import { Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Technology from "@/pages/Technology";
import Token from "@/pages/Token";
import Tokenomics from "@/pages/Tokenomics";
import Roadmap from "@/pages/Roadmap";
import Security from "@/pages/Security";
import Governance from "@/pages/Governance";
import Ecosystem from "@/pages/Ecosystem";
import Developers from "@/pages/Developers";
import Transparency from "@/pages/Transparency";
import OfficialLinks from "@/pages/OfficialLinks";
import Changelog from "@/pages/Changelog";
import OpenSource from "@/pages/OpenSource";
import Community from "@/pages/Community";
import Documentation from "@/pages/Documentation";
import Whitepaper from "@/pages/Whitepaper";
import Litepaper from "@/pages/Litepaper";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import LegalHub from "@/pages/LegalHub";
import DocumentIndex from "@/pages/DocumentIndex";
import TokenDisclosure from "@/pages/TokenDisclosure";
import RegulatoryReview from "@/pages/RegulatoryReview";
import AcceptableUse from "@/pages/AcceptableUse";
import IntellectualProperty from "@/pages/IntellectualProperty";
import SecurityPractices from "@/pages/SecurityPractices";
import InvestorDisclosure from "@/pages/InvestorDisclosure";
import CommunityGuidelines from "@/pages/CommunityGuidelines";
import SecurityPolicy from "@/pages/SecurityPolicy";
import IncidentResponse from "@/pages/IncidentResponse";
import Staking from "@/pages/Staking";
import NotFound from "@/pages/NotFound";

import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import RiskDisclosure from "@/pages/legal/RiskDisclosure";
import Disclaimer from "@/pages/legal/Disclaimer";
import CookiePolicy from "@/pages/legal/CookiePolicy";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/token" element={<Token />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/security" element={<Security />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/official-links" element={<OfficialLinks />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/community" element={<Community />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/litepaper" element={<Litepaper />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<LegalHub />} />
        <Route path="/document-index" element={<DocumentIndex />} />
        <Route path="/token-disclosure" element={<TokenDisclosure />} />
        <Route path="/regulatory-review" element={<RegulatoryReview />} />
        <Route path="/acceptable-use" element={<AcceptableUse />} />
        <Route path="/intellectual-property" element={<IntellectualProperty />} />
        <Route path="/security-practices" element={<SecurityPractices />} />
        <Route path="/investor-disclosure" element={<InvestorDisclosure />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/security-policy" element={<SecurityPolicy />} />
        <Route path="/incident-response" element={<IncidentResponse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
