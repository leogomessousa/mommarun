const items = ["VIVA O RITMO", "21 DE JUNHO DE 2026", "ASA SUL · BRASÍLIA", "3K · 6K · 10K", "MOMMA RUN", "CORRIDA + GASTRONOMIA"];

export function Ticker() {
  const all = [...items, ...items];
  return (
    <div className="bg-primary overflow-hidden py-3 whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {all.map((t, i) => (
          <span
            key={i}
            className={`font-mono text-[0.68rem] tracking-[0.18em] uppercase font-medium px-7 ${
              i % 2 === 0 ? "text-primary-foreground" : "text-lime"
            }`}
          >
            {t} <span className="text-lime opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
