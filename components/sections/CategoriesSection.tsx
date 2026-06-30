import { categories } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossas Categorias"
          subtitle="Encontre tudo que você precisa para sua obra organizado por categoria."
          centered
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
