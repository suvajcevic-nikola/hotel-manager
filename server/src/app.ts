import fastify from "./server";

const PORT = 8080;

const start = async () => {
  try {
    await fastify.listen({ port: PORT as number, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
