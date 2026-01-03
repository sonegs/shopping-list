"use client"

import { Filter } from "@/src/lib/filters.api";
import { ProductsAPIContext, ProductsStateContext } from "../ProductsContext";
import { useContext } from "react";
import { selectFilter } from "./products-filters.utils";

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
  const selectedClasses = selected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  const handleClick = () => {
    const selectedFilters = selectFilter(filters, filter);
    handleSetFilters(selectedFilters);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-full px-3 py-1 text-sm font-medium transition cursor-pointer ${selectedClasses}`}>
      {name}
    </div>
  );
}
