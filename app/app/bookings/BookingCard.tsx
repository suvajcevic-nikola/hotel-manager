const BookingCard = ({
  guestName,
  roomNumber,
  startDate,
  endDate,
}: {
  guestName: string | undefined;
  roomNumber: number;
  startDate: string;
  endDate: string;
}) => {
  let status = {
    label: "",
    textColor: "",
  };
  switch (true) {
    case new Date(endDate) < new Date():
      status = {
        label: "Completed",
        textColor: "text-green-600",
      };
      break;
    case new Date(startDate) < new Date() && new Date(endDate) > new Date():
      status = {
        label: "Ongoing",
        textColor: "text-yellow-600",
      };
      break;
    case new Date(startDate) > new Date():
      status = {
        label: "Upcoming",
        textColor: "text-blue-600",
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-neutral-300 px-6 py-2 ring-[1px] ring-neutral-400 dark:bg-neutral-700 dark:ring-neutral-800">
      <div>
        Guest: <span className="font-semibold">{guestName ?? ""}</span>
      </div>
      <div>
        Room: <span className="font-semibold">{roomNumber}</span>
      </div>
      <div>
        Start Date:{" "}
        <span className="font-semibold">
          {new Date(startDate).toLocaleDateString()}
        </span>
      </div>
      <div>
        End Date:{" "}
        <span className="font-semibold">
          {new Date(endDate).toLocaleDateString()}
        </span>
      </div>
      <div>
        Status:{" "}
        <span className={`font-semibold ${status.textColor}`}>
          {status.label}
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
