"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button, DatePicker, Input, Spinner } from "@/components";
import { type DateRange } from "react-day-picker";
import { checkIn, revalidateBookings } from "@/data/booking";

export default function CheckInModal() {
  const router = useRouter();
  const { roomId } = useParams();

  const [guestName, setGuestName] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >();
  const [isResSuccess, setIsResSuccess] = useState(false);

  const [isPendingAction, startActonTransition] = useTransition();

  const handleGuestNameChange = (e: any) => {
    setGuestName(e.target.value);
  };

  const handleSubmit = () => {
    startActonTransition(async () => {
      if (
        guestName.length === 0 ||
        !roomId ||
        !selectedDateRange?.from ||
        !selectedDateRange?.to
      ) {
        return;
      }

      await checkIn({
        roomId: Number(roomId),
        guestName,
        startDate: selectedDateRange.from.toISOString(),
        endDate: selectedDateRange.to.toISOString(),
      });

      setIsResSuccess(true);
      router.back();
    });
  };

  useEffect(() => {
    return () => {
      if (!isResSuccess) return;
      revalidateBookings().then(() => setIsResSuccess(false));
    };
  }, [isResSuccess]);

  return (
    <div
      onClick={() => router.back()}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-w-[90%] flex-col gap-4 rounded-lg bg-neutral-300 p-8 text-lg shadow-lg ring-[1px] ring-neutral-700 dark:bg-neutral-600"
      >
        <h2 className="text-2xl font-bold">Check In</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="guestName text-white">Guest Name</label>
          <Input
            type="text"
            value={guestName}
            onChange={handleGuestNameChange}
            placeholder="Enter Guest Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="guestName text-white">Date</label>
          <DatePicker
            selected={selectedDateRange}
            setSelected={setSelectedDateRange}
          />
        </div>
        <Button
          onClickHandler={handleSubmit}
          isDisabled={isPendingAction && !isResSuccess}
        >
          {isPendingAction ? <Spinner /> : <span>Submit</span>}
        </Button>
      </div>
    </div>
  );
}
