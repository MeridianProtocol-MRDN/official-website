import LegalPage from "./LegalPage";
import { DISCLAIMER } from "@/data/legal";
export default function Disclaimer() {
  return <LegalPage doc={DISCLAIMER} docId="MRDN-LGL-004" />;
}
