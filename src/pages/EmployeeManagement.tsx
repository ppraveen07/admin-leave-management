import { useState } from "react";
import "./EmployeeManagement.css";

interface Employee {
  id: number;
  name: string;
  dept: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: string;
}

interface EmployeeManagementProps {
  onViewProfile: () => void;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "yeabsire abebe",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Female",
  },
  {
    id: 2,
    name: "feven tesfaye",
    dept: "IT",
    jobTitle: "Backend Engineer",
    startDate: "28/04/2022",
    category: "Remote",
    gender: "Female",
  },
  {
    id: 3,
    name: "AMANUEL BEYENE",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 4,
    name: "tedla atalay",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 5,
    name: "redwan husein",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 6,
    name: "abel beyne",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 7,
    name: "temesgen melak",
    dept: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
];

function EmployeeManagement({
  onViewProfile,
}: EmployeeManagementProps) {
  const [openAction, setOpenAction] =
    useState<number | null>(null);

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.dept
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.jobTitle
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="employee-page">

  

      {/* BREADCRUMB */}

      <div className="employee-breadcrumb">
        Dashboard / Employee Management
      </div>


      {/* MAIN CARD */}

      <div className="employee-container">

        {/* CARD HEADER */}

        <div className="employee-card-header">

          <h1>
            Employee Management
          </h1>

          <div className="employee-header-actions">

            <button className="filter-button">
              <span>⚑</span>
            </button>

            <button className="export-button">
              Export
              <span>⌄</span>
            </button>

          </div>

        </div>


        {/* TABLE */}

        <div className="employee-table-container">

          <table className="employee-table">

            <thead>
              <tr>

                <th>Name(s)</th>

                <th>Dept</th>

                <th>Job Title</th>

                <th>Start Date</th>

                <th>Category</th>

                <th>Gender</th>

                <th>Actions</th>

              </tr>
            </thead>

            <tbody>

              {filteredEmployees.map(
                (employee) => (

                  <tr key={employee.id}>

                    <td>
                      {employee.name}
                    </td>

                    <td>
                      {employee.dept}
                    </td>

                    <td>
                      {employee.jobTitle}
                    </td>

                    <td>
                      {employee.startDate}
                    </td>

                    <td>
                      {employee.category}
                    </td>

                    <td>
                      {employee.gender}
                    </td>

                    <td className="action-cell">

                      <button
                        className="actions-button"
                        onClick={() =>
                          setOpenAction(
                            openAction === employee.id
                              ? null
                              : employee.id
                          )
                        }
                      >

                        Actions

                        <span>
                          ⌄
                        </span>

                      </button>

                      {openAction === employee.id && (

                        <div className="actions-dropdown">

                          <button
                            onClick={() => {
                              setOpenAction(null);
                              onViewProfile();
                            }}
                          >
                            View Profile
                          </button>

                          <button
                            onClick={() =>
                              setOpenAction(null)
                            }
                          >
                            Edit Profile
                          </button>

                        </div>

                      )}

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default EmployeeManagement;
