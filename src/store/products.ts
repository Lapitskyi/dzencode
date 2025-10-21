import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {getProducts} from "../service/api/products.ts";

type State = {
    loading: boolean;
    products: [];
};
type Actions = {
    fetchProducts: () => Promise<void>;
};

export const useProductStore = create<State & Actions>()(
    immer((set) => ({
        loading: false,
        products: [],
        fetchProducts: async () => {
            set((state) => {
                state.loading = true
            })
            try {
                const res = await getProducts();
                console.log(res)
                set((state) => {
                    state.products = res || [];
                });
            } finally {
                set((state) => {
                    state.loading = false;
                });
            }
        },
    }))
)