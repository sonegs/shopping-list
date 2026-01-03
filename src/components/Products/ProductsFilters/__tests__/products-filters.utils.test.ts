import { Filter } from "@/src/lib/filters.api";
import { selectFilter } from "../products-filters.utils";

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
