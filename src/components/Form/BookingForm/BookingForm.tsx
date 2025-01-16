"use client";

import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookingFormProps, formSchema, FormValues } from "./BookingForm.types";
import { Typography } from "@/components/Typography";
// import { onSubmitAction } from "@/actions/sendBookingEmail";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import TimePicker from "../TimePicker";
import { useEffect, useState } from "react";
import { getWorkingHours } from "@/lib/utils/getWorkingHours";
import { onSubmitAction } from "@/actions/sendBookingEmail";

export const BookingForm = ({ data, workingHours }: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeRange, setTimeRange] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!date) {
      setTimeRange([]);
      return;
    }

    const day = date?.toLocaleDateString("en-US", { weekday: "long" });
    const match = workingHours.find((item) => item.day.includes(day));

    if (match) {
      setTimeRange(getWorkingHours(match.hours));
    }
  }, [date, workingHours]);

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
    <div className="w-full px-6 py-6 md:py-10 max-w-6xl" id="booking-form">
      <Typography variant="h2" className="text-4xl font-bold">
        {data.title}
      </Typography>
      <div className="border border-accent my-6 w-full md:w-1/2"></div>
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

            <div className="space-y-8 md:space-y-0 flex flex-col md:flex-row md:justify-between">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>{`${data.fields.date} *`}</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild className="bg-white">
                        <FormControl>
                          <Button
                            className={cn(
                              "w-[240px] pl-6 text-left font-normal flex justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select a date</span>
                            )}
                            <CalendarIcon className="m1-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="bg-white">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(selectedDate) => {
                            field.onChange(selectedDate);
                            setDate(selectedDate);
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-[240px]">
                    <FormLabel>{`${data.fields.time} *`}</FormLabel>
                    <FormControl>
                      <TimePicker
                        selected={field.value}
                        onSelected={field.onChange}
                        timeRange={timeRange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`${data.fields.message}`}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none bg-white"
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Any additional comments.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-accent font-bold p-4 w-1/5 hover:bg-gray-400 hover:text-accent"
            >
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
  formData.append("date", data.date.toISOString());
  formData.append("time", data.time);
  formData.append("message", data.message);
  return formData;
};
