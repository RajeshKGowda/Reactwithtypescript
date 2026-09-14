import { useReducer } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

type TaskAction =
  | {
      type: "ADD_TASK";
      payload: string;
    }
  | {
      type: "TOGGLE_TASK";
      payload: number;
    }
  | {
      type: "DELETE_TASK";
      payload: number;
    }
  | {
      type: "CLEAR_COMPLETED";
    };

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: "Learn React rendering",
      completed: true,
    },
    {
      id: 2,
      title: "Understand useReducer",
      completed: false,
    },
  ],
};

function taskReducer(
  state: TaskState,
  action: TaskAction
): TaskState {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => !task.completed
        ),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  function addTask() {
    const title = window.prompt("Enter task name:");

    if (!title?.trim()) {
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: title.trim(),
    });
  }

  return (
    <div>
      <h1>useReducer Task Manager</h1>

      <p>
        This experiment demonstrates reducer-based state
        management.
      </p>

      <hr />

      <button onClick={addTask}>
        Add Task
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_COMPLETED",
          })
        }
      >
        Clear Completed
      </button>

      <hr />

      <h2>Tasks</h2>

      {state.tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {state.tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  marginRight: "10px",
                }}
              >
                {task.title}
              </span>

              <button
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_TASK",
                    payload: task.id,
                  })
                }
              >
                {task.completed
                  ? "Undo"
                  : "Complete"}
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TASK",
                    payload: task.id,
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr />

      <h3>State Debug</h3>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default App;