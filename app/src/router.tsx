import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import App from "./App.tsx";
import Bookings from "./features/bookings.tsx";
import { MainLayout, NavBar } from "./components";

const rootRoute = new RootRoute({
  component: () => (
    <MainLayout>
      <NavBar />
      <Outlet />
    </MainLayout>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const bookingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/bookings",
  component: Bookings,
});

const routeTree = rootRoute.addChildren([indexRoute, bookingsRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
