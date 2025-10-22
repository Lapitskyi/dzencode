import {api} from "../api.ts";
import {Endpoints} from "../constants.ts";
import type {IOrder, IProducts} from "../../types/IProducts.ts";


export const getProducts =async () => {
    try {
        return api.get<IProducts[]>(Endpoints.products);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return null;
    }
}

export const getOrders =async () => {
    try {
        return api.get<IOrder[]>(Endpoints.orders);
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return null;
    }
}


export const deleteProduct =async (id:number) => {
    try {
        return api.delete(Endpoints.productDelete(id));
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return null;
    }
}