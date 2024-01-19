import Fastify, { FastifyInstance } from "fastify";

import { guestRoutes } from "./routes/guestRoutes";
import { bookingRoutes } from "./routes/bookingRoutes";
import { roomRoutes } from "./routes/roomRoutes";

const fastify: FastifyInstance = Fastify({
  logger: true,
});

fastify.register(guestRoutes);
fastify.register(bookingRoutes);
fastify.register(roomRoutes);

export default fastify;
