"use server";

import { Resend } from "resend";
import { formSchema } from "@/components/Form/BookingForm/BookingForm.types";
import { bookingFormTemplate } from "@/lib/utils/bookingFormTemplate";
import { bookingConfirmationTemplate } from "@/lib/utils/bookingConfirmationTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const onSubmitAction = async (
  data: FormData
): Promise<{ message: string }> => {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  const date = new Date(formData.date as string);

  const recipient = process.env.EMAIL_RECIPIENT ?? "";
  const sender = process.env.EMAIL_SENDER ?? "";
  const replyTo = process.env.EMAIL_REPLY_TO ?? "";

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

  try {
    // Send email to business.
    await resend.emails.send({
      from: sender,
      to: recipient,
      subject: "Tooth Spa Appointment Request",
      html: bookingFormTemplate(emailData),
    });

    // Send email to client.
    await resend.emails.send({
      from: sender,
      to: formData.email as string,
      replyTo,
      subject: "Tooth Spa Appointment Confirmation",
      html: bookingConfirmationTemplate(emailData),
    });
    return { message: "Appointment booked" };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { message: "An unexpected error occurred. Please try again later." };
  }
};
