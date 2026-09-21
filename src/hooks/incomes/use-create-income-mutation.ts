import { createIncome, type CreateIncomeArgs } from "@/api/incomes";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export function useCreateIncomeMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CreateIncomeArgs) => createIncome(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incomes"] });
      notifications.show({
        color: "green",
        title: "Success!",
        message: "Created income successfully.",
        position: "bottom-right",
      });
      navigate("/incomes");
    },
    onError: (error) => {
      notifications.show({
        color: "red",
        title: "Error",
        message: error.message,
        position: "bottom-right",
      });
    },
  });
}
