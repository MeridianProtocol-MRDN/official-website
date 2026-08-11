import LegalPage from "./LegalPage";
import { TERMS_OF_USE } from "@/data/legal";
export default function Terms() {
  return <LegalPage doc={TERMS_OF_USE} docId="MRDN-LGL-001" />;
}
