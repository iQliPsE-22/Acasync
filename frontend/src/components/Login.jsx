import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="stud-login">
        <div className="back-stud">
          <h1>Acasync</h1>
        </div>
        <form className="stud-form">
          <h1>Student Login</h1>
          <label htmlFor="user">User ID</label>
          <input type="number" />
          <label htmlFor="pass">Password</label>
          <input type="text" />
          <input type="submit" />
          <Link to="/student-signup">
            <h3>Not Registered ?</h3>
          </Link>
        </form>
        <Link to="/admin-login">
          <button className="admin-switch">Switch to Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
