import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <footer className="bg-primary">
      <Ticker />
      <div className="px-7 pt-12 pb-8">
        <div className="font-display font-black text-[2.2rem] uppercase tracking-[0.04em] text-primary-foreground leading-none mb-1">
          MOMMA <span className="text-lime">RUN</span>
        </div>
        <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-secondary mb-10">
          VIVA O RITMO · BRASÍLIA · 2026
        </div>

        <div className="flex gap-6 font-mono text-[0.6rem] tracking-[0.12em] uppercase text-secondary flex-wrap">
          
            <span className="cursor-pointer transition-colors hover:text-lime">
              <a href="https://api.whatsapp.com/send?phone=5561994605682" target="_blank" rel="noopener noreferrer">
                contato
              </a>
            </span>
            <span className="cursor-pointer transition-colors hover:text-lime">
              <a href="https://www.instagram.com/momma.run?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                instagram
              </a>
            </span>
          
        </div>

        <div className="border-t border-surface-dark mt-10 pt-6 flex justify-between items-center flex-wrap gap-3">
          <div className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-surface-dark">
            © 2026 MOMMA RUN· TODOS OS DIREITOS RESERVADOS
          </div>
          <div className="w-px h-8 bg-lime opacity-60" />
        </div>
      </div>
    </footer>
  );
}
