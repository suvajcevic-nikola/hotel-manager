import fastify from "../server";
import {
  createGuestHandler,
  deleteGuestHandler,
  getGuestsHandler,
} from "../controllers/guestController";

export async function guestRoutes() {
  fastify.get("/api/v1.0/guests", getGuestsHandler);
  fastify.post("/api/v1.0/guest", createGuestHandler);
  fastify.delete("/api/v1.0/guest/:id", deleteGuestHandler);
}
