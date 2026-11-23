
function StatCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <Icon size={22} />
      </div>

      <p>{title}</p>

      <h2>{value}</h2>

      <span>{description}</span>
    </div>
  );
}

export default StatCard;
