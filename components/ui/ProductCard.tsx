import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-white p-6 border-b border-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-sm text-primary-500 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 text-base leading-tight mb-3 flex-1">
          {product.slug === "concreto"
            ? "Clique em saiba mais e solicite seu orçamento."
            : product.name}
        </h3>
        <Link
          href={`/produtos/${product.slug}`}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-600 transition-colors"
        >
          Saiba Mais
        </Link>
      </div>
    </article>
  );
}
