import z from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    name: z.string().trim().min(3).max(255),
    email: z.email(),
    password: z.string().min(8),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "passwords do not matched",
    path: ["password_confirmation"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const createIncomeScheme = z.object({
  amount: z
    .number()
    .positive()
    .min(0.01)
    .refine((value) => {
      const decimalPart = value.toString().split(".")[1];
      return !decimalPart || decimalPart.length <= 2;
    }),
  note: z.string().trim().max(255).optional(),
  date: z.date(),
});

export type CreateIncomeValues = z.infer<typeof createIncomeScheme>;
