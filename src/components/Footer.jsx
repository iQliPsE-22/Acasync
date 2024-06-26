import "../App.css";
import "./footer.css"; // Import your custom CSS file for the footer
import insta from "../assets/insta.png";
import githubImage from "../assets/github.png";
import linkedinImage from "../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="footer w-screen bg-white ">
      <div className="footer-content flex justify-between items-center min-h-fit p-8">
        <div>Email: iqlipse22@gmail.com</div>
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
