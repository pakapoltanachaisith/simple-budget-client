import { getToken, removeToken, setToken } from "@/utils/token";
import { apiClient } from "./client";
import type { LoginResponse, User } from "@/types";

export const getCurrentUser = async (): Promise<User | null> => {
  const token = getToken();

  if (!token) {
    return null;
  }

  const { data } = await apiClient.get("/me");
  return data.user;
};

export const login = async (email: string, password: string): Promise<User> => {
  const { data } = await apiClient.post<LoginResponse>("/login", {
    email,
    password,
  });

  if (data.token) {
    setToken(data.token);
  }

  return data.user;
};

export const logout = async () => {
  await apiClient.post("/logout");
  removeToken();
};
