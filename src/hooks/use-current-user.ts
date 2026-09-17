import { getCurrentUser } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
  const { data, ...rest } = useQuery({
    queryKey: ["auth"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return {
    user: data,
    ...rest,
  };
}
