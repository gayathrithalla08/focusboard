
import {
  CalendarDays,
  Tag,
  CircleDot,
  Pencil,
  Trash2
} from "lucide-react";

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <article className="task-card">

      <div className="task-card-top">

        <div className="task-title-section">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <span
          className={`task-status status-${task.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <CircleDot size={13} />
          {task.status}
        </span>

      </div>

      <div className="task-card-bottom">

        <div className="task-meta">

          <span className="task-category">
            <Tag size={14} />
            {task.category}
          </span>

          <span
            className={`task-priority priority-${task.priority.toLowerCase()}`}
          >
            {task.priority} Priority
          </span>

        </div>

        <span className="task-due-date">
          <CalendarDays size={15} />
          {task.dueDate}
        </span>

      </div>

      {/* Edit and Delete Buttons */}
      <div className="task-card-actions">

        <button
          type="button"
          className="edit-task-button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
        >
          <Pencil size={15} />
          Edit Task
        </button>

        <button
          type="button"
          className="delete-task-button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={15} />
          Delete
        </button>

      </div>

    </article>
  );
}

export default TaskCard;
