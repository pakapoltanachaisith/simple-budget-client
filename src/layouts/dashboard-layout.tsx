import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Divider,
  Flex,
  NavLink as MNavLink,
  Stack,
  Text,
  Tooltip,
  VisuallyHidden,
} from "@mantine/core";
import { Navigate, Outlet, NavLink } from "react-router";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useDisclosure } from "@mantine/hooks";
import ThemeToggler from "@/components/theme-toggler";
import { IconHome, IconLogout } from "@tabler/icons-react";

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
      <AppShell.Header px="sm">
        <Flex h="100%" align="center" justify="space-between">
          <Flex align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              mr="md"
            />
            <Text fw="bolder" size="lg">
              SIMPLE BUDGET
            </Text>
          </Flex>
          <ThemeToggler />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <AppShell.Section grow>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <MNavLink
                label="Home"
                leftSection={<IconHome size={18} />}
                active={isActive}
              />
            )}
          </NavLink>
        </AppShell.Section>
        <AppShell.Section>
          <Divider />
          <Flex py="sm" px="md" h="100%" align="center">
            <Avatar name={user.name} color="initials" />
            <Stack gap={1} ml="sm">
              <Text>{user.name}</Text>
              <Text size="xs" c="dimmed">
                {user.email}
              </Text>
            </Stack>
            <Tooltip label="Logout">
              <ActionIcon variant="default" ml="auto">
                <VisuallyHidden>Logout</VisuallyHidden>
                <IconLogout size={16} />
              </ActionIcon>
            </Tooltip>
          </Flex>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
