import { useState } from "react";
import "./EmployeeProfile.css";

interface EmployeeProfileProps {
  onBack: () => void;
}

type ProfileSection =
  | "personal"
  | "contact"
  | "kin"
  | "education"
  | "guarantor"
  | "family"
  | "job"
  | "financial";

function EmployeeProfile({ 
}: EmployeeProfileProps) {
  const [activeSection, setActiveSection] =
    useState<ProfileSection>("personal");

  const sections: {
    id: ProfileSection;
    label: string;
  }[] = [
    {
      id: "personal",
      label: "Personal Details",
    },
    {
      id: "contact",
      label: "Contact Details",
    },
    {
      id: "kin",
      label: "Next of kin Details",
    },
    {
      id: "education",
      label: "Education Qualifications",
    },
    {
      id: "guarantor",
      label: "Guarantor Details",
    },
    {
      id: "family",
      label: "Family Details",
    },
    {
      id: "job",
      label: "Job Details",
    },
    {
      id: "financial",
      label: "Financial Details",
    },
  ];

  return (
    <div className="employee-profile-page">

      

      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="profile-breadcrumb">
        Employee Mgmt&nbsp; / &nbsp;Employee Profile&nbsp; / &nbsp;
        <strong>JohnDoe</strong>
      </div>


      {/* =================================
          PROFILE BODY
      ================================= */}

      <div className="profile-layout">

        {/* LEFT SECTION MENU */}

        <div className="profile-section-menu">

          {sections.map((section) => (

            <button
              key={section.id}
              className={
                activeSection === section.id
                  ? "profile-section-button selected"
                  : "profile-section-button"
              }
              onClick={() =>
                setActiveSection(section.id)
              }
            >
              {section.label}
            </button>

          ))}

        </div>


        {/* RIGHT CONTENT */}

        <div className="profile-content">

          {activeSection === "personal" && (
            <PersonalDetails />
          )}

          {activeSection === "contact" && (
            <ContactDetails />
          )}

          {activeSection === "kin" && (
            <NextOfKinDetails />
          )}

          {activeSection === "education" && (
            <EducationDetails />
          )}

          {activeSection === "guarantor" && (
            <GuarantorDetails />
          )}

          {activeSection === "family" && (
            <FamilyDetails />
          )}

          {activeSection === "job" && (
            <JobDetails />
          )}

          {activeSection === "financial" && (
            <FinancialDetails />
          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================
   PERSONAL DETAILS
========================================= */

function PersonalDetails() {
  return (
    <div className="personal-card">

      <div className="personal-profile">

        <div className="profile-avatar">
          <div className="profile-avatar-face">
            <div className="profile-avatar-hair"></div>

            <div className="profile-avatar-eyes">
              <i></i>
              <i></i>
            </div>

            <div className="profile-avatar-mouth"></div>
          </div>
        </div>

        <div className="personal-name">
          Employee Name
        </div>

        <h2>
          selemon alemayehu
        </h2>

        <div className="personal-label">
          Department
        </div>

        <h3>
          Design &amp; Marketing
        </h3>

      </div>


      <div className="personal-job-info">

        <div className="edit-profile">

          <span className="edit-icon">
            ✎
          </span>

          <span>
            Edit
          </span>

        </div>

        <div className="personal-info-row">

          <div>
            <span>
              Job Title
            </span>

            <strong>
              UI / UX Designer
            </strong>
          </div>

          <div>
            <span>
              Job Category
            </span>

            <strong>
              Full time
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================
   CONTACT DETAILS
========================================= */

function ContactDetails() {
  return (
    <div className="details-card contact-card">

      <div className="two-column">

        <InfoField
          label="Phone Number 1"
          value="093344434"
        />

        <InfoField
          label="Phone Number 2"
          value="Phone Number 2"
        />

      </div>

      <InfoField
        label="E-mail Address"
        value="abebekebede@gmail.com"
        wide
      />

      <InfoField
        label="City of residence"
        value="hawasa"
        medium
      />

      <InfoField
        label="Residential Address"
        value="bethel, alem bank"
        wide
      />

    </div>
  );
}


/* =========================================
   NEXT OF KIN
========================================= */

function NextOfKinDetails() {
  return (
    <div className="details-card">

      <div className="two-column">

        <InfoField
          label="Next of kin name"
          value="birhanu mehin"
        />

        <InfoField
          label="Job / Occupation"
          value="Accountant"
        />

      </div>

      <div className="two-column">

        <InfoField
          label="Phone Number"
          value="093333222"
        />

        <InfoField
          label="Relationship"
          value="Relative"
          select
        />

      </div>

      <InfoField
        label="Residential Address"
        value="Debrezeit"
        wide
      />

    </div>
  );
}


/* =========================================
   EDUCATION
========================================= */

function EducationDetails() {
  return (
    <div className="details-card education-card">

      <h3 className="details-title">
        Academic Records
      </h3>

      <div className="education-item">

        <strong>
          Jimma university
        </strong>

        <span>
          B.Sc in Computer Science, May 2014 - May 2019
        </span>

      </div>

      <div className="education-item">

        <strong>
          Cathedral school
        </strong>

        <span>
          sep 2008 - June 2012
        </span>

      </div>


      <h3 className="details-title professional-title">
        Professional Qualifications
      </h3>

      <div className="education-item">
        <strong>
          CCNA Certification
        </strong>
      </div>

      <div className="education-item">

        <strong>
          Google UI / UX Certification
        </strong>

        <span>
          at Google UI, September 2021 - September 2022
        </span>

      </div>

      <div className="education-item web-developer">

        <strong>
          Web Developer
        </strong>

        <span>
          at EAI, May 2019 - September 2021
        </span>

        <p>
          • Collaborated with teammates to deliver
          valuable features meeting business and
          customer needs.
        </p>

      </div>

    </div>
  );
}


/* =========================================
   GUARANTOR
========================================= */

function GuarantorDetails() {
  return (
    <div className="details-card">

      <h3 className="details-title">
        Guarantor Details
      </h3>

      <div className="guarantor-item">

        <strong>
          MR Natnael melaku
        </strong>

        <span>
          Head of Design Team, Hawassa - 090 500 6000
        </span>

      </div>

      <div className="guarantor-item">

        <strong>
          Mrs. Gella mgoes
        </strong>

      </div>

    </div>
  );
}


/* =========================================
   FAMILY
========================================= */

function FamilyDetails() {
  return (
    <div className="details-card">

      <h3 className="details-title">
        Family Details
      </h3>

      <div className="family-item">

        <strong>
          Mr Abel DOI
        </strong>

        <p>
          Relationship: Brother&nbsp;&nbsp; | &nbsp;&nbsp;
          Phone No: 090 300 540 *
        </p>

        <p>
          Address: djibouti Street Adhi ale
        </p>

      </div>

      <div className="family-item">

        <strong>
          Mrs. Family Member
        </strong>

        <p>
          Relationship: Sister&nbsp;&nbsp; | &nbsp;&nbsp;
          Phone No: 090 300 541
        </p>

        <p>
          Address: Hawassa
        </p>

      </div>

      <div className="family-item">

        <strong>
          Family Member
        </strong>

        <p>
          Relationship: Parent&nbsp;&nbsp; | &nbsp;&nbsp;
          Phone No: 090 300 542
        </p>

      </div>

    </div>
  );
}


/* =========================================
   JOB DETAILS
========================================= */

function JobDetails() {
  return (
    <div className="details-card job-details-card">

      <h3 className="details-title">
        View Job Details
      </h3>

      <div className="job-main">

        <div className="job-role">

          <span>
            Job Role
          </span>

          <strong>
            UI UX Designer
          </strong>

        </div>

        <div className="job-department">

          <span>
            Department
          </span>

          <strong>
            Design &amp; Marketing
          </strong>

        </div>

      </div>


      <h3 className="job-description-title">
        Job Description
      </h3>

      <p className="responsibility-title">
        Your responsibilities will include:
      </p>

      <ul className="job-list">

        <li>
          Creating user-centered designs by understanding
          business requirements, and user feedback.
        </li>

        <li>
          Creating user flows, wireframes, prototypes and
          mockups.
        </li>

        <li>
          Translating requirements into style guides,
          design system patterns and attractive user
          interfaces.
        </li>

        <li>
          Designing UI elements such as input controls,
          navigational components and informational
          components.
        </li>

        <li>
          Creating original graphic designs.
        </li>

        <li>
          Identifying and troubleshooting UX problems.
        </li>

        <li>
          Collaborating effectively with product,
          engineering and management teams.
        </li>

        <li>
          Incorporating user feedback, usage metrics,
          and usability findings into design.
        </li>

      </ul>

      <button className="view-documents">
        View Documents
      </button>

    </div>
  );
}


/* =========================================
   FINANCIAL DETAILS
========================================= */

function FinancialDetails() {
  return (
    <div className="details-card financial-card">

      <h3 className="details-title">
        Financial Details
      </h3>

      <InfoField
        label="Bank Name"
        value="CBE"
        wide
      />

      <div className="two-column">

        <InfoField
          label="Account No"
          value="100022342434423"
        />

        <InfoField
          label="Account Name"
          value="ABEBE KEBEDE"
        />

      </div>

      <button className="update-account">
        Update Account Details
      </button>

    </div>
  );
}


/* =========================================
   REUSABLE FIELD
========================================= */

interface InfoFieldProps {
  label: string;
  value: string;
  wide?: boolean;
  medium?: boolean;
  select?: boolean;
}

function InfoField({
  label,
  value,
  wide = false,
  medium = false,
  select = false,
}: InfoFieldProps) {
  return (
    <div
      className={`info-field ${
        wide ? "field-wide" : ""
      } ${
        medium ? "field-medium" : ""
      }`}
    >

      <label>
        {label}
      </label>

      <div className="info-value">

        {value}

        {select && (
          <span className="field-arrow">
            ●
          </span>
        )}

      </div>

    </div>
  );
}

export default EmployeeProfile;