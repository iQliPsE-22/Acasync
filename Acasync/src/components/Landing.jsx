import React from "react";
import { Link } from "react-router-dom";
import INS from "./Assests/taxi-122.gif";
import STUD from "./Assests/3d-casual-life-student-girl-with-magnifying-glass.png";
import "./Landing.css";
const Landing = () => {
  function handleExploreClick() {
    const homeContainer = document.getElementById("bottom");
    homeContainer.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="land-container">
      <div className="banner">
        <div id="top">
          <h2>Let's Begin your Wizarding journey with Acasync</h2>
          <button onClick={handleExploreClick}>Explore</button>
        </div>
      </div>
      <div className="landing" id="bottom">
        <h1>Let's Ride in Acasync</h1>
      </div>
      <div className="portal">
        <Link to="/admin-login">
          <button>
            <img src={INS} alt="icon" />
          </button>
        </Link>
        <Link to="/student-login">
          <button>
            <img src={STUD} alt="icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
