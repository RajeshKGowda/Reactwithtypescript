import { useUser } from "./hooks/useUser";

function App() {
  const { user, loading, error } = useUser();

  return (
    <div>
      <h1>Custom Hook + Service Layer</h1>

      <p>
        This experiment demonstrates separation between
        UI, React logic, and API communication.
      </p>

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
            Username: {user.username}
          </p>

          <p>
            Email: {user.email}
          </p>

          <p>
            Phone: {user.phone}
          </p>

          <p>
            Website: {user.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;