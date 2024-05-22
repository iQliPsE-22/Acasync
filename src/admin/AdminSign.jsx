import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminSign = () => {
  const navigate = useNavigate();

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

      const response = await fetch("https://backend-acasync.vercel.app/admin", {
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
      navigate("/admin/login");
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
      <div>
        <form
          className="admin-form"
          id="admin-form"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-2xl text-center">Admin Signup</h1>
          <label htmlFor="dp">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="block text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-lg file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
            onChange={handleProfilePictureChange}
            required
          />

          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleInputChange}
            required
          />
          <input type="submit" value="Signup" />
          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Link to="/admin/login">
              <button className="student-switch">Login</button>
            </Link>
            <Link to="/student/signup">
              <button className="student-switch">Switch to Student</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSign;
