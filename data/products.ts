import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Cimento Portland CP II 50kg",
    slug: "cimento-portland-cp-ii-50kg",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod1/600/600",
    description:
      "Cimento Portland CP II de alta resistência, ideal para estruturas, fundações e argamassas em geral. Saco de 50kg.",
    featured: true,
  },
  {
    id: "2",
    name: "Tijolo Cerâmico 9 Furos",
    slug: "tijolo-ceramico-9-furos",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod2/600/600",
    description:
      "Tijolo cerâmico de 9 furos para alvenaria. Alta resistência e excelente isolamento térmico e acústico.",
    featured: true,
  },
  {
    id: "3",
    name: "Argamassa ACIII 20kg",
    slug: "argamassa-aciii-20kg",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod3/600/600",
    description:
      "Argamassa colante ACIII para assentamento de revestimentos em áreas externas e internas sujeitas a variações térmicas.",
    featured: true,
  },
  {
    id: "4",
    name: "Tela Soldada 2,45x6m",
    slug: "tela-soldada-2-45x6m",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod4/600/600",
    description:
      "Tela soldada galvanizada para reforço de lajes, calçadas e pisos. Fio de 4,2mm, malha 15x15cm.",
    featured: true,
  },
  {
    id: "5",
    name: "Escada Extensiva 7 Degraus",
    slug: "escada-extensiva-7-degraus",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod5/600/600",
    description:
      "Escada extensiva de alumínio com 7 degraus, alcance de até 4,5m. Leve, resistente e com travas de segurança.",
    featured: true,
  },
  {
    id: "6",
    name: "Betoneira 400L Elétrica",
    slug: "betoneira-400l-eletrica",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod6/600/600",
    description:
      "Betoneira elétrica de 400 litros, motor de 1CV. Ideal para obras de médio porte. Estrutura em aço carbono.",
    featured: true,
  },
  {
    id: "7",
    name: "Vassoura Industrial 60cm",
    slug: "vassoura-industrial-60cm",
    category: "Limpeza",
    categorySlug: "limpeza",
    image: "https://picsum.photos/seed/prod7/600/600",
    description:
      "Vassoura industrial com cabo longo e cerdas resistentes. Ideal para limpeza de grandes áreas e obras.",
    featured: false,
  },
  {
    id: "8",
    name: "Lavadora de Alta Pressão",
    slug: "lavadora-alta-pressao",
    category: "Limpeza",
    categorySlug: "limpeza",
    image: "https://picsum.photos/seed/prod8/600/600",
    description:
      "Lavadora de alta pressão 1750W com mangueira de 5m. Perfeita para limpeza de fachadas, pisos e veículos.",
    featured: false,
  },
  {
    id: "9",
    name: "Aspirador de Pó Industrial",
    slug: "aspirador-industrial",
    category: "Limpeza",
    categorySlug: "limpeza",
    image: "https://picsum.photos/seed/prod9/600/600",
    description:
      "Aspirador industrial de 1200W com capacidade de 30L. Coleta pó, entulho e resíduos de construção.",
    featured: false,
  },
  {
    id: "10",
    name: "Kit Ferramentas de Jardim",
    slug: "kit-ferramentas-jardim",
    category: "Jardinagem",
    categorySlug: "jardinagem",
    image: "https://picsum.photos/seed/prod10/600/600",
    description:
      "Kit com 5 ferramentas essenciais para jardinagem: enxada, rastelo, pá, transplantador e cultivador.",
    featured: false,
  },
  {
    id: "11",
    name: "Mangueira Tramontina 30m",
    slug: "mangueira-tramontina-30m",
    category: "Jardinagem",
    categorySlug: "jardinagem",
    image: "https://picsum.photos/seed/prod11/600/600",
    description:
      "Mangueira de jardim com 30 metros, pistola 8 funções e suporte de parede inclusos. Alta resistência à pressão.",
    featured: false,
  },
  {
    id: "12",
    name: "Carrinho de Mão 60L",
    slug: "carrinho-de-mao-60l",
    category: "Construção",
    categorySlug: "construcao",
    image: "https://picsum.photos/seed/prod12/600/600",
    description:
      "Carrinho de mão com caçamba de 60 litros em polietileno, pneu pneumático de 4.00-8. Capacidade de 160kg.",
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const nonFeaturedProducts = products.filter((p) => !p.featured);
