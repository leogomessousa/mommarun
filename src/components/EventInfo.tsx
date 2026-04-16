import { useRef } from "react";
import { useIntersection } from "@/hooks/useIntersection";

export function EventInfo() {
  const ref = useRef<HTMLElement>(null);
  const vis = useIntersection(ref, 0.1);

  const stats = [
    { label: "Data", value: "21 JUN 2026" },
    { label: "Local", value: "ASA SUL, BRASÍLIA" },
  ];

  const distances = [
    { km: "3Km", active: true },
    { km: "6Km", active: true },
    { km: "10Km", active: true },
  ];

  return (
    <section ref={ref} className="bg-background px-7 py-[72px]">
      <div
        className="transition-all duration-700"
        style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(32px)" }}
      >
        <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-secondary mb-4">
          O Evento
        </div>
        <h2 className="font-display font-black text-[clamp(1.8rem,7vw,2.8rem)] uppercase leading-[1.05] text-primary mb-10">
          O RITMO DA CIDADE,<br />
          <span className="text-tertiary">O SABOR DA VITÓRIA.</span>
        </h2>

        {stats.map((s, i) => (
          <div
            key={i}
            className="border-l-[3px] border-lime pl-4 mb-6 transition-all duration-600"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateX(-16px)",
              transitionDelay: `${0.2 + i * 0.1}s`,
            }}
          >
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-secondary mb-1">
              {s.label}
            </div>
            <div className="font-display font-bold text-[1.1rem] uppercase text-primary">
              {s.value}
            </div>
          </div>
        ))}

        <div className="flex gap-0 mt-12 border-t-2 border-container-bg pt-8">
          {distances.map((d, i) => (
            <div
              key={i}
              className="flex-1 text-center pb-6 transition-all duration-600"
              style={{
                borderBottom: d.active ? "2px solid hsl(var(--container))" : "3px solid transparent",
                opacity: vis ? 1 : 0,
                transitionDelay: `${0.4 + i * 0.1}s`,
              }}
            >
              <div
                className={`font-display font-black uppercase ${
                  d.active ? "text-[2rem] text-primary" : "text-[1.4rem] text-secondary"
                }`}
              >
                {d.km}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
