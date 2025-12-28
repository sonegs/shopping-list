import { Endpoints } from "./utils/constants/endpoints";

type FiltersResponse = {
  count: number,
  next: unknown,
  previous: unknown,
  results: Filter[],
}

export type FiltersResult = {
  id: number,
  order: number,
  is_extended: boolean,
  name: string,
  categories: Filter[],
}

type Filter = FiltersResult & {
  published: boolean,
  layout: number,
}

export async function getFilters(): Promise<FiltersResponse> {
  const filters = await fetch(`${Endpoints.MERCADONA}categories/`);
  if (!filters.ok) {
    throw new Error('Failed to fetch posts');
  }

  return filters.json();
}
