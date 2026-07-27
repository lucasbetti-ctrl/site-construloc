import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Construloc",
  description:
    "Sua loja completa de materiais de construção, ferramentas e equipamentos. Qualidade e tradição a serviço da sua obra.",
  phone: "(11) 4538-8065",
  phoneSecondary: "(11) 4538-8064",
  phoneConcreto: "(11) 4534-1771",
  whatsappMaquinas: "551145388064",
  whatsappConcreto: "551145341771",
  email: "sac@construloc.com.br",
  address: {
    street: "Av. Antonio Galvão de Camargo, 580 - Jd. Lucca",
    city: "Itatiba",
    state: "SP",
    zip: "13255-180",
    full: "Av. Antonio Galvão de Camargo, 580 - Jd. Lucca — Itatiba/SP — CEP 13255-180",
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
  copyright: `© ${new Date().getFullYear()} Construloc - CNPJ 65.861.437/0001-65. Todos os direitos reservados.`,
};
