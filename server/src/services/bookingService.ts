import prisma from "../prismaClient";

export const createBooking = async (guestId: number, roomId: number, startDate: Date, endDate: Date) => {
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

export const getBooking = async (id: number) => {
  return await prisma.booking.findUnique({
    where: { id },
    include: {
      guest: true,
      room: true,
    },
  });
};

export const updateBooking = async (id: number, guestId: number, roomId: number, startDate: Date, endDate: Date) => {
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

export const deleteBooking = async (id: number) => {
  return await prisma.booking.delete({
    where: { id },
  });
};