import fastify from "../server";
import {
  createBookingHandler,
  deleteBookingHandler,
  getBookingsHandler,
  updateBookingHandler,
} from "../controllers/bookingController";

export async function bookingRoutes() {
  fastify.get("/api/v1.0/bookings", getBookingsHandler);
  fastify.post("/api/v1.0/booking", createBookingHandler);
  fastify.put("/api/v1.0/booking/:id", updateBookingHandler);
  fastify.delete("/api/v1.0/booking/:id", deleteBookingHandler);
}
