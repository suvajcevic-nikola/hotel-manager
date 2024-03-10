"use server";

export const getGuests = async () => {
  const res = await fetch("http://server:8080/api/v1.0/guests", {
    cache: "no-cache",
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to fetch Guests");
  }

  return res.json();
};

export const createGuest = async ({ name }: { name: string }) => {
  const res = await fetch("http://server:8080/api/v1.0/guests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData.message);

    throw new Error("Failed to create Guest");
  }

  return res.json();
};
