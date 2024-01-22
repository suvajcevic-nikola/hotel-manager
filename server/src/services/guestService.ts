import prisma from "../prismaClient";

export const createGuest = ({ name }: { name: string }) => {
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

export const getGuest = ({ id }: { id: number }) => {
  return prisma.guest.findUnique({
    where: { id },
  });
};

export const updateGuest = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  return prisma.guest.update({
    where: { id },
    data: {
      name,
    },
  });
};

export const deleteGuest = ({ id }: { id: number }) => {
  return prisma.guest.delete({
    where: { id },
  });
};
