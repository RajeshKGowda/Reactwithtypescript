import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
          throw new Error(
            `Request failed with status ${response.status}`
          );
        }

        const data: User = await response.json();

        if (!isCancelled) {
          setUser(data);
        }
      } catch (error) {
        if (!isCancelled) {
          setError(
            error instanceof Error
              ? error.message
              : "Something went wrong"
          );
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      <h1>useEffect API Experiment</h1>

      <hr />

      {loading && <p>Loading user...</p>}

      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}

      {user && !loading && !error && (
        <div>
          <h2>{user.name}</h2>

          <p>
            Email: {user.email}
          </p>

          <p>
            User ID: {user.id}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;