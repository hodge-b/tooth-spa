import { HeroBanner } from "./common";

interface ComingSoon {
  title: string;
  subCopy: string;
}

export interface HomePage {
  heroBanner: HeroBanner;
  comingSoon: ComingSoon;
  officeHours: OfficeHours;
}

interface OfficeHours {
  days: OfficeHourSchedule[];
  location: OfficeHourLocation;
}

interface OfficeHourLocation {
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
