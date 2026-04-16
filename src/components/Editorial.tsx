import { AnimSection } from "./AnimSection";

export function Editorial() {
  const gear = [
    { label: "CAMISETA OFICIAL", img: "blusa.png" },
    { label: "LENÇO ESTAMPADO", img: "lenco.jpg" },
    { label: "BONÉ", img: "bone.jpg" },
    { label: "MEIA", img: "meia.png"},
    { label: "GARRAFA", img: "garrafa.png" },
    { label: "ECOBAG", img: "ecobag.png" },
  ];

  return (
    <section className="bg-primary">
      {/* Dark olive section */}
      <div className="bg-surface-dark px-7 py-14">
        <AnimSection>
          <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-lime mb-3">
            A VIRADA
          </div>
          <h3 className="font-display font-black text-[clamp(2rem,8vw,3rem)] uppercase leading-[0.95] text-primary-foreground">
            MOMMA<br />DOCES &<br />GELATOS<br />
            <span className="text-lime">SAUDÁVEIS</span>
          </h3>
          <p className="font-body text-[0.85rem] leading-relaxed text-primary-foreground/50 mt-5 max-w-[300px]">
            Celebre sua conquista com a energia que seu corpo merece. Uma experiência gastronômica funcional aguarda todos os corredores no coração da Asa Sul.
          </p>
          <div className="w-10 h-0.5 bg-lime mt-6" />
        </AnimSection>
      </div>

      {/* Gear grid */}
      <div className="bg-background px-7 py-14 pb-0">
        <AnimSection>
          <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-secondary mb-3">
            ESTÉTICA DO MOVIMENTO
          </div>
          <div className="grid grid-cols-2 gap-0.5 mt-0">
            {gear.map((item, i) => (
              <div
              key={i}
              className="bg-container-low  p-4 aspect-square flex flex-col justify-center"
              >
                <img  src={item.img} alt={item.label} />
                <div className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-lime bg-primary inline-block px-1.5 py-0.5 mb-2 self-start">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
