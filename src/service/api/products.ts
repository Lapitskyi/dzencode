
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {productsItem} from "../mock.js";

export const getProducts =async () => {
    try {
        return productsItem
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
}