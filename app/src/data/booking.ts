import { Booking } from "../features/bookings";
import { query } from "../lib/fetch";

export const getAll = async () => {
  const data = await query.get({
    route: "bookings",
  });

  return data;
};

export const create = async (body: Booking) => {
  const data = await query.post({
    route: "booking",
    body: body,
  });

  return data;
};

export const update = async (id: number, body: Booking) => {
  const data = await query.put({
    route: `booking/${id}`,
    body: body,
  });

  return data;
};
