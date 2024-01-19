import fastify from "../server";

describe("roomRoutes", () => {
  afterAll(() => {
    fastify.close();
  });

  it("should respond with 200 for GET /rooms", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/api/v1.0/rooms",
    });

    expect(response.statusCode).toBe(200);
  });

  it("should respond with 200 for POST /rooms", async () => {
    const response = await fastify.inject({
      method: "POST",
      url: "/api/v1.0/rooms",
      payload: {},
    });

    expect(response.statusCode).toBe(201);
  });
});
