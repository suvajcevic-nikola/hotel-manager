import { query } from "../lib/fetch";

export const getAll = () => {
  const data = query.get({
    route: "guests",
  });

  return data;
};

export const create = (body: { name: string; }) => {
  const data = query.post({
    route: "guest",
    body: body,
  });

  return data;
};
