import { useState } from "react";

import LeaveSettings from "./LeaveSettings";
import LeaveRecall from "./LeaveRecall";
import LeaveHistory from "./LeaveHistory";

import "./LeaveManagement.css";

type ActiveSection =
  | "management"
  | "settings"
  | "recall"
  | "history";

function LeaveManagement() {
  const [activeSection, setActiveSection] =
    useState<ActiveSection>("management");

  return (
    <div className="leave-management-page">

      {/* PAGE TITLE */}
      <div className="leave-title">
        <span className="leave-title-icon">■</span>
        <h2>Leave Management</h2>
      </div>

      {/* TOP BUTTONS */}
      <div className="leave-top-buttons">

        <button
          className={
            activeSection === "settings"
              ? "leave-top-button active"
              : "leave-top-button"
          }
          onClick={() => setActiveSection("settings")}
        >
          Leave Settings
        </button>

        <button
          className={
            activeSection === "recall"
              ? "leave-top-button active"
              : "leave-top-button"
          }
          onClick={() => setActiveSection("recall")}
        >
          Leave Recall
        </button>

        <button
          className={
            activeSection === "history"
              ? "leave-top-button active"
              : "leave-top-button"
          }
          onClick={() => setActiveSection("history")}
        >
          Leave History
        </button>

        <button className="leave-top-button">
          Relief Officers
        </button>

      </div>

      {/* CONTENT */}

      {activeSection === "management" && (
        <ManagementBanner />
      )}

      {activeSection === "settings" && (
        <LeaveSettings />
      )}

      {activeSection === "recall" && (
        <LeaveRecall />
      )}

      {activeSection === "history" && (
        <LeaveHistory />
      )}

    </div>
  );
}


/* ================================
   LANDING PAGE
================================ */

function ManagementBanner() {
  return (
    <div className="management-banner">

      <div className="management-text">

        <h1>
          Manage ALL{" "}
          <span>Leave Applications</span>
        </h1>

        <p>
          A relaxed employee is a performing employee.
        </p>

      </div>

      <div className="management-illustration">

        <div className="calendar-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="person">

          <div className="person-head"></div>

          <div className="person-body"></div>

          <div className="person-arm left"></div>

          <div className="person-arm right"></div>

        </div>

        <div className="plant">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="desk"></div>

      </div>

    </div>
  );
}

export default LeaveManagement;