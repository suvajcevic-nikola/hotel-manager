import { FastifyReply, FastifyRequest } from "fastify";
import { createGuest, deleteGuest, getGuests } from "../services/guestService";

export const getGuestsHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const guests = await getGuests();
    reply.code(200).send(guests);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const createGuestHandler = async (
  request: { body: { name: string } },
  reply: FastifyReply
) => {
  try {
    const { name } = request.body;
    if (!name) {
      reply.code(400).send({ message: "Missing name" });
      return;
    }

    const newGuest = await createGuest({ name });
    reply.code(201).send(newGuest);
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};

export const deleteGuestHandler = async (
  request: {
    params: {
      id: string;
    };
  },
  reply: FastifyReply
) => {
  try {
    const id = Number(request.params.id);
    if (!id) {
      reply.code(400).send({ message: "Missing Id" });
      return;
    }

    await deleteGuest({ id });
    reply.code(200).send({ message: `Guest ${id} deleted` });
  } catch (error) {
    if (error instanceof Error) {
      reply.code(500).send({ error: error.message });
    }
  }
};
