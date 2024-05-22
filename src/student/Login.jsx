import "../admin/Admin.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = document.getElementById("user").value;
      const pass = document.getElementById("pass").value;
      if (user === "" || pass === "") {
        alert("Please fill all the fields");
        return;
      }
      const res = await fetch(
        "https://backend-acasync.vercel.app/student-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roll: user, password: pass }),
        }
      );
      const data = await res.json();
      if (data.message === "Student not found") {
        alert("Student not found");
        return;
      }
      console.log("Student logged in successfully");
      navigate("/student/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-login">
      <div className="back">
        <h1 id="student-back">Acasync</h1>
      </div>
      <div>
        <form className="admin-form" id="stud-form" onSubmit={handleFormSubmit}>
          <h1 className="text-2xl text-center">Student Login</h1>
          <label htmlFor="user">User ID</label>
          <input type="number" id="user" />
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" />
          <input type="submit" />
          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Link to="/student/signup">
              <button className="student-switch">Not Registered?</button>
            </Link>
            <Link to="/admin/login">
              <button className="student-switch">Switch to Admin</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
