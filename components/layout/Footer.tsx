import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Coluna 1: Logo e descrição */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt={`Logo ${siteConfig.name}`}
                width={160}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-secondary transition-colors text-xs font-semibold"
                  aria-label="Instagram da Construloc"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-secondary transition-colors text-xs font-semibold"
                  aria-label="Facebook da Construloc"
                >
                  Facebook
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-secondary transition-colors text-xs font-semibold"
                  aria-label="YouTube da Construloc"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Sobre Nós", href: "/sobre" },
                  { label: "Produtos", href: "/produtos" },
                  { label: "Contato", href: "/contato" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-200 text-sm hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-primary-200 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-200 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-200 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}/{siteConfig.address.state}
                  <br />
                  CEP {siteConfig.address.zip}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-primary-900">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-primary-300 text-sm font-medium">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
