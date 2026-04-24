import Link from "next/link";

type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  href?: string;
  status: "live" | "wip" | "case";
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Origem",
    category: "AI App Builder",
    year: "2026",
    summary:
      "Plataforma de geração de sites e apps com modelo proprietário. Preview engine custom em Sucrase, registry @origem como single source of truth.",
    tags: ["next.js", "claude", "sucrase", "registry"],
    status: "wip",
  },
  {
    index: "02",
    name: "Pokemon-like multiplayer",
    category: "Game / Realtime",
    year: "2026",
    summary:
      "Servidor de combate em tempo real (Colyseus) com 4 salas, deploy multi-região (BRA / LHR), client React + Phaser, sprites custom.",
    tags: ["colyseus", "phaser", "fly.io", "supabase"],
    status: "live",
  },
  {
    index: "03",
    name: "11 Of",
    category: "Ecommerce / Copa 2026",
    year: "2026",
    summary:
      "Loja de jerseys com checkout PIX-only via pague.dev. Catálogo dinâmico, deploy contínuo na Vercel, sem Shopify.",
    tags: ["next.js 16", "pague.dev", "vercel"],
    href: "https://loja-theta-plum.vercel.app",
    status: "live",
  },
  {
    index: "04",
    name: "Rua Escura",
    category: "Brand / Pipeline AI",
    year: "2026",
    summary:
      "Caixa de celebridades brasileiras com pipeline de imagem (Gemini 3 Pro) e vídeo (Veo 3.1). Brand system v3 comic brawl.",
    tags: ["next.js", "gemini", "veo", "tailwind"],
    href: "https://rua-escura.vercel.app",
    status: "live",
  },
  {
    index: "05",
    name: "MoneyHUB",
    category: "Agentic CMS + Paywall",
    year: "2026",
    summary:
      "Hub editorial com agentes (writer / image / scorer), paywall híbrido Stripe + PIX e SEO programático por categoria × intenção.",
    tags: ["next.js", "supabase", "stripe", "pague.dev"],
    status: "wip",
  },
  {
    index: "06",
    name: "Motion Studio",
    category: "Vídeo programático",
    year: "2026",
    summary:
      "Studio de vídeos de apresentação à la 1600 Agency. Remotion + HyperFrames, multi-voice TTS e diretor de cena via prompt.",
    tags: ["remotion", "hyperframes", "gsap"],
    status: "case",
  },
];

const STATUS_LABEL: Record<Project["status"], string> = {
  live: "no ar",
  wip: "em build",
  case: "case study",
};

export function Lab() {
  return (
    <section
      id="lab"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-16 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[05] / lab</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,5rem)] text-balance">
              Trabalhos selecionados.
              <br />
              <span className="text-[var(--raw-fg-dim)]">
                Sistemas em produção.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base md:text-lg leading-relaxed">
            Recortes de produtos próprios e de clientes. Tudo aqui rodou — ou
            está rodando — em produção real, com usuários e custos de infra
            que pagamos do bolso.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {PROJECTS.map((p) => {
            const Inner = (
              <article className="group bg-background p-6 md:p-8 hover:bg-[var(--raw-surface)] transition-colors h-full flex flex-col justify-between gap-8">
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <div className="raw-eyebrow mb-3">{p.index}</div>
                    <h3 className="raw-display text-3xl md:text-4xl mb-2">
                      {p.name}
                    </h3>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--raw-fg-dim)]">
                      {p.category} · {p.year}
                    </div>
                  </div>
                  <StatusPill status={p.status} />
                </header>

                <p className="text-sm md:text-base text-[var(--raw-fg-dim)] leading-relaxed max-w-md">
                  {p.summary}
                </p>

                <footer className="flex items-center justify-between gap-4 pt-4 border-t border-[var(--raw-line)]">
                  <ul className="flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-[var(--raw-line)] px-2 py-0.5 text-[var(--raw-fg-dim)] group-hover:border-[var(--raw-fg-mute)] transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {p.href ? (
                    <span className="raw-eyebrow flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                      visitar ↗
                    </span>
                  ) : null}
                </footer>
              </article>
            );

            return p.href ? (
              <Link
                key={p.index}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {Inner}
              </Link>
            ) : (
              <div key={p.index}>{Inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  const dot =
    status === "live"
      ? "bg-emerald-400"
      : status === "wip"
        ? "bg-amber-400"
        : "bg-[var(--raw-fg-dim)]";
  return (
    <span className="inline-flex items-center gap-2 border border-[var(--raw-line)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--raw-fg-dim)]">
      <span className={`h-1.5 w-1.5 ${dot}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
