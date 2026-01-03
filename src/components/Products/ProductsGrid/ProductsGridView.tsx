"use client"

import { FilterResult } from "@/lib/api/filters.api";

interface ProductsGridViewProps {
  filtersDetails: FilterResult[]
}

export default function ProductsGridView({ filtersDetails }: ProductsGridViewProps) {
  // TODO: Add product mapper by ProductsCard
  // TODO: Virtualize products to improve performance if it is necessary

  return (
    <>Products Grid View</>
  )    
}