import { getFilters } from "@/lib/api/filters.api";
import ProductsFiltersView from "./ProductsFiltersView";

export default async function ProductsFilters() {
  const filters = await getFilters();
  
  return <ProductsFiltersView filtersResponse={filters}/>
    
}