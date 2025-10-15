import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Binaya</div>
          <div className="line">Devloper</div>
        </div>
        <label htmlFor="hamburgerMenu" onClick={() => setSlideMenu(!slideMenu)}>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburgerMenu" />
        <div className={slideMenu ? "menu slide " : "menu"}>
          <ul
            className="flex navigation"
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
