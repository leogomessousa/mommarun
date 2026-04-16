import { useState, RefObject } from "react";
import { AnimSection } from "./AnimSection";

export interface LeadData {
  name: string;
  email: string;
  whatsapp: string;
}

interface Props {
  formRef: RefObject<HTMLElement | null>;
  onSuccess: (data: LeadData) => void;
  onError: () => void;
}

// COLE AQUI A URL QUE VOCÊ COPIOU DO GOOGLE
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxmZzishsi_lX2Xr5ei3vHVKoVLx6HSwVmV91sTu6by6FvgbkB27AyKuA5rQherQBg8/exec";

export function LeadForm({ formRef, onSuccess, onError }: Props) {
  const [form, setForm] = useState<LeadData>({ name: "", email: "", whatsapp: "" });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome obrigatório";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "E-mail inválido";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp obrigatório"; // Validação obrigatória
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    
    setErrors({});
    setLoading(true);

    try {
      // Envio direto para a planilha via fetch
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Necessário para Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Como usamos 'no-cors', não conseguimos ler o JSON de resposta, 
      // mas se não cair no catch, o envio foi feito.
      onSuccess(form);
    } catch (err) {
      console.error(err);
      onError();
    } finally {
      setLoading(false);
    }
  };

  const inputBorder = (field: string) =>
    errors[field] ? "border-destructive" : focused === field ? "border-lime" : "border-container-bg";


  return (
    <section ref={formRef} className="bg-background px-7 py-[72px]">
      <AnimSection>
        <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-secondary mb-4">
          Garanta sua Vaga
        </div>
        <h2 className="font-display font-black text-[clamp(1.8rem,7vw,2.6rem)] uppercase leading-[1.05] text-primary mb-2">
          PRONTO PARA<br />DEFINIR SEU<br />
          <span className="text-tertiary">PRÓPRIO COMPASSO?</span>
        </h2>
        <p className="font-body text-[0.85rem] leading-relaxed text-primary mt-5 max-w-[300px]">
          17 a 19 de junho:<br />
          Cadastro antecipado<br /><br />

          20 de junho:<br />
          Você recebe um e-mail e link no nosso grupo com acesso à pré-venda<br />

          Link exclusivo válido por 24h<br /><br />

          A partir de 21 de junho:<br />
          Abertura para o público geral<br /><br />

          Não perca a chance de garantir seu lugar na linha de largada. Cadastre-se agora e esteja um passo à frente rumo à experiência única que preparamos para você.
        </p>
        <div className="flex flex-col gap-7 mt-10">
          {/* Nome */}
          <div>
            <label className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-secondary block mb-1">Nome completo</label>
            <input
              className={`w-full bg-transparent border-0 border-b-[1.5px] ${inputBorder("name")} py-3 text-[0.95rem] font-body text-foreground outline-none transition-colors`}
              placeholder="Como devemos te chamar?"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
            {errors.name && <div className="font-mono text-[0.58rem] text-destructive mt-1">{errors.name}</div>}
          </div>

          {/* Email */}
          <div>
            <label className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-secondary block mb-1">E-mail</label>
            <input
              className={`w-full bg-transparent border-0 border-b-[1.5px] ${inputBorder("email")} py-3 text-[0.95rem] font-body text-foreground outline-none transition-colors`}
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
            {errors.email && <div className="font-mono text-[0.58rem] text-destructive mt-1">{errors.email}</div>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-secondary block mb-1">WhatsApp</label>
            <input
              className={`w-full bg-transparent border-0 border-b-[1.5px] ${inputBorder("whatsapp")} py-3 text-[0.95rem] font-body text-foreground outline-none transition-colors`}
              placeholder="(61) 9 0000-0000"
              value={form.whatsapp}
              onChange={e => setForm({ ...form, whatsapp: e.target.value })}
              onFocus={() => setFocused("whatsapp")}
              onBlur={() => setFocused(null)}
            />
            {errors.whatsapp && <div className="font-mono text-[0.58rem] text-destructive mt-1">{errors.whatsapp}</div>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full border-none py-[18px] px-7 font-mono text-[0.78rem] tracking-[0.16em] uppercase font-medium mt-2 transition-all ${
              loading ? "bg-container-bg text-secondary" : "bg-primary text-primary-foreground"
            }`}
          >
            {loading ? "PROCESSANDO..." : "LISTA DE ESPERA VIP →"}
          </button>
        </div>
      </AnimSection>
    </section>
  );
}