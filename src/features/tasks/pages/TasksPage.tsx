import {
    Link,
    useSearchParams,
  } from "react-router-dom";
  
  function TasksPage() {
    const [searchParams, setSearchParams] =
      useSearchParams();
  
    const status =
      searchParams.get("status") ?? "all";
  
    function handleStatusChange(
      newStatus: string
    ) {
      setSearchParams({
        status: newStatus,
      });
    }
  
    return (
      <section>
        <h2>Tasks</h2>
  
        <p>
          Current filter: <strong>{status}</strong>
        </p>
  
        <div>
          <button
            onClick={() => handleStatusChange("all")}
          >
            All
          </button>
  
          <button
            onClick={() =>
              handleStatusChange("active")
            }
          >
            Active
          </button>
  
          <button
            onClick={() =>
              handleStatusChange("completed")
            }
          >
            Completed
          </button>
        </div>
  
        <hr />
  
        <h3>Task List</h3>
  
        <ul>
          <li>
            <Link to="/tasks/1">
              Learn React rendering
            </Link>
          </li>
  
          <li>
            <Link to="/tasks/2">
              Learn useReducer
            </Link>
          </li>
  
          <li>
            <Link to="/tasks/3">
              Learn React Router
            </Link>
          </li>
        </ul>
      </section>
    );
  }
  
  export default TasksPage;