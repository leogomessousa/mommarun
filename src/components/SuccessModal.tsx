import type { LeadData } from "./LeadForm";

interface Props {
  data: LeadData | null;
  onClose: () => void;
}

export function SuccessModal({ data, onClose }: Props) {
  const infos = [
    { label: "Próximo passo", val: "Entre no nosso grupo do WhatsApp" },
    { label: "No dia 20", val: "Verifique sua caixa de entrada e spam" },
    { label: "Data estimada", val: "21 de Junho de 2026" },
  ];

  return (
    <div className="fixed inset-0 z-[500] bg-primary/70 flex items-end animate-[fadeIn_0.3s_ease]">
      <div className="bg-background w-full px-7 pt-10 pb-12 animate-[slideUp_0.45s_cubic-bezier(0.22,1,0.36,1)] relative border-t-4 border-lime">
        <button onClick={onClose} className="absolute top-4 right-5 bg-transparent border-none cursor-pointer text-xl text-secondary">
          ✕
        </button>

        <div className="flex items-start gap-3 mb-7">
          <div className="w-[52px] h-[52px] rounded-full bg-lime flex-shrink-0 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="hsl(var(--primary))" strokeWidth="2.5"
                strokeLinecap="square" strokeDasharray="100" strokeDashoffset="0"
                style={{ animation: "check-draw 0.5s ease 0.2s both" }}
              />
            </svg>
          </div>
        </div>

        <h2 className="font-display font-black text-[2rem] uppercase leading-[1.05] text-primary mb-4">
          RITMO<br />CONFIRMADO
        </h2>

        <p className="font-body text-[0.9rem] leading-relaxed text-secondary mb-8">
          Seu e-mail foi cadastrado com sucesso.<br />
          Prepare-se para a largada, {data?.name?.split(" ")[0] || "corredor"}.
        </p>
        <p className="font-body text-[0.9rem] leading-relaxed text-secondary mb-8">
          Acompanhe seu e e-mail e entre no nosso grupo do WhatsApp para receber atualizações e dicas exclusivas para a corrida.
        </p>

        <div className="mb-8">
          {infos.map((item, idx) => (
            <div key={idx} className="border-l-[3px] border-lime pl-3.5 mb-5">
              <div className="font-mono text-[0.55rem] tracking-[0.16em] uppercase text-secondary">
                {item.label}
              </div>
              <div className="font-body font-semibold text-[0.9rem] text-primary mt-0.5">
                {item.val}
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => window.open("https://chat.whatsapp.com/GRdkqXgJdLuA15hl2vH3Wf?mode=gi_t", "_blank")} className="w-full bg-primary text-primary-foreground border-none py-[18px] font-mono text-[0.75rem] tracking-[0.16em] uppercase cursor-pointer flex items-center justify-between px-4">
          <span>
            Entrar no Grupo  
            <span className="text-lime"> Momma Run</span>
          </span>
          <span className="text-primary-foreground">→</span>
        </button>

        <div className="text-center mt-4 font-mono text-[0.6rem] tracking-[0.16em] uppercase text-secondary cursor-pointer">
          <a onClick={onClose}>VOLTAR PARA O INÍCIO</a>
        </div>
      </div>
    </div>
  );
}
