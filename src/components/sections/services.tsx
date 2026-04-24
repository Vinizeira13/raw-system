import {
  IconBolt,
  IconBuildingFactory2,
  IconCode,
  IconCpu,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import { ReactNode } from "react";

type Service = {
  index: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
  span?: string;
};

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Software sob medida",
    description:
      "Sistemas internos, ERPs leves, dashboards operacionais e ferramentas que substituem planilha, WhatsApp e PDF na sua empresa.",
    bullets: [
      "Integrações com APIs e bancos legados",
      "Painéis admin com permissões reais",
      "Workflows que cabem na rotina do time",
    ],
    icon: <IconBuildingFactory2 className="h-5 w-5" stroke={1.4} />,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    index: "02",
    title: "SaaS de ponta a ponta",
    description:
      "Produto digital completo para você cobrar do cliente final: arquitetura, billing, multi-tenant e infra escalável.",
    bullets: [
      "Auth, billing (Stripe / pague.dev) e tenancy",
      "Backoffice e métricas desde o dia 1",
      "Deploy contínuo em Vercel / Fly.io",
    ],
    icon: <IconRocket className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "03",
    title: "Sites & plataformas web",
    description:
      "Landing pages, ecommerce e portais que carregam rápido, ranqueam e vendem — sem template genérico.",
    bullets: [
      "Next.js + design sob medida",
      "CMS leve ou headless conforme a operação",
      "SEO técnico e Core Web Vitals verdes",
    ],
    icon: <IconDeviceDesktopAnalytics className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "04",
    title: "AI & automação",
    description:
      "Agentes, copilotos internos e pipelines que ligam Claude, GPT e Gemini ao seu dado real — não chatbot de demo.",
    bullets: [
      "RAG com seu conhecimento interno",
      "Agentes que executam, não só respondem",
      "Custo monitorado por feature",
    ],
    icon: <IconCpu className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "05",
    title: "Refactor & resgate",
    description:
      "Seu sistema legado, contratado de qualquer um, virou caixa-preta? A gente entra, mapeia e estabiliza.",
    bullets: [
      "Auditoria técnica honesta",
      "Migração progressiva, sem big bang",
      "Documentação que sobrevive ao time",
    ],
    icon: <IconCode className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "06",
    title: "Consultoria técnica",
    description:
      "Revisão de arquitetura, escolha de stack, code review e mentoria pro seu time interno acelerar com critério.",
    bullets: [
      "Pareceres por escrito, não slide",
      "Stack alinhada ao tamanho do problema",
      "Sem religião com framework",
    ],
    icon: <IconBolt className="h-5 w-5" stroke={1.4} />,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-16 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[02] / serviços</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,5rem)] text-balance">
              O que a gente faz
              <br />
              <span className="text-[var(--raw-fg-dim)]">
                quando ninguém olha.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base md:text-lg leading-relaxed">
            Seis frentes, uma promessa: software que funciona em produção, com
            código que outro desenvolvedor consegue ler depois — sem
            dependência da nossa boa vontade.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[16rem] gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {SERVICES.map((s) => (
            <article
              key={s.index}
              className={`group relative bg-background p-6 md:p-7 flex flex-col justify-between min-h-[16rem] hover:bg-[var(--raw-surface)] transition-colors ${
                s.span ?? ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 text-foreground">
                  <span className="border border-[var(--raw-line)] p-1.5">
                    {s.icon}
                  </span>
                  <span className="raw-eyebrow">{s.index}</span>
                </div>
                <span className="raw-eyebrow opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>

              <div>
                <h3 className="raw-display text-2xl md:text-3xl mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed mb-4 max-w-md">
                  {s.description}
                </p>
                <ul className="space-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--raw-fg-dim)]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-foreground">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
