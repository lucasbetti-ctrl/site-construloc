import type { Metadata } from "next";

import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import AboutHero from "@/components/sections/AboutHero";
import AboutCarousel from "@/components/sections/AboutCarousel";
import SobreWhatsAppButton from "@/components/sections/SobreWhatsAppButton";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: `Conheça a história e os valores da ${siteConfig.name}, referência em materiais de construção há mais de 20 anos.`,
  alternates: {
    canonical: "/sobre",
  },
};

const values = [
  {
    title: "Missão",
    description:
      "Oferecer equipamentos para construção e manutenção de alta qualidade com atendimento especializado, ajudando nossos clientes a realizarem suas obras com eficiência e segurança.",
  },
  {
    title: "Visão",
    description:
      "Ser a locadora de equipamentos mais confiável e reconhecida da região, expandindo nossa presença e referência no mercado.",
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
      <AboutHero />

      {/* História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <SectionTitle
                badge="Nossa História"
                title={siteConfig.about.title}
                className="mb-6"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                A Construloc nasceu em 1991 da paixão por ajudar pessoas a realizarem seus sonhos de construção e reforma. Com mais de três décadas no mercado, somos referência em qualidade de produtos e atendimento personalizado. Nossa equipe especializada está sempre pronta para orientar você na escolha dos melhores materiais para cada etapa da sua obra.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Começamos como uma pequena loja de bairro com o sonho de oferecer qualidade acessível. Ao longo dos anos, crescemos e nos tornamos referência regional, mantendo sempre o compromisso com o cliente e a excelência nos produtos que oferecemos.
              </p>
              <SobreWhatsAppButton />
            </FadeIn>
            <FadeIn direction="right" delay={0.15} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <AboutCarousel />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
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
                <div className="w-10 h-1 bg-secondary mb-4 rounded" />
                <h2 className="text-xl font-bold text-primary mb-3">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-4xl font-black text-secondary">
                <AnimatedCounter target={30} suffix="+" />
              </p>
              <p className="text-primary-200 text-sm mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="text-4xl font-black text-secondary">
                <AnimatedCounter target={2000} suffix="+" separator />
              </p>
              <p className="text-primary-200 text-sm mt-1">Clientes atendidos</p>
            </div>
            <div>
              <p className="text-4xl font-black text-secondary">
                <AnimatedCounter target={150} suffix="+" />
              </p>
              <p className="text-primary-200 text-sm mt-1">Produtos no catálogo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
