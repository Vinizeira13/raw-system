"use client";

import { useState } from "react";
import { RawSystemMark } from "@/components/raw/raw-system-mark";

const CHANNELS = [
  { label: "Email", value: "contato@rawsystem.dev", href: "mailto:contato@rawsystem.dev" },
  { label: "WhatsApp", value: "+55 (11) 9 0000-0000", href: "https://wa.me/5511900000000" },
  { label: "Calendly", value: "agendar diagnóstico", href: "https://cal.com/rawsystem" },
];

const SCOPES = [
  "Software interno",
  "SaaS para clientes",
  "Site / plataforma",
  "Refactor / resgate",
  "AI & automação",
  "Outro",
];

const BUDGETS = ["até R$ 15k", "R$ 15k – 50k", "R$ 50k – 150k", "R$ 150k+"];

export function Contact() {
  const [scope, setScope] = useState(SCOPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`[RAW SYSTEM] ${scope} — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nEscopo: ${scope}\nOrçamento: ${budget}\n\n${message}`,
    );
    window.location.href = `mailto:contato@rawsystem.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 raw-grid opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-16 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[06] / contato</div>
            <h2 className="raw-display text-[clamp(2.4rem,7vw,6rem)] text-balance">
              Tem um sistema
              <br />
              <span className="text-[var(--raw-fg-dim)]">na cabeça?</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base md:text-lg leading-relaxed">
            Conta o que você precisa em duas linhas. Em até 48 horas a gente
            volta com diagnóstico, prazo aproximado e custo realista — sem
            proposta de 80 slides.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-background p-6 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nome" name="name" required placeholder="Seu nome / empresa" />
              <Field label="Email" name="email" type="email" required placeholder="voce@empresa.com" />
            </div>

            <div>
              <Label>Escopo</Label>
              <div className="flex flex-wrap gap-2">
                {SCOPES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setScope(s)}
                    className={`font-mono text-[11px] uppercase tracking-[0.16em] border px-3 py-1.5 transition-colors ${
                      scope === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-[var(--raw-line)] text-[var(--raw-fg-dim)] hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>Orçamento estimado</Label>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`font-mono text-[11px] uppercase tracking-[0.16em] border px-3 py-1.5 transition-colors ${
                      budget === b
                        ? "border-foreground bg-foreground text-background"
                        : "border-[var(--raw-line)] text-[var(--raw-fg-dim)] hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>Conta o que você precisa</Label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Ex.: tenho uma transportadora com 40 motoristas e quero parar de controlar rota por planilha."
                className="w-full bg-transparent border border-[var(--raw-line)] px-4 py-3 font-mono text-sm text-foreground placeholder:text-[var(--raw-fg-mute)] focus:outline-none focus:border-foreground resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="raw-eyebrow">
                {submitted ? "abrindo seu email..." : "resposta em 48h"}
              </span>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-background hover:bg-transparent hover:text-foreground transition-colors"
              >
                Enviar
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>

          <aside className="lg:col-span-5 bg-background p-6 md:p-10 flex flex-col justify-between gap-10">
            <div>
              <RawSystemMark size={56} className="mb-6" />
              <h3 className="raw-display text-2xl md:text-3xl mb-4">
                Prefere falar direto?
              </h3>
              <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed mb-8">
                Sem CRM no meio. A primeira call é com quem vai construir o seu
                sistema — não com vendedor.
              </p>
              <ul className="space-y-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
                {CHANNELS.map((c) => (
                  <li key={c.label} className="bg-background">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center justify-between px-4 py-4 hover:bg-[var(--raw-surface)] transition-colors"
                    >
                      <span className="raw-eyebrow">{c.label}</span>
                      <span className="font-mono text-sm text-foreground group-hover:translate-x-0.5 transition-transform">
                        {c.value} <span className="text-[var(--raw-fg-mute)]">↗</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--raw-line)] pt-6">
              <div className="raw-eyebrow mb-3">o que esperar</div>
              <ul className="space-y-2 font-mono text-[12px] text-foreground">
                <li>→ Resposta em até 48h úteis</li>
                <li>→ Call de 30min, sem custo</li>
                <li>→ Proposta em 1 página, sem letra miúda</li>
                <li>→ Sem captação de email pra newsletter</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="raw-eyebrow mb-3">{children}</div>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[var(--raw-line)] px-4 py-3 font-mono text-sm text-foreground placeholder:text-[var(--raw-fg-mute)] focus:outline-none focus:border-foreground"
      />
    </label>
  );
}
