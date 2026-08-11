import { Github } from "lucide-react";
import { SITE_CONFIG } from "@/data/token";

export default function OpenSource() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Open source</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Open Source</h1>

        <div className="mt-8 space-y-6 text-[14.5px] leading-relaxed text-ink-dim">
          <p>
            This website's source code is maintained in the open on GitHub, under the license included
            in that repository.
          </p>
          <p>
            The MRDN smart contract's source is separately verified and published on BscScan, which is
            the authoritative copy — read it directly rather than trusting any description of it here.
          </p>
          <p>
            Nothing about this project is described as open-source beyond what is actually published in
            these two places. If additional components (tooling, applications) are open-sourced later,
            they'll be linked from this page.
          </p>
        </div>

        <a
          href={SITE_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-surface-border px-4 py-2.5 text-[13.5px] text-ink hover:border-line/50"
        >
          <Github className="h-4 w-4" /> View repository
        </a>
      </div>
    </div>
  );
}
