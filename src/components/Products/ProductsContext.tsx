"use client"

import { Filter } from "@/lib/api/filters.api";
import { createContext, FC, PropsWithChildren, useMemo, useReducer } from "react";

type ProductsState = {
  filters: Filter[],
  products: []
}

type ProductsAPI = {
  handleSetFilters: (filters: Filter[]) => void
  handleSetProducts: (products: []) => void,
}

export const ProductsStateContext = createContext<ProductsState>({} as ProductsState);
export const ProductsAPIContext = createContext<ProductsAPI>({} as ProductsAPI);

enum ProductsActionType {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_FILTERS = 'SET_FILTERS',
}

type ProductAction = | { type: ProductsActionType.SET_FILTERS, payload: Filter[] } | { type: ProductsActionType.SET_PRODUCTS, payload: [] };

const productsReducer = (state: ProductsState, action: ProductAction): ProductsState => {
  switch(action.type) {
    case ProductsActionType.SET_FILTERS:
      return { ...state, filters: action.payload }
    case ProductsActionType.SET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state;
  }
}

export const ProductsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    filters: []
  });

  const api: ProductsAPI = useMemo(() => {
    return {
      handleSetFilters(filters: Filter[]){
        dispatch({ type: ProductsActionType.SET_FILTERS, payload: filters })
      },
      // TODO: Type this
      handleSetProducts(products){
        dispatch({ type: ProductsActionType.SET_PRODUCTS, payload: products })
      }
    }
  }, []);

  return (
    <ProductsAPIContext.Provider value={api}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsAPIContext.Provider>
  )
}