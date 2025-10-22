import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {deleteProduct, getOrders, getProducts} from "../service/api/products.ts";
import type {IOrder, IProducts} from "../types/IProducts.ts";

type State = {
    loading: boolean;
    products: IProducts[] | [];
    orders: IOrder[] | []
};
type Actions = {
    fetchProducts: () => Promise<void>;
    fetchOrders: () => void;
    productDelete: (id: number) => void
    removeProductOrder:(orderId: number, productId:number)=>void
};

export const useProductStore = create<State & Actions>()(
    immer((set, get) => ({
        loading: false,
        products: [],
        orders: [],
        fetchProducts: async () => {
            set((state) => {
                state.loading = true
            })
            try {
                const res = await getProducts();
                set((state) => {
                    state.products = res || [];
                });
            } finally {
                set((state) => {
                    state.loading = false;
                });
            }
        },
        fetchOrders: async () => {
            set((state) => {
                state.loading = true
            })
            try {
                let products = get().products;
                if (!products.length) {
                    await get().fetchProducts();
                    products = get().products;
                }

                const res = await getOrders();
                const ordersWithProducts = (res || []).map((order) => ({
                    ...order,
                    products: products.filter((p) => p.order === order.id),
                }));

                set((state) => {
                    state.orders = [...ordersWithProducts];
                });
            } finally {
                set((state) => {
                    state.loading = false;
                });
            }
        },
        productDelete: async (id: number) => {
            try {
                await deleteProduct(id);
                set((state) => {
                    state.products = state.products.filter((p) => p.id !== id);
                });
            } catch (error) {
                console.error("Failed to delete product:", error);
            }
        },

        removeProductOrder: async (orderId: number,productId: number) => {
            try {
                await deleteProduct(productId);

                set((state) => {
                    state.products = state.products.filter((p) => p.id !== productId);
                    state.orders = state.orders.map((order) =>
                        order.id === orderId
                            ? {
                                ...order,
                                products: order.products.filter((p) => p.id !== productId)
                            }
                            : order
                    );
                });
            } catch (error) {
                console.error("Failed to delete product:", error);
            }
        }
    }))
)