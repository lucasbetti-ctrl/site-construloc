import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-secondary font-semibold uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-3 flex-1">
          {product.name}
        </h3>
        <Link
          href={`/produtos/${product.slug}`}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-secondary text-white text-sm font-bold rounded hover:bg-secondary-600 transition-all duration-200 hover:-translate-y-0.5"
        >
          Saiba Mais
        </Link>
      </div>
    </article>
  );
}
