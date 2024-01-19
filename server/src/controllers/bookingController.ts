import { FastifyReply } from "fastify";
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
} from "../services/bookingService";

export const getBookingsHandler = async (
  _request: any,
  reply: FastifyReply
) => {
  try {
    const bookings = await getBookings();
    reply.code(200).send(bookings);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const createBookingHandler = async (
  request: any,
  reply: FastifyReply
) => {
  try {
    const { guestId, roomId, startDate, endDate } = request.body;
    const newBooking = await createBooking(guestId, roomId, startDate, endDate);
    reply.code(201).send(newBooking);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const updateBookingHandler = async (
  request: any,
  reply: FastifyReply
) => {
  try {
    const id = Number(request.params.id);
    const { guestId, roomId, startDate, endDate } = request.body;
    const updatedBooking = await updateBooking(
      id,
      guestId,
      roomId,
      startDate,
      endDate
    );
    reply.code(200).send(updatedBooking);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const deleteBookingHandler = async (
  request: any,
  reply: FastifyReply
) => {
  try {
    const id = Number(request.params.id);
    await deleteBooking(id);
    reply.code(200).send({ message: `Booking ${id} deleted` });
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};
