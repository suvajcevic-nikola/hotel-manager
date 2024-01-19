import useGetBookings from "../hooks/data/useGetBookings";

export type Booking = {
  id?: number;
  roomId: number;
  guestId: number;
  startDate: string;
  endDate: string;
};

function Bookings() {
  const { data: bookings } = useGetBookings();

  const isEmptyBookings = !bookings || bookings.length === 0;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Bookings History</h1>
      <div className="flex flex-col gap-4">
        {isEmptyBookings
          ? "No Bookings."
          : bookings?.map((booking: Booking) => (
              <div
                key={booking.id}
                className="flex flex-col gap-2 bg-neutral-800 ring-[1px] ring-neutral-600 rounded-lg px-6 py-2"
              >
                <div>Room: {booking.roomId}</div>
                <div>
                  Start Date: {new Date(booking.startDate).toLocaleDateString()}
                </div>
                <div>
                  End Date: {new Date(booking.endDate).toLocaleDateString()}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Bookings;
