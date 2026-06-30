import { brands } from "@/data/brands";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BrandsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Marcas que Trabalhamos"
          subtitle="Trabalhamos apenas com marcas reconhecidas e de alta qualidade no mercado."
          centered
          className="mb-10"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-6 h-24 hover:border-primary hover:shadow-sm transition-all duration-200"
            >
              <span className="text-primary font-bold text-lg tracking-wide">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
