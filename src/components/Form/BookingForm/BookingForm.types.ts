import { BookingFormType, OfficeHourSchedule } from "@/lib/types";
import { z } from "zod";

export interface BookingFormProps {
  className?: string;
  data: BookingFormType;
  workingHours: OfficeHourSchedule[];
}

export const formSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  email: z.string().trim().email(),
  date: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date().refine((date) => !isNaN(date.getTime()), {
      message: "Invalid date",
    })
  ),
  time: z.string().min(2),
  message: z.string().min(10),
});

export interface FormValues extends z.infer<typeof formSchema> {}
