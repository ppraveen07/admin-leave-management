import "./Sidebar.css";
import XcelTechLogo from "./XcelTechLogo";

interface SidebarProps {
  activePage:
    | "leave-management"
    | "employee-management";

  onEmployeeManagement: () => void;

  onLeaveManagement: () => void;
}

function Sidebar({
  activePage,
  onEmployeeManagement,
  onLeaveManagement,
}: SidebarProps) {
  return (
    <aside className="sidebar">

      <XcelTechLogo />

      {/* ADMIN PROFILE */}

      <div className="admin-profile">

        <div className="admin-avatar">

          <div className="avatar-face">

            <div className="hair"></div>

            <div className="eyes">
              <i></i>
              <i></i>
            </div>

            <div className="mouth"></div>

          </div>

        </div>

        <div>
          <h3>Aman Admin</h3>
          <p>Admin</p>
        </div>

      </div>


      {/* FEATURES */}

      <div className="sidebar-section-title">
        Features
      </div>


      <button className="sidebar-item active-dashboard">

        <span className="sidebar-icon">
          ▦
        </span>

        <span>
          Dashboard
        </span>

      </button>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          ✉
        </span>

        <span>
          Messages
        </span>

        <b className="notification-number">
          13
        </b>

      </button>


      {/* RECRUITMENT */}

      <div className="sidebar-section-title">
        Recruitment
      </div>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          💼
        </span>

        <span>
          Jobs
        </span>

      </button>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          👥
        </span>

        <span>
          Candidates
        </span>

      </button>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          📄
        </span>

        <span>
          Resumes
        </span>

      </button>


      {/* ORGANIZATION */}

      <div className="sidebar-section-title">
        Organization
      </div>


      {/* EMPLOYEE MANAGEMENT */}

      <button
        className={`sidebar-item ${
          activePage === "employee-management"
            ? "active-employee"
            : ""
        }`}
        onClick={onEmployeeManagement}
      >

        <span className="sidebar-icon">
          👤
        </span>

        <span>
          Employee Management
        </span>

      </button>


      {/* LEAVE MANAGEMENT */}

      <button
        className={`sidebar-item ${
          activePage === "leave-management"
            ? "active-leave"
            : ""
        }`}
        onClick={onLeaveManagement}
      >

        <span className="sidebar-icon">
          📖
        </span>

        <span>
          Leave Management
        </span>

      </button>


      {/* PERFORMANCE */}

      <button className="sidebar-item">

        <span className="sidebar-icon">
          ⚖
        </span>

        <span>
          Performance Management
        </span>

      </button>


      {/* PAYROLL */}

      <button className="sidebar-item">

        <span className="sidebar-icon">
          💵
        </span>

        <span>
          Payroll Management
        </span>

      </button>


      {/* LOGOUT */}

      <button className="logout-button">

        <span>
          ⏻
        </span>

        Log Out

      </button>


      {/* BOTTOM COLORS */}

      <div className="sidebar-colors">

        <span className="color-red"></span>

        <span className="color-yellow"></span>

        <span className="color-blue"></span>

        <span className="color-cyan"></span>

        <span className="color-pink"></span>

      </div>

    </aside>
  );
}

export default Sidebar;