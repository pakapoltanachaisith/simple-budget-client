import { useLogoutMutation } from "@/hooks/use-logout-mutation";
import type { User } from "@/types";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Divider,
  Flex,
  NavLink as MNavLink,
  Stack,
  Text,
  Tooltip,
  VisuallyHidden,
} from "@mantine/core";
import { IconHome, IconLogout } from "@tabler/icons-react";
import { NavLink } from "react-router";

interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  const logout = useLogoutMutation();

  return (
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
            <ActionIcon
              variant="default"
              ml="auto"
              onClick={() => logout.mutate()}>
              <VisuallyHidden>Logout</VisuallyHidden>
              <IconLogout size={16} />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
