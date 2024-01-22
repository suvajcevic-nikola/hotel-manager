import prisma from "../prismaClient";

export const createBooking = (guestId: number, roomId: number, startDate: Date, endDate: Date) => {
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

export const getBooking = (id: number) => {
  return prisma.booking.findUnique({
    where: { id },
    include: {
      guest: true,
      room: true,
    },
  });
};

export const updateBooking = (id: number, guestId: number, roomId: number, startDate: Date, endDate: Date) => {
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

export const deleteBooking = (id: number) => {
  return prisma.booking.delete({
    where: { id },
  });
};