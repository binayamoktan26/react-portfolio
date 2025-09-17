import React from "react";

export const Card = ({ image, github, url, title, discription }) => {
  return (
    <div className="project-card">
      <div className="top">
        <img src={image} width="100%" alt="" />
      </div>
      <div className="bottom container">
        <div className="link">
          <a href={github} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={url}>
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <h3> {title}</h3>
        <p>{discription}</p>
      </div>
    </div>
  );
};
