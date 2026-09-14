import TaskItem from "./TaskItem";

import type { Task } from "../../../types/task";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) {
  console.log("TaskList rendered");

  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;