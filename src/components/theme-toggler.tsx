import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <ActionIcon
      variant="default"
      aria-label="Toggle color scheme"
      onClick={toggleColorScheme}
      size="lg">
      {colorScheme === "dark" ? <IconMoon /> : <IconSun />}
    </ActionIcon>
  );
}
