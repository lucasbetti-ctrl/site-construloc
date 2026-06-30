import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/produtos?categoria=${category.slug}`}
      className="group relative block rounded-xl overflow-hidden aspect-[3/2] shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={category.image}
        alt={`Categoria ${category.name}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-base leading-tight">{category.name}</h3>
        <span className="inline-block mt-2 text-secondary text-xs font-semibold">
          Ver produtos →
        </span>
      </div>
    </Link>
  );
}
