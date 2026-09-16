import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  Button,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconChevronRight,
  IconMail,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import { loginFormSchema, type LoginFormValues } from "@/utils/validations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/api/auth";

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (value: LoginFormValues) => login(value.email, value.password),
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data);
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutation.mutate(data);
  };

  return (
    <>
      {mutation.isError && (
        <Alert
          my="xl"
          color="red"
          variant="light"
          icon={<IconAlertTriangle />}
          withCloseButton
          onClose={mutation.reset}>
          {mutation.error.message}
        </Alert>
      )}
      <Box component="form" mt="xl" onSubmit={form.handleSubmit(onSubmit)}>
        <Stack gap="md" mb="xl">
          <TextInput
            id="email"
            label="Email Address"
            leftSection={<IconMail size={16} />}
            placeholder="john@example.com"
            required
            autoFocus
            {...form.register("email")}
            error={form.formState.errors.email?.message}
            disabled={mutation.isPending}
          />
          <PasswordInput
            id="password"
            label="Password"
            required
            {...form.register("password")}
            error={form.formState.errors.password?.message}
            disabled={mutation.isPending}
          />
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="gradient"
          rightSection={<IconChevronRight size={16} />}
          loading={mutation.isPending}>
          Continue
        </Button>
      </Box>
    </>
  );
}
