
function FilterTabs({ activeFilter, setActiveFilter }) {
  const tabs = [
    { label: "All Tasks", value: "All" },
    { label: "To Do", value: "To do" },
    { label: "In Progress", value: "In progress" },
    { label: "Completed", value: "Completed" }
  ];

  return (
    <div className="task-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`task-tab ${
            activeFilter === tab.value ? "active" : ""
          }`}
          onClick={() => setActiveFilter(tab.value)}
          aria-pressed={activeFilter === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
