import { FastifyReply, FastifyRequest } from "fastify";
import { getRooms, createRoom, deleteRoom, getRoom } from "../services/roomService";

export const getRoomsHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const rooms = await getRooms();
    reply.code(200).send(rooms);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const createRoomsHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    for (let i = 1; i <= 20; i++) {
      const room = await getRoom({id: i});
      if (!room) {
        await createRoom({number: i});
      }
    }
    reply.code(201).send({ message: "Rooms created" });
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const deleteRoomsHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const rooms = await getRooms();
    for (const room of rooms) {
      await deleteRoom({id: room.id});
    }
    reply.code(200).send({ message: "All rooms deleted" });
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};
