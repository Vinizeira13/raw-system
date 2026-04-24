"use client";

import { motion } from "motion/react";

const LINES = [
  { text: "Software de verdade não é estética.", strong: true },
  { text: "É sistema que funciona quando você dorme,", strong: false },
  { text: "é código que outro dev consegue ler em três meses,", strong: false },
  { text: "é deploy que sobe sem rezar pra ninguém.", strong: false },
  { text: "A RAW SYSTEM existe pra isso:", strong: false },
  { text: "cortar o supérfluo, entregar o cru —", strong: true },
  { text: "e fazer durar.", strong: true },
];

export function Manifesto() {
  return (
    <section className="relative border-b border-[var(--raw-line)] py-24 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 raw-grid opacity-25" />
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="raw-eyebrow mb-8">[manifesto]</div>
        <div className="raw-display text-[clamp(1.7rem,4.4vw,3.6rem)] leading-[1.05] space-y-2.5">
          {LINES.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0.001, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className={l.strong ? "text-foreground" : "text-[var(--raw-fg-dim)]"}
            >
              {l.text}
            </motion.p>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-3 raw-eyebrow text-foreground">
          <span className="h-px w-10 bg-foreground" />
          <span>raw / system / 2026</span>
        </div>
      </div>
    </section>
  );
}
