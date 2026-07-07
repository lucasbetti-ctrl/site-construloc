import Link from "next/link";
import { ImageIcon } from "lucide-react";

import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <ImageIcon className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-sm text-primary-500 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 text-base leading-tight mb-3 flex-1">
          {product.name}
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
