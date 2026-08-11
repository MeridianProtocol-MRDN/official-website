import LegalPage from "./legal/LegalPage";
import { SECURITY_POLICY_GENERAL } from "@/data/legal";

export default function SecurityPractices() {
  return <LegalPage doc={SECURITY_POLICY_GENERAL} docId="MRDN-LGL-008" />;
}
