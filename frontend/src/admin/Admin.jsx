import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../student/Login.css";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="admin-login">
        <div className="back w-screen">
          <h1>Acasync</h1>
        </div>
        <form className="admin-form" onSubmit={handleFormSubmit}>
          <label htmlFor="login">
            <h1 className="text-2xl">Admin Login</h1>
          </label>
          <label htmlFor="admin-user">User ID</label>
          <input
            type="text"
            id="admin-user"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input type="submit" value="Login" />
          <Link to="/admin/signup">
            <h3>Not Registered ?</h3>
          </Link>
        </form>
        {/* Switch to the Student Portal */}
        <Link to="/student/login">
          <button className="student-switch">Switch to Student</button>
        </Link>
      </div>
    </div>
  );
};
export default Admin;
