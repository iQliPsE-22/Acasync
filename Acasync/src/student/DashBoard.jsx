import React, { useState, useEffect } from "react";
import "../admin/Dashboard.css";
import { imagefrombuffer } from "imagefrombuffer";
import Navbar from "../admin/Navbar";

const Dashboard = () => {
  const [studData, setStudData] = useState([]);

  useEffect(() => {
    fetchStudData();
  }, []);

  const fetchStudData = async () => {
    try {
      const response = await fetch("http://localhost:8080/student");
      const data = await response.json();
      setStudData(data);
    } catch (error) {
      console.error("Error fetching Student data:", error);
    }
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
              {studData.map((item, index) => (
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
                      <span style={{ textAlign: "right" }}>
                        <h3>{`${item.firstName} ${item.lastName}`}</h3>
                        <h4>{`${item.roll}`}</h4>
                      </span>
                    </div>
                  )}
                  <div className="AdminInfo">
                    <table>
                      <tr>
                        <td>Semester</td>
                        <td>:</td>
                        <td>{item.semester}</td>
                      </tr>
                      <tr>
                        <td>Course</td>
                        <td>:</td>

                        <td>{item.course}</td>
                      </tr>
                      <tr>
                        <td>Stream</td>
                        <td>:</td>

                        <td>{item.stream}</td>
                      </tr>

                      <tr>
                        <td>College</td>
                        <td>:</td>

                        <td>{item.college}</td>
                      </tr>
                    </table>
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
            <div className="Schedule">
              Fee Status
              <table border="2">
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>Admission Fee</td>
                    <td>1000</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>Monthly Fee</td>
                    <td>1000</td>
                    <td>Paid</td>
                  </tr>
                </thead>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
