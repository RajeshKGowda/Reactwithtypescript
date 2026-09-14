import { useQuery } from "@tanstack/react-query";

import { getUser } from "../services/userService";

export function useUserQuery() {
  return useQuery({
    queryKey: ["user", 1],
    queryFn: () => getUser(),
  });
}