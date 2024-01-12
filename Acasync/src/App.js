import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import StudentSign from "./components/StudentSign";
import AdminSign from "./components/AdminSign";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
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
          <Route path="/list" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
