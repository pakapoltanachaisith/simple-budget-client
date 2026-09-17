import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login } from "@/api/auth";
import type { LoginFormValues } from "@/utils/validations";

export function useLoginMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: LoginFormValues) => login(value.email, value.password),
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data);
    },
  });
}
