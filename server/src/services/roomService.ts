import prisma from "../prismaClient";

export const getRooms = async () => {
  return await prisma.room.findMany({
    include: {
      bookings: true,
    },
  });
};

export const getRoom = async ({ id }: { id: number }) => {
  return await prisma.room.findUnique({
    where: { id },
    include: {
      bookings: true,
    },
  });
};

export const createRoom = async ({ number }: { number: number }) => {
  return await prisma.room.create({
    data: { number },
  });
};

export const updateRoom = async ({
  id,
  number,
}: {
  id: number;
  number: number;
}) => {
  return await prisma.room.update({
    where: { id },
    data: { number },
  });
};

export const deleteRoom = async ({ id }: { id: number }) => {
  return await prisma.room.delete({
    where: { id },
  });
};
