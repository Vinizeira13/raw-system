const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    line: "Call técnica de 30min. Mapeamos problema real, orçamento e o que já existe — antes de uma linha de código.",
  },
  {
    n: "02",
    title: "Build",
    line: "Sprints curtas com deploy semanal em ambiente real. Você vê o produto crescendo, não slide.",
  },
  {
    n: "03",
    title: "Entrega",
    line: "Código no seu GitHub, infra na sua conta, runbook documentado. Nada fica refém da gente.",
  },
  {
    n: "04",
    title: "Evolução",
    line: "Opcional: mensalidade fixa para evolução contínua, plantão de bug e novas features.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-14 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[03] / processo</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,4.5rem)] text-balance">
              Quatro passos.
              <br />
              <span className="text-[var(--raw-fg-dim)]">Sem surpresa.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base leading-relaxed">
            Engenharia, não hype. Cada fase entrega um artefato auditável — e
            você pode parar a qualquer momento.
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="group bg-background p-6 md:p-7 flex flex-col justify-between min-h-[14rem] hover:bg-[var(--raw-surface)] transition-colors"
            >
              <div className="flex items-center justify-between text-foreground">
                <span className="raw-display text-4xl text-[var(--raw-fg-dim)] group-hover:text-foreground transition-colors">
                  {s.n}
                </span>
                <span
                  aria-hidden
                  className="raw-eyebrow text-[var(--raw-fg-mute)]"
                >
                  {i === STEPS.length - 1 ? "fim" : "→"}
                </span>
              </div>
              <div>
                <h3 className="raw-display text-2xl mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed">
                  {s.line}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
