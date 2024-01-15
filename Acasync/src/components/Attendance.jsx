import React, { useState } from "react";
import "./StudentList.css";
const Attendance = () => {
  const [attendance, setAttendance] = useState(null);
  return (
    <div className="student-list-container">
      <h1 className="student-list-header">Student List</h1>
      <table id="student-table" className="student-list-table">
        <thead>
          <tr id="tb-top">
            <th>Info</th>
            <th>Subjects</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Maths</th>
            <th>Science</th>
            <th>English</th>
            <th>History</th>
            <th>Geography</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {attendance.map((student, index) => (
            <tr key={index}>
              <td>{student.enrollmentId}</td>
              <td>{student.name}</td>
              <td>{student.marks1}</td>
              <td>{student.marks2}</td>
              <td>
                {(
                  (parseInt(student.marks1) + parseInt(student.marks2)) /
                  2
                ).toFixed(2)}
                %
              </td>
              <td>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>{" "}
    </div>
  );
};

export default Attendance;
