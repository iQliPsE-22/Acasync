import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
// import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li>
          <Link to="/student/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/student/list">Records</Link>
        </li>
        <li>
          <Link to="/student/attendance">Attendance</Link>
        </li>
        <li>
          <Link to="/student/announcements">Announcements</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
