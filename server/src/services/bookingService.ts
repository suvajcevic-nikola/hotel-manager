import prisma from "../prismaClient";
import { CreateBookingArgs, UpdateBookingArgs } from "../types/bookingTypes";

export const createBooking = (args: CreateBookingArgs) => {
  const { guestId, roomId, startDate, endDate } = args;
  return prisma.booking.create({
    data: {
      guestId,
      roomId,
      startDate,
      endDate,
    },
  });
};

export const getBookings = () => {
  return prisma.booking.findMany({
    include: {
      guest: true,
      room: true,
    },
  });
};

export const getBooking = ({ id }: { id: number }) => {
  return prisma.booking.findUnique({
    where: { id },
    include: {
      guest: true,
      room: true,
    },
  });
};

export const updateBooking = (args: UpdateBookingArgs) => {
  const { id, guestId, roomId, startDate, endDate } = args;

  return prisma.booking.update({
    where: { id },
    data: {
      guestId,
      roomId,
      startDate,
      endDate,
    },
  });
};

export const deleteBooking = ({ id }: { id: number }) => {
  return prisma.booking.delete({
    where: { id },
  });
};
