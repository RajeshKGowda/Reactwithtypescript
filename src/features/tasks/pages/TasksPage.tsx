import {
    Link,
    useSearchParams,
  } from "react-router-dom";
  
  import { useTaskContext } from "../../../context/TaskContext";
  
  function TasksPage() {
    const { state, dispatch } = useTaskContext();
  
    const [searchParams, setSearchParams] =
      useSearchParams();
  
    const status =
      searchParams.get("status") ?? "all";
  
    const filteredTasks = state.tasks.filter(
      (task) => {
        if (status === "active") {
          return !task.completed;
        }
  
        if (status === "completed") {
          return task.completed;
        }
  
        return true;
      }
    );
  
    function handleStatusChange(
      newStatus: string
    ) {
      setSearchParams({
        status: newStatus,
      });
    }
  
    function handleToggleTask(id: number) {
      dispatch({
        type: "TOGGLE_TASK",
        payload: {
          id,
        },
      });
    }
  
    function handleDeleteTask(id: number) {
      dispatch({
        type: "DELETE_TASK",
        payload: {
          id,
        },
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
          </button>{" "}
  
          <button
            onClick={() =>
              handleStatusChange("active")
            }
          >
            Active
          </button>{" "}
  
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
  
        {filteredTasks.length === 0 && (
          <p>No tasks found.</p>
        )}
  
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.title}{" "}
                {task.completed && "✅"}
              </span>{" "}
  
              <button
                onClick={() =>
                  handleToggleTask(task.id)
                }
              >
                Toggle
              </button>{" "}
  
              <button
                onClick={() =>
                  handleDeleteTask(task.id)
                }
              >
                Delete
              </button>{" "}
  
              <Link to={`/tasks/${task.id}`}>
                Details
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default TasksPage;