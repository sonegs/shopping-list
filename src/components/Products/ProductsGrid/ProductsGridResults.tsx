'use client';

import type { Filter, FilterResult } from '@/lib/api/filters.api';
import { useEffect, useState } from 'react';
import ProductsGridView from './ProductsGridView';

type ProductsGridResultsProps = {
  filters: Filter[];
};

export default function ProductsGridResults({ filters }: ProductsGridResultsProps) {
  const [filterDetails, setFilterDetails] = useState<FilterResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (filters.length === 0) {
      setFilterDetails([]);
      setIsLoading(false);
      return;
    }

    const fetchFilters = async () => {
      setIsLoading(true);
      try {
        const categoryIds = filters.flatMap(filter => filter.categories.map(category => category.id));

        const results: FilterResult[] = await Promise.all(
          categoryIds.map(async (id) => {
            const res = await fetch(`api/fetch?id=${id}`);
            if (!res.ok) throw new Error(`Failed to fetch category ${id}`);
            return res.json();
          })
        );

        setFilterDetails(results);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilters();
  }, [filters]);

  if (isLoading) {
    return <div>Cargando filtros...</div>;
  }

  return <ProductsGridView filtersDetails={filterDetails} />;
}
