import React from "react";
import "./Navbar.css";
// import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li>
          <a href="/dashboard">Home</a>
        </li>
        <li>
          <a href="/list">Students</a>
        </li>
        <li>
          <a href="/attendance">Attendance</a>
        </li>
        <li>
          <a href="/announcements">Announcements</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
