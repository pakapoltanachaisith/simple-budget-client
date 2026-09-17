import { useCurrentUser } from "@/hooks/use-current-user";
import { Center, Loader } from "@mantine/core";
import { Outlet } from "react-router";

export default function AppLayout() {
  const { status } = useCurrentUser();

  if (status === "pending") {
    return (
      <Center h="100%">
        <Loader type="bars" />
      </Center>
    );
  }

  return <Outlet />;
}
