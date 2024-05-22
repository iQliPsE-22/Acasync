import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../admin/Admin.css";

const StudentSign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    roll: "",
    password: "",
  });
  const [next, setNext] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("profilePicture", formData.profilePicture);
      formDataToSubmit.append("firstName", formData.firstName);
      formDataToSubmit.append("lastName", formData.lastName);
      formDataToSubmit.append("roll", formData.roll);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("dob", formData.dob);
      formDataToSubmit.append("gender", formData.gender);
      formDataToSubmit.append("college", formData.college);
      formDataToSubmit.append("course", formData.course);
      formDataToSubmit.append("stream", formData.stream);
      formDataToSubmit.append("semester", formData.semester);
      formDataToSubmit.append("password", formData.password);

      const response = await fetch(
        "https://backend-acasync.vercel.app/student",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );
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
        roll: "",
        password: "",
      });
      navigate("/student/login");
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
    <div className="admin-login">
      <div className="back">
        <h1 id="student-back">Acasync</h1>
      </div>
      <div>
        <form className="admin-form" id="stud-form" onSubmit={handleFormSubmit}>
          <h1 className="text-2xl text-center">Student Signup</h1>
          {!next && (
            <div className="flex flex-col gap-2">
              <label htmlFor="dp">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                alt="dp"
                onChange={handleProfilePictureChange}
                className="block text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-lg file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
                required
              />
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
              <label htmlFor="pass">ID</label>
              <input
                type="text"
                value={formData.roll}
                onChange={(e) =>
                  setFormData({ ...formData, roll: e.target.value })
                }
                required
              />
              <label htmlFor="pass">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                required
              />
              <label htmlFor="gender">Gender</label>
              <div id="radio">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
              </div>
              <button
                onClick={() => setNext(true)}
                className="bg-[#03242b] p-3 rounded"
              >
                Next
              </button>
            </div>
          )}
          {next && (
            <div className="flex flex-col gap-2">
              <label htmlFor="college">College</label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
                required
              />
              <label htmlFor="course">Course</label>
              <input
                type="text"
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                required
              />
              <label htmlFor="stream">Stream/Specialization</label>
              <input
                type="text"
                value={formData.stream}
                onChange={(e) =>
                  setFormData({ ...formData, stream: e.target.value })
                }
                required
              />
              <label htmlFor="semester">Semester</label>
              <input
                type="text"
                value={formData.semester}
                onChange={(e) =>
                  setFormData({ ...formData, semester: e.target.value })
                }
                required
              />

              <label htmlFor="pass">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <label htmlFor="pass">Confirm Password</label>
              <input type="password" required />
              <br />
              <button
                onClick={() => setNext(false)}
                className="bg-[#03242b] p-3 rounded hover:bg-[#010E12]"
              >
                Back
              </button>
              <input type="submit" value="Submit" />
            </div>
          )}
          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Link to="/student/login">
              <button className="student-switch">Login</button>
            </Link>
            <Link to="/admin/signup">
              <button className="student-switch">Switch to Admin</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSign;
