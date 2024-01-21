export const getRooms = async () => {
  const res = await fetch("http://server:8080/api/v1.0/rooms", {
    cache: "no-cache",
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to fetch Rooms");
  }

  return res.json();
};
