import "./Sidebar.css";
import XcelTechLogo from "./XcelTechLogo";

function Sidebar() {
  return (
    <aside className="sidebar">

      <XcelTechLogo />

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


      <div className="sidebar-section-title">
        Organization
      </div>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          👤
        </span>

        <span>
          Employee Management
        </span>

      </button>


      <button className="sidebar-item active-leave">

        <span className="sidebar-icon">
          📖
        </span>

        <span>
          Leave Management
        </span>

      </button>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          ⚖
        </span>

        <span>
          Performance Management
        </span>

      </button>


      <button className="sidebar-item">

        <span className="sidebar-icon">
          💵
        </span>

        <span>
          Payroll Management
        </span>

      </button>


      <button className="logout-button">

        <span>
          ⏻
        </span>

        Log Out

      </button>


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