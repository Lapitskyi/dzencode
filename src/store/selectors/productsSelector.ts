import {useProductStore} from "../products.ts";

export const useProducts =() => useProductStore((state) => state.products)
export const  useFetchProducts=() => useProductStore((state) => state.fetchProducts)