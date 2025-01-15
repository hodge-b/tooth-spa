"use client";

import { createContext, useContext } from "react";

import { cn } from "@/lib/utils";
import { Typography } from "../Typography";
import type { BusinessInfoType } from "@/lib/types";
import type {
  BusinessInfoProps,
  BusinessInfoChildProps,
} from "./BusinessInfo.types";
import { SocialMedia } from "../SocialMedia";

const BusinessInfoContext = createContext<BusinessInfoType | undefined>(
  undefined
);

export const useBusinessInfoContext = () => {
  const context = useContext(BusinessInfoContext);

  if (!context) {
    throw new Error(
      "useBusinessInfoContext must be used within the BusinessInfo component"
    );
  }

  return context;
};

const OfficeHours = ({ className }: BusinessInfoChildProps) => {
  const { officeHours } = useBusinessInfoContext();

  const officeDayElements = officeHours.days.map((day) => (
    <li key={day.id} className="flex justify-between items-center">
      <Typography className="mr-2">{day.day}</Typography>
      <div className="border-t grow"></div>
      <Typography className="ml-2">{day.hours}</Typography>
    </li>
  ));

  return (
    <div className={cn("text-center", className)}>
      <Typography variant="h3" className="mb-4">
        {officeHours.title}
      </Typography>
      <ul className="text-center space-y-2">{officeDayElements}</ul>
    </div>
  );
};

const OfficeLocation = ({ className }: BusinessInfoChildProps) => {
  const { location } = useBusinessInfoContext();

  return (
    <div className={cn("text-center", className)}>
      <Typography variant="h3" className="mb-4">
        {location.title}
      </Typography>
      <Typography>{location.address}</Typography>
    </div>
  );
};

const OfficeContactUs = ({ className }: BusinessInfoChildProps) => {
  const { contact } = useBusinessInfoContext();

  return (
    <div className={cn("text-center", className)}>
      <Typography variant="h3" className="mb-4">
        {contact.title}
      </Typography>
      <a
        className="underline hover:text-accent"
        href={`mailto:${contact.email}`}
      >
        {contact.email}
      </a>
    </div>
  );
};

const BusinessInfo = ({ data, socialMedia }: BusinessInfoProps) => {
  return (
    <BusinessInfoContext.Provider value={data}>
      <div
        className="bg-gray-600 w-full text-white flex justify-center py-6"
        id="get-in-touch"
      >
        <div className="flex flex-col md:flex-row justify-between p-4 max-w-6xl">
          <div className="p-4 w-full md:w-1/2 mb-10 md:mb-0">
            <Typography variant="h2" className="text-4xl font-bold">
              {data.title}
            </Typography>
            <div className="border border-accent my-6"></div>
            {data?.description && <Typography>{data?.description}</Typography>}
            {socialMedia && (
              <SocialMedia
                className="mt-20"
                data={socialMedia}
                renderTitle
                align="center"
              />
            )}
          </div>
          <div className="border p-4 rounded-md">
            <OfficeHours className="mt-10" />
            <OfficeLocation className="mt-10" />
            <OfficeContactUs className="my-10" />
          </div>
        </div>
      </div>
    </BusinessInfoContext.Provider>
  );
};

export default BusinessInfo;
