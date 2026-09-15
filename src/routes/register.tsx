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

export default function Register() {
  return (
    <Box w="90%" maw={550}>
      <Box>
        <Title order={1}>Sign Up</Title>
        <Text c="dimmed" mt="sm">
          Create new Simple Budget account.
        </Text>
      </Box>

      <Box component="form" mt="xl">
        <Stack gap="md" mb="xl">
          <Flex direction={{ base: "column", md: "row" }} gap="md">
            <TextInput
              id="name"
              name="name"
              label="Name"
              w="100%"
              required
              autoFocus
              placeholder="John Doe"
            />
            <TextInput
              id="email"
              name="email"
              label="Email Address"
              leftSection={<IconMail size={16} />}
              placeholder="john@example.com"
              required
              w="100%"
            />
          </Flex>
          <PasswordInput
            id="password"
            name="password"
            label="Password"
            required
          />
          <PasswordInput
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm Password"
            required
          />
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="gradient"
          rightSection={<IconChevronRight size={16} />}>
          Create Account
        </Button>
      </Box>

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
