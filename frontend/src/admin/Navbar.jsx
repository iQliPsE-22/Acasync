import React from "react";
import { Link } from "react-router-dom";
import "../components//Navbar.css";
// import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li>
          <Link to="/admin/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/admin/list">Students</Link>
        </li>
        <li>
          <Link to="/admin/attendance">Attendance</Link>
        </li>
        <li>
          <Link to="/admin/announcements">Announcements</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
