import React from "react";
import "./Home.css";
//import "./Home.js";
import soma from "../../graphics/soma.jpeg";
import ciemnosc from "../../graphics/ciemnosc.jpeg";
import drapieznik from "../../graphics/drapieznik.jpg";
import strach from "../../graphics/strach.jpeg";
import naksiezycu from "../../graphics/naksiezycu.jpeg";
import usta from "../../graphics/usta.jpeg";
import dzikaswinia from "../../graphics/dzikaswinia.jpg";
import pozar from "../../graphics/pozar.png";

export const Home = () => {
  return (
    <div>
      <div className="slider">
        <div className="list">
          <div className="item active">
            <img src={soma}></img>
            <div className="content">
              <p>design</p>
              <h2>SOMA</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={ciemnosc}></img>
            <div className="content">
              <p>design</p>
              <h2>Ciemność</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={drapieznik}></img>
            <div className="content">
              <p>design</p>
              <h2>Drapieżnik</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={strach}></img>
            <div className="content">
              <p>design</p>
              <h2>Strach</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={naksiezycu}></img>
            <div className="content">
              <p>design</p>
              <h2>Na Księżycu</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={dzikaswinia}></img>
            <div className="content">
              <p>design</p>
              <h2>Dzika Świnia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={usta}></img>
            <div className="content">
              <p>design</p>
              <h2>Usta Szeroko Otwarte</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={pozar}></img>
            <div className="content">
              <p>design</p>
              <h2>Pożar</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={pozar}></img>
            <div className="content">
              <p>design</p>
              <h2>Pień</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev">P</button>
          <button id="next">L</button>
        </div>
        <div className="thumbnail">
          <div className="item active">
            <img src={soma}></img>
            <div className="content">SOMA</div>
          </div>
          <div className="item">
            <img src={ciemnosc}></img>
            <div className="content">Ciemność</div>
          </div>
          <div className="item">
            <img src={drapieznik}></img>
            <div className="content">Drapieżnik</div>
          </div>
          <div className="item">
            <img src={strach}></img>
            <div className="content">Strach</div>
          </div>
          <div className="item">
            <img src={naksiezycu}></img>
            <div className="content">Na Księżycu</div>
          </div>
          <div className="item">
            <img src={dzikaswinia}></img>
            <div className="content">Dzika Świnia</div>
          </div>
          <div className="item">
            <img src={usta}></img>
            <div className="content">Usta Szeroko Otwarte</div>
          </div>
          <div className="item">
            <img src={pozar}></img>
            <div className="content">Pożar</div>
          </div>
          <div className="item">
            <img src={pozar}></img>
            <div className="content">Pień</div>
          </div>
        </div>
      </div>
    </div>
  );
};
