import {
  BookingFormType,
  ButtonCta,
  HeroBanner,
  Image,
  SocialMediaType,
} from "./common";

export interface BusinessInfoType {
  title: string;
  description?: string;
  officeHours: OfficeHours;
  location: OfficeLocation;
  contact: OfficeContact;
}

export interface ComingSoonType {
  title: string;
  subCopy: string;
  buttonCta?: ButtonCta;
  image: Image;
}

export interface HomePage {
  heroBanner: HeroBanner;
  comingSoon: ComingSoonType;
  bookingForm: BookingFormType;
  businessInfo: BusinessInfoType;
  socialMedia: SocialMediaType;
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
