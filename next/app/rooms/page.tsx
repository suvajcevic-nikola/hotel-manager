import { getRooms } from "@/data/room";
import { type Room } from "./types";
import RoomCard from "./RoomCard";

export default async function Rooms() {
  const rooms: Room[] | Error = await getRooms();

  if (rooms instanceof Error) {
    return <div>Unable to get Rooms</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">Rooms</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rooms.map((room: Room) => (
          <RoomCard
            key={room.id}
            roomId={room.id}
            roomNumber={room.number}
            lastBooking={room.bookings[room.bookings?.length - 1]}
          />
        ))}
      </div>
    </div>
  );
}
