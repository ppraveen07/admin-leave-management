import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="header">

      {/* LEFT */}
      <div className="header-left">

        <button
          className="menu-button"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="candidate-search">

          <button className="candidate-button">
            All Candidates
            <span className="candidate-arrow">⌄</span>
          </button>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
            />

            <span className="search-icon">⌕</span>
          </div>

        </div>

      </div>

      {/* RIGHT ICONS */}
      <div className="header-icons">

        <div className="header-icon notification-icon">
          <span>🔔</span>
          <b>13</b>
        </div>

        <div className="header-icon settings-icon">
          <span>🔧</span>
        </div>

        <div className="header-icon message-icon">
          <span>✉</span>
          <b>13</b>
        </div>

      </div>

    </header>
  );
}

export default Header;