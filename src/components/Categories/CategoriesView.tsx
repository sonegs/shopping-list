import { getCategories } from "@/src/lib/category.api";

export default async function CategoriesView() {
  const categories = await getCategories();

  if(!categories) {
    return <>Categories not found</>
  }

  return(
    <>
    {categories.results.map((category) => {
      // TODO: Add component to each category
      return (
        <div key={category.id}>{category.name}</div>
      )
    })}
    </>
  )
    
}