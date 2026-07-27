import { siteConfig } from "@/data/siteConfig";

export type WhatsAppTarget = "maquinas" | "concreto";

export function generateWhatsAppLink(target: WhatsAppTarget, message?: string): string {
  const number =
    target === "concreto" ? siteConfig.whatsappConcreto : siteConfig.whatsappMaquinas;
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return `https://wa.me/${number}?text=${encodedMessage}`;
}
