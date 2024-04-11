import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/rain-choi" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href="chchoi@uwaterloo.ca">
        <EmailIcon />
      </a>
      <a href="https://github.com/RainCCH" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
      <a href="https://www.instagram.com/rainchoi.c.h/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      </div>
      <p> &copy; 2024 rainchoi.com</p>
    </div>
  );
}

export default Footer;
