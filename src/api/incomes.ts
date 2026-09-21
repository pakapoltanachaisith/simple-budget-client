import type { Income, PaginatedResponse } from "@/types";
import { apiClient } from "./client";

export const getIncomes = async (
  page: number,
): Promise<PaginatedResponse<Income>> => {
  const response = await apiClient.get("/v1/incomes", {
    params: {
      page,
    },
  });

  return response.data;
};

export interface CreateIncomeArgs {
  amount: number;
  note?: string;
  date: string;
}

export const createIncome = async (data: CreateIncomeArgs): Promise<Income> => {
  const response = await apiClient.post("/v1/incomes", data);
  return response.data.data;
};
