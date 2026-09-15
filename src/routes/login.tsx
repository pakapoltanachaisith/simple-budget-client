import { loginFormSchema, type LoginFormValues } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <Box w="90%" maw={550}>
      <Box>
        <Title order={1}>Welcome Back!</Title>
        <Text c="dimmed" mt="sm">
          Sing in to your Simple Budget account.
        </Text>
      </Box>

      <Box component="form" mt="xl" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md" mb="xl">
          <TextInput
            id="email"
            label="Email Address"
            leftSection={<IconMail size={16} />}
            placeholder="john@example.com"
            required
            autoFocus
            {...register("email")}
            error={errors.email?.message}
            disabled={isLoading}
          />
          <PasswordInput
            id="password"
            label="Password"
            required
            {...register("password")}
            error={errors.password?.message}
            disabled={isLoading}
          />
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="gradient"
          rightSection={<IconChevronRight size={16} />}
          loading={isLoading}>
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
