import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import LeaveManagement from "./pages/LeaveManagement";
import EmployeeManagement from "./pages/EmployeeManagement";
import EmployeeProfile from "./pages/EmployeeProfile";

import "./App.css";

export type ActivePage =
  | "leave-management"
  | "employee-management"
  | "employee-profile";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [activePage, setActivePage] =
    useState<ActivePage>("leave-management");

  return (
    <div className="app">

      <Sidebar
        activePage={
          activePage === "employee-profile"
            ? "employee-management"
            : activePage
        }

        onEmployeeManagement={() =>
          setActivePage("employee-management")
        }

        onLeaveManagement={() =>
          setActivePage("leave-management")
        }
      />

      <main
        className={
          sidebarOpen
            ? "main-area"
            : "main-area expanded"
        }
      >

        <Header
          onMenuClick={() =>
            setSidebarOpen(
              (previous) => !previous
            )
          }
        />

        <section className="content">

          {/* LEAVE MANAGEMENT */}

          {activePage === "leave-management" && (
            <LeaveManagement />
          )}

          {/* EMPLOYEE MANAGEMENT */}

          {activePage === "employee-management" && (
            <EmployeeManagement
              onViewProfile={() =>
                setActivePage("employee-profile")
              }
            />
          )}

          {/* EMPLOYEE PROFILE */}

          {activePage === "employee-profile" && (
            <EmployeeProfile
              onBack={() =>
                setActivePage("employee-management")
              }
            />
          )}

        </section>

      </main>

    </div>
  );
}

export default App;