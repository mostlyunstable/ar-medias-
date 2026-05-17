import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long")
    .trim()
    // Basic anti-spam regex (preventing URLs if needed, but relaxed here)
    .refine((val) => !val.includes("http://") && !val.includes("https://"), {
      message: "Links are not allowed in the message body.",
    }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
