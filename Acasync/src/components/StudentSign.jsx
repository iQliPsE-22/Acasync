import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const StudentSign = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: " ",
    college: "",
    course: "",
    stream: "",
    semester: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("profilePicture", formData.profilePicture);
      formDataToSubmit.append("firstName", formData.firstName);
      formDataToSubmit.append("lastName", formData.lastName);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("dob", formData.dob);
      formDataToSubmit.append("gender", formData.gender);
      formDataToSubmit.append("college", formData.college);
      formDataToSubmit.append("course", formData.course);
      formDataToSubmit.append("stream", formData.stream);
      formDataToSubmit.append("semester", formData.semester);

      const response = await fetch("http://localhost:8080/student", {
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
        dob: "",
        gender: "",
        college: "",
        course: "",
        stream: "",
        semester: "",
      });
    } catch (error) {
      console.error("Error submitting Student data:", error);
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
      <div className="stud-sign">
        <div className="back-stud">
          <h1>Acasync</h1>
        </div>
        <form className="stud-form" onSubmit={handleFormSubmit}>
          <label htmlFor="login">
            <h2>Student Signup</h2>
          </label>
          <div className="personal">
            <label htmlFor="personal">Personal Information</label>
            <label htmlFor="dp">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              alt="dp"
              onChange={handleProfilePictureChange}
              // required
            />
            <label htmlFor="user">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              // required
            />
            <label htmlFor="pass">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              // required
            />
            <label htmlFor="pass">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="dob">Date of birth</label>
            <input
              type="Date"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
              // required
            />
            <label htmlFor="gender">Gender</label>
            <div id="radio">
              <label htmlFor="gender">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
              />
              <label htmlFor="gender">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
              />
            </div>
            <label htmlFor="info">Course Information</label>
            <label htmlFor="pass">College</label>
            <input
              type="text"
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              // required
            />
            <label htmlFor="pass">Course</label>
            <input
              type="text"
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
              // required
            />
            <label htmlFor="pass">Stream/Specialization</label>
            <input
              type="text"
              value={formData.stream}
              onChange={(e) =>
                setFormData({ ...formData, stream: e.target.value })
              }
              // required
            />
            <label htmlFor="pass">Semester</label>
            <input
              type="text"
              value={formData.semester}
              onChange={(e) =>
                setFormData({ ...formData, semester: e.target.value })
              }
              // required
            />
          </div>
          <input type="submit" value="Submit" />
          <Link to="/student-login">
            <h3>Login here...</h3>
          </Link>
        </form>
        <Link to="/admin-signup">
          <button className="admin-switch">Switch to Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default StudentSign;
