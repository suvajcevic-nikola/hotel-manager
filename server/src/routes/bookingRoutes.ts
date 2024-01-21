import fastify from "../server";
import {
  createBookingHandler,
  deleteBookingHandler,
  getBookingsHandler,
  updateBookingHandler,
} from "../controllers/bookingController";
import { CreateBookingArgs, UpdateBookingArgs } from "../types/bookingTypes";

export async function bookingRoutes() {
  fastify.get("/api/v1.0/bookings", getBookingsHandler);
  fastify.post<{ Body: CreateBookingArgs }>(
    "/api/v1.0/booking",
    createBookingHandler
  );
  fastify.put<{ Body: UpdateBookingArgs; Params: { id: string } }>(
    "/api/v1.0/booking/:id",
    updateBookingHandler
  );
  fastify.delete<{ Params: { id: string } }>(
    "/api/v1.0/booking/:id",
    deleteBookingHandler
  );
}
