import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  CircleCheck
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <CircleCheck size={25} />
        </div>
        <h2>FocusBoard</h2>
      </div>

      <div className="sidebar-menu">
        <p className="menu-heading">MENU</p>

        <nav>
          <a href="#dashboard" className="nav-item active">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </a>

          <a href="#tasks" className="nav-item">
            <CheckSquare size={19} />
            <span>My Tasks</span>
          </a>

          <a href="#calendar" className="nav-item">
            <CalendarDays size={19} />
            <span>Calendar</span>
          </a>

          <a href="#reports" className="nav-item">
            <BarChart3 size={19} />
            <span>Reports</span>
          </a>
        </nav>

        <p className="menu-heading settings-heading">PREFERENCES</p>

        <nav>
          <a href="#settings" className="nav-item">
            <Settings size={19} />
            <span>Settings</span>
          </a>

          <a href="#help" className="nav-item">
            <HelpCircle size={19} />
            <span>Help Center</span>
          </a>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <h4>Stay focused!</h4>
          <p>Small steps every day lead to big results.</p>
        </div>

        <a href="#logout" className="nav-item logout-item">
          <LogOut size={19} />
          <span>Log Out</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;