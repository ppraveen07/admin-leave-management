import {
  leaveHistory,
} from "../data/leaveData";

import "./LeavePages.css";

function LeaveHistory() {
  return (
    <div className="inside-page">

      <div className="white-table-panel history-panel">

        <div className="history-heading">

          <h2>Leave History</h2>

          <div className="history-actions">

            <button className="filter-button">
              ⚑
            </button>

            <button className="export-button">
              Export
              <span>●</span>
            </button>

          </div>

        </div>

        <table>

          <thead>
            <tr>
              <th>Name(s)</th>
              <th>Duration(s)</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Reason(s)</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {leaveHistory.map((leave, index) => (
              <tr key={index}>

                <td>{leave.name}</td>
                <td>{leave.duration}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.type}</td>
                <td>{leave.reason}</td>

                <td>
                  <button className="action-blue">
                    Actions ●
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaveHistory;