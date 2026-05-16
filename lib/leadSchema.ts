import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  area: z
    .string()
    .min(2, "Area must be at least 2 characters")
    .max(100, "Area is too long"),
  propertyType: z.enum(["Home", "Housing Society", "Commercial"], {
    errorMap: () => ({ message: "Please select a property type" }),
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
