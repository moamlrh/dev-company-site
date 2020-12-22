import { Container } from "@material-ui/core";
import { ExpandMore, Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleDrowpdown = (e) => {
    const container = document.querySelector(".container-menu");
    setShowDropdown(!showDropdown);
    container.style.transition = "all .3s";
    if (showDropdown) {
      container.style.height = "0";
    } else {
      container.style.height = "170px";
    }
  };
  const handleShowNavbar = (e) => {
    const nvMenu = document.querySelector(".nv-menu");
    setShowNavbar(!showNavbar);
    setTimeout(() => {
      if (showNavbar) {
        nvMenu.style.transition = "all .3s";
        nvMenu.style.overflow = "hidden";
        nvMenu.style.height = "0px";
      } else {
        nvMenu.style.transition = "all .3s";
        nvMenu.style.overflow = "visible";
        nvMenu.style.height = "349px";
      }
    }, 10);
  };
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const icon = document.querySelector(".icon");
    if (navbar) {
      if (document.documentElement.scrollTop > 270) {
        navbar.style.transition = "all .7s";
        navbar.style.position = "sticky";
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0px 0px 5px #000000";
        navbar.style.top = "0";
        navbar.style.color = "black";
        icon.style.color = "black";
      } else {
        navbar.style.position = "relative";
        navbar.style.backgroundColor = "rgba(0,0,0,0)";
        navbar.style.color = "white";
        icon.style.color = "white";
        navbar.style.boxShadow = "none";
      }
    }
  });
  useEffect(() => {
    const nvMenu = document.querySelector(".nv-menu");
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 1200) {
        nvMenu.style.height = "50px";
        setShowNavbar(false);
      } else {
        nvMenu.style.height = "0px";
        nvMenu.style.overflow = "hidden";
        setShowNavbar(false);
      }
    });
  }, []);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .getElementById(anchor.getAttribute("href").split("#")[1])
          .scrollIntoView({
            behavior: "smooth",
          });
      });
    });
  }, []);
  useEffect(() => {
    const home = document.querySelector(".home-text");
    const about = document.querySelector(".about-text");
    const services = document.querySelector(".services-text");
    const questions = document.querySelector(".questions-text");
    const contact = document.querySelector(".contact-text");
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop <= 80) {
        home.style.color = "#ed5858";
        home.style.transition = "all .1s";
        if (window.innerWidth > 1200) {
          questions.style.color = "white";
          services.style.color = "white";
          about.style.color = "white";
          contact.style.color = "white";
        } else {
          questions.style.color = "black";
          services.style.color = "black";
          about.style.color = "black";
          contact.style.color = "black";
        }
      }
      if (document.documentElement.scrollTop >= 500) {
        about.style.color = "#ed5858";
        about.style.transition = "all .1s";
        questions.style.color = "black";
        services.style.color = "black";
        home.style.color = "black";
        contact.style.color = "black";
      }
      if (document.documentElement.scrollTop >= 1890) {
        services.style.color = "#ed5858";
        services.style.transition = "all .1s";
        questions.style.color = "black";
        about.style.color = "black";
        home.style.color = "black";
        contact.style.color = "black";
      }
      if (document.documentElement.scrollTop >= 2520) {
        questions.style.color = "#ed5858";
        questions.style.transition = "all .1s";
        services.style.color = "black";
        about.style.color = "black";
        home.style.color = "black";
        contact.style.color = "black";
      }
      if (document.documentElement.scrollTop >= 3250) {
        contact.style.color = "#ed5858";
        contact.style.transition = "all .1s";
        questions.style.color = "black";
        services.style.color = "black";
        about.style.color = "black";
        home.style.color = "black";
      }
    });
  }, []);
  return (
    <div className="navbar" id="navbar">
      <Container className="nv-container">
        <div className="nv-brand">
          <h3>Dev's WebSite</h3>
        </div>
        <div className="nv-menu-icon" onClick={handleShowNavbar}>
          <Menu className="icon" id="icon" />
        </div>
        <div className="nv-menu">
          <a href="#home">
            <h4 className="home-text">Home</h4>
          </a>
          <a href="#about">
            <h4 className="about-text">About</h4>
          </a>
          <a href="#service">
            <h4 className="services-text">Services</h4>
          </a>
          <a href="#questions">
            <h4 className="questions-text">Frequently Questions</h4>
          </a>
          <div
            className="drowp-menu"
            onMouseEnter={handleDrowpdown}
            onMouseLeave={handleDrowpdown}
          >
            <h4 className="drop-down">
              Drop Down
              <ExpandMore />
            </h4>
            <div className="container-menu">
              <h4>About us</h4>
              <h4>FEATUERS</h4>
              <h4>FAQ'S</h4>
              <h4>BLOG</h4>
            </div>
          </div>
          <a href="#contact">
            <h4 className="contact-text">Contact Us</h4>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
