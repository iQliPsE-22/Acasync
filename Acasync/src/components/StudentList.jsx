// src/StudentList.js
import React, { useState } from "react";
import "./StudentList.css";
import { useEffect } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    enrollmentId: "",
    name: "",
    marks1: "",
    marks2: "",
  });
  const [list, setList] = useState([]);
  const addStudent = () => {
    if (
      newStudent.enrollmentId &&
      newStudent.name &&
      newStudent.marks1 &&
      newStudent.marks2
    ) {
      setStudents([...students, newStudent]);
      setNewStudent({ enrollmentId: "", name: "", marks1: "", marks2: "" });
    }
  };

  const handleFormList = async (e) => {
    e.preventDefault();
    try {
      console.log(students);
      const response = await fetch("http://localhost:8080/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(students[students.length - 1]),
      });
      const data = await response.json();
      console.log(data);
      setNewStudent({
        enrollmentId: "",
        name: "",
        marks1: "",
        marks2: "",
      });
    } catch (error) {
      console.error("Error submitting student data:", error);
    }
  };
  useEffect(() => {
    fetchList();
  });

  const fetchList = async () => {
    try {
      const response = await fetch("http://localhost:8080/list");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  };

  const deleteStudent = async (enrollmentId) => {
    console.log(enrollmentId);
    try {
      const response = await fetch(
        `http://localhost:8080/list/${enrollmentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete student");
      }
      setList(list.filter((student) => student.enrollmentId !== enrollmentId));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
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
          {list.map((student, index) => (
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
                <button
                  className="delete-button"
                  onClick={() => deleteStudent(student.enrollmentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="student-form">
        <form onSubmit={handleFormList}>
          <input
            type="text"
            placeholder="ID"
            value={newStudent.enrollmentId}
            onChange={(e) =>
              setNewStudent({ ...newStudent, enrollmentId: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Marks 1"
            value={newStudent.marks1}
            onChange={(e) =>
              setNewStudent({ ...newStudent, marks1: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Marks 2"
            value={newStudent.marks2}
            onChange={(e) =>
              setNewStudent({ ...newStudent, marks2: e.target.value })
            }
          />
          <button type="submit" onClick={addStudent} className="add-button">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentList;
