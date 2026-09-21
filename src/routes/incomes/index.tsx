import { getIncomes } from "@/api/incomes";
import IncomeList from "@/components/incomes/income-list";
import { Alert, Box, Button, Flex, Title } from "@mantine/core";
import { IconAlertCircle, IconPlus } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export default function IncomeIndex() {
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: ["incomes"],
    queryFn: getIncomes,
  });

  return (
    <Box p={{ base: "md", lg: "xl" }}>
      <Flex align="center" justify="space-between">
        <Title order={1}>My Incomes</Title>
        <Button
          rightSection={<IconPlus size={16} />}
          component={Link}
          to="/incomes/create">
          New
        </Button>
      </Flex>
      {isError && (
        <Alert
          color="red"
          title="Someting went wrong."
          icon={<IconAlertCircle />}
          mt="xl">
          Failed to fetch your incomes. Please try again later.
        </Alert>
      )}
      {isPending && (
        <Box mt="xl">
          <IncomeList.Skeleton />
        </Box>
      )}
      {isSuccess && (
        <Box mt="xl">
          <IncomeList items={data.data} />
        </Box>
      )}
    </Box>
  );
}
