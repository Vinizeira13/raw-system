import {
  IconBuildingFactory2,
  IconCpu,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import { ReactNode } from "react";

type Service = {
  index: string;
  title: string;
  line: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Software sob medida",
    line: "Sistemas internos, ERPs leves e ferramentas que substituem planilha, WhatsApp e PDF na sua empresa.",
    icon: <IconBuildingFactory2 className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "02",
    title: "SaaS de ponta a ponta",
    line: "Produto digital completo: arquitetura, billing, multi-tenant e infra escalável.",
    icon: <IconRocket className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "03",
    title: "Sites & plataformas",
    line: "Landing pages, ecommerce e portais que carregam rápido e vendem.",
    icon: <IconDeviceDesktopAnalytics className="h-5 w-5" stroke={1.4} />,
  },
  {
    index: "04",
    title: "AI & automação",
    line: "Agentes e copilotos internos que executam — não chatbot de demo.",
    icon: <IconCpu className="h-5 w-5" stroke={1.4} />,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-14 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[02] / serviços</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,4.5rem)] text-balance">
              Quatro frentes.
              <br />
              <span className="text-[var(--raw-fg-dim)]">Uma promessa.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base leading-relaxed">
            Software que funciona em produção, com código que outro
            desenvolvedor consegue ler depois.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {SERVICES.map((s) => (
            <article
              key={s.index}
              className="group bg-background p-7 md:p-9 flex flex-col justify-between min-h-[16rem] hover:bg-[var(--raw-surface)] transition-colors"
            >
              <div className="flex items-start justify-between text-foreground">
                <span className="border border-[var(--raw-line)] p-1.5">
                  {s.icon}
                </span>
                <span className="raw-eyebrow">{s.index}</span>
              </div>
              <div>
                <h3 className="raw-display text-2xl md:text-3xl mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed max-w-md">
                  {s.line}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
