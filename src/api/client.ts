import { getToken } from "@/utils/token";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Something went wrong.");
    }

    return Promise.reject(error);
  },
);
