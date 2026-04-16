import { useState, useEffect } from "react";

interface Props {
  onCTA: () => void;
}

export function Nav({ onCTA }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-7 py-4 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(248,252,227,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--container))" : "none",
      }}
    >
      <div
        className="font-display font-black text-[1.1rem] tracking-[0.04em] uppercase transition-colors"
        style={{ color: scrolled ? "hsl(var(--primary))" : "hsl(var(--background))" }}
      >
        <a href="#">
          <img className="h-6 place-items-start" src="Oficial 1.png" alt="LOGO MOMMA RUN" />
        </a>
      </div>
      <button
        onClick={onCTA}
        className="font-mono text-[0.65rem] tracking-[0.16em] uppercase font-medium bg-lime text-accent-foreground border-none px-5 py-2.5 cursor-pointer hover:bg-lime-dark transition-colors"
      >
        Lista VIP →
      </button>
    </nav>
  );
}
