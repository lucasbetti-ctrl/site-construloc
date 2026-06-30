import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: `Conheça a história e os valores da ${siteConfig.name}, referência em materiais de construção há mais de 20 anos.`,
};

const values = [
  {
    title: "Missão",
    description:
      "Oferecer materiais de construção de alta qualidade com atendimento especializado, ajudando nossos clientes a realizarem suas obras com eficiência e segurança.",
  },
  {
    title: "Visão",
    description:
      "Ser a loja de materiais de construção mais confiável e reconhecida da região, expandindo nossa presença e referência no mercado.",
  },
  {
    title: "Valores",
    description:
      "Qualidade, honestidade, compromisso com o cliente, responsabilidade ambiental e valorização das pessoas que fazem parte da nossa equipe.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero da página */}
      <section className="relative py-20 bg-primary-800 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase">Sobre Nós</h1>
          <p className="mt-4 text-primary-200 text-lg max-w-2xl mx-auto">
            Conheça nossa história, missão e o que nos move a ser a melhor escolha para a sua obra.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16" style={{ backgroundColor: "var(--fundo-claro)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                badge="Nossa História"
                title={siteConfig.about.title}
                subtitle={siteConfig.about.description}
                className="mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                Fundada em 2004, a {siteConfig.name} começou como uma pequena loja de bairro com o
                sonho de oferecer qualidade acessível. Ao longo dos anos, crescemos e nos tornamos
                referência regional, mantendo sempre o compromisso com o cliente e a excelência nos
                produtos que oferecemos.
              </p>
              <a
                href={generateWhatsAppLink("Olá! Gostaria de saber mais sobre a Construloc.")}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-principal gap-2 mt-8"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Fale Conosco
              </a>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/aboutpage/800/500"
                alt="Equipe e loja da Construloc"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16" style={{ backgroundColor: "var(--fundo-cinza)" }}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Missão, Visão e Valores"
            centered
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-secondary rounded mb-4" />
                <h2 className="text-xl font-bold text-primary mb-3">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Anos de experiência" },
              { number: "5.000+", label: "Clientes atendidos" },
              { number: "3.000+", label: "Produtos no catálogo" },
              { number: "8", label: "Marcas parceiras" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-secondary">{stat.number}</p>
                <p className="text-primary-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
