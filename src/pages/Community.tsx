import { Twitter, Send, MessageCircle, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/data/token";

const CHANNELS = [
  { name: "X (Twitter)", handle: SITE_CONFIG.twitterHandle, href: SITE_CONFIG.twitterUrl, icon: Twitter },
  { name: "Telegram", handle: "@MeridianProtocol", href: "https://t.me/MeridianProtocol", icon: Send },
  { name: "Discord", handle: "Join server", href: SITE_CONFIG.discordUrl, icon: MessageCircle },
];

export default function Community() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-line">Official links</p>
        <h1 className="mt-2 text-3xl font-medium text-ink">Community</h1>
        <p className="mt-3 text-[14.5px] text-ink-dim">
          These are the only channels that officially speak for Meridian Protocol. No follower or member
          counts are shown here — they don't indicate anything about the project's substance.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {CHANNELS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-surface-border bg-surface/40 p-5 transition-colors hover:border-line/50"
            >
              <c.icon className="h-5 w-5 text-line" />
              <p className="mt-3 text-[14px] font-medium text-ink">{c.name}</p>
              <p className="mt-1 text-[12.5px] text-ink-faint">{c.handle}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-lg border border-status-danger/30 bg-status-danger/10 p-5">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-status-danger" />
          <p className="text-[13.5px] leading-relaxed text-ink">
            Meridian Protocol will never DM you first, and will never ask for your seed phrase, private
            key, or wallet password.
          </p>
        </div>
      </div>
    </div>
  );
}
