import LegalPage from "./legal/LegalPage";
import { ACCEPTABLE_USE } from "@/data/legal";

export default function AcceptableUse() {
  return <LegalPage doc={ACCEPTABLE_USE} docId="MRDN-LGL-013" />;
}
