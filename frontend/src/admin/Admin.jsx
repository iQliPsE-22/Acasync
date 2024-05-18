import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="admin-login">
      <div className="back">
        <h1 id="admin-back">Acasync</h1>
      </div>
      <form className="admin-form" id="admin-form" onSubmit={handleFormSubmit}>
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
        <div className="flex flex-row justify-around">
          <Link to="/admin/signup">
            <h3>Not Registered?</h3>
          </Link>
          <Link to="/student/login">
            <button className="student-switch">Switch to Student</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admin;
