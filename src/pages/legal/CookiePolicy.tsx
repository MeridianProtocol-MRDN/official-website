import LegalPage from "./LegalPage";
import { COOKIE_POLICY } from "@/data/legal";
export default function CookiePolicy() {
  return <LegalPage doc={COOKIE_POLICY} docId="MRDN-LGL-003" />;
}
