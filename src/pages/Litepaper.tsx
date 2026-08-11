import DocumentPage from "@/components/DocumentPage";
import { DOCUMENTS } from "@/data/token";

export default function Litepaper() {
  return (
    <DocumentPage
      eyebrow="Documentation"
      title="Litepaper"
      pages={DOCUMENTS.litepaper.pages}
      updated={DOCUMENTS.litepaper.updated}
      href={DOCUMENTS.litepaper.href}
    />
  );
}
