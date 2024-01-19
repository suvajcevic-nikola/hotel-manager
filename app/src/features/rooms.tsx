import { useState } from "react";
import ReactDOM from "react-dom";
import {
  create as createBooking,
  update as updateBooking,
} from "../data/booking";
import { type Booking } from "./bookings";
import { create as createGuest } from "../data/guest";
import { createAll as createAllRooms } from "../data/room";
import { useGetRooms } from "../hooks";
import clsx from "clsx";

export type Room = {
  id: number;
  number: number;
  bookings: Booking[];
};

type RoomCardProps = {
  roomNumber: number;
  lastBooking: Booking | undefined;
  openCIModalHandler: () => void;
  onCancelRoomHandler: () => void;
};

type CheckInModalProps = {
  roomId: number;
  onRequestClose: () => void;
  handleSubmit: (_romId: number, _guestName: string) => void;
};

const CheckInModal = ({
  roomId,
  onRequestClose,
  handleSubmit,
}: CheckInModalProps) => {
  const [guestName, setGuestName] = useState("");

  const handleGuestNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGuestName(event.target.value);
  };

  return ReactDOM.createPortal(
    <div
      onClick={onRequestClose}
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-800 flex flex-col gap-4 text-white text-lg ring-[1px] ring-neutral-600 rounded-lg p-4"
      >
        <h2 className="text-2xl font-bold">Check In</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="guestName">Guest Name</label>
          <input
            type="text"
            value={guestName}
            onChange={handleGuestNameChange}
            placeholder="Enter Guest Name"
            className="px-2 py-1 rounded-md"
          />
        </div>
        <button
          onClick={() => handleSubmit(roomId, guestName)}
          className="bg-emerald-600 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>,
    document.body
  );
};

const RoomCard = ({
  roomNumber,
  lastBooking,
  openCIModalHandler,
  onCancelRoomHandler,
}: RoomCardProps) => {
  const checkIfBooked = () => {
    if (!lastBooking) {
      return false;
    }

    const lastBookingEndDate = new Date(lastBooking.endDate);
    return lastBookingEndDate > new Date();
  };
  const isBooked = checkIfBooked();

  const handleClick = () => {
    if (isBooked) {
      return;
    }

    openCIModalHandler();
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "col-spa-1 h-[70px] flex gap-1 justify-between items-center bg-emerald-600 ring ring-emerald-800 p-4 rounded-md",
        isBooked ? "bg-emerald-800" : "bg-emerald-600"
      )}
    >
      <div className="font-bold text-xl">{roomNumber}</div>
      {isBooked && <div className="text-xl">Booked!</div>}
      {isBooked && (
        <button
          onClick={onCancelRoomHandler}
          className="p-1 bg-red-400 rounded-md"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

function Rooms() {
  const [cIModalData, setCiModalData] = useState<{
    isOpen: boolean;
    roomId: number | null;
  }>({
    isOpen: false,
    roomId: null,
  });
  const { data: rooms, isLoading, refetch: refetchRooms } = useGetRooms();

  const isCIModalReady = cIModalData.isOpen && cIModalData.roomId;

  if (!rooms || rooms.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <div>There are no rooms in hotel.</div>
        <button
          onClick={populateRoomsHandler}
          className="w-32 py-4 bg-emerald-600 rounded-md"
        >
          Add Rooms
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function populateRoomsHandler() {
    createAllRooms()
      .then(() => refetchRooms())
      .catch((error) => console.error(error));
  }

  const openCIModalHandler = (roomId: number) =>
    setCiModalData({ isOpen: true, roomId });
  const closeCIModalHandler = () =>
    setCiModalData({ isOpen: true, roomId: null });

  const handleGuestCheckIn = (roomId: number, guestName: string) => {
    createGuest({
      name: guestName,
    })
      .then((guest) => {
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(startDate.getDate() + 5);

        createBooking({
          guestId: guest.id as number,
          roomId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        }).then(() => refetchRooms());
      })
      .catch((error) => console.error(error));

    closeCIModalHandler();
  };

  const handleRoomCancel = (roomId: number) => {
    const lastBooking = rooms.find((room: Room) => room.id === roomId)
      ?.bookings?.slice(-1)[0];

    if (!lastBooking) {
      return;
    }

    updateBooking(lastBooking.id, {
      roomId,
      startDate: lastBooking.startDate,
      endDate: new Date().toISOString(),
      guestId: lastBooking.guestId,
    })
      .then(() => refetchRooms())
      .catch((error) => console.error(error));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {rooms.map((room: Room) => (
        <RoomCard
          key={room.id}
          roomNumber={room.number}
          lastBooking={room.bookings[room.bookings?.length - 1]}
          openCIModalHandler={() => openCIModalHandler(room.id)}
          onCancelRoomHandler={() => handleRoomCancel(room.id)}
        />
      ))}
      {isCIModalReady && (
        <CheckInModal
          roomId={cIModalData.roomId as number}
          onRequestClose={closeCIModalHandler}
          handleSubmit={handleGuestCheckIn}
        />
      )}
    </div>
  );
}

export default Rooms;
