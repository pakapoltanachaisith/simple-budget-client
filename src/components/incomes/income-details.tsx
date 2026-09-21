import type { Income } from "@/types";
import { formatCurrency, formatDate } from "@/utils/format";
import { Flex, Grid, Paper, Skeleton, Text } from "@mantine/core";
import { IconCalendar, IconNotebook } from "@tabler/icons-react";

interface IncomeDetailsProps extends Income {}

function IncomeDetails({ amount, date, note }: IncomeDetailsProps) {
  return (
    <Grid gap={{ base: "md", lg: "xl" }}>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Paper withBorder p={{ base: "md", lg: "lg" }} h="100%">
          <Text c="dimmed" component="h3" size="lg">
            Amount
          </Text>
          <Text fz={{ base: "2rem", lg: "3rem" }} c="green.9" mt="md">
            {formatCurrency(amount)}
          </Text>
        </Paper>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Paper withBorder p={{ base: "md", lg: "lg" }} h="100%">
          <Flex align="center" mb="sm">
            <IconCalendar size={16} />
            <Text component="h3" ml="xs">
              Date
            </Text>
          </Flex>
          <Text c="dimmed">{formatDate(date)}</Text>
        </Paper>
      </Grid.Col>

      {!!note && (
        <Grid.Col span="auto">
          <Paper withBorder p={{ base: "md", lg: "lg" }} h="100%">
            <Flex align="center" mb="sm">
              <IconNotebook size={16} />
              <Text component="h3" ml="xs">
                Note
              </Text>
            </Flex>
            <Text c="dimmed">{note}</Text>
          </Paper>
        </Grid.Col>
      )}
    </Grid>
  );
}

IncomeDetails.Skeleton = () => {
  return (
    <Grid gap={{ base: "md", lg: "xl" }}>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Skeleton h={130} w="100%" />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Skeleton h={130} w="100%" />
      </Grid.Col>

      <Grid.Col span="auto">
        <Skeleton h={130} w="100%" />
      </Grid.Col>
    </Grid>
  );
};

export default IncomeDetails;
