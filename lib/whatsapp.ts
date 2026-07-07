import { siteConfig } from "@/data/siteConfig";

export function generateWhatsAppLink(message?: string): string {
  const number = siteConfig.whatsapp;
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return `https://wa.me/${number}?text=${encodedMessage}`;
}
