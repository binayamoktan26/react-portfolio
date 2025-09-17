import React from "react";
import background from "../assets/bg.png";
import { Title } from "./Title";
export const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About" />
      <div className="about-content container flex">
        <div className="myImg flex-center">
          <img src={background} alt="Tashi" width="300px" />
        </div>
        <div className="my-bio container">
          <h2>Binaya Moktan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. officia
            nobis quae perspiciatis architecto, dolorum magnam delectus
            temporibus cumque incidunt, necessitatibus, accusamus nulla quia
            libero accusantium. Pariatur. Lorem ipsum dolor sit
          </p>
          <p>
            Laudantium nesciunt ab sint dicta totam obcaecati impedit
            repudiandae doloribus hic qui. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Expedita ad provident excepturi
          </p>

          <p>Manthali,Ramechhap</p>

          <div className="tag">Interest</div>
          <div className="flex">
            <span>Codding</span>
            <span>Hacking</span>
            <span>Batminton</span>
            <span>Watching Annime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
