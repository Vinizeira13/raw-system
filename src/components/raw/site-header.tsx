import Link from "next/link";
import { RawSystemWordmark } from "./raw-system-mark";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
  { href: "#lab", label: "Lab" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--raw-line)] bg-[color-mix(in_oklab,var(--raw-bg)_82%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-foreground hover:opacity-80 transition-opacity">
          <RawSystemWordmark />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--raw-fg-dim)] hover:text-foreground px-3 py-1.5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raw-fg-dim)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-emerald-400" />
            </span>
            online
          </span>
          <Link
            href="#contato"
            className="font-mono text-[11px] uppercase tracking-[0.18em] border border-[var(--raw-line)] px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
