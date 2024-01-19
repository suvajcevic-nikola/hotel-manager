
import { useQuery } from "@tanstack/react-query";
import { getAll as getRooms } from "../../data/room";

const useGetRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
    retry: 1,
  });
};

export default useGetRooms;
