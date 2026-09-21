import { apiClient } from "./client";

export const getIncomes = async () => {
  const response = await apiClient.get("/v1/incomes");

  return response.data;
};
