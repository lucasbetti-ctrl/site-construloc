import type { Metadata } from "next";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryFilter from "./CategoryFilter";

export const metadata: Metadata = {
  title: "Produtos",
  description: `Catálogo completo de materiais de construção, ferramentas e equipamentos da ${siteConfig.name}. Filtre por categoria e encontre o que precisa.`,
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
      <section className="py-12 bg-primary-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-white uppercase">
            {activeCategory ? activeCategory.name : "Todos os Produtos"}
          </h1>
          {busca && (
            <p className="text-primary-200 mt-2">
              Resultados para: <strong className="text-secondary">&ldquo;{busca}&rdquo;</strong>
            </p>
          )}
        </div>
      </section>

      <section className="py-10 min-h-screen" style={{ backgroundColor: "var(--fundo-cinza)" }}>
        <div className="container mx-auto px-4">
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
