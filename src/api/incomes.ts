import type { Income, PaginatedResponse } from "@/types";
import { apiClient } from "./client";

export const getIncomes = async (
  page: number,
): Promise<PaginatedResponse<Income>> => {
  const response = await apiClient.get("/v1/incomes");

  return response.data;
};
