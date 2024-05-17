import React from "react";
import { Link } from "react-router-dom";
import INS from "../Assests/taxi-122.gif";
import STUD from "../Assests/3d-casual-life-student-girl-with-magnifying-glass.png";
import "./Landing.css";
import "../App.css";
import arrowDown from "../Assests/icons8-arrow-64.png";
const Landing = () => {
  function handleExploreClick() {
    const homeContainer = document.getElementById("bottom");
    homeContainer.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="land-container">
      <div className="banner">
        <div id="top" className="flex flex-col items-center">
          <h2 className="itim text-3xl p-4 mb-4">
            Let's Begin your Wizarding journey with Acasync
          </h2>
          <div
            className=" arrow h-24 w-24 bg-transparent rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer hover:bg-gray-400"
            onClick={handleExploreClick}
          >
            <img src={arrowDown} alt="scroll down" width="50" height="50" />
          </div>
        </div>
      </div>
      <div className="landing" id="bottom">
        <h1>Let's Ride in Acasync</h1>
      </div>
      <div className="portal ">
        <div className="itim text-center text-2xl p-4 bg-white/30 backdrop-blur-md text-white mt-2 rounded">
          <h3>Choose your role</h3>
        </div>
        <Link to="/admin/login">
          <button>
            <img src={INS} alt="icon" />
          </button>
        </Link>
        <Link to="/student/login">
          <button>
            <img src={STUD} alt="icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
