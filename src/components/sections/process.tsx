const STEPS = [
  {
    n: "01",
    title: "Conversa",
    line: "Uma call de 30 minutos, sem custo. A gente entende o que você precisa, o que já tem e quanto pode investir — antes de qualquer proposta.",
  },
  {
    n: "02",
    title: "Construção",
    line: "Construímos o seu sistema em pedaços, e a cada semana você vê o que ficou pronto funcionando de verdade. Nada de slide ou desenho — produto rodando.",
  },
  {
    n: "03",
    title: "Entrega",
    line: "O sistema fica seu — não nosso. A gente entrega manual de uso, treina seu time e passa todos os acessos. Você não fica refém da gente.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    line: "Se quiser, mensalidade fixa para a gente cuidar de bug, dar manutenção e adicionar coisa nova. Se não quiser, segue sozinho — sem rancor.",
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
            <div className="raw-eyebrow mb-4">[03] / como trabalhamos</div>
            <h2 className="raw-display text-[clamp(2.2rem,6vw,4.5rem)] text-balance">
              Quatro passos.
              <br />
              <span className="text-[var(--raw-fg-dim)]">Sem surpresa.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base leading-relaxed">
            A gente trabalha de cara limpa. Você sabe o que cada etapa entrega
            e pode parar quando quiser, sem multa.
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
