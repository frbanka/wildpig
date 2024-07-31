import "./Intro.css";
import React from "react";
import { NavLink } from "react-router-dom";
import moon from "../../graphics/moon.jpeg";

export const Intro = () => {
  return (
    <section>
      <img src={moon} alt="moon" className="moon"></img>
      <div id="particles-js"></div>
    </section>
  );
};
