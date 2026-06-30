import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Produtos em Destaque"
          subtitle="Selecionamos os melhores produtos para a sua obra."
          centered
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
