"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { Button, Spinner } from "@/components";
import { updateBooking, revalidateBookings } from "@/data/booking";
import { revalidateRooms } from "@/data/room";

export default function CheckOutModal() {
  const router = useRouter();
  const { bookingId } = useParams();
  const searchParams = useSearchParams();

  const roomId = searchParams.get("roomId");
  const guestId = searchParams.get("guestId");
  const startDate = searchParams.get("startDate");

  const endDate = new Date().toISOString();

  const [isResSuccess, setIsResSuccess] = useState(false);

  const [isPendingAction, startActonTransition] = useTransition();

  const handleConfirm = () => {
    startActonTransition(async () => {
      if (!bookingId || !roomId || !guestId || !startDate || !endDate) {
        return;
      }

      await updateBooking({
        id: Number(bookingId),
        roomId: Number(roomId),
        guestId: Number(guestId),
        startDate,
        endDate,
      });

      setIsResSuccess(true);
      router.back();
    });
  };

  useEffect(() => {
    return () => {
      if (!isResSuccess) return;

      Promise.all([revalidateBookings(), revalidateRooms()]).then(() =>
        setIsResSuccess(false),
      );
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
        <h2 className="text-2xl font-bold">Check Out</h2>
        <Button
          onClickHandler={handleConfirm}
          isDisabled={isPendingAction && !isResSuccess}
        >
          {isPendingAction ? <Spinner /> : <span>Confirm</span>}
        </Button>
      </div>
    </div>
  );
}
