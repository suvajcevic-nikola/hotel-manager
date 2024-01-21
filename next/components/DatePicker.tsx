"use client";

import { Dispatch, SetStateAction } from "react";
import { type DateRange, DayPicker, RowProps, Row } from "react-day-picker";

import "react-day-picker/dist/style.css";

const isPastDate = (date: Date) => {
  return date < new Date();
};

const OnlyFutureRow = (props: RowProps) => {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
};

const DatePicker = ({
  selected,
  setSelected,
}: {
  selected: DateRange | undefined;
  setSelected: Dispatch<SetStateAction<DateRange | undefined>>;
}) => {
  return (
    <div className="min-h-[360px] overflow-scroll rounded-md bg-neutral-200 sm:overflow-auto dark:bg-neutral-800">
      <DayPicker
        mode="range"
        components={{ Row: OnlyFutureRow }}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

export default DatePicker;
