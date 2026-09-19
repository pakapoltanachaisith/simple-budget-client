import { AppShell } from "@mantine/core";
import { Navigate, Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";

import { useCurrentUser } from "@/hooks/use-current-user";

import Navbar from "./navbar";
import Header from "./header";

export default function DashboardLayout() {
  const { user } = useCurrentUser();
  const [opened, { toggle }] = useDisclosure();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}>
      <Header opened={opened} onOpen={toggle} />
      <Navbar user={user} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
