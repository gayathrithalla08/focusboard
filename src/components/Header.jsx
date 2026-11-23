import { Bell, Search, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div>
          <p className="breadcrumb">Workspace / Dashboard</p>
          <h1>Dashboard</h1>
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon" aria-label="Search">
          <Search size={20} />
        </button>

        <button
          className="header-icon notification-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="profile-avatar">G</div>

          <div className="profile-info">
            <h4>My Workspace</h4>
            <p>Personal Account</p>
          </div>

          <ChevronDown size={17} />
        </div>
      </div>
    </header>
  );
}

export default Header;