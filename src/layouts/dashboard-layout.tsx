import { Box } from "@mantine/core";
import { Navigate, Outlet } from "react-router";

import { useCurrentUser } from "@/hooks/use-current-user";

export default function DashboardLayout() {
  const { user } = useCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      Dashboard Layout
      <Outlet />
    </Box>
  );
}
