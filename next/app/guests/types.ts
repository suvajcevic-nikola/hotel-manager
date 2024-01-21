import { Booking } from "../bookings/types";

export type Guest = {
  id: number;
  name: string;
  bookings: Booking[];
}