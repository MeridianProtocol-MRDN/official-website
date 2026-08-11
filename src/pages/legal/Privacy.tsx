import LegalPage from "./LegalPage";
import { PRIVACY_POLICY } from "@/data/legal";
export default function Privacy() {
  return <LegalPage doc={PRIVACY_POLICY} docId="MRDN-LGL-002" />;
}
