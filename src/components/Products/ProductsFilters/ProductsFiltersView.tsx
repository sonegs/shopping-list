import { getFilters } from "@/src/lib/filters.api";
import ProductsFiltersChip from "./ProductsFiltersChip";


export default async function ProductsFiltersView() {
  const filters = await getFilters();

  if(!filters || !filters.results.length) {
    return <>Filters not found</>
  }

  return(
    <div className="flex flex-wrap gap-2 p-4">
      {filters.results.map((filter) => {
        return (
          <ProductsFiltersChip key={filter.id} filter={filter}/>
        )
      })}
    </div>
  )
    
}