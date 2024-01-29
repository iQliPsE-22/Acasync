import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/student/Login";
import Admin from "./components/admin/Admin";
import StudentSign from "./components/student/StudentSign.jsx";
import AdminSign from "./components/admin/AdminSign";
import Dashboard from "./components/admin/Dashboard";
import StudentList from "./components/admin/StudentList";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Attendance from "./components/admin/Attendance";
import Dash from "./components/student/DashBoard.jsx";
import Announcement from "./components/admin/Announcement";
import Marks from "./components/admin/Marks";
function App() {
  const [roll, setRoll] = useState("");

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/student-login" element={<Login />} />
          <Route path="/admin-login" element={<Admin />} />
          <Route path="/student-signup" element={<StudentSign />} />
          <Route path="/admin-signup" element={<AdminSign />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<StudentList setRoll={setRoll} />} />
          <Route path="/stud-dash" element={<Dash />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/announcements" element={<Announcement />} />
          <Route path="/marks" element={<Marks roll={roll} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
