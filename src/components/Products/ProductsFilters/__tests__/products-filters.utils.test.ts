import { Filter } from "@/src/lib/filters.api";
import { getFilterClasses, selectFilter } from "../products-filters.utils";

describe('selectFilter', () => {
  const filtersMock: Filter[] = [
    {
      id: 1,
      order: 1,
      is_extended: false,
      name: 'Filter 1',
      categories: [],
      selected: false,
    },
    {
      id: 2,
      order: 2,
      is_extended: true,
      name: 'Filter 2',
      categories: [],
      selected: false,
    },
  ];

  it('should set selected to true for the matching filter', () => {
    const selectedFilter: Filter = {
      id: 1,
      order: 1,
      is_extended: false,
      name: 'Filter 1',
      categories: [],
      selected: false,
    };

    const result = selectFilter(filtersMock, selectedFilter);

    expect(result).toEqual([
      { ...selectedFilter, selected: true },
      filtersMock[1],
    ]);
  });

  it('should not modify other filters', () => {
    const selectedFilter: Filter = {
      id: 2,
      order: 2,
      is_extended: true,
      name: 'Filter 2',
      categories: [],
      selected: false,
    };

    const result = selectFilter(filtersMock, selectedFilter);

    expect(result[0]).toEqual(filtersMock[0]);
    expect(result[1].selected).toBe(true);
  });

  it('should return a new array instance', () => {
    const selectedFilter: Filter = filtersMock[0];
    const result = selectFilter(filtersMock, selectedFilter);

    expect(result).not.toBe(filtersMock);
  });

  it('should not modify original filters objects except the updated one', () => {
    const filtersPrev = filtersMock.map(filterMock => ({ ...filterMock }));
    const selectedFilter: Filter = filtersPrev[0];

    selectFilter(filtersPrev, selectedFilter);

    expect(filtersPrev[1].selected).toBe(false);
  });

  it('should handle a filter that does not exist in the array', () => {
    const selectedFilter: Filter = {
      id: 3,
      order: 3,
      is_extended: false,
      name: 'Filter 3',
      categories: [],
      selected: false,
    };

    const result = selectFilter(filtersMock, selectedFilter);

    expect(result).toEqual(filtersMock);
  });
});

describe('getFilterClasses', () => {
  const base = 'rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer';

  it('should return selected classes when selected is true', () => {
    const result = getFilterClasses(true);
    expect(result).toContain(base);
    expect(result).toContain('bg-gray-500 text-gray-100 hover:bg-gray-600');
    expect(result).not.toContain('opacity-50 cursor-not-allowed');
  });

  it('should return unselected classes when selected is false', () => {
    const result = getFilterClasses(false);
    expect(result).toContain(base);
    expect(result).toContain('bg-gray-100 text-gray-700 hover:bg-gray-200');
    expect(result).not.toContain('opacity-50 cursor-not-allowed');
  });

  it('should add disabled classes when disabled is true', () => {
    const result = getFilterClasses(false, true);
    expect(result).toContain(base);
    expect(result).toContain('bg-gray-100 text-gray-700 hover:bg-gray-200');
    expect(result).toContain('opacity-50 cursor-not-allowed');
  });

  it('should combine selected and disabled classes correctly', () => {
    const result = getFilterClasses(true, true);
    expect(result).toContain(base);
    expect(result).toContain('bg-gray-500 text-gray-100 hover:bg-gray-600');
    expect(result).toContain('opacity-50 cursor-not-allowed');
  });

  it('should not add disabled classes when disabled is false', () => {
    const result = getFilterClasses(true, false);
    expect(result).toContain(base);
    expect(result).toContain('bg-gray-500 text-gray-100 hover:bg-gray-600');
    expect(result).not.toContain('opacity-50 cursor-not-allowed');
  });
});
