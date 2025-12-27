import { Endpoints } from "./utils/constants/endpoints";

export async function getCategories() {
  const res = await fetch(`${Endpoints.MERCADONA}categories/`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}
