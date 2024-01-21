import prisma from "../prismaClient";

export const createGuest = async ({ name }: { name: string }) => {
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

export const getGuest = async ({ id }: { id: number }) => {
  return await prisma.guest.findUnique({
    where: { id },
  });
};

export const updateGuest = async ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  return await prisma.guest.update({
    where: { id },
    data: {
      name,
    },
  });
};

export const deleteGuest = async ({ id }: { id: number }) => {
  return await prisma.guest.delete({
    where: { id },
  });
};
