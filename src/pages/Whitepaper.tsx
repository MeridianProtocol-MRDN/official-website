import DocumentPage from "@/components/DocumentPage";
import { DOCUMENTS } from "@/data/token";

export default function Whitepaper() {
  return (
    <DocumentPage
      eyebrow="Documentation"
      title="Whitepaper"
      pages={DOCUMENTS.whitepaper.pages}
      updated={DOCUMENTS.whitepaper.updated}
      href={DOCUMENTS.whitepaper.href}
    />
  );
}
