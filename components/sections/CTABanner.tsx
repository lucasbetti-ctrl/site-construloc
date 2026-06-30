import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="https://picsum.photos/seed/ctabanner/1920/600"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
          PRONTO PARA COMEÇAR SUA OBRA?
        </h2>
        <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
          Entre em contato com nossa equipe e receba um orçamento personalizado sem compromisso.
          Atendemos toda a região com entrega rápida.
        </p>
        <div className="mt-8">
          <a
            href={generateWhatsAppLink("Olá! Gostaria de solicitar um orçamento para minha obra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-accent-600 transition-colors shadow-lg"
          >
            <MessageCircle size={22} aria-hidden="true" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
