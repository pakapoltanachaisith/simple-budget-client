import { useAuth } from "@/hooks/use-auth";
import { Center, Loader } from "@mantine/core";
import { Outlet } from "react-router";

export default function AppLayout() {
  const { status } = useAuth();

  if (status === "pending") {
    return (
      <Center h="100%">
        <Loader type="bars" />
      </Center>
    );
  }

  return <Outlet />;
}
