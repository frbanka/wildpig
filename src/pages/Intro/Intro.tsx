import "./Intro.css";
import React from "react";
import { NavLink } from "react-router-dom";
import moon from "../../graphics/moon.jpeg";
export const Intro = () => {
  return (
    <div className="intro_wrap">
      <div className="intro_main">
        <div>
          <img src={moon} alt="moon" className="moon"></img>
        </div>
      </div>
    </div>
  );
};
