import { useState, useEffect } from "react";
import "./StudentList.css";
import DailyAttendance from "./DailyAttendance";
const Attendance = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchList();
  });
  const fetchList = async () => {
    try {
      const response = await fetch("https://backend-acasync.vercel.app/list");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  };
  return (
    <div className="student-list-container">
      <div>
        <DailyAttendance />
      </div>
      <h1 className="student-list-header">Student List</h1>
      <table id="student-table" className="student-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Maths</th>
            <th>Science</th>
            <th>English</th>
            <th>Total</th>
            <th>Attended</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student, index) => (
            <tr key={index}>
              <td>{student.enrollmentId}</td>
              <td>{student.name}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>10</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
