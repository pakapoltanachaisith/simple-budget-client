import { AppShell, Burger, Flex, Text } from "@mantine/core";

import ThemeToggler from "@/components/theme-toggler";

interface HeaderProps {
  opened: boolean;
  onOpen: () => void;
}

export default function Header({ onOpen, opened }: HeaderProps) {
  return (
    <AppShell.Header px="sm">
      <Flex h="100%" align="center" justify="space-between">
        <Flex align="center">
          <Burger
            opened={opened}
            onClick={onOpen}
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
  );
}
