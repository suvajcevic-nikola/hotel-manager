import fastify from "../server";
import {
  getGuestsHandler,
  createGuestHandler,
  deleteGuestHandler,
} from "../controllers/guestController";

export async function guestRoutes() {
  fastify.get("/api/v1.0/guests", getGuestsHandler);
  fastify.post<{ Body: { name: string } }>(
    "/api/v1.0/guests",
    createGuestHandler
  );
  fastify.delete<{ Params: { id: string } }>(
    "/api/v1.0/guests/:id",
    deleteGuestHandler
  );
}
