import { Ticker } from "./Ticker";

interface Props {
  onCTA: () => void;
}

export function Hero({ onCTA }: Props) {
  return (
    <section className="bg-primary min-h-screen flex flex-col relative overflow-hidden">
      {/* BG texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
        {[...Array(12)].map((_, i) => (
          <ellipse key={i} cx="400" cy="450" rx={120 + i * 55} ry={80 + i * 40}
            fill="none" stroke="hsl(var(--lime))" strokeWidth="1" />
        ))}
      </svg>

      {/* Date badge */}
      <div className="absolute top-[88px] right-7 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-lime opacity-80 animate-[fadeIn_1s_ease_0.3s_both]">
        BRASÍLIA // 2026
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-end px-7 pt-[120px] pb-14">
        <div className="animate-[fadeUp_0.9s_ease_0.2s_both]">
          <div className="inline-block bg-lime text-accent-foreground font-mono text-[0.6rem] tracking-[0.2em] uppercase font-medium px-2.5 py-1 mb-5">
            Pré-venda exclusiva
          </div>
        </div>

        <h1 className="font-display font-black text-[clamp(3rem,13vw,6rem)] tracking-tight uppercase leading-[0.92] text-primary-foreground mb-2 animate-[fadeUp_0.9s_ease_0.35s_both]">
          <img className=" max-h-[8rem] place-items-start pb-4" src="Versão duas linhas 1.png" alt="LOGO MOMMA RUN" />
          VIVA O<br />RITMO
        </h1>

        <p className="font-body text-[0.88rem] leading-relaxed text-primary-foreground/[0.55] max-w-[320px] my-6 animate-[fadeUp_0.9s_ease_0.5s_both]">
          A pré-venda exclusiva começa agora. Garanta seu lugar na linha de largada.
          
        </p>

        <div className="animate-[fadeUp_0.9s_ease_0.65s_both]">
          <button
            onClick={onCTA}
            className="w-full bg-lime text-accent-foreground border-none py-[18px] px-7 font-mono text-[0.78rem] tracking-[0.16em] uppercase font-medium cursor-pointer flex items-center justify-between animate-pulse-cta hover:bg-lime-dark transition-colors"
          >
            QUERO ACESSO ANTECIPADO
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
      <Ticker />
    </section>
  );
}
