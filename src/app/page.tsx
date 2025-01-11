import BookingForm from "@/components/Form/BookingForm";
import homePageResponse from "@/data/pages/homePageResponse.json";

export default function Home() {
  const { data: homePageData } = homePageResponse;

  return (
    <div className="flex flex-col items-center">
      <BookingForm data={homePageData.bookingForm} />
    </div>
  );
}
