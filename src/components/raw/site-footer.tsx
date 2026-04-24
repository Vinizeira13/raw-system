import Link from "next/link";
import { RawSystemMark, RawSystemWordmark } from "./raw-system-mark";

const COLS = [
  {
    title: "sistema",
    links: [
      { label: "Serviços", href: "#servicos" },
      { label: "Processo", href: "#processo" },
      { label: "Stack", href: "#stack" },
      { label: "Lab", href: "#lab" },
    ],
  },
  {
    title: "contato",
    links: [
      { label: "contato@rawsystem.dev", href: "mailto:contato@rawsystem.dev" },
      { label: "WhatsApp", href: "https://wa.me/5511900000000" },
      { label: "Calendly", href: "https://cal.com/rawsystem" },
    ],
  },
  {
    title: "social",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X / Twitter", href: "https://x.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--raw-line)] bg-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6 mb-16 md:mb-20">
          <div className="col-span-2 md:col-span-5">
            <RawSystemWordmark markSize={28} className="text-base" />
            <p className="mt-6 max-w-sm text-sm text-[var(--raw-fg-dim)] leading-relaxed">
              Software cru. Sistemas de verdade. Construímos software para
              empresas e pessoas que querem operar como sistema, não como
              improviso.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="raw-eyebrow mb-4">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-mono text-[13px] text-foreground hover:text-[var(--raw-fg-dim)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1 flex md:justify-end items-start">
            <RawSystemMark size={64} className="opacity-60" />
          </div>
        </div>

        <div className="raw-display text-[clamp(3rem,18vw,18rem)] leading-[0.85] text-foreground select-none">
          RAW
          <span className="text-[var(--raw-fg-mute)]"> / </span>
          SYSTEM
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--raw-line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--raw-fg-dim)]">
          <span>© {new Date().getFullYear()} RAW SYSTEM · CNPJ XX.XXX.XXX/0001-XX</span>
          <span className="flex items-center gap-3">
            <span>v.2026.04</span>
            <span className="text-[var(--raw-fg-mute)]">·</span>
            <span>são paulo / global</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
