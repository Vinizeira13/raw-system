"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`[RAW SYSTEM] ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:contato@rawsystem.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="relative border-b border-[var(--raw-line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <header className="mb-12 md:mb-14 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="raw-eyebrow mb-4">[05] / contato</div>
            <h2 className="raw-display text-[clamp(2.4rem,7vw,5rem)] text-balance">
              Tem um sistema
              <br />
              <span className="text-[var(--raw-fg-dim)]">na cabeça?</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[var(--raw-fg-dim)] text-base leading-relaxed">
            Conta em duas linhas o que você precisa. Em até 48 horas a gente
            volta com uma resposta direta — quanto custa, quanto demora e se
            faz sentido. Sem enrolação.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-background p-6 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nome" name="name" required placeholder="Você ou empresa" />
              <Field label="Email" name="email" type="email" required placeholder="voce@empresa.com" />
            </div>
            <label className="block">
              <Label>Conta o que você precisa</Label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Ex.: tenho uma transportadora com 40 motoristas e quero parar de controlar rota por planilha."
                className="w-full bg-transparent border border-[var(--raw-line)] px-4 py-3 font-mono text-sm text-foreground placeholder:text-[var(--raw-fg-mute)] focus:outline-none focus:border-foreground resize-none"
              />
            </label>
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

          <aside className="lg:col-span-4 bg-background p-6 md:p-10 flex flex-col justify-between gap-8">
            <div>
              <div className="raw-eyebrow mb-3">direto</div>
              <p className="text-sm text-[var(--raw-fg-dim)] leading-relaxed mb-6">
                Sem cadastro chato no meio. Quem responde é quem vai construir
                o seu sistema.
              </p>
              <ul className="space-y-px bg-[var(--raw-line)] border border-[var(--raw-line)]">
                <ChannelLink label="Email" value="contato@rawsystem.dev" href="mailto:contato@rawsystem.dev" />
                <ChannelLink label="WhatsApp" value="+55 11 9 0000-0000" href="https://wa.me/5511900000000" />
              </ul>
            </div>
            <div className="raw-eyebrow text-[var(--raw-fg-mute)]">
              30 minutos · sem custo
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ChannelLink({ label, value, href }: { label: string; value: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <li className="bg-background">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center justify-between px-4 py-4 hover:bg-[var(--raw-surface)] transition-colors"
      >
        <span className="raw-eyebrow">{label}</span>
        <span className="font-mono text-sm text-foreground group-hover:translate-x-0.5 transition-transform">
          {value} <span className="text-[var(--raw-fg-mute)]">↗</span>
        </span>
      </a>
    </li>
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
