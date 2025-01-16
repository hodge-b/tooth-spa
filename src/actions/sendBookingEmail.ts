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
  const date = new Date(formData.date as string);

  const recipient = process.env.EMAIL_RECIPIENT ?? "";
  const sender = process.env.EMAIL_SENDER ?? "";

  if (!parsed.success)
    return { message: "oops - this process did not go through" };

  // Format date for email.
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // update data being sent to email.
  const emailData = {
    ...formData,
    date: formattedDate,
  };

  // Send email to business.
  resend.emails.send({
    from: sender,
    to: recipient,
    subject: "Tooth Spa Booking Request",
    html: bookingFormTemplate(emailData),
  });

  return { message: "Appointment booked" };
};
