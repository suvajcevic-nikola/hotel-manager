import { query } from "../lib/fetch";

export const getAll = async () => {
  const data = await query.get({
    route: "guests",
  });

  return data;
};

export const create = async (body: { name: string; }) => {
  const data = await query.post({
    route: "guest",
    body: body,
  });

  return data;
};
