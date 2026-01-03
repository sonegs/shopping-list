import { getFilters } from "@/src/lib/api/filters.api";
import ProductsFilters from "./ProductsFilters";


export default async function ProductsFiltersView() {
  const filters = await getFilters();
  
  return <ProductsFilters filtersResponse={filters}/>
    
}