
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/Statcard";
import FocusNotes from "./components/FocusNotes";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import TaskForm from "./components/TaskForm";

import sampleTasks from "./data/sampleTask";
import useLocalStorage from "./hooks/useLocalStorage";

import {
  ListTodo,
  Clock3,
  CheckCircle2,
  TrendingUp,
  Plus,
  ArrowRight,
  SlidersHorizontal,
  X
} from "lucide-react";

function App() {

  // Store tasks using localStorage
  const [tasks, setTasks] = useLocalStorage(
    "focusboard-tasks",
    sampleTasks
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [showPriorityFilter, setShowPriorityFilter] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Store the task currently being edited
  const [editingTask, setEditingTask] = useState(null);

  // Calculate statistics
  const totalTasks = tasks.length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : (completedTasks / totalTasks) * 100;

  const statistics = [
    {
      title: "Total Tasks",
      value: totalTasks,
      description: "Task overview",
      icon: ListTodo,
      color: "purple"
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      description: "Currently working on",
      icon: Clock3,
      color: "orange"
    },
    {
      title: "Completed",
      value: completedTasks,
      description: "Successfully finished",
      icon: CheckCircle2,
      color: "green"
    },
    {
      title: "Completion Rate",
      value: `${completionRate.toFixed(2)}%`,
      description: "Overall progress",
      icon: TrendingUp,
      color: "blue"
    }
  ];

  // Add or update a task
  const handleSaveTask = (taskData) => {

    if (editingTask) {
      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === editingTask.id ? taskData : task
        )
      );

    } else {
      setTasks((previousTasks) => [
        taskData,
        ...previousTasks
      ]);
    }

    setSearchQuery("");
    setActiveFilter("All");
    setPriorityFilter("All");
    setShowPriorityFilter(false);

    setShowTaskForm(false);
    setEditingTask(null);
  };

  // Open form to add a new task
  const handleOpenAddForm = () => {
    setEditingTask(null);
    setShowTaskForm(true);
  };

  // Open form to edit an existing task
  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  // Close task form
  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  // Delete a task after confirmation
  const handleDeleteTask = (taskId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  // Apply all filters
  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    const matchesStatus =
      activeFilter === "All" ||
      task.status === activeFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Clear filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setActiveFilter("All");
    setPriorityFilter("All");
  };

  return (
    <div className="app-container">

      <Sidebar />

      <main className="main-content">

        <Header />

        <div className="dashboard-content">

          {/* Welcome Section */}
          <section className="welcome-section">

            <div>
              <h2>Welcome back! 👋</h2>
              <p>
                Here's what's happening with your tasks today.
              </p>
            </div>

            <button
              className="add-task-button"
              onClick={handleOpenAddForm}
              type="button"
            >
              <Plus size={19} />
              Add New Task
            </button>

          </section>

          {/* Statistics */}
          <section className="stats-grid">

            {statistics.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                description={stat.description}
                icon={stat.icon}
                color={stat.color}
              />
            ))}

          </section>

          {/* Focus Notes */}
          <section className="focus-section">

            <div className="section-heading">
              <div>
                <h2>Focus Notes</h2>
                <p>
                  A little motivation for your productive day.
                </p>
              </div>
            </div>

            <FocusNotes />

          </section>

          {/* My Tasks */}
          <section className="tasks-section" id="tasks">

            <div className="section-heading">

              <div>
                <h2>My Tasks</h2>
                <p>
                  Manage and track your daily activities.
                </p>
              </div>

              <button className="view-all-button">
                View All <ArrowRight size={17} />
              </button>

            </div>

            {/* Search and Priority Filter */}
            <div className="task-toolbar">

              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <button
                className={`filter-button ${
                  priorityFilter !== "All" ? "filter-active" : ""
                }`}
                onClick={() =>
                  setShowPriorityFilter(!showPriorityFilter)
                }
                type="button"
                aria-expanded={showPriorityFilter}
              >
                <SlidersHorizontal size={18} />
                Filters

                {priorityFilter !== "All" && (
                  <span className="filter-count">1</span>
                )}
              </button>

            </div>

            {/* Priority Filter Panel */}
            {showPriorityFilter && (
              <div className="priority-filter-panel">

                <div className="priority-filter-heading">

                  <h3>Filter by Priority</h3>

                  <button
                    type="button"
                    className="close-filter-button"
                    onClick={() => setShowPriorityFilter(false)}
                    aria-label="Close priority filter"
                  >
                    <X size={18} />
                  </button>

                </div>

                <div className="priority-filter-options">

                  {["All", "High", "Medium", "Low"].map((priority) => (
                    <button
                      key={priority}
                      type="button"
                      className={`priority-option ${
                        priorityFilter === priority ? "selected" : ""
                      }`}
                      onClick={() => setPriorityFilter(priority)}
                    >
                      {priority === "All"
                        ? "All Priorities"
                        : `${priority} Priority`}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Status Tabs */}
            <FilterTabs
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            {/* Filter Information */}
            {(searchQuery || activeFilter !== "All" || priorityFilter !== "All") && (
              <div className="active-filter-info">

                <span>
                  Showing {filteredTasks.length} of {totalTasks} tasks
                </span>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="clear-filters-button"
                >
                  Clear all filters
                </button>

              </div>
            )}

            {/* Task List */}
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />

          </section>

        </div>

      </main>

      {/* Add or Edit Task Form */}
      {showTaskForm && (
        <TaskForm
          editingTask={editingTask}
          onSave={handleSaveTask}
          onCancel={handleCloseTaskForm}
        />
      )}

    </div>
  );
}

export default App;
