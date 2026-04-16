interface Props {
  onRetry: () => void;
  onClose: () => void;
}

export function ErrorModal({ onRetry, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[500] bg-primary/75 flex items-center justify-center p-7 animate-[fadeIn_0.3s_ease]">
      <div className="bg-background w-full max-w-[380px] px-7 py-10 animate-[scaleIn_0.35s_cubic-bezier(0.22,1,0.36,1)] border-t-4 border-destructive relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(var(--primary))">
            <path d="M16 2L2 28h28L16 2zm0 6l10 18H6L16 8zm-1 6v6h2v-6h-2zm0 8v2h2v-2h-2z" />
          </svg>
          <div className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-secondary text-right">
            SYSTEM ERROR<br />
            <strong className="text-primary text-[0.72rem]">ERR_SYNC_04</strong>
          </div>
        </div>

        <h2 className="font-display font-black text-[2rem] uppercase leading-[1.05] text-primary mb-4">
          ALGO SAIU<br />DO RITMO
        </h2>

        <div className="w-10 h-0.5 bg-lime mb-5" />

        <p className="font-body text-[0.9rem] leading-relaxed text-secondary mb-8">
          Não conseguimos processar seu cadastro agora. Tente novamente em instantes.
        </p>

        <button onClick={onRetry} className="w-full bg-primary text-primary-foreground border-none py-[18px] font-mono text-[0.75rem] tracking-[0.16em] uppercase cursor-pointer mb-4">
          TENTAR NOVAMENTE
        </button>

        <div onClick={onClose} className="text-center font-mono text-[0.6rem] tracking-[0.16em] uppercase text-secondary cursor-pointer">
          VOLTAR PARA O INÍCIO
        </div>

        <div className="absolute bottom-2 right-3 font-display font-black text-[5rem] uppercase leading-none text-container-bg select-none pointer-events-none">
          RUN
        </div>
      </div>
    </div>
  );
}
