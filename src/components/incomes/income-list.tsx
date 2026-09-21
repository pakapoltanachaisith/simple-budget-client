import type { Income } from "@/types";
import { formatCurrency, formatDate } from "@/utils/format";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Menu,
  Paper,
  Skeleton,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconEye,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { Link } from "react-router";

interface IncomeListProps {
  items: Income[];
}

function IncomeList({ items }: IncomeListProps) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack gap="lg">
      {items.map((item) => (
        <Paper key={item.id} p="md" withBorder>
          <Flex>
            {/* Left */}
            <Box>
              <Stack gap="sm">
                <Text
                  fw={600}
                  size="xl"
                  c={colorScheme === "light" ? "green.9" : "green.5"}>
                  {formatCurrency(item.amount)}
                </Text>
                {item?.note && <Text c="dimmed">{item.note}</Text>}
              </Stack>

              <Button
                mt="lg"
                rightSection={<IconEye size={16} />}
                size="xs"
                variant="outline"
                component={Link}
                to={`/incomes/${item.id}`}>
                View
              </Button>
            </Box>

            {/* Right */}
            <Box ml="auto">
              <Flex align="center">
                <Text
                  component="time"
                  dateTime={item.date}
                  size="sm"
                  c="dimmed">
                  {formatDate(item.date)}
                </Text>
                <Menu shadow="md" width={150} position="bottom-end">
                  <Menu.Target>
                    <ActionIcon variant="subtle" ml="md">
                      <IconDotsVertical size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item leftSection={<IconPencil size={14} />}>
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      leftSection={<IconTrash size={14} />}>
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Flex>
            </Box>
          </Flex>
        </Paper>
      ))}
    </Stack>
  );
}

IncomeList.Skeleton = () => {
  return (
    <Stack gap="lg">
      <Skeleton radius="md" height={150} />
      <Skeleton radius="md" height={150} />
      <Skeleton radius="md" height={150} />
      <Skeleton radius="md" height={150} />
      <Skeleton radius="md" height={150} />
    </Stack>
  );
};

export default IncomeList;
