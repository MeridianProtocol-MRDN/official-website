import { Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/token";

export default function Contact() {
  return (
    <div className="container-page py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Contact</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Get in touch</h1>

        <div className="mt-10 inline-flex items-center gap-3 rounded-lg border border-surface-border bg-surface/50 px-6 py-4">
          <Mail className="h-4 w-4 text-line" />
          <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="font-mono text-[14px] text-ink">
            {SITE_CONFIG.contactEmail}
          </a>
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-ink-faint">
          This is the only official contact point for Meridian Protocol. Use this exact address anywhere
          you submit or list this project.
        </p>
      </div>
    </div>
  );
}
