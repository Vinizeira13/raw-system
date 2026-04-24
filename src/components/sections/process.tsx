"use client";

import { Timeline } from "@/components/ui/timeline";

export function Process() {
  const data = [
    {
      title: "01",
      content: (
        <ProcessStep
          step="Diagnóstico"
          summary="A primeira call é técnica. Mapeamos o problema real, o orçamento e o que já existe — antes de propor qualquer linha de código."
          out={[
            "Escopo escrito em 1 página",
            "Estimativa de prazo e custo",
            "Decisão go / no-go honesta",
          ]}
        />
      ),
    },
    {
      title: "02",
      content: (
        <ProcessStep
          step="Arquitetura"
          summary="Desenhamos o sistema antes de codar. Stack, banco, integrações, hospedagem, custos mensais — tudo documentado."
          out={[
            "Diagrama de arquitetura",
            "Schema do banco e contratos de API",
            "Plano de infra e custos",
          ]}
        />
      ),
    },
    {
      title: "03",
      content: (
        <ProcessStep
          step="Build"
          summary="Sprints curtas, deploy semanal em ambiente real. Você vê o produto crescendo de verdade, não slide nem mockup."
          out={[
            "Preview deploy a cada PR",
            "Demo semanal com você",
            "Backlog priorizado em conjunto",
          ]}
        />
      ),
    },
    {
      title: "04",
      content: (
        <ProcessStep
          step="Entrega"
          summary="Handover real: código documentado, ambientes provisionados, credenciais transferidas. Nada fica refém da gente."
          out={[
            "Repositório no seu GitHub",
            "Infra na sua conta (Vercel / Fly / AWS)",
            "Runbook de operação",
          ]}
        />
      ),
    },
    {
      title: "05",
      content: (
        <ProcessStep
          step="Evolução"
          summary="Opcional: mensalidade fixa para evolução contínua, plantão de bug e novas features sob demanda."
          out={[
            "SLA combinado por escrito",
            "Roadmap revisitado mês a mês",
            "Sem efeito 'agência sumiu'",
          ]}
        />
      ),
    },
  ];

  return (
    <section
      id="processo"
      className="relative border-b border-[var(--raw-line)] bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 pt-24 md:pt-32 pb-4">
        <div className="raw-eyebrow mb-4">[03] / processo</div>
        <h2 className="raw-display text-[clamp(2.2rem,6vw,5rem)] text-balance max-w-4xl">
          Cinco passos.
          <br />
          <span className="text-[var(--raw-fg-dim)]">
            Zero surpresa no boleto.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-[var(--raw-fg-dim)] text-base md:text-lg leading-relaxed">
          A gente trabalha como engenharia, não como hype. Cada fase entrega
          um artefato concreto que você pode auditar — e parar a qualquer momento.
        </p>
      </div>
      <div className="-mt-2">
        <Timeline data={data} />
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  summary,
  out,
}: {
  step: string;
  summary: string;
  out: string[];
}) {
  return (
    <div className="border border-[var(--raw-line)] bg-[var(--raw-surface)] p-6 md:p-8">
      <h3 className="raw-display text-2xl md:text-3xl mb-3 text-foreground">
        {step}
      </h3>
      <p className="text-sm md:text-base text-[var(--raw-fg-dim)] leading-relaxed mb-5">
        {summary}
      </p>
      <div className="raw-eyebrow mb-2">entregáveis</div>
      <ul className="space-y-1.5 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-foreground">
        {out.map((o) => (
          <li key={o} className="flex gap-2">
            <span className="text-[var(--raw-fg-mute)]">→</span>
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
