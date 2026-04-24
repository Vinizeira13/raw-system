import Link from "next/link";
import { RawSystemMark } from "@/components/raw/raw-system-mark";
import { Spotlight } from "@/components/ui/spotlight";

const MARQUEE = [
  "next.js",
  "react 19",
  "typescript",
  "supabase",
  "postgres",
  "vercel",
  "fly.io",
  "claude",
  "gpt-5",
  "gemini",
  "stripe",
  "pague.dev",
  "drizzle",
  "redis",
  "playwright",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--raw-line)]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-20 left-5 md:left-8 raw-eyebrow">
          [01] / sistema
        </span>
        <span className="absolute top-20 right-5 md:right-8 raw-eyebrow">
          v.2026
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col items-center justify-center px-5 md:px-8 pt-28 pb-20 text-center">
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

        <p className="mt-7 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-[var(--raw-fg-dim)]">
          Construímos software sob medida, SaaS e plataformas web para empresas
          e pessoas que querem operar como sistema — não como improviso.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="#contato"
            className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground transition-colors"
          >
            Iniciar um sistema
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="#servicos"
            className="inline-flex items-center gap-3 border border-[var(--raw-line)] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground hover:border-foreground transition-colors"
          >
            Ver o que fazemos
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--raw-line)] py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-10 raw-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--raw-fg-mute)]">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={`${m}-${i}`} className="flex items-center gap-10">
              <span>{m}</span>
              <span aria-hidden>/</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes raw-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .raw-marquee {
          animation: raw-marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
