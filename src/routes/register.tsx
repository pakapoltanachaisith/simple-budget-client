import { Box, Title, Text, Flex } from "@mantine/core";
import { Link } from "react-router";

import RegisterForm from "@/components/register-form";

export default function Register() {
  return (
    <Box w="90%" maw={550}>
      <Box>
        <Title order={1}>Sign Up</Title>
        <Text c="dimmed" mt="sm">
          Create new Simple Budget account.
        </Text>
      </Box>

      <RegisterForm />

      <Flex gap="xs" justify="center" mt="xl">
        <Text size="sm" c="dimmed">
          Already have an account?
        </Text>
        <Text
          component={Link}
          to="/login"
          size="sm"
          style={(theme) => ({
            color: theme.colors[theme.primaryColor][5],
          })}>
          Sign in
        </Text>
      </Flex>
    </Box>
  );
}
