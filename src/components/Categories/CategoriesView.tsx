import { getCategories } from "@/src/lib/category.api";
import { Chip } from "../ui/Chip";

export default async function CategoriesView() {
  const categories = await getCategories();

  if(!categories) {
    return <>Categories not found</>
  }

  return(
    <div className="flex flex-wrap gap-2 p-4">
    {categories.results.map((category) => {
      // TODO: Add onClick function
      return (
        <Chip key={category.id} label={category.name}/>
      )
    })}
    </div>
  )
    
}