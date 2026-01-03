import { Filter } from "@/lib/api/filters.api";

// Returns the selected filter
export const selectFilter = (filters: Filter[], selectedFilter: Filter): Filter[] => {
  return filters.map(filter =>
      filter.id === selectedFilter.id ? { ...selectedFilter, selected: true } : filter
    );
};

// Returns the selected filter clasess
export const getFilterClasses = (selected: boolean, disabled?: boolean) => {
  const base = 'rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer';
  const selectedClasses = selected
    ? 'bg-gray-500 text-gray-100 hover:bg-gray-600'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return `${base} ${selectedClasses} ${disabledClasses}`;
};
