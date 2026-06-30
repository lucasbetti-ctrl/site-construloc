import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/ui/SectionTitle";

const aboutImages = [
  { src: "https://picsum.photos/seed/about1/400/300", alt: "Equipe Construloc em obra" },
  { src: "https://picsum.photos/seed/about2/400/300", alt: "Loja Construloc" },
  { src: "https://picsum.photos/seed/about3/400/300", alt: "Materiais de qualidade" },
  { src: "https://picsum.photos/seed/about4/400/300", alt: "Atendimento ao cliente" },
];

export default function AboutSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "var(--fundo-claro)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <SectionTitle
              badge="Sobre Nós"
              title={siteConfig.about.title}
              subtitle={siteConfig.about.description}
              className="mb-8"
            />
            <Link
              href="/sobre"
              className="botao-principal gap-2"
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
