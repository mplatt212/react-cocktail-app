import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const socialIconsRef = useRef(null);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <button id="nav-toggle" onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
      </div>
      <div className="nav-links">
        <ul className="links-list">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social" ref={socialIconsRef}>
        {social.map((singleIcon) => {
          return (
            <span className="icons" key={singleIcon.id}>
              <a href={singleIcon.url}>{singleIcon.icon}</a>
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
