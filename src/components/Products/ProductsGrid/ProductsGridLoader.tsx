"use client"

import { useContext } from "react";
import { ProductsStateContext } from "@/components/Products";
import ProductsGridResults from "./ProductsGridResults";

export default function ProductsGridLoader() {
  const { filters } = useContext(ProductsStateContext)
  const selectedFilters = filters.filter(filter => filter.selected);

  return <ProductsGridResults filters={selectedFilters}/>
}