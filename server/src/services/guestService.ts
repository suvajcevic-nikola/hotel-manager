import prisma from "../prismaClient";

export const createGuest = async (name: string) => {
  return await prisma.guest.create({
    data: {
      name,
    },
  });
};

export const getGuests = async () => {
  return await prisma.guest.findMany({
    include: {
      bookings: true,
    },
  });
};

export const getGuest = async (id: number) => {
  return await prisma.guest.findUnique({
    where: { id },
    include: {
      bookings: true,
    },
  });
};

export const updateGuest = async (id: number, name: string, email: string) => {
  return await prisma.guest.update({
    where: { id },
    data: {
      name,
    },
  });
};

export const deleteGuest = async (id: number) => {
  return await prisma.guest.delete({
    where: { id },
  });
};