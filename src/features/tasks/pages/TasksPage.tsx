import { useCallback } from "react";

import {
  useSearchParams,
} from "react-router-dom";

import { useTaskContext } from "../../../context/TaskContext";

import TaskList from "../components/TaskList";

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

  console.log("TasksPage rendered");

  function handleStatusChange(
    newStatus: string
  ) {
    setSearchParams({
      status: newStatus,
    });
  }

  const handleToggleTask = useCallback(
    (id: number) => {
      dispatch({
        type: "TOGGLE_TASK",
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  const handleDeleteTask = useCallback(
    (id: number) => {
      dispatch({
        type: "DELETE_TASK",
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return (
    <section>
      <h2>Tasks</h2>

      <p>
        Current filter: <strong>{status}</strong>
      </p>

      <div>
        <button
          onClick={() =>
            handleStatusChange("all")
          }
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

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </section>
  );
}

export default TasksPage;