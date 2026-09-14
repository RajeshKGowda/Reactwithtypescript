import { memo, useCallback, useMemo, useState } from "react";

interface User {
  name: string;
  role: string;
}

interface ChildAProps {
  user: User;
  onUserClick: () => void;
}

const ChildA = memo(function ChildA({
  user,
  onUserClick,
}: ChildAProps) {
  console.log("ChildA rendered");

  return (
    <div>
      <h2>Child A</h2>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>

      <button onClick={onUserClick}>
        Click User
      </button>
    </div>
  );
});

function ChildB() {
  console.log("ChildB rendered");

  return (
    <div>
      <h2>Child B</h2>
      <p>I don't receive any props.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  /*
   * useMemo keeps the same object reference
   * between renders as long as dependencies don't change.
   */
  const user = useMemo<User>(
    () => ({
      name: "Rajesh",
      role: "Developer",
    }),
    []
  );

  /*
   * useCallback keeps the same function reference
   * between renders as long as dependencies don't change.
   */
  const handleUserClick = useCallback(() => {
    console.log("User clicked");
  }, []);

  console.log("App rendered");

  return (
    <div>
      <h1>useMemo + useCallback + React.memo</h1>

      <p>
        This experiment demonstrates value references,
        function references, and memoized components.
      </p>

      <hr />

      <h2>Parent Component</h2>

      <p>
        Count: <strong>{count}</strong>
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <p>
        Other Count: <strong>{otherCount}</strong>
      </p>

      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>

      <hr />

      <h2>Child Components</h2>

      <ChildA
        user={user}
        onUserClick={handleUserClick}
      />

      <ChildB />
    </div>
  );
}

export default App;