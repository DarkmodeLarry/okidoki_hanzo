import { z } from "zod";

export const createFormRecordSchema = z.object({
  portfolioId: z.number().nonnegative(),
  formName: z.string().min(8, {
    message: "Form Records must be at least 8 characters",
  }),
  expiresAt: z.date().optional(),
});

export type createFormRecordSchemaType = z.infer<typeof createFormRecordSchema>;
