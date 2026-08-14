import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LeaveManagement from "./pages/LeaveManagement";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">

      <Sidebar />

      <main
        className={
          sidebarOpen
            ? "main-area"
            : "main-area expanded"
        }
      >

        <Header
          onMenuClick={() =>
            setSidebarOpen((previous) => !previous)
          }
        />

        <section className="content">
          <LeaveManagement />
        </section>

      </main>

    </div>
  );
}

export default App;