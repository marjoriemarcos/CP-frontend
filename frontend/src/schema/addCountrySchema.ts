"use client";

import { z } from "zod";

export const addCountrySchema = z.object({
  name: z
    .string({ message: "le message doit être une string" })
    .min(2, { message: "le message doit minimum 2 caractères" })
    .max(50),
  code: z
    .string({ message: "le message doit être une string" })
    .min(2, { message: "le message doit minimum 2 caractères" })
    .max(2, { message: "le message doit maximum 2 caractères" }),
  emoji: z
    .string({ message: "le message doit être une string" })
    .min(2, { message: "le message doit faire minimun 2 caractères" })
    .max(50, { message: "le message doit faire maximum 50 caractères" }),
  continent: z.string(),
});

export type AddCountrySchema = z.infer<typeof addCountrySchema>;
