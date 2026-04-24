import Link from "next/link";
import { RawSystemMark } from "@/components/raw/raw-system-mark";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--raw-line)]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-20 left-5 md:left-8 raw-eyebrow">
          [01] / sistema
        </span>
        <span className="absolute top-20 right-5 md:right-8 raw-eyebrow">
          v.2026
        </span>
        <span className="absolute bottom-6 left-5 md:left-8 raw-eyebrow">
          rolar ↓
        </span>
        <span className="absolute bottom-6 right-5 md:right-8 raw-eyebrow">
          br · global
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col items-center justify-center px-5 md:px-8 pt-28 pb-16 text-center gap-y-2">
        <div className="mb-8 flex items-center gap-3">
          <RawSystemMark size={56} />
          <span className="raw-mono text-[11px] uppercase tracking-[0.32em] text-[var(--raw-fg-dim)]">
            soluções em software
          </span>
        </div>

        <h1 className="raw-display text-balance text-[clamp(2.6rem,9vw,8.5rem)] text-foreground">
          Software cru.
          <br />
          <span className="text-[var(--raw-fg-dim)]">Sistemas</span> de verdade.
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-[var(--raw-fg-dim)]">
          A RAW SYSTEM constrói o software que sua operação precisa para parar
          de improvisar — desde ferramentas internas para sua empresa até SaaS
          completos para seus clientes, passando por sites e plataformas web.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="#contato"
            className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground transition-colors"
          >
            Iniciar um sistema
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="#servicos"
            className="inline-flex items-center gap-3 border border-[var(--raw-line)] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground hover:border-foreground transition-colors"
          >
            Ver o que fazemos
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px w-full max-w-3xl border border-[var(--raw-line)] bg-[var(--raw-line)]">
          {[
            { k: "01", v: "Software\nsob medida" },
            { k: "02", v: "SaaS\nde ponta a ponta" },
            { k: "03", v: "Plataformas\n& sites" },
            { k: "04", v: "AI &\nautomação" },
          ].map((s) => (
            <div key={s.k} className="bg-background px-4 py-5 text-left">
              <div className="raw-eyebrow mb-2">{s.k}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] whitespace-pre-line leading-tight">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
