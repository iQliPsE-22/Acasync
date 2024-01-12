import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { imagefrombuffer } from "imagefrombuffer";
import Navbar from "./Navbar";
import LineChart from "./LineChart";

const Dashboard = () => {
  const [adminData, setAdminData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
    fetchAdminData();
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

  const userData = {
    labels: list.map((data) => data.name),
    datasets: [
      {
        label: "Marks",
        data: list.map(
          (data) => (parseInt(data.marks1) + parseInt(data.marks2)) / 2
        ),
        backgroundColor: "white",
        borderColor: "#977af6",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Navbar />
    <div className="dashboard">
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
      <LineChart chartData={userData} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
