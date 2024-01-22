import { Booking } from "../features/bookings";
import { query } from "../lib/fetch";

export const getAll = () => {
  const data = query.get({
    route: "bookings",
  });

  return data;
};

export const create = (body: Booking) => {
  const data = query.post({
    route: "booking",
    body: body,
  });

  return data;
};

export const update = (id: number, body: Booking) => {
  const data = query.put({
    route: `booking/${id}`,
    body: body,
  });

  return data;
};
