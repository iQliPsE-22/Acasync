import React from "react";
import "../admin/Admin.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    navigate("/student/dashboard");
  };

  return (
    <div className="admin-login">
      <div className="back">
        <h1 id="student-back">Acasync</h1>
      </div>
      <form className="admin-form" id="stud-form" onSubmit={handleFormSubmit}>
        <h1 className="text-2xl">Student Login</h1>
        <label htmlFor="user">User ID</label>
        <input type="number" id="user" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        <input type="submit" />
        <div className="flex flex-row justify-around">
          <Link to="/student/signup">
            <h3>Not Registered?</h3>
          </Link>
          <Link to="/admin/login">
            <button className="student-switch">Switch to Admin</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
