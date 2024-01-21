import prisma from "../prismaClient";
import { CreateBookingArgs, UpdateBookingArgs } from "../types/bookingTypes";

export const createBooking = async (args: CreateBookingArgs) => {
  const { guestId, roomId, startDate, endDate } = args;
  return await prisma.booking.create({
    data: {
      guestId,
      roomId,
      startDate,
      endDate,
    },
  });
};

export const getBookings = async () => {
  return await prisma.booking.findMany({
    include: {
      guest: true,
      room: true,
    },
  });
};

export const getBooking = async ({ id }: { id: number }) => {
  return await prisma.booking.findUnique({
    where: { id },
    include: {
      guest: true,
      room: true,
    },
  });
};

export const updateBooking = async (args: UpdateBookingArgs) => {
  const { id, guestId, roomId, startDate, endDate } = args;

  return await prisma.booking.update({
    where: { id },
    data: {
      guestId,
      roomId,
      startDate,
      endDate,
    },
  });
};

export const deleteBooking = async ({ id }: { id: number }) => {
  return await prisma.booking.delete({
    where: { id },
  });
};
