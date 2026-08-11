import LegalPage from "./LegalPage";
import { RISK_DISCLOSURE } from "@/data/legal";
export default function RiskDisclosure() {
  return <LegalPage doc={RISK_DISCLOSURE} docId="MRDN-LGL-005" />;
}
