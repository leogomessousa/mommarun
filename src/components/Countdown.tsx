import { useState, useEffect } from "react";
import { AnimSection } from "./AnimSection";

export function Countdown() {
  const target = new Date("2026-06-21T06:00:00").getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "DIAS", val: time.d },
    { label: "HORAS", val: time.h },
    { label: "MIN", val: time.m },
    { label: "SEG", val: time.s },
  ];

  return (
    <section className="bg-primary px-7 py-[72px]">
      <AnimSection>
        <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-lime mb-4">
          Contagem Regressiva
        </div>
        <div className="font-display font-black text-2xl uppercase leading-[1.1] text-primary-foreground mb-10">
          FALTAM APENAS<br />
          <span className="text-lime">{time.d} DIAS</span>
        </div>

        <div className="grid grid-cols-4 gap-0.5">
          {units.map((u, i) => (
            <div
              key={i}
              className={`${i === 0 ? "bg-lime" : "bg-[#1e2010]"} py-5 px-2 text-center`}
            >
              <div
                className={`font-display font-black text-[clamp(1.8rem,7vw,2.8rem)] leading-none transition-all duration-300 ${
                  i === 0 ? "text-primary" : "text-primary-foreground"
                }`}
              >
                {String(u.val).padStart(2, "0")}
              </div>
              <div
                className={`font-mono text-[0.5rem] tracking-[0.16em] uppercase mt-1.5 ${
                  i === 0 ? "text-tertiary" : "text-secondary"
                }`}
              >
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
}
