import { Box, Title, Text, Flex } from "@mantine/core";
import { Link } from "react-router";

import LoginForm from "@/components/login-form";

export default function Login() {
  return (
    <Box w="90%" maw={550}>
      <Box>
        <Title order={1}>Welcome Back!</Title>
        <Text c="dimmed" mt="sm">
          Sing in to your Simple Budget account.
        </Text>
      </Box>

      <LoginForm />

      <Flex gap="xs" justify="center" mt="xl">
        <Text size="sm" c="dimmed">
          Don't have an account?
        </Text>
        <Text
          component={Link}
          to="/register"
          size="sm"
          style={(theme) => ({
            color: theme.colors[theme.primaryColor][5],
          })}>
          Sign up
        </Text>
      </Flex>
    </Box>
  );
}
