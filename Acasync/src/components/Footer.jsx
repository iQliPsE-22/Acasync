import React from "react";
import "../App.css";
import "./footer.css"; // Import your custom CSS file for the footer
import insta from "../Assests/insta.png";
import githubImage from "../Assests/github.png";
import linkedinImage from "../Assests/linkedin.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>Email: abc@gmail.com</div>
        <div>Phone: +917668519318</div>
        <div>
          <a href="https://www.instagram.com/iqlipse_22">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://github.com/iQLiPsE-22">
            <img src={githubImage} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/deepak2004">
            <img src={linkedinImage} alt="Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
