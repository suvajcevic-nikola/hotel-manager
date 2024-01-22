import { query } from "../lib/fetch";

export const getAll = () => {
  const data = query.get({
    route: "rooms",
  });

  return data;
};

export const createAll = () => {
  const data = query.post({
    route: "rooms",
    body: {},
  });

  return data;
};
