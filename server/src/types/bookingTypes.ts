import { Prisma } from "@prisma/client";
import { FastifyRequest } from "fastify";

export type CreateBookingArgs = Omit<
  Prisma.BookingCreateInput,
  "guest" | "room"
> & {
  guestId: number;
  roomId: number;
};

export type UpdateBookingArgs = CreateBookingArgs & {
  id: number;
};

export interface CreateBookingHandlerArgs extends FastifyRequest {
  body: CreateBookingArgs;
}

export interface UpdateBookingHandlerArgs extends FastifyRequest {
  body: UpdateBookingArgs;
  params: {
    id: string;
  };
}

export interface DeleteBookingHandler
  extends Omit<UpdateBookingHandlerArgs, "body"> {}
