import type { Metadata } from "next";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryFilter from "./CategoryFilter";
import ProductsHero from "./ProductsHero";

export const metadata: Metadata = {
  title: "Equipamentos para Locação em Itatiba",
  description: `Catálogo completo de máquinas e equipamentos para locação em Itatiba: plataformas elevatórias, compactação, concreto e ferramentas da ${siteConfig.name}.`,
  alternates: {
    canonical: "/produtos",
  },
};

interface ProductsPageProps {
  searchParams: { categoria?: string; busca?: string };
}

export default function ProdutosPage({ searchParams }: ProductsPageProps) {
  const { categoria, busca } = searchParams;

  const filtered = products.filter((product) => {
    const matchesCategory = categoria ? product.categorySlug === categoria : true;
    const matchesSearch = busca
      ? product.name.toLowerCase().includes(busca.toLowerCase()) ||
        product.description.toLowerCase().includes(busca.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const activeCategory = categories.find((c) => c.slug === categoria);

  return (
    <>
      <ProductsHero
        title={activeCategory ? activeCategory.name : "Equipamentos para Locação em Itatiba"}
        busca={busca}
      />

      <section className="py-10 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Alugue máquinas e equipamentos para sua obra em Itatiba e região. Filtre por categoria para encontrar o equipamento certo, com condições de locação flexíveis e suporte técnico da Construloc.
          </p>
          <CategoryFilter categories={categories} active={categoria} />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center">
              <SectionTitle
                title="Nenhum produto encontrado"
                subtitle="Tente outra busca ou navegue pelas categorias acima."
                centered
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
