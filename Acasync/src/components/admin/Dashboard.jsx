import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { imagefrombuffer } from "imagefrombuffer";
import Navbar from "../Navbar";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Dash = () => {
  const [adminData, setAdminData] = useState([]);
  const [list, setList] = useState([]);
  const [studData, setStudData] = useState([]);

  useEffect(() => {
    fetchList();
    fetchAdminData();
    fetchStudData();
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetch("http://localhost:8080/list");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  };

  const fetchAdminData = async () => {
    try {
      const response = await fetch("http://localhost:8080/admin");
      const data = await response.json();
      setAdminData(data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };
  const fetchStudData = async () => {
    try {
      const response = await fetch("http://localhost:8080/student");
      const data = await response.json();
      setStudData(data);
    } catch (error) {
      console.error("Error fetching Student data:", error);
    }
  };
  var male = 0;
  var female = 0;
  studData.forEach((student) => {
    if (student.gender === "male") male++;
    else female++;
  });
  const userData = {
    labels: list.map((data) => data.name),
    datasets: [
      {
        label: "Marks",
        data: list.map(
          (data) => (parseInt(data.marks1) + parseInt(data.marks2)) / 2
        ),
        backgroundColor: list.map((data) => {
          const averageMarks =
            (parseInt(data.marks1) + parseInt(data.marks2)) / 2;
          return averageMarks < 33 ? "red" : "green";
        }),
        borderWidth: 5,
      },
    ],
  };
  const stud = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "Students",
        data: [female, male],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  if (month <= 9) month = "0" + month;
  if (day <= 9) day = "0" + day;
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="hero-class">
          <section className="hero">
            <div className="AdminContainer">
              {adminData.map((item, index) => (
                <div className="AdminCard" key={index}>
                  {item.profilePicture && item.profilePicture.contentType && (
                    <div className="adminpic">
                      <img
                        id="pic"
                        src={imagefrombuffer({
                          type: item.profilePicture?.contentType,
                          data: item.profilePicture?.data?.data,
                        })}
                        alt="Profile"
                      />
                    </div>
                  )}
                  <div className="AdminInfo">
                    <span style={{ textAlign: "center" }}></span>
                    <h3>{`${item.firstName} ${item.lastName}`}</h3>
                    <p>{`${item.email}`}</p>
                    <p>{`+91${item.phone}`}</p>
                  </div>
                </div>
              ))}
              <div className="Schedule">
                <h2>
                  {day}/{month}/{year}
                </h2>
                <h3>Schedule</h3>
                <table border="2">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Maths</td>
                      <td>10:00 AM</td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>11:00 AM</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>01:00 PM</td>
                    </tr>
                    <tr>
                      <td>History</td>
                      <td>02:00 PM</td>
                    </tr>
                    <tr>
                      <td>Geography</td>
                      <td>04:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="hero">
            <LineChart chartData={userData} />
            <PieChart chartData={stud} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Dash;
