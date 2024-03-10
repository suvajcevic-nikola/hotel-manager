import { Suspense } from "react";
import Rooms from "./rooms/page";
import Bookings from "./bookings/page";
import Guests from "./guests/page";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:justify-between">
      <Suspense fallback={<p>Loading Rooms...</p>}>
        <Rooms />
      </Suspense>
      <Suspense fallback={<p>Loading Bookings...</p>}>
        <Bookings />
      </Suspense>
      <Suspense fallback={<p>Loading Guests...</p>}>
        <Guests />
      </Suspense>
    </div>
  );
}
