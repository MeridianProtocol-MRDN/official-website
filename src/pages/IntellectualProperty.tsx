import LegalPage from "./legal/LegalPage";
import { INTELLECTUAL_PROPERTY } from "@/data/legal";

export default function IntellectualProperty() {
  return <LegalPage doc={INTELLECTUAL_PROPERTY} docId="MRDN-LGL-014" />;
}
