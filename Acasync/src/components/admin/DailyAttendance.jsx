import React from "react";
import "./StudentList.css";
import QRCodeGenerator from "./../QRGenerator";
import "../student/StudentSign";
const DailyAttendance = () => {
  return (
    <div>
      <h1 className="student-list-header">Today's Attendance</h1>
      <div className = "admin-form">
        <h3>SCAN HERE</h3>
        <QRCodeGenerator />
      </div>
    </div>
  );
};

export default DailyAttendance;
