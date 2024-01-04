import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const StudentSign = () => {
  const [formData, setFormData] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    college: "",
    course: "",
    stream: "",
    semester: "",
  });

  const [previewImage, setPreviewImage] = useState(null); // State for image preview

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission logic, e.g., sending data to a server.
    const response = await fetch("http://localhost:8080/student", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePicture: file,
    }));

    // Create a temporary URL for image preview
    setPreviewImage(URL.createObjectURL(file));
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
              required
            />
            {previewImage && ( // Render the image preview if available
              <div className="image-preview">
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  style={{ maxWidth: "200px", marginBottom: "10px" }}
                />
              </div>
            )}
            <label htmlFor="user">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
            <label htmlFor="dob">Date of birth</label>
            <input
              type="Date"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Father's Name</label>
            <input
              type="text"
              value={formData.fatherName}
              onChange={(e) =>
                setFormData({ ...formData, fatherName: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Mother's Name</label>
            <input
              type="text"
              value={formData.motherName}
              onChange={(e) =>
                setFormData({ ...formData, motherName: e.target.value })
              }
            />
            <label htmlFor="info">Course Information</label>
            <label htmlFor="pass">College</label>
            <input
              type="text"
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Course</label>
            <input
              type="text"
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Stream/Specialization</label>
            <input
              type="text"
              value={formData.stream}
              onChange={(e) =>
                setFormData({ ...formData, stream: e.target.value })
              }
              required
            />
            <label htmlFor="pass">Semester</label>
            <input
              type="text"
              value={formData.semester}
              onChange={(e) =>
                setFormData({ ...formData, semester: e.target.value })
              }
              required
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
