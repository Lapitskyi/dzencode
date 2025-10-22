import {useProductStore} from "../products.ts";

export const useProducts =() => useProductStore((state) => state.products)
export const useOrders =() => useProductStore((state) => state.orders)

export const  useFetchProducts=() => useProductStore((state) => state.fetchProducts)
export const  useDeleteProduct=() => useProductStore((state) => state.productDelete)
export const  useRemoveProductOrder=() => useProductStore((state) => state.removeProductOrder)

export const  useFetchOrders=() => useProductStore((state) => state.fetchOrders)