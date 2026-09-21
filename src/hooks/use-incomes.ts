import { getIncomes } from "@/api/incomes";
import { useQuery } from "@tanstack/react-query";

export function useIncomes(page: number = 1) {
  return useQuery({
    queryKey: ["incomes", { page }],
    queryFn: () => getIncomes(page),
  });
}
