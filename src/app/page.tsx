import { BusinessInfo, ComingSoon } from "@/components";
import BookingForm from "@/components/Form/BookingForm";
import homePageResponse from "@/data/pages/homePageResponse.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Tooth Spa Dental Hygiene",
};

export default function Home() {
  const { data: homePageData } = homePageResponse;
  const workingHours = homePageData.businessInfo.officeHours.days;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <ComingSoon data={homePageData.comingSoon} />
        <BookingForm
          data={homePageData.bookingForm}
          workingHours={workingHours}
        />
        <BusinessInfo
          data={homePageData.businessInfo}
          socialMedia={homePageData.socialMedia}
        />
      </div>
    </div>
  );
}
