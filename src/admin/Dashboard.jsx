import { useState, useEffect } from "react";
import "./Dashboard.css";
import { imagefrombuffer } from "imagefrombuffer";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useUser } from "./userContext.jsx";
const Dash = () => {
  const [adminData, setAdminData] = useState([]);
  const { userData } = useUser();
  const [list, setList] = useState([]);
  const [studData, setStudData] = useState([]);

  useEffect(() => {
    fetchList();
    setAdminData(userData);
    fetchStudData();
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetch("https://backend-acasync.vercel.app/list");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  };

  const fetchStudData = async () => {
    try {
      const response = await fetch(
        "https://backend-acasync.vercel.app/student"
      );
      const data = await response.json();
      console.log(data);
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
  const StudentProgress = {
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
              <div className="AdminCard">
                <div className="adminpic">
                  <img
                    id="pic"
                    src={imagefrombuffer({
                      type: adminData.profilePicture?.contentType,
                      data: adminData.profilePicture?.data?.data,
                    })}
                    alt="Profile"
                  />
                </div>
                <div className="AdminInfo">
                  <span style={{ textAlign: "center" }}></span>
                  <h3>{`${adminData.firstName} ${adminData.lastName}`}</h3>
                  <p>{`${adminData.email}`}</p>
                  <p>{`+91${adminData.phone}`}</p>
                </div>
              </div>
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
            <LineChart chartData={StudentProgress} />
            <PieChart chartData={stud} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Dash;
