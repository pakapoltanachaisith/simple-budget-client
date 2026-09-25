import { getIncome } from "@/api/incomes";
import { useQuery } from "@tanstack/react-query";

export function useIncome(id: string) {
  return useQuery({
    queryKey: ["income", id],
    queryFn: () => getIncome(id!),
  });
}
