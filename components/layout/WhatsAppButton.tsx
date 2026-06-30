"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:bg-accent-600 hover:scale-110 transition-all duration-200"
    >
      <MessageCircle size={28} className="text-white" aria-hidden="true" />
    </a>
  );
}
