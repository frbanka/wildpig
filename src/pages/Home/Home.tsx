import React from "react";
import "./Home.css";
import "./Home.js";

export const Home = () => {
  return (
    <div>
      <div className="slider">
        <div className="list">
          <div className="item active">
            <img src="image/img1.png"></img>
            <div className="content">
              <p>design</p>
              <h2>Slider 01</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="image/img2.jpg"></img>
            <div className="content">
              <p>design</p>
              <h2>Slider 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="image/img3.jpg"></img>
            <div className="content">
              <p>design</p>
              <h2>Slider 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="image/img4.jpg"></img>
            <div className="content">
              <p>design</p>
              <h2>Slider 04</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="image/img5.jpg"></img>
            <div className="content">
              <p>design</p>
              <h2>Slider 05</h2>
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
            <img src="image/img1.png"></img>
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="image/img2.jpg"></img>
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="image/img3.jpg"></img>
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="image/img4.jpg"></img>
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="image/img5.jpg"></img>
            <div className="content">Name Slider</div>
          </div>
        </div>
      </div>
    </div>
  );
};
