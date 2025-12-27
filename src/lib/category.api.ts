import { Endpoints } from "./utils/constants/endpoints";

type CategoriesResponse = {
  count: number,
  next: unknown,
  previous: unknown,
  results: CategoriesResult[],
}

type CategoriesResult = {
  id: number,
  order: number,
  is_extended: boolean,
  name: string,
  categories: Category[],
}

type Category = CategoriesResult & {
  published: boolean,
  layout: number,
}

export async function getCategories(): Promise<CategoriesResponse> {
  const categories = await fetch(`${Endpoints.MERCADONA}categories/`);
  if (!categories.ok) {
    throw new Error('Failed to fetch posts');
  }

  return categories.json();
}
