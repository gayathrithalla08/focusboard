
import TaskCard from "./TaskCard";

function TaskList({ tasks, onEdit, onDelete }) {

  if (tasks.length === 0) {
    return (
      <div className="task-list-placeholder">
        <h3>No tasks found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default TaskList;
