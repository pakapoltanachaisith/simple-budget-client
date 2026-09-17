import { logout } from "@/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogoutMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["auth"], null);
    },
  });
}
