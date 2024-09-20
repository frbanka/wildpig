import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import soma from "../../graphics/soma.png";
import ciemnosc from "../../graphics/ciemnosc.png";
import drapieznik from "../../graphics/drapieznik.png";
import strach from "../../graphics/strach.png";
import naksiezycu from "../../graphics/naksiezycu.png";
import usta from "../../graphics/usta.png";
import dzikaswinia from "../../graphics/dzikaswinia.png";
import pozar from "../../graphics/pozar.png";
import pien from "../../graphics/pien.png";
import urojenia from "../../graphics/urojenia.png";
import wdymie from "../../graphics/wdymie.png";
import zaczyna from "../../graphics/zaczyna.png";
import nietrawie from "../../graphics/nietrawie.png";
import pierwszy from "../../graphics/pierwszy.png";
import piekno from "../../graphics/pierwszy.png";
import niewygram from "../../graphics/niewygram.png";
import naksiezycump3 from "./audio/naksiezycu_demo.mp3";

export const Home = () => {
  useEffect(() => {
    let items = document.querySelectorAll<HTMLDivElement>(
      ".slider .list .item"
    );
    let next = document.getElementById("next") as HTMLButtonElement | null;
    let prev = document.getElementById("prev") as HTMLButtonElement | null;
    let thumbnails =
      document.querySelectorAll<HTMLDivElement>(".thumbnail .item");

    // config param
    let countItem = items.length;
    let itemActive = 0;

    const showSlider = () => {
      // remove item active old
      let itemActiveOld = document.querySelector(".slider .list .item.active");
      let thumbnailActiveOld = document.querySelector(
        ".thumbnail .item.active"
      );

      if (itemActiveOld) {
        itemActiveOld.classList.remove("active");
      }
      if (thumbnailActiveOld) {
        thumbnailActiveOld.classList.remove("active");
      }

      // active new item
      if (items[itemActive]) {
        items[itemActive].classList.add("active");
      }
      if (thumbnails[itemActive]) {
        thumbnails[itemActive].classList.add("active");
      }

      // clear auto time run slider
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        if (next) next.click();
      }, 9000);
    };

    // event next click
    if (next) {
      next.onclick = () => {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
          itemActive = 0;
        }
        showSlider();
      };
    }

    // event prev click
    if (prev) {
      prev.onclick = () => {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
          itemActive = countItem - 1;
        }
        showSlider();
      };
    }

    // auto run slider
    let refreshInterval = setInterval(() => {
      if (next) next.click();
    }, 9000);

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
      });
    });

    return () => {
      // Clean up listeners when component is unmounted
      clearInterval(refreshInterval);
      if (next) next.onclick = null;
      if (prev) prev.onclick = null;
      thumbnails.forEach((thumbnail) => {
        thumbnail.onclick = null;
      });
    };
  }, []);

  return (
    <div>
      <div className="slider">
        <div className="list">
          <div className="item active">
            <img className="pic" src={naksiezycu}></img>
            <img id="imgslider" src={naksiezycu}></img>
            <div className="content">
              <p>Track 1</p>
              <h2>Na Księżycu</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={urojenia}></img>
            <img id="imgslider" src={urojenia}></img>
            <div className="content">
              <p>Track 2</p>
              <h2>Urojenia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pozar}></img>
            <img id="imgslider" src={pozar}></img>
            <div className="content">
              <p>Track 3</p>
              <h2>Pożar</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={wdymie}></img>
            <img id="imgslider" src={wdymie}></img>
            <div className="content">
              <p>Track 4</p>
              <h2>W Dymie Jest Ogień</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={dzikaswinia}></img>
            <img id="imgslider" src={dzikaswinia}></img>
            <div className="content">
              <p>Track 5</p>
              <h2>Dzika Świnia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={drapieznik}></img>
            <img id="imgslider" src={drapieznik}></img>
            <div className="content">
              <p>Track 6</p>
              <h2>Drapieżnik</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={usta}></img>
            <img id="imgslider" src={usta}></img>
            <div className="content">
              <p>Track 7</p>
              <h2>Usta Szeroko Otwarte</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={piekno}></img>
            <img id="imgslider" src={piekno}></img>
            <div className="content">
              <p>Track 8</p>
              <h2>Piękno</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={niewygram}></img>
            <img id="imgslider" src={niewygram}></img>
            <div className="content">
              <p>Track 9</p>
              <h2>Nie Wygram</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={nietrawie}></img>
            <img id="imgslider" src={nietrawie}></img>
            <div className="content">
              <p>Track 10</p>
              <h2>Nie Trawię</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={zaczyna}></img>
            <img id="imgslider" src={zaczyna}></img>
            <div className="content">
              <p>Track 11</p>
              <h2>Zaczyna Padać</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={strach}></img>
            <img id="imgslider" src={strach}></img>
            <div className="content">
              <p>Track 12</p>
              <h2>Strach</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pien}></img>
            <img id="imgslider" src={pien}></img>
            <div className="content">
              <p>Track 13</p>
              <h2>Pień</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={soma}></img>
            <img id="imgslider" src={soma}></img>
            <div className="content">
              <p>Track 13</p>
              <h2>SOMA</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pierwszy}></img>
            <img id="imgslider" src={pierwszy}></img>
            <div className="content">
              <p>Track 14</p>
              <h2>Pierwszy i Ostatni</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev">←</button>
          <button id="next">→</button>
        </div>
        <div className="thumbnail">
          <div className="item active">
            <img src={naksiezycu}></img>
            <div className="content">Na Księżycu</div>
          </div>
          <div className="item">
            <img src={urojenia}></img>
            <div className="content">Urojenia</div>
          </div>
          <div className="item">
            <img src={pozar}></img>
            <div className="content">Pożar</div>
          </div>
          <div className="item">
            <img src={wdymie}></img>
            <div className="content">W Dymie Jest Ogień</div>
          </div>
          <div className="item">
            <img src={dzikaswinia}></img>
            <div className="content">Dzika Świnia</div>
          </div>
          <div className="item">
            <img src={drapieznik}></img>
            <div className="content">Drapieżnik</div>
          </div>
          <div className="item">
            <img src={usta}></img>
            <div className="content">Usta Szeroko Otwarte</div>
          </div>
          <div className="item">
            <img src={piekno}></img>
            <div className="content">Piękno</div>
          </div>
          <div className="item">
            <img src={niewygram}></img>
            <div className="content">Nie Wygram</div>
          </div>
          <div className="item">
            <img src={nietrawie}></img>
            <div className="content">Nie Trawię</div>
          </div>
          <div className="item">
            <img src={zaczyna}></img>
            <div className="content">Zaczyna Padać</div>
          </div>
          <div className="item">
            <img src={strach}></img>
            <div className="content">Strach</div>
          </div>
          <div className="item">
            <img src={pien}></img>
            <div className="content">Pień</div>
          </div>
          <div className="item">
            <img src={soma}></img>
            <div className="content">SOMA</div>
          </div>
          <div className="item">
            <img src={pierwszy}></img>
            <div className="content">Pierwszy i Ostatni</div>
          </div>
        </div>
      </div>
    </div>
  );
};
