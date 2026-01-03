import { Filter } from "@/src/lib/filters.api";

// Returns the selected filter
export const selectFilter = (filters: Filter[], selectedFilter: Filter): Filter[] => {
  return filters.map(filter =>
      filter.id === selectedFilter.id ? { ...selectedFilter, selected: true } : filter
    );
};
