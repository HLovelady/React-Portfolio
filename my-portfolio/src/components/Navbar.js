import React from "react";
import "../styles/App.css";

const styles = {
  green: {
    color: "#4dba87",
  },
};

function Navbar() {
  return (
    <nav className="flex light-bg justify-space">
      <h4>Haylee Lovelady</h4>

      <ul className="flex white">

        <li style={styles.green}>
          <div>{"< Experience />"}</div>
        </li>
        <li style={styles.green}>
          <div>{"< Contact.Me />"}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
