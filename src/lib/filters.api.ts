import { filtersResponseToFilters } from "./filters.mapper";
import { Endpoints } from "./utils/constants/endpoints";

export type FiltersResponse = {
  count: number,
  next: unknown,
  previous: unknown,
  results: FiltersResult[],
}

export type FiltersResultBase = {
  id: number,
  order: number,
  is_extended: boolean,
  name: string,
  categories: FiltersResult[],
}

export type FiltersResult = FiltersResultBase & {
  published: boolean,
  layout: number,
}

export type Filter = FiltersResultBase & {
  selected: boolean,
}

export async function getFilters(): Promise<Filter[]> {
  const filters = await fetch(`${Endpoints.MERCADONA}categories/`);
  if (!filters.ok) {
    throw new Error('Failed to fetch posts');
  }

  const filtersResponse: FiltersResponse = await filters.json();

  return filtersResponseToFilters(filtersResponse);
}