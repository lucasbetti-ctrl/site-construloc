import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/ui/SectionTitle";

const aboutImages = [
  { src: "/images/about/sobre7.jpeg", alt: "Sede da Construloc em Itatiba" },
  { src: "/images/about/sobre6.jpeg", alt: "Frota de equipamentos para locação da Construloc" },
  { src: "/images/about/sobre-8.PNG", alt: "Loja Construloc em Itatiba" },
  { src: "/images/about/sobre5.jpeg", alt: "Equipamento para locação Construloc em operação" },
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <SectionTitle
              badge="Sobre Nós"
              title={siteConfig.about.title}
              className="mb-6"
            />
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Especializada em locação, venda e assistência técnica de equipamentos e acessórios para construção civil, a Construloc atua no mercado focada na missão de fornecer serviços e equipamentos de qualidade. A empresa oferece a garantia de marcas consagradas e assistência técnica para todos os produtos, unindo adequação das necessidades à segurança da equipe e do negócio de seus clientes. Assim, segue construindo parcerias, solidificando a relação de confiança com seus parceiros e garantindo resultados.
            </p>
            <ul className="space-y-1.5 mb-8">
              {[
                "Equipamentos sempre revisados",
                "Garantia de eficácia",
                "Baixo custo operacional",
                "Máquinas modernas de última geração",
                "Redução de custo com ativo imobilizado",
                "Confiabilidade e solidez de uma empresa especializada",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-gray-600">
                  <span className="mt-0.5 text-secondary font-bold text-base leading-none">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Conheça mais sobre nós →
            </Link>
          </div>

          {/* Grade de imagens */}
          <div className="grid grid-cols-2 gap-3">
            {aboutImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
