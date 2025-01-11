import { BookingFormType, HeroBanner } from "./common";

export interface BusinessInfoType {
  title: string;
  description?: string;
  officeHours: OfficeHours;
  location: OfficeLocation;
  contact: OfficeContact;
}

interface ComingSoon {
  title: string;
  subCopy: string;
}

export interface HomePage {
  heroBanner: HeroBanner;
  comingSoon: ComingSoon;
  bookingForm: BookingFormType;
  businessInfo: BusinessInfoType;
}

export interface OfficeContact {
  title: string;
  email: string;
}

export interface OfficeHours {
  title: string;
  days: OfficeHourSchedule[];
}

interface OfficeLocation {
  title?: string;
  address: string;
}

interface OfficeHourSchedule {
  id: number;
  day: string;
  hours: string;
}

export interface HomePageResponse {
  data: HomePage;
}
