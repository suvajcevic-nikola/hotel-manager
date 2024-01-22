import prisma from "../prismaClient";

export const createGuest = (name: string) => {
  return prisma.guest.create({
    data: {
      name,
    },
  });
};

export const getGuests = () => {
  return prisma.guest.findMany({
    include: {
      bookings: true,
    },
  });
};

export const getGuest = (id: number) => {
  return prisma.guest.findUnique({
    where: { id },
    include: {
      bookings: true,
    },
  });
};

export const updateGuest = (id: number, name: string, email: string) => {
  return prisma.guest.update({
    where: { id },
    data: {
      name,
    },
  });
};

export const deleteGuest = (id: number) => {
  return prisma.guest.delete({
    where: { id },
  });
};