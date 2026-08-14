import {
  ongoingLeaves,
} from "../data/leaveData";

import "./LeavePages.css";

function LeaveRecall() {
  return (
    <div className="inside-page">

      <div className="white-table-panel">

        <h2>Ongoing Leave Applications</h2>

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

            {ongoingLeaves.map((leave, index) => (
              <tr key={index}>

                <td>{leave.name}</td>
                <td>{leave.duration}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.type}</td>
                <td>{leave.reason}</td>

                <td>
                  <button className="recall-button">
                    Recall
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

export default LeaveRecall;