import { Center, Container } from "@mantine/core";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <Container h="100%">
      <Center h="100%">
        <Outlet />
      </Center>
    </Container>
  );
}
