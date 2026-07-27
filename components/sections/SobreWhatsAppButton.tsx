"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useWhatsAppModal } from "@/components/layout/WhatsAppModalProvider";

export default function SobreWhatsAppButton() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <button
      type="button"
      onClick={openWhatsAppModal}
      className="inline-flex items-center gap-2 mt-8 bg-accent text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors"
    >
      <WhatsAppIcon size={18} />
      Fale Conosco
    </button>
  );
}
