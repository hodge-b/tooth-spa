import { cn } from "@/lib/utils";
import { Typography } from "../Typography";
import { OfficeHoursProps } from "./OfficeHours.types";
import { officeHoursVariants } from "./OfficeHours.variants";

export const OfficeHours = ({ className, data, variant }: OfficeHoursProps) => {
  const officeDayElements = data.days.map((day) => (
    <li key={day.id} className="flex space-x-8">
      <Typography variant="h5">{day.day}</Typography>
      <Typography variant="h5">{day.hours}</Typography>
    </li>
  ));

  return (
    <div className={(cn(officeHoursVariants({ variant })), className)}>
      <Typography variant="h2">{data.title}</Typography>
      <div className="border-accent"></div>
      <ul>{officeDayElements}</ul>
    </div>
  );
};
