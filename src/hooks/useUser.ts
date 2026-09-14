import { useEffect, useState } from "react";

import { getUser } from "../services/userService";
import type { User } from "../types/user";

interface UseUserResult {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useUser(): UseUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUser() {
      try {
        setLoading(true);
        setError(null);

        const data = await getUser(controller.signal);

        setUser(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load user."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    user,
    loading,
    error,
  };
}