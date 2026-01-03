"use client"

import { Filter } from "@/src/lib/api/filters.api";
import { useContext, useEffect } from "react";
import ProductsFiltersChip from "./ProductsFiltersChip";
import { ProductsAPIContext, ProductsStateContext } from "../ProductsContext";

type ProductsFiltersProps = {
  filtersResponse: Filter[]
}

export default function ProductsFiltersView({ filtersResponse }: ProductsFiltersProps) {
  const { filters } = useContext(ProductsStateContext);
  const { handleSetFilters } = useContext(ProductsAPIContext);

  useEffect(() => {
      handleSetFilters(filtersResponse)
  }, [filtersResponse]);
  
  if(!filters.length) {
    return <>Filters not found</>
  }
  
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {filters.map((filter) => {
        return (
          <ProductsFiltersChip key={filter.id} filter={filter}/>
        )
      })}
    </div>
  )
}