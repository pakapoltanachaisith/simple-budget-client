import CreateForm from "@/components/incomes/create-form";
import { Box, Button, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Create() {
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
        <CreateForm onSubmit={console.log} loading={false} />
      </Box>
    </Box>
  );
}
