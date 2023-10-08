import { PortfolioColors } from "@/lib/constants";
import { z } from "zod";

export const createPortfolioSchema = z.object({
  name: z.string().min(4, {
    message: "Portfolio name must be at least 4 characters",
  }),
  color: z
    .string()
    .refine((color) => Object.keys(PortfolioColors).includes(color)),
});

export type createPortfolioSchemaType = z.infer<typeof createPortfolioSchema>;
