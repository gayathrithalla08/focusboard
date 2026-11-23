
import { useState } from "react";
import { X } from "lucide-react";

function TaskForm({ onSave, onCancel, editingTask }) {
  const [formData, setFormData] = useState(() => ({
    title: editingTask?.title || "",
    description: editingTask?.description || "",
    category: editingTask?.category || "",
    status: editingTask?.status || "To do",
    priority: editingTask?.priority || "Medium",
    dueDate: editingTask?.dueDate || ""
  }));

  const isEditing = Boolean(editingTask);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.category.trim() || !formData.dueDate) {
      return;
    }

    const updatedTask = {
      ...editingTask,
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category.trim()
    };

    onSave(updatedTask);
  };

  return (
    <div className="task-modal-overlay">
      <div
        className="task-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-form-title"
      >

        <div className="task-modal-header">
          <div>
            <h2 id="task-form-title">
              {isEditing ? "Edit Task" : "Add New Task"}
            </h2>

            <p>
              {isEditing
                ? "Update your task details."
                : "Fill in the details to create a new task."}
            </p>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onCancel}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">Task Title *</label>

            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>

            <textarea
              id="description"
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>

            <input
              id="category"
              type="text"
              name="category"
              placeholder="Example: Design, Development"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="status">Status</label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>

              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date *</label>

            <input
              id="dueDate"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="task-form-actions">

            <button
              type="button"
              className="cancel-task-button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-task-button"
            >
              {isEditing ? "Update Task" : "Save Task"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default TaskForm;
