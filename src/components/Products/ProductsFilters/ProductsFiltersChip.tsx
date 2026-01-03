"use client"

import { Filter } from "@/src/lib/filters.api";
import { ProductsAPIContext, ProductsStateContext } from "../ProductsContext";
import { useContext } from "react";
import { getFilterClasses, selectFilter } from "./products-filters.utils";

type SelectableChipProps = {
  filter: Filter;
  isSelected?: boolean;
}

export default function ProductsFiltersChip({
  filter,
}: SelectableChipProps) {
  const { filters } = useContext(ProductsStateContext)
  const { handleSetFilters } = useContext(ProductsAPIContext)
  const { name, selected } = filter;

  const handleClick = () => {
    const selectedFilters = selectFilter(filters, filter);
    handleSetFilters(selectedFilters);
  };

  return (
    <div onClick={handleClick} className={getFilterClasses(selected)}>
      {name}
    </div>
  );
}
