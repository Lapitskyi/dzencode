// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {orders, products} from "./mock";


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
    async get(url: string) {
        await delay(500);

        if (url.includes("/products")) return products;
        if (url.includes("/orders")) return orders;

        return { message: "Mock GET: no matching endpoint" };
    },

    async post(url: string, body?: any) {
        console.log("Mock POST:", url, body);
        await delay(500);

        return { success: true, body };
    },

    async put(url: string, body?: any) {
        console.log(" Mock PUT:", url, body);
        await delay(500);

        return { success: true, body };
    },

    async delete(url: string) {
        console.log(" Mock DELETE:", url);
        await delay(500);

        return { success: true };
    },
};
