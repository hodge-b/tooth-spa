"use server";

import { Resend } from "resend";
import { formSchema } from "@/components/Form/BookingForm/BookingForm.types";
import { bookingFormTemplate } from "@/lib/utils/bookingFormTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const onSubmitAction = async (
  data: FormData
): Promise<{ message: string }> => {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  const recipient = process.env.EMAIL_RECIPIENT ?? "";
  const sender = process.env.EMAIL_SENDER ?? "";

  if (!parsed.success) return { message: "Invalid form data" };

  resend.emails.send({
    from: sender,
    to: recipient,
    subject: "Tooth Spa Booking Request",
    html: bookingFormTemplate(formData),
  });

  return { message: "Appointment booked" };
};
