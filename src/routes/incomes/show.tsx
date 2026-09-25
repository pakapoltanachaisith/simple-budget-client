import IncomeDetails from "@/components/incomes/income-details";
import { useIncome } from "@/hooks/incomes/use-income";
import { Alert, Box, Button, Flex, Title } from "@mantine/core";
import { IconAlertCircle, IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router";

export default function Show() {
  const { incomeId } = useParams();
  const { isSuccess, isError, isPending, data, error } = useIncome(incomeId!);

  return (
    <Box p={{ base: "md", lg: "xl" }}>
      <Button
        size="compact-sm"
        variant="transparent"
        leftSection={<IconArrowLeft size={16} />}
        component={Link}
        to="/incomes"
        mb="lg">
        Back
      </Button>

      <Flex align="center" mb="xl">
        <Title order={1}>Income Details</Title>
      </Flex>
      {isError && (
        <Alert
          color="red"
          title="Someting went wrong."
          icon={<IconAlertCircle />}
          mt="xl">
          {error.message ??
            "Failed to fetch the income. Please try again later."}
        </Alert>
      )}
      {isPending && <IncomeDetails.Skeleton />}
      {isSuccess && (
        <Box>
          <IncomeDetails {...data} />
          <Flex gap="sm" mt="xl">
            <Button
              variant="default"
              component={Link}
              to={`/incomes/${incomeId}/edit`}>
              Edit
            </Button>
            <Button color="red">Delete</Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
