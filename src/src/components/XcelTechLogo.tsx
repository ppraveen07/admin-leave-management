const XcelTechLogo = () => {
  return (
    <div className="xceltech-logo">
      <svg
        className="circuit-logo"
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="XcelTech"
      >
        {/* Left top node */}
        <circle cx="10" cy="15" r="6" fill="#ffffff" />
        <path
          d="M16 15 H35 C43 15 43 25 50 25 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Right top node */}
        <circle cx="110" cy="15" r="6" fill="#ffffff" />
        <path
          d="M104 15 H85 C77 15 77 25 70 25 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Left middle node */}
        <circle cx="10" cy="35" r="6" fill="#ffffff" />
        <path
          d="M16 35 H42 C48 35 48 30 54 30 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Right middle node */}
        <circle cx="110" cy="35" r="6" fill="#ffffff" />
        <path
          d="M104 35 H78 C72 35 72 30 66 30 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Left lower node */}
        <circle cx="10" cy="55" r="6" fill="#ffffff" />
        <path
          d="M16 55 H35 C43 55 43 45 50 45 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Right lower node */}
        <circle cx="110" cy="55" r="6" fill="#ffffff" />
        <path
          d="M104 55 H85 C77 55 77 45 70 45 H60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center connection */}
        <path
          d="M42 35 H78"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <span className="xceltech-text">XCELTECH</span>
    </div>
  );
};

export default XcelTechLogo;