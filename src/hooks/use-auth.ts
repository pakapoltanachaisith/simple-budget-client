import { getCurrentUser } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
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
