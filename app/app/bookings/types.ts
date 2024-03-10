import { type Room } from "@/app/rooms/types";

export type Booking = {
  id: number;
  roomId: number;
  guestId: number;
  startDate: string;
  endDate: string;
  room: Room;
  guest?: {
    id: number;
    name: string;
  };
};

export type BookingSearchParams = Omit<Booking, "id" | "guest" | "room"> & {
  guestId: number;
  roomId: number;
};
