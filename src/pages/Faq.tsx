import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Questions</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">FAQ</h1>

        <div className="mt-10 divide-y divide-surface-border border-y border-surface-border">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-[14.5px] font-medium text-ink">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-ink-faint transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && <p className="pb-5 text-[13.5px] leading-relaxed text-ink-dim">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
