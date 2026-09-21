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
import { IconHome, IconLogout, IconWallet } from "@tabler/icons-react";
import NavbarLink from "./navbar-link";

interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  const logout = useLogoutMutation();

  return (
    <AppShell.Navbar>
      <AppShell.Section grow>
        <NavbarLink path="/" label="Home" icon={<IconHome size={18} />} />

        <MNavLink label="Incomes" leftSection={<IconWallet />}>
          <NavbarLink path="/incomes" label="My Incomes" />
        </MNavLink>
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
