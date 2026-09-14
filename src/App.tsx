import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered with count:", count);

  function incrementThreeTimes() {
    console.log("Before updates:", count);

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log("After updates:", count);
  }

  function incrementThreeTimesCorrectly() {
    console.log("Before functional updates:", count);

    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);

    console.log("After functional updates:", count);
  }

  return (
    <div>
      <h1>useState Deep Dive</h1>

      <p>
        Current count: <strong>{count}</strong>
      </p>

      <hr />

      <h2>Experiment 1: Direct Updates</h2>

      <p>
        Each update uses the count value from the current render.
      </p>

      <button onClick={incrementThreeTimes}>
        +3 Using Direct Updates
      </button>

      <hr />

      <h2>Experiment 2: Functional Updates</h2>

      <p>
        Each update receives the latest state value.
      </p>

      <button onClick={incrementThreeTimesCorrectly}>
        +3 Using Functional Updates
      </button>

      <hr />

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;