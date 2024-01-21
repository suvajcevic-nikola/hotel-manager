export type NavItem = {
  id: string;
  name: string;
  path: string;
};

export const navData: NavItem[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
  },
  {
    id: "hotel",
    name: "Hotel",
    path: "/hotel",
  },
  {
    id: "rooms",
    name: "Rooms",
    path: "/rooms",
  },
  {
    id: "bookings",
    name: "Bookings",
    path: "/bookings",
  },
  {
    id: "guests",
    name: "Guests",
    path: "/guests",
  },
];
