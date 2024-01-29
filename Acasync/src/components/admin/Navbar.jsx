import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/list">Students</Link>
        </li>
        <li>
          <Link to="/attendance">Attendance</Link>
        </li>
        <li>
          <Link to="/announcements">Announcements</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
