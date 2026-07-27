"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/siteConfig";
import { useWhatsAppModal } from "@/components/layout/WhatsAppModalProvider";

export default function ContatoWhatsAppCard() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <button
      type="button"
      onClick={openWhatsAppModal}
      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-accent hover:shadow-sm transition-all group w-full text-left"
    >
      <span className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
        <WhatsAppIcon size={20} className="text-accent group-hover:text-white" />
      </span>
      <div>
        <p className="font-semibold text-gray-800">WhatsApp</p>
        <p className="text-gray-500 text-sm mt-0.5">Atendimento rápido</p>
        <p className="text-primary font-medium mt-1">
          Máquinas: {siteConfig.phoneSecondary}
        </p>
        <p className="text-primary font-medium">
          Concreto: {siteConfig.phoneConcreto}
        </p>
      </div>
    </button>
  );
}
