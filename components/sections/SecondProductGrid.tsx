import { nonFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function SecondProductGrid() {
  const displayProducts = nonFeaturedProducts.slice(0, 6);

  return (
    <section className="py-16" style={{ backgroundColor: "var(--fundo-claro)" }}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mais Produtos"
          subtitle="Confira outros produtos disponíveis no nosso catálogo completo."
          centered
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/produtos"
            className="botao-secundario gap-2"
          >
            Ver Catálogo Completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
