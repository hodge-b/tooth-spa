import { BookingFormType } from "@/lib/types";
import { z } from "zod";

export interface BookingFormProps {
  className?: string;
  data: BookingFormType;
}

export const formSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().min(10),
});

export interface FormValues extends z.infer<typeof formSchema> {}
