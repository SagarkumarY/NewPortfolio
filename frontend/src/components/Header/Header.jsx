import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo-no-background.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import closeIcon from "../../assets/img/close.svg";
import { HashLink } from "react-router-hash-link";

import { HashRouter as Router } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Router>
        <Navbar
          expand="md"
          className={`${scrolled ? "scrolled" : ""} ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          <Container className=" md:w-[1140px]">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <img src={closeIcon} alt="Close" />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav" className="shadow-md">
              <Nav className="ms-auto responsive-add">
                <HashLink
                  to="#home"
                  className={
                    activeLink === "home"
                      ? "active navbar-link  px-6 text-lg no-underline	text-black "
                      : "navbar-link  px-6 text-lg no-underline	text-black "
                  }
                  onClick={() => onUpdateActiveLink("#home")}
                >
                  Home
                </HashLink>

                <HashLink
                  to="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link px-6 text-lg no-underline	text-black "
                      : "navbar-link px-6 no-underline text-black	"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </HashLink>

                <HashLink
                  to="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link px-6 text-lg no-underline	text-black "
                      : "navbar-link px-6 no-underline text-black"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </HashLink>
              </Nav>
              <span className="navbar-text">
                <div className="social-icons">
                  <a to="">
                    <img src={navIcon1} alt="" />
                  </a>
                  <a to="">
                    <img src={navIcon2} alt="" />
                  </a>
                  <a to="">
                    <img src={navIcon3} alt="" />
                  </a>
                </div>
                <HashLink to="#contact">
                  <button className="vvd">
                    <span>Let’s Connect</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>
  );
}

export default Header;
