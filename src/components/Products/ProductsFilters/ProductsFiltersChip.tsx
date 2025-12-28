"use client"

import { FiltersResult } from "@/src/lib/filters.api";
import { ProductsAPIContext, ProductsStateContext } from "../ProductsContext";
import { useContext } from "react";

type SelectableChipProps = {
  filter: FiltersResult;
  isSelected?: boolean;
}

export default function ProductsFiltersChip({
  filter,
  isSelected,
}: SelectableChipProps) {
  const { filters } = useContext(ProductsStateContext)
  const { handleSetFilters } = useContext(ProductsAPIContext)
  const { id, name } = filter;
  const selected = isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  const handleClick = () => {
    // TODO: Check if the id is in the filters. 
      handleSetFilters([...filters, id]);
  }

  return (
    <div
      onClick={handleClick}
      className={`rounded-full px-3 py-1 text-sm font-medium transition ${selected}`}>
      {name}
    </div>
  );
}
