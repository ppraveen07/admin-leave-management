import "./LeaveSettings.css";

interface LeavePlan {
  id: number;
  leavePlan: string;
  duration: number;
  recallAutoRenew: string;
}

const leavePlans: LeavePlan[] = [
  {
    id: 1,
    leavePlan: "Maternity",
    duration: 60,
    recallAutoRenew: "No / No",
  },
  {
    id: 2,
    leavePlan: "Sick",
    duration: 14,
    recallAutoRenew: "No / Yes",
  },
  {
    id: 3,
    leavePlan: "Compassionate",
    duration: 30,
    recallAutoRenew: "No / No",
  },
  {
    id: 4,
    leavePlan: "Exam",
    duration: 30,
    recallAutoRenew: "No / No",
  },
  {
    id: 5,
    leavePlan: "Paternity",
    duration: 60,
    recallAutoRenew: "No / No",
  },
  {
    id: 6,
    leavePlan: "Casual",
    duration: 10,
    recallAutoRenew: "Yes / No",
  },
  {
    id: 7,
    leavePlan: "Exam",
    duration: 30,
    recallAutoRenew: "No / No",
  },
];

function LeaveSettings() {
  return (
    <div className="leave-settings-page">


      {/* CONTENT */}

      <div className="settings-layout">

        {/* CREATE */}

        <div className="create-settings-card">

          <h3>
            Create Leave Settings
          </h3>

          <div className="form-container">

            {/* ROW 1 */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  Leave Plan Name
                </label>

                <div className="select-wrapper">

                  <select defaultValue="Maternity">

                    <option value="Maternity">
                      Maternity
                    </option>

                    <option value="Sick">
                      Sick
                    </option>

                    <option value="Casual">
                      Casual
                    </option>

                    <option value="Paternity">
                      Paternity
                    </option>

                    <option value="Exam">
                      Exam
                    </option>

                  </select>

                  <span className="select-arrow">
                    ⌄
                  </span>

                </div>

              </div>


              <div className="form-field">

                <label>
                  Duration (days)
                </label>

                <div className="input-with-icon">

                  <input
                    type="number"
                    defaultValue="60"
                  />

                  <span className="input-icon">
                    ⚙
                  </span>

                </div>

              </div>

            </div>


            {/* ROW 2 */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  Would you like to activate leave bonus?
                </label>

                <div className="select-wrapper">

                  <select defaultValue="">

                    <option value="" disabled>
                      Select option from dropdown
                    </option>

                    <option value="yes">
                      Yes
                    </option>

                    <option value="no">
                      No
                    </option>

                  </select>

                  <span className="select-arrow">
                    ⌄
                  </span>

                </div>

              </div>


              <div className="form-field">

                <label>
                  How much percentage of leave bonus?
                </label>

                <div className="input-with-icon">

                  <input
                    type="number"
                    placeholder="10"
                    min="0"
                    max="100"
                  />

                  <span className="percentage-icon">
                    %
                  </span>

                </div>

              </div>

            </div>


            {/* ROW 3 */}

            <div className="form-single">

              <label>
                Set Leave Allocation
              </label>

              <div className="select-wrapper">

                <select defaultValue="">

                  <option value="" disabled>
                    Select option from dropdown
                  </option>

                  <option value="annual">
                    Annual Allocation
                  </option>

                  <option value="monthly">
                    Monthly Allocation
                  </option>

                  <option value="custom">
                    Custom Allocation
                  </option>

                </select>

                <span className="select-arrow">
                  ⌄
                </span>

              </div>

            </div>


            {/* REASON */}

            <div className="form-single">

              <label>
                Reason for Recall
              </label>

              <textarea
                placeholder="Enter reason for recall"
              />

            </div>


            {/* CREATE */}

            <button className="create-button">
              Create
            </button>

          </div>

        </div>


        {/* MANAGE */}

        <div className="manage-settings-card">

          <div className="manage-header">

            <h3>
              Manage Leave Settings
            </h3>

            <button className="more-button">
              ⋮
            </button>

          </div>


          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>Leave Plan</th>
                  <th>Duration(s)</th>
                  <th>Recall / Autonrenew</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {leavePlans.map((plan) => (

                  <tr key={plan.id}>

                    <td>
                      {plan.leavePlan}
                    </td>

                    <td>
                      {plan.duration}
                    </td>

                    <td>
                      {plan.recallAutoRenew}
                    </td>

                    <td>

                      <button className="action-button">

                        Actions

                        <span>
                          ⌄
                        </span>

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LeaveSettings;