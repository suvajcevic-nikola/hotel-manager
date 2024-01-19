import fastify from "../server";
import {
  getRoomsHandler,
  createRoomsHandler,
  deleteRoomsHandler,
} from "../controllers/roomController";

export async function roomRoutes() {
  fastify.get("/api/v1.0/rooms", getRoomsHandler);
  fastify.post("/api/v1.0/rooms", createRoomsHandler);
  fastify.delete("/api/v1.0/rooms", deleteRoomsHandler);
}
