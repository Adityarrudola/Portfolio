import React from "react";

export default function Navbar({ activePage, setActivePage }) {
  const pages = ["about", "resume", "portfolio"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page}>
            <button
              className={`navbar-link ${
                activePage === page ? "active" : ""
              }`}
              onClick={() => {
                setActivePage(page);
                window.scrollTo(0, 0);
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
