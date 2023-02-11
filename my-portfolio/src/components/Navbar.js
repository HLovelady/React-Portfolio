import React from "react";


const styles = {
  green: {
    color: "#4dba87",
  },
  a: {
    color: "#4dba87",
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="flex light-bg justify-space">
      <h4>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Haylee Lovelady
        </a>
      </h4>

      <ul className="nav nav-tabs flex white">
        <li className="nav-item" style={styles.green}>
          <a
            href="#experience"
            onClick={() => handlePageChange("Experience")}
            className={
              currentPage === "Experience" ? "nav-link active" : "nav-link"
            }
          >
            {"< Experience />"}
          </a>
        </li>

        <li className="nav-item" style={styles.green}>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            {"< Contact.Me />"}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
