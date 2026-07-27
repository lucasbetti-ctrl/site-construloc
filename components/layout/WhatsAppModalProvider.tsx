"use client";

import { createContext, useContext, useState } from "react";
import WhatsAppModal from "@/components/layout/WhatsAppModal";

interface WhatsAppModalContextValue {
  openWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(null);

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error("useWhatsAppModal deve ser usado dentro de WhatsAppModalProvider");
  }
  return context;
}

export default function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WhatsAppModalContext.Provider value={{ openWhatsAppModal: () => setIsOpen(true) }}>
      {children}
      <WhatsAppModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WhatsAppModalContext.Provider>
  );
}
