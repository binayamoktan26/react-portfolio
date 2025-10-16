import React from "react";
import background from "../assets/profile.png";
// import { Layout } from "./Layout";
export const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I am <span>Binaya Moktan</span>
            </div>

            <div className="tag">Web Developer</div>
            <p>I love coding and teach others what I learn .</p>
            <div>
              <a href={background} download>
                <button>
                  Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={background} alt="thashi lama height" height="400px" />
          </div>
        </div>
      </section>
      {/* <!-- banner section 
            --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>+5 Projects </span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year </span>
            <p>Experence</p>
          </div>
        </div>
      </section>
    </>
  );
};
