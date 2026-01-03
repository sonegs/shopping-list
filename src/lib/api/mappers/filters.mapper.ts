import { Filter, FiltersResponse } from "../filters.api";

export const filtersResponseToFilters = (filtersResponse: FiltersResponse): Filter[] => {
  const filters = filtersResponse.results.map((filterResponse) => {
    return {
      ...filterResponse,
      selected: false,
    }
  })
return filters;
}