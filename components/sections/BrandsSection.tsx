import { brands } from "@/data/brands";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BrandsSection() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Marcas que Trabalhamos"
          subtitle="Trabalhamos apenas com marcas reconhecidas e de alta qualidade no mercado."
          centered
          className="mb-10"
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-brands-scroll w-max">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-6 h-40 w-72 shrink-0 hover:border-primary hover:shadow-sm transition-all duration-200"
            >
              {brand.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-contain w-full h-full p-2"
                />
              ) : (
                <span className="text-primary font-bold text-lg tracking-wide">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
