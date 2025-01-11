import { BusinessInfo } from "@/components";
import BookingForm from "@/components/Form/BookingForm";
import homePageResponse from "@/data/pages/homePageResponse.json";

export default function Home() {
  const { data: homePageData } = homePageResponse;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <BookingForm data={homePageData.bookingForm} />
        <div className="my-10"></div>
        <BusinessInfo
          data={homePageData.businessInfo}
          socialMedia={homePageData.socialMedia}
        />
      </div>
    </div>
  );
}
