import { getBookings } from "@/data/booking";
import BookingCard from "./BookingCard";
import { type Booking } from "./types";

export default async function Bookings() {
  const bookings: Booking[] | Error = await getBookings();

  if (bookings instanceof Error) {
    return <div>Unable to get Bookings</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">Bookings</div>
      {bookings.length === 0 ? (
        <div>No Bookings</div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              guestName={booking.guest?.name}
              roomNumber={booking.room?.number}
              startDate={booking.startDate}
              endDate={booking.endDate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
