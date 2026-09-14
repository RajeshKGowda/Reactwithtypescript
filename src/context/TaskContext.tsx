import {
    createContext,
    useContext,
    useReducer,
    type ReactNode,
  } from "react";
  
  import type { Task } from "../types/task";
  
  interface TaskState {
    tasks: Task[];
  }
  
  type TaskAction =
    | {
        type: "ADD_TASK";
        payload: {
          title: string;
        };
      }
    | {
        type: "TOGGLE_TASK";
        payload: {
          id: number;
        };
      }
    | {
        type: "DELETE_TASK";
        payload: {
          id: number;
        };
      };
  
  interface TaskContextValue {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
  }
  
  const initialState: TaskState = {
    tasks: [
      {
        id: 1,
        title: "Learn React rendering",
        completed: true,
      },
      {
        id: 2,
        title: "Learn useReducer",
        completed: true,
      },
      {
        id: 3,
        title: "Learn React Router",
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
              title: action.payload.title,
              completed: false,
            },
          ],
        };
  
      case "TOGGLE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
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
            (task) => task.id !== action.payload.id
          ),
        };
  
      default:
        return state;
    }
  }
  
  const TaskContext =
    createContext<TaskContextValue | null>(null);
  
  interface TaskProviderProps {
    children: ReactNode;
  }
  
  export function TaskProvider({
    children,
  }: TaskProviderProps) {
    const [state, dispatch] = useReducer(
      taskReducer,
      initialState
    );
  
    return (
      <TaskContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </TaskContext.Provider>
    );
  }
  
  export function useTaskContext() {
    const context = useContext(TaskContext);
  
    if (!context) {
      throw new Error(
        "useTaskContext must be used inside TaskProvider"
      );
    }
  
    return context;
  }