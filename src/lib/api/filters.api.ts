import { Endpoints } from "../utils/constants/endpoints";
import { filtersResponseToFilters } from "./mappers/filters.mapper";

export type FiltersResponse = {
  count: number,
  next: unknown,
  previous: unknown,
  results: FilterResult[],
}

export type FilterResultBase = {
  id: number,
  order: number,
  is_extended: boolean,
  name: string,
  categories: FilterResult[],
}

export type FilterResult = FilterResultBase & {
  published: boolean,
  layout: number,
}

export type Filter = FilterResultBase & {
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

export async function getFilter(id: number): Promise<FilterResult> {
  const filter = await fetch(`${Endpoints.MERCADONA}categories/${id}`);
  if (!filter.ok) {
    throw new Error('Failed to fetch posts');
  }

  return filter.json();
}