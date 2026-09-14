import type { User } from "../types/user";

const API_URL =
  "https://jsonplaceholder.typicode.com/users/1";

export async function getUser(
  signal?: AbortSignal
): Promise<User> {
  const response = await fetch(API_URL, {
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user. Status: ${response.status}`
    );
  }

  return response.json();
}