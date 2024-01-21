const GuestCard = ({ name }: { name: string }) => {
  return (
    <div className="flex rounded-lg bg-teal-400 px-6 py-2 ring-[1px] ring-teal-500 dark:bg-teal-600 dark:ring-teal-700">
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default GuestCard;
