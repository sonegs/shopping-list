import { Endpoints } from "./utils/constants/endpoints";

export async function getCategories() {
  const categories = await fetch(`${Endpoints.MERCADONA}categories/`);
  if (!categories.ok) {
    throw new Error('Failed to fetch posts');
  }

  return categories.json();
}
