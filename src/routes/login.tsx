import {
  Box,
  Title,
  Text,
  Flex,
  Stack,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import { IconChevronRight, IconMail } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Login() {
  return (
    <Box w="90%" maw={550}>
      <Box>
        <Title order={1}>Welcome Back!</Title>
        <Text c="dimmed" mt="sm">
          Sing in to your Simple Budget account.
        </Text>
      </Box>

      <Box component="form" mt="xl">
        <Stack gap="md" mb="xl">
          <TextInput
            id="email"
            name="email"
            label="Email Address"
            leftSection={<IconMail size={16} />}
            placeholder="john@example.com"
            required
            autoFocus
          />
          <PasswordInput
            id="password"
            name="password"
            label="Password"
            required
          />
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="gradient"
          rightSection={<IconChevronRight size={16} />}>
          Continue
        </Button>
      </Box>

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
