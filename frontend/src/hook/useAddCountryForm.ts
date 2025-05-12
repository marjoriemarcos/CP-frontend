// hooks/auth/useLoginForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddCountrySchema, addCountrySchema } from "@/schema/addCountrySchema";

export const useAddCountryForm = () =>
  useForm<AddCountrySchema>({
    resolver: zodResolver(addCountrySchema),
    defaultValues: {
      name: "",
      code: "",
      emoji: "",
      continent: "",
    },
  });
