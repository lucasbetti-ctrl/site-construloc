import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

import { siteConfig } from "@/data/siteConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a ${siteConfig.name}. Telefone, e-mail, endereço e WhatsApp. Estamos prontos para atender você.`,
};

export default function ContatoPage() {
  return (
    <>
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary uppercase">Fale Conosco</h1>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Entre em contato pelos nossos canais de atendimento. Respondemos rapidamente!
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Informações de Contato"
            subtitle="Escolha o canal mais conveniente para você."
            className="mb-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Informações de contato */}
            <div>
              <ul className="space-y-5">
                <li>
                  <a
                    href={generateWhatsAppLink("maquinas")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <span className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <WhatsAppIcon size={20} className="text-accent group-hover:text-white" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-gray-500 text-sm mt-0.5">Atendimento rápido</p>
                      <p className="text-primary font-medium mt-1">{siteConfig.phoneSecondary}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Phone size={20} className="text-primary group-hover:text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Telefone</p>
                      <p className="text-gray-500 text-sm mt-0.5">Loja física</p>
                      <p className="text-primary font-medium mt-1">
                        {siteConfig.phone}
                        {siteConfig.phoneSecondary && ` / ${siteConfig.phoneSecondary}`}
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Mail size={20} className="text-primary group-hover:text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">E-mail</p>
                      <p className="text-gray-500 text-sm mt-0.5">Resposta em até 24h</p>
                      <p className="text-primary font-medium mt-1">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                    <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed mt-1">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city} — {siteConfig.address.state}
                        <br />
                        CEP {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Redes sociais e horários */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-primary mb-5">Horário de Funcionamento</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    { days: "Segunda a Sexta", hours: "07h00 às 17h00" },
                    { days: "Sábado, Domingo e Feriados", hours: "Fechado" },
                  ].map((item) => (
                    <li key={item.days} className="flex justify-between">
                      <span className="text-gray-600">{item.days}</span>
                      <span className="font-semibold text-primary">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
