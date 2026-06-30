import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[90vh] overflow-hidden">
      <Image
        src="https://picsum.photos/seed/construction/1920/1080"
        alt="Obra de construção civil"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="mt-10">
            <a
              href={generateWhatsAppLink("Olá! Gostaria de fazer um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-accent-600 transition-colors shadow-lg"
            >
              <MessageCircle size={22} aria-hidden="true" />
              Faça um Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
