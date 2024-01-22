import prisma from "../prismaClient";

export const getRooms = () => {
  return prisma.room.findMany({
    include: {
      bookings: true,
    },
  });
};

export const getRoom = ({ id }: { id: number }) => {
  return prisma.room.findUnique({
    where: { id },
    include: {
      bookings: true,
    },
  });
};

export const createRoom = ({ number }: { number: number }) => {
  return prisma.room.create({
    data: { number },
  });
};

export const updateRoom = ({
  id,
  number,
}: {
  id: number;
  number: number;
}) => {
  return prisma.room.update({
    where: { id },
    data: { number },
  });
};

export const deleteRoom = ({ id }: { id: number }) => {
  return prisma.room.delete({
    where: { id },
  });
};
