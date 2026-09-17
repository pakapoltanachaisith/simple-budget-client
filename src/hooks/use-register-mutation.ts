import { register } from "@/api/auth";
import type { RegisterFormValues } from "@/utils/validations";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRegisterMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: RegisterFormValues) => register(values),
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data);
    },
  });
}
