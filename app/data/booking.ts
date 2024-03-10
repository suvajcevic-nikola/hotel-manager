"use server";

import { revalidatePath } from "next/cache";
import { createGuest } from "./guest";
import { type BookingSearchParams } from "@/app/bookings/types";

export const getBookings = async () => {
  const res = await fetch("http://server:8080/api/v1.0/bookings", {
    cache: "no-cache",
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to fetch Bookings");
  }

  return res.json();
};

export const createBooking = async ({
  roomId,
  guestId,
  startDate,
  endDate,
}: {
  roomId: number;
  guestId: number;
  startDate: string;
  endDate: string;
}) => {
  const res = await fetch("http://server:8080/api/v1.0/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomId,
      guestId,
      startDate,
      endDate,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to create Booking");
  }

  return res.json();
};

export const updateBooking = async ({
  id,
  roomId,
  guestId,
  startDate,
  endDate,
}: BookingSearchParams & { id: number }) => {
  const res = await fetch(`http://server:8080/api/v1.0/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomId,
      guestId,
      startDate,
      endDate,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to create Booking");
  }

  return res.json();
};

export const checkIn = async ({
  roomId,
  guestName,
  startDate,
  endDate,
}: {
  roomId: number;
  guestName: string;
  startDate: string;
  endDate: string;
}) => {
  try {
    const guest = await createGuest({ name: guestName });
    const booking = await createBooking({
      roomId,
      guestId: guest.id,
      startDate,
      endDate,
    });
    return booking;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to Check In Guest");
  }
};

export const revalidateBookings = async () => {
  revalidatePath("/bookings");
  return;
};
