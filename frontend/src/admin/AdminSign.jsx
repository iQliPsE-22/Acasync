import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSign = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    profilePicture: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleFormSubmit = async (e) => {
    navigate("/admin-login");
    e.preventDefault();

    try {
      console.log("SuccessFull");
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("profilePicture", formData.profilePicture);
      formDataToSubmit.append("firstName", formData.firstName);
      formDataToSubmit.append("lastName", formData.lastName);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("password", formData.password);
      formDataToSubmit.append("confirm", formData.confirm);

      const response = await fetch("http://localhost:8080/admin", {
        method: "POST",
        body: formDataToSubmit,
      });
      const data = await response.json();
      console.log(data);

      setFormData({
        profilePicture: null,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      });
    } catch (error) {
      console.error("Error submitting admin data:", error);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePicture: file,
    }));
  };

  return (
    <div>
      <div className="admin-login">
        <div className="back">
          <h1>Acasync</h1>
        </div>
        <form className="admin-form" onSubmit={handleFormSubmit}>
          <h1>Admin Signup</h1>

          <label htmlFor="dp">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            required
          />

          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            value={formData.confirm}
            onChange={(e) =>
              setFormData({ ...formData, confirm: e.target.value })
            }
            required
          />
          <input type="submit" value="Signup" />
          <Link to="/admin/login">
            <h3>Login here...</h3>
          </Link>
        </form>

        <Link to="/student/signup">
          <button className="student-switch">Switch to Student</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminSign;
