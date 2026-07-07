import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Construloc",
  description:
    "Sua loja completa de materiais de construção, ferramentas e equipamentos. Qualidade e tradição a serviço da sua obra.",
  phone: "(11) 3456-7890",
  whatsapp: "5511934567890",
  email: "contato@construloc.com.br",
  address: {
    street: "Av. das Construções, 1234",
    city: "São Paulo",
    state: "SP",
    zip: "01234-567",
    full: "Av. das Construções, 1234 — São Paulo/SP — CEP 01234-567",
  },
  social: {
    instagram: "https://instagram.com/construloc",
    facebook: "https://facebook.com/construloc",
    youtube: "https://youtube.com/construloc",
  },
  hero: {
    title: "TUDO PARA SUA OBRA EM UM SÓ LUGAR",
    subtitle:
      "Materiais de construção, ferramentas e equipamentos com qualidade garantida e o melhor preço da região.",
  },
  about: {
    title: "35 anos construindo junto com você",
    description:
      "A Construloc nasceu da paixão por ajudar pessoas a realizarem seus sonhos de construção e reforma. Com mais de três décadas no mercado, somos referência em qualidade de produtos e atendimento personalizado. Nossa equipe especializada está sempre pronta para orientar você na escolha dos melhores materiais para cada etapa da sua obra.",
  },
  copyright: `© ${new Date().getFullYear()} Construloc. Todos os direitos reservados.`,
};
