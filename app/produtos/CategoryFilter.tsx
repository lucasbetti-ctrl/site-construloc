"use client";

import Link from "next/link";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  active?: string;
}

export default function CategoryFilter({ categories, active }: CategoryFilterProps) {
  return (
    <nav aria-label="Filtro por categoria" className="flex flex-wrap gap-2">
      <Link
        href="/produtos"
        className={cn(
          "px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
          !active
            ? "bg-primary text-white border-primary"
            : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
        )}
      >
        Todos
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/produtos?categoria=${cat.slug}`}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
            active === cat.slug
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
          )}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  );
}
