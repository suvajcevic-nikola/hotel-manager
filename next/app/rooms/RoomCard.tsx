import Link from "next/link";
import { type Booking } from "@/app/bookings/types";
import { UserIcon } from "@heroicons/react/16/solid";

const checkIfCurrentlyBooked = (lastBooking: any) => {
  if (!lastBooking) {
    return false;
  }

  const lastBookingEndDate = new Date(lastBooking.endDate);
  return lastBookingEndDate > new Date();
};

const RoomCard = ({
  roomId,
  roomNumber,
  lastBooking,
}: {
  roomId: number;
  roomNumber: number;
  lastBooking?: Booking;
}) => {
  const isCurrentlyBooked = checkIfCurrentlyBooked(lastBooking);

  const href = isCurrentlyBooked
    ? `check-out/${lastBooking?.id}?roomId=${roomId}&guestId=${lastBooking?.guestId}&startDate=${lastBooking?.startDate}`
    : `check-in/${roomId}`;

  return (
    <Link
      href={href}
      className="relative col-span-1 flex h-[70px] cursor-pointer items-center justify-center gap-1 rounded-md bg-emerald-600 p-4 ring ring-emerald-700"
    >
      <div
        data-testid="roomCard-roomNumber"
        className="text-xl font-bold text-white"
      >
        {roomNumber}
      </div>
      {isCurrentlyBooked && (
        <div className="absolute -right-2 -top-2 flex rounded-full bg-rose-400 p-1 text-xl">
          <UserIcon className="aspect-square w-4 text-white" />
        </div>
      )}
    </Link>
  );
};

export default RoomCard;
