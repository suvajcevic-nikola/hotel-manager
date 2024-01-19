import { query } from "../lib/fetch";

export const getAll = async () => {
  const data = await query.get({
    route: "rooms",
  });

  return data;
};

export const createAll = async () => {
  const data = await query.post({
    route: "rooms",
    body: {},
  });

  return data;
};
