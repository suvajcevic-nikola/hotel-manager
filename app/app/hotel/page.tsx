import RoomCard from "@/app/rooms/RoomCard";
import BookingCard from "@/app/bookings/BookingCard";
import GuestCard from "@/app/guests/GuestCard";
import { getRooms } from "@/data/room";
import { getBookings } from "@/data/booking";
import { getGuests } from "@/data/guest";
import { type Room } from "@/app/rooms/types";
import { type Booking } from "@/app//bookings/types";
import { type Guest } from "@/app/guests/types";

const RoomsList = ({ rooms }: { rooms: Room[] | Error }) => {
  if (rooms instanceof Error) {
    return <div>Unable to get Rooms</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {rooms.map((room: Room) => (
        <RoomCard
          key={room.id}
          roomId={room.id}
          roomNumber={room.number}
          lastBooking={room.bookings[room.bookings?.length - 1]}
        />
      ))}
    </div>
  );
};

const BookingsList = ({ bookings }: { bookings: Booking[] | Error }) => {
  if (bookings instanceof Error) {
    return <div>Unable to get Bookings</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {bookings.map((room: Booking) => (
        <BookingCard
          key={room.id}
          guestName={room.guest?.name}
          roomNumber={room.room?.number}
          startDate={room.startDate}
          endDate={room.endDate}
        />
      ))}
    </div>
  );
};

const GuestsList = ({ guests }: { guests: Guest[] | Error }) => {
  if (guests instanceof Error) {
    return <div>Unable to get Guests</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {guests.map((guest) => (
        <GuestCard key={guest.id} name={guest.name} />
      ))}
    </div>
  );
};

export default async function Hotel() {
  const roomsData: Room[] | Error = await getRooms();
  const bookingsData: Booking[] | Error = await getBookings();
  const guestsData: Guest[] | Error = await getGuests();

  const [rooms, bookings, guests] = await Promise.all([
    roomsData,
    bookingsData,
    guestsData,
  ]);

  return (
    <div className="flex h-full w-full flex-col gap-8">
      <RoomsList rooms={rooms} />
      <BookingsList bookings={bookings} />
      <GuestsList guests={guests} />
    </div>
  );
}
