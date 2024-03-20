import React from "react";
import "./footer.css";
// import { FaInstagram,FaRegCopyright , FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import {
  Facebook,
  Github,
  CCircleFill,
  Twitter,
  Instagram,
} from "react-bootstrap-icons";
import logo from "../../assets/img/logo-no-background.png";
import { HashRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <Router>
      <footer>
        <a href="/" className="footer_logo">
          <img src={logo} alt="logo" />
        </a>

     
        <ul className="parmalinks">
          <li>
            <HashLink to="#home">Home</HashLink>
          </li>
          <li>
            <HashLink to="#about">About</HashLink>
          </li>
          <li>
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li>
            <HashLink to="#projects">Projects</HashLink>
          </li>
          <li>
            <HashLink to="#contact">Contact</HashLink>
          </li>
        </ul>

        <div className="footer_socials social-icon">
          <a
            href="https://facebook.com/username"
            target="_blank"
            rel="noreferrer"
          >
           
            <Facebook />
          </a>
          <a
            href="https://instagram.com/usename"
            target="_blank"
            rel="noreferrer"
          >
            
            <Instagram />
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noreferrer"
          >
            
            <Twitter />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
          >
          
            <Github />
          </a>
        </div>

        <div className="copyright-section ">
          <p className="flex justify-center items-center">
            <CCircleFill /> {new Date().getFullYear()} Sagar . All rights
            reserved.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default Footer;
