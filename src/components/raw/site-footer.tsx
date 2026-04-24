import Link from "next/link";
import { RawSystemWordmark } from "./raw-system-mark";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/Vinizeira13" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--raw-line)] bg-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-6">
          <RawSystemWordmark markSize={20} />
          <span className="hidden md:inline-block h-3 w-px bg-[var(--raw-line)]" />
          <Link
            href="mailto:contato@rawsystem.dev"
            className="font-mono text-[12px] text-foreground hover:text-[var(--raw-fg-dim)] transition-colors"
          >
            contato@rawsystem.dev
          </Link>
        </div>
        <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--raw-fg-dim)]">
          {SOCIAL.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </Link>
          ))}
          <span aria-hidden className="text-[var(--raw-fg-mute)]">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
