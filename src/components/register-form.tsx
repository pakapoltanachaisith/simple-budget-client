import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconChevronRight, IconMail } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import {
  registerFormSchema,
  type RegisterFormValues,
} from "@/utils/validations";

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    alert("Register Form submitted!");
  };

  return (
    <Box component="form" mt="xl" onSubmit={form.handleSubmit(onSubmit)}>
      <Stack gap="md" mb="xl">
        <Flex direction={{ base: "column", md: "row" }} gap="md">
          <TextInput
            {...form.register("name")}
            error={form.formState.errors.name?.message}
            id="name"
            label="Name"
            w="100%"
            required
            autoFocus
            placeholder="John Doe"
          />
          <TextInput
            {...form.register("email")}
            error={form.formState.errors.email?.message}
            id="email"
            label="Email Address"
            leftSection={<IconMail size={16} />}
            placeholder="john@example.com"
            required
            w="100%"
          />
        </Flex>
        <PasswordInput
          {...form.register("password")}
          error={form.formState.errors.password?.message}
          id="password"
          label="Password"
          required
        />
        <PasswordInput
          {...form.register("password_confirmation")}
          error={form.formState.errors.password_confirmation?.message}
          id="password_confirmation"
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
  );
}
