import { getCategories } from "@/src/lib/category.api";

export default async function ProductsView() {
  const categories = await getCategories();

  if(!categories) {
    return <>Categories not found</>
  }

  
}