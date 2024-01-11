// src/StudentList.js
import React, { useState } from "react";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    marks1: "",
    marks2: "",
  });

  const addStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.marks1 && newStudent.marks2) {
      setStudents([...students, newStudent]);
      setNewStudent({ id: "", name: "", marks1: "", marks2: "" });
    }
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div className="student-list-container">
      <h1 className="student-list-header">Student List</h1>
      <table id="student-table" className="student-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks 1</th>
            <th>Marks 2</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks1}</td>
              <td>{student.marks2}</td>
              <td>{((parseInt(student.marks1 )+ parseInt(student.marks2)) / 2).toFixed(2)}%</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="student-form">
        <input
          type="text"
          placeholder="ID"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Marks 1"
          value={newStudent.marks1}
          onChange={(e) => setNewStudent({ ...newStudent, marks1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Marks 2"
          value={newStudent.marks2}
          onChange={(e) => setNewStudent({ ...newStudent, marks2: e.target.value })}
        />
        <button onClick={addStudent} className="add-button">
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentList;
