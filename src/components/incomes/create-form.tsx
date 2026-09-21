import {
  createIncomeScheme,
  type CreateIncomeValues,
} from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useForm, Controller } from "react-hook-form";

interface CreateFormProps {
  onSubmit: (values: CreateIncomeValues) => void;
  loading: boolean;
}

export default function CreateForm({ onSubmit, loading }: CreateFormProps) {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(createIncomeScheme),
    defaultValues: {
      date: new Date(),
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Stack gap="lg">
          <Controller
            name="amount"
            control={control}
            disabled={loading}
            render={({ field, fieldState }) => (
              <NumberInput
                {...field}
                label="Amount"
                description="the amount of income in Bath(THB)"
                required
                autoFocus
                step={0.01}
                prefix={"฿"}
                placeholder="15000"
                fixedDecimalScale
                decimalScale={2}
                thousandSeparator=","
                allowNegative={false}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="note"
            control={control}
            disabled={loading}
            render={({ field, fieldState }) => (
              <TextInput
                {...field}
                label="Note"
                placeholder="(optional)"
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            disabled={loading}
            render={({ field, fieldState }) => (
              <DatePickerInput
                {...field}
                label="Date"
                rightSection={<IconCalendar size={16} />}
                error={fieldState.error?.message}
              />
            )}
          />
        </Stack>

        <Box mt="xl">
          <Button type="submit" disabled={loading} loading={loading}>
            Create
          </Button>
        </Box>
      </Box>
    </form>
  );
}
