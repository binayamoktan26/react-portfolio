import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Footer = () => {
  const [scrollYposition, setScrollYposition] = useState(0);
  const handleOnScrollY = () => {
    setScrollYposition(window.scrollY);
  };

  useEffect(() => {
    // end of the render , run following code
    window.addEventListener("scroll", handleOnScrollY);
    // clean up the event
    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);
 
  return (
    <>
      <footer className="flex flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">GitHub</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>Y
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved 2025 || Made by me with 🚀
        </div>
      </footer>
      {scrollYposition > 800 && (
        <a href="">
          <div className="goUP flex-center">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </a>
      )}
    </>
  );
};
