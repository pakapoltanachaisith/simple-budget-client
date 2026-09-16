import { useAuth } from "@/hooks/use-auth";
import { Center, Container } from "@mantine/core";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const { user } = useAuth();

  if (!!user) {
    return <Navigate to="/" />;
  }

  return (
    <Container h="100%">
      <Center h="100%">
        <Outlet />
      </Center>
    </Container>
  );
}
