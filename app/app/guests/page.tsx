import { getGuests } from "@/data/guest";
import { Guest } from "./types";
import GuestCard from "./GuestCard";

export default async function Guests() {
  const guests: Guest[] | Error = await getGuests();

  if (guests instanceof Error) {
    return <div>Unable to get Guests</div>;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">Guests</div>
      {guests.length === 0 ? (
        <div>No Guests</div>
      ) : (
        <div className="flex flex-col gap-4">
          {guests.map((guest) => (
            <GuestCard key={guest.id} name={guest.name} />
          ))}
        </div>
      )}
    </div>
  );
}
