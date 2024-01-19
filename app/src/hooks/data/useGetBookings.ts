import { useQuery } from "@tanstack/react-query";
import { getAll as getBookings } from "../../data/booking";

const useGetBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
    retry: 1,
  });
};

export default useGetBookings;
