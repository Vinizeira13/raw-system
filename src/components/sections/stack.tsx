const STACK = [
  { group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "shadcn / aceternity", "Phaser"] },
  { group: "Backend", items: ["Node.js / Bun", "Hono / Express", "Colyseus", "Edge Functions", "Cron Jobs", "WebSockets"] },
  { group: "Dados", items: ["Postgres", "Supabase", "Drizzle", "Redis", "Vector DB", "S3 / Blob"] },
  { group: "AI", items: ["Claude (Sonnet/Opus)", "GPT-5", "Gemini 2.5 / 3", "Vercel AI Gateway", "RAG", "Tool calling"] },
  { group: "Infra", items: ["Vercel", "Fly.io", "Cloudflare", "Docker", "GitHub Actions", "OpenTelemetry"] },
  { group: "Pagamento", items: ["Stripe", "pague.dev (PIX)", "Mercado Pago", "Webhooks idempotentes", "Billing recorrente", "PIX QR"] },
];

const MARQUEE = [
  "next.js",
  "react",
  "typescript",
  "tailwind",
  "supabase",
  "postgres",
  "vercel",
  "fly.io",
  "claude",
  "gpt-5",
  "gemini",
  "stripe",
  "pague.dev",
  "phaser",
  "colyseus",
  "drizzle",
  "redis",
  "cloudflare",
  "docker",
  "playwright",
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-16 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[04] / stack</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,5rem)] text-balance">
              Ferramenta certa.
              <br />
              <span className="text-[var(--raw-fg-dim)]">
                Sem religião de framework.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base md:text-lg leading-relaxed">
            A gente escolhe stack pelo problema, não pelo Twitter. Mas tem um
            arsenal preferido — testado em produção, com 99% de uptime e
            código mantido por mais de uma cabeça.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {STACK.map((s) => (
            <div key={s.group} className="bg-background p-5 min-h-[200px]">
              <div className="raw-eyebrow mb-4 pb-3 border-b border-[var(--raw-line)]">
                {s.group}
              </div>
              <ul className="space-y-1.5 font-mono text-[12px] text-foreground">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-20 border-y border-[var(--raw-line)] py-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-12 raw-marquee whitespace-nowrap font-mono text-2xl md:text-4xl uppercase tracking-[0.08em] text-[var(--raw-fg-dim)]">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={`${m}-${i}`} className="flex items-center gap-12">
              <span>{m}</span>
              <span aria-hidden className="text-[var(--raw-fg-mute)]">
                /
              </span>
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
          animation: raw-marquee 38s linear infinite;
        }
      `}</style>
    </section>
  );
}
