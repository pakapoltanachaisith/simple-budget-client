import IncomeList from "@/components/incomes/income-list";
import { useIncomes } from "@/hooks/use-incomes";
import { Alert, Box, Button, Flex, Pagination, Title } from "@mantine/core";
import { IconAlertCircle, IconPlus } from "@tabler/icons-react";
import { Link, useSearchParams } from "react-router";

export default function IncomeIndex() {
  const [searhParams, setSearchParams] = useSearchParams({ page: "1" });

  const currentPage = parseInt(searhParams.get("page")!);

  const { data, isSuccess, isPending, isError } = useIncomes(currentPage);

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
          {data.meta.last_page > 1 && (
            <Flex mt="xl" justify="center">
              <Pagination
                total={data.meta.last_page}
                value={currentPage}
                onChange={(value) =>
                  setSearchParams({ page: value.toString() })
                }
              />
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
}
