"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookingFormProps, formSchema, FormValues } from "./BookingForm.types";
import { Typography } from "@/components/Typography";
import { onSubmitAction } from "@/actions/sendBookingEmail";

export const BookingForm = ({ data }: BookingFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = convertToFormData(data);

    try {
      const response = await onSubmitAction(formData);
      toast(response.message);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="w-full p-4 max-w-6xl" id="booking-form">
      <Typography variant="h2" className="text-4xl font-bold">
        {data.title}
      </Typography>
      <div className="border border-accent my-5"></div>
      <div className="p-4 max-w-xl mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-3xl space-y-8"
          >
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2 ">
                    <FormLabel>{`${data.fields.firstName} *`}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        type="text"
                        {...field}
                        className="bg-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel>{`${data.fields.lastName} *`}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        type="text"
                        {...field}
                        className="bg-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>{`${data.fields.email} *`}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`${data.fields.message} *`}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none bg-white"
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-accent font-bold p-4 w-1/5">
              {data.submit ?? "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

/**
 * Utility used to create a formData object.
 *
 * @param data The data from the form submission.
 *
 * @return A formData object for server action.
 */
const convertToFormData = (data: FormValues) => {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("message", data.message);
  return formData;
};
