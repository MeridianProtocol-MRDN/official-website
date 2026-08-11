import LegalPage from "./legal/LegalPage";
import { TOKEN_DISCLOSURE } from "@/data/tokenDisclosure";

export default function TokenDisclosure() {
  return <LegalPage doc={TOKEN_DISCLOSURE} docId="MRDN-LGL-006" />;
}
