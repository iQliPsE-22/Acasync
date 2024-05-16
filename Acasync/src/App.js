import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./student/Login";
import Admin from "./admin/Admin";
import StudentSign from "./student/StudentSign.jsx";
import AdminSign from "./admin/AdminSign";
import Dashboard from "./admin/Dashboard";
import StudentList from "./admin/StudentList";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Attendance from "./admin/Attendance";
import Dash from "./student/DashBoard.jsx";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/login" element={<Admin />} />
          <Route path="/admin/signup" element={<AdminSign />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/list" element={<StudentList />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="admin/announcements" element={<Announcement />} />

          <Route path="/student/login" element={<Login />} />
          <Route path="/student/signup" element={<StudentSign />} />
          <Route path="/student/dashboard" element={<Dash />} />
          {/* <Route path="/student/attendance" element={<StudentAttendance />} /> */}
          <Route path="/student/announcements" element={<Announcement />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
