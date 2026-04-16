import { useState, useRef } from "react";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { EventInfo } from "@/components/EventInfo";
import { Countdown } from "@/components/Countdown";
import { Editorial } from "@/components/Editorial";
import { LeadForm, type LeadData } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { SuccessModal } from "@/components/SuccessModal";
import { ErrorModal } from "@/components/ErrorModal";

const Index = () => {
  const [modal, setModal] = useState<"success" | "error" | null>(null);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Nav onCTA={scrollToForm} />
      <Hero onCTA={scrollToForm} />
      <EventInfo />
      <Countdown />
      <Editorial />
      <LeadForm
        formRef={formRef}
        onSuccess={(data) => { setLeadData(data); setModal("success"); }}
        onError={() => setModal("error")}
      />
      <Footer />

      {modal === "success" && (
        <SuccessModal data={leadData} onClose={() => setModal(null)} />
      )}
      {modal === "error" && (
        <ErrorModal onRetry={() => { setModal(null); scrollToForm(); }} onClose={() => setModal(null)} />
      )}
    </>
  );
};

export default Index;
