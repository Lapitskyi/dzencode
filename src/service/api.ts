import axios from "axios";
import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { mockApi } from "./mockApi.ts";
import { API_URL } from "./constants";

const USE_MOCKS = true;

export class ApiService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: API_URL,
            headers: { "Content-Type": "application/json" },
        });
        this.setupInterceptors();
    }

    private setupInterceptors() {
        this.api.interceptors.request.use(this.handleRequest, this.handleRequestError);
        this.api.interceptors.response.use(this.handleResponse, this.handleResponseError);
    }

    private async handleRequest(request: InternalAxiosRequestConfig) {
        return request;
    }

    private handleRequestError(error: AxiosError) {
        console.error("Request Error:", error.message);
        return Promise.reject(error);
    }

    private handleResponse<T>(response: AxiosResponse<T>) {
        return response.data;
    }

    private async handleResponseError(error: AxiosError) {
        console.error("API error:", error);
        return Promise.reject(error);
    }

    // --- Base CRUD methods ---
    async get<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        if (USE_MOCKS) return (await mockApi.get(url)) as T;
        return await this.api.get(url, options);
    }

    async post<T, R = any>(url: string, body?: R, options: AxiosRequestConfig = {}): Promise<T> {
        if (USE_MOCKS) return (await mockApi.post(url, body)) as T;
        return await this.api.post(url, body, options);
    }

    async put<T, R = any>(url: string, body: R, options: AxiosRequestConfig = {}): Promise<T> {
        if (USE_MOCKS) return (await mockApi.put(url, body)) as T;
        return await this.api.put(url, body, options);
    }

    async delete<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        if (USE_MOCKS) return (await mockApi.delete(url)) as T;
        return await this.api.delete(url, options);
    }
}

export const api = new ApiService();
