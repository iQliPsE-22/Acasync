import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { imagefrombuffer } from "imagefrombuffer";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    fetchAdminData();
    console.log(adminData);
  }, [adminData]);

  const fetchAdminData = async () => {
    try {
      const response = await fetch("http://localhost:8080/admin");
      const data = await response.json();
      setAdminData(data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
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
              <span style={{ textAlign: "center" }}>
                <h3>Admin</h3>
              </span>
              <p>{`${item.firstName} ${item.lastName}`}</p>
              <p>{`${item.email}`}</p>
              <p>{`+91${item.phone}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
