import Link from "next/link";

type Project = {
  index: string;
  name: string;
  meta: string;
  line: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Pokemon-like multiplayer",
    meta: "Game · Realtime · 2026",
    line: "Servidor de combate em tempo real (Colyseus), deploy multi-região, client React + Phaser.",
  },
  {
    index: "02",
    name: "11 Of",
    meta: "Ecommerce · Copa 2026",
    line: "Loja de jerseys com checkout PIX-only via pague.dev. Sem Shopify.",
    href: "https://loja-theta-plum.vercel.app",
  },
  {
    index: "03",
    name: "Rua Escura",
    meta: "Brand · Pipeline AI · 2026",
    line: "Caixa de celebridades BR com pipeline de imagem (Gemini 3 Pro) e vídeo (Veo 3.1).",
    href: "https://rua-escura.vercel.app",
  },
];

export function Lab() {
  return (
    <section
      id="lab"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-14 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[04] / lab</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,4.5rem)] text-balance">
              Em produção.
              <br />
              <span className="text-[var(--raw-fg-dim)]">Não em slide.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base leading-relaxed">
            Recortes de produtos próprios e de clientes. Tudo aqui está rodando
            com usuários e custos de infra reais.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {PROJECTS.map((p) => {
            const Inner = (
              <article className="group bg-background p-6 md:p-7 h-full flex flex-col justify-between gap-6 hover:bg-[var(--raw-surface)] transition-colors min-h-[14rem]">
                <div className="flex items-start justify-between text-foreground">
                  <span className="raw-eyebrow">{p.index}</span>
                  {p.href ? (
                    <span className="raw-eyebrow text-[var(--raw-fg-mute)] group-hover:text-foreground transition-colors">
                      ↗
                    </span>
                  ) : null}
                </div>
                <div>
                  <h3 className="raw-display text-2xl md:text-[1.7rem] mb-1 leading-tight">
                    {p.name}
                  </h3>
                  <div className="raw-eyebrow text-[var(--raw-fg-mute)] mb-3">
                    {p.meta}
                  </div>
                  <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed">
                    {p.line}
                  </p>
                </div>
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
