import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class BaseAPIService {
  private readonly axiosInstance: AxiosInstance;
  public baseURL: string;
  public basePath: string;

  constructor(basePath: string, baseURL?: string) {
    this.baseURL = baseURL || import.meta.env.VITE_API_BASE_URL;
    this.basePath = basePath;

    this.axiosInstance = axios.create({
      baseURL: `${this.baseURL}${this.basePath}`,
    });

    this.axiosInstance.interceptors.request.use((config) => {
      const token = this.getAccessToken();

      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        //TODO: add max  of 5 retries
        //TODO: add rate limit

        return Promise.reject(error);
      }
    );
  }

  private getAccessToken(): string | null {
    const token = localStorage.getItem('accessToken');
    return token ? (JSON.parse(token)) : null;
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public post<T, U>(
    url: string,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public put<T, U>(
    url: string,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }

  async getById<T>(
    id: string | number,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.get<T>(`/${id}`, config);
  }

  async deleteById<T>(
    id: string | number,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.delete<T>(`/${id}/`, config);
  }

  async updateById<T, U>(
    id: string | number,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.put<T, U>(`/${id}/`, data, config);
  }

  async create<T, U>(
    data: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.post<T, U>("", data, config);
  }

  async getAll<T>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.get<T>("", config);
  }
}

export default BaseAPIService;
