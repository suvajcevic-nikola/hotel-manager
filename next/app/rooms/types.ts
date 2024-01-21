import { type Booking } from "@/app/bookings/types";

export type Room = {
  id: number;
  number: number;
  bookings: Booking[];
};
