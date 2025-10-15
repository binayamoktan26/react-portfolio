import React from "react";
import screenShot from "../assets/ss.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Project = () => {
  const myProject = [
    {
      image: screenShot,
      github: "https://github.com/binayamoktan26",
      url: "https://www.google.com",
      title: "Personal Portfolio",
      discription: "Techstack: HTML, CSS , Javascript , React",
    },
    {
      image: screenShot,
      github: "https://github.com/binayamoktan26",
      url: "https://www.google.com",
      title: "Personal Portfolio",
      discription: "Techstack: HTML, CSS , Javascript , React",
    },
    {
      image: screenShot,
      github: "https://github.com/binayamoktan26",
      url: "https://www.google.com",
      title: "Personal Portfolio",
      discription: "Techstack: HTML, CSS , Javascript , React",
    },
    {
      image: screenShot,
      github: "https://github.com/binayamoktan26",
      url: "https://www.google.com",
      title: "Personal Portfolio",
      discription: "Techstack: HTML, CSS , Javascript , React",
    },
  ];
  return (
    <>
      <section className="projects container" id="projects">
        <Title title="Projects" />
        <div className="grid project-container">
          {myProject.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};
