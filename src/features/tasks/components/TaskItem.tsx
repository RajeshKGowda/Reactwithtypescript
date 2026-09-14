import { memo } from "react";
import { Link } from "react-router-dom";

import type { Task } from "../../../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  console.log("TaskItem rendered:", task.id);

  return (
    <li>
      <span>
        {task.title}{" "}
        {task.completed && "✅"}
      </span>{" "}

      <button
        onClick={() => onToggle(task.id)}
      >
        Toggle
      </button>{" "}

      <button
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>{" "}

      <Link to={`/tasks/${task.id}`}>
        Details
      </Link>
    </li>
  );
}

export default memo(TaskItem);