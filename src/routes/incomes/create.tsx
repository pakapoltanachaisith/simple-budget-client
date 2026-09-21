import CreateForm from "@/components/incomes/create-form";
import { useCreateIncomeMutation } from "@/hooks/incomes/use-create-income-mutation";
import { Box, Button, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Create() {
  const { mutate, isPending } = useCreateIncomeMutation();

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

      <Title order={1} mb="xl">
        New Income
      </Title>

      <Box>
        <CreateForm onSubmit={mutate} loading={isPending} />
      </Box>
    </Box>
  );
}
