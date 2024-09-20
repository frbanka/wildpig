import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import soma from "../../graphics/soma-min.webp";
import ciemnosc from "../../graphics/ciemnosc-min.webp";
import drapieznik from "../../graphics/drapieznik-min.webp";
import strach from "../../graphics/strach-min.webp";
import naksiezycu from "../../graphics/naksiezycu-min.webp";
import usta from "../../graphics/usta-min.webp";
import dzikaswinia from "../../graphics/dzikaswinia-min.webp";
import pozar from "../../graphics/pozar-min.webp";
import pien from "../../graphics/pien-min.webp";
import urojenia from "../../graphics/urojenia-min.webp";
import wdymie from "../../graphics/wdymie-min.webp";
import zaczyna from "../../graphics/zaczyna-min.webp";
import nietrawie from "../../graphics/nietrawie-min.webp";
import pierwszy from "../../graphics/pierwszy-min.webp";
import piekno from "../../graphics/zaczyna-min.webp";
import niewygram from "../../graphics/niewygram-min.webp";

import somath from "../../graphics/soma-th.webp";
import ciemnoscth from "../../graphics/ciemnosc-th.webp";
import drapieznikth from "../../graphics/drapieznik-th.webp";
import strachth from "../../graphics/strach-th.webp";
import naksiezycuth from "../../graphics/naksiezycu-th.webp";
import ustath from "../../graphics/usta-th.webp";
import dzikaswiniath from "../../graphics/dzikaswinia-th.webp";
import pozarth from "../../graphics/pozar-th.webp";
import pienth from "../../graphics/pien-th.webp";
import urojeniath from "../../graphics/urojenia-th.webp";
import wdymieth from "../../graphics/wdymie-th.webp";
import zaczynath from "../../graphics/zaczyna-th.webp";
import nietrawieth from "../../graphics/nietrawie-th.webp";
import pierwszyth from "../../graphics/pierwszy-th.webp";
import pieknoth from "../../graphics/zaczyna-th.webp";
import niewygramth from "../../graphics/niewygram-th.webp";
import naksiezycuDemo from "./audio/naksiezycu_demo.mp3";
import urojeniaDemo from "./audio/naksiezycu_demo.mp3";
import pozarDemo from "./audio/naksiezycu_demo.mp3";

const audioMap: { [key: number]: string } = {
  0: naksiezycuDemo,
  1: urojeniaDemo,
  2: pozarDemo,
};

export const Home = () => {
  const audioRef = useRef(new Audio()); // useRef do kontrolowania audio

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
      const audioFile = audioMap[itemActive]; // Wybór odpowiedniego pliku audio
      playAudio(audioFile);

      let itemActiveOld = document.querySelector(".slider .list .item.active");
      let thumbnailActiveOld = document.querySelector(
        ".thumbnail .item.active"
      );

      if (itemActiveOld) itemActiveOld.classList.remove("active");
      if (thumbnailActiveOld) thumbnailActiveOld.classList.remove("active");

      if (items[itemActive]) items[itemActive].classList.add("active");
      if (thumbnails[itemActive])
        thumbnails[itemActive].classList.add("active");

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        if (next) next.click();
      }, 9000);
    };
    const playAudio = (file: string) => {
      const audio = new Audio(file);
      audio.play();
    };
    if (next) {
      next.onclick = () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
      };
    }

    if (prev) {
      prev.onclick = () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
      };
    }

    let refreshInterval = setInterval(() => {
      if (next) next.click();
    }, 9000);

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
      });
    });

    return () => {
      clearInterval(refreshInterval);
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return (
    <div>
      <div className="slider">
        <div className="list">
          <div className="item active">
            <img className="pic" src={naksiezycu}></img>
            <img id="imgslider" loading="lazy" src={naksiezycu}></img>
            <div className="content">
              <p>Track 1</p>
              <h2>Na Księżycu</h2>
              <p>
                Wybierzmy się do lasu - cisza, pustka, spokój. Albo może gdzieś
                dalej..?
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={urojenia}></img>
            <img id="imgslider" loading="lazy" src={urojenia}></img>
            <div className="content">
              <p>Track 2</p>
              <h2>Urojenia</h2>
              <p>
                Chcesz wierzyć w to, co jest Ci narzucane? Proszę bardzo. Szukaj
                szczęscia dalej.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pozar}></img>
            <img id="imgslider" loading="lazy" src={pozar}></img>
            <div className="content">
              <p>Track 3</p>
              <h2>Pożar</h2>
              <p>
                Z prochu powstałeś i w proch się obrócisz. Chyba, że to Ty
                trzymasz zapałki..!?
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={wdymie}></img>
            <img id="imgslider" loading="lazy" src={wdymie}></img>
            <div className="content">
              <p>Track 4</p>
              <h2>W Dymie Jest Ogień</h2>
              <p>
                Co zacząłeś - dokończ. Nie zostawiaj za sobą niczego. Twoje
                czyny to Twój ciężar.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={dzikaswinia}></img>
            <img id="imgslider" loading="lazy" src={dzikaswinia}></img>
            <div className="content">
              <p>Track 5</p>
              <h2>Dzika Świnia</h2>
              <p>
                Czy wystarczy biec przed siebie, by dobiec do celu? Pamiętaj, że
                Ziemia jest okrągła..
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={drapieznik}></img>
            <img id="imgslider" loading="lazy" src={drapieznik}></img>
            <div className="content">
              <p>Track 6</p>
              <h2>Drapieżnik</h2>
              <p>
                Uważaj, żeby Ciebie ktoś nie zjadł. Każdy jest czyimś
                pożywieniem.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={ciemnosc}></img>
            <img id="imgslider" loading="lazy" src={ciemnosc}></img>
            <div className="content">
              <p>Track 7</p>
              <h2>Ciemność</h2>
              <p>
                Nigdy nie wiesz kiedy na Ciebie spadnie. I pochłonie Cię całego.
                Nasze dni są policzone, nie łudź się, że ktoś nam pomoże.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={usta}></img>
            <img id="imgslider" loading="lazy" src={usta}></img>
            <div className="content">
              <p>Track 8</p>
              <h2>Usta Szeroko Otwarte</h2>
              <p>Czasem to po prostu za dużo słów..</p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={piekno}></img>
            <img id="imgslider" loading="lazy" src={piekno}></img>
            <div className="content">
              <p>Track 9</p>
              <h2>Piękno</h2>
              <p>
                Zero ironii. Czyste piękno. Chyba, że jeszcze do tego
                niedojrzałeś.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={niewygram}></img>
            <img id="imgslider" loading="lazy" src={niewygram}></img>
            <div className="content">
              <p>Track 10</p>
              <h2>Nie Wygram</h2>
              <p>
                Cokolwiek nie zrobisz - jesteś skazany na porażkę. Nie patrz w
                lustro, kochaj.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={nietrawie}></img>
            <img id="imgslider" loading="lazy" src={nietrawie}></img>
            <div className="content">
              <p>Track 11</p>
              <h2>Nie Trawię</h2>
              <p>
                Ileż można tego słuchać? Wsciskają nam kit do uszu, oczu i
                cholera wie gdzie jeszcze. Aż do porzygu.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={zaczyna}></img>
            <img id="imgslider" loading="lazy" src={zaczyna}></img>
            <div className="content">
              <p>Track 12</p>
              <h2>Zaczyna Padać</h2>
              <p>Nikomu niepotrzebny deszcz - jak my sami.</p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={strach}></img>
            <img id="imgslider" loading="lazy" src={strach}></img>
            <div className="content">
              <p>Track 13</p>
              <h2>Strach</h2>
              <p>Wszystkiego się boisz. I dobrze.</p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pien}></img>
            <img id="imgslider" loading="lazy" src={pien}></img>
            <div className="content">
              <p>Track 14</p>
              <h2>Pień</h2>
              <p>
                Upadamy każdego dnia - podobno. Czy ktoś zechce nas podnieść? I
                ponieść? A może po prostu - wykorzystać..
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={soma}></img>
            <img id="imgslider" loading="lazy" src={soma}></img>
            <div className="content">
              <p>Track 15</p>
              <h2>SOMA</h2>
              <p>
                Kiedy wydaje Ci się, że w życiu masz nad wszystkim kontrolę..
                Nad sobą. Na pewno.
              </p>
            </div>
          </div>
          <div className="item">
            <img className="pic" src={pierwszy}></img>
            <img id="imgslider" loading="lazy" src={pierwszy}></img>
            <div className="content">
              <p>Track 16</p>
              <h2>Pierwszy i Ostatni</h2>
              <p>
                Czy w tym wyścigu szczurów (królików..?) naprawdę chcesz być na
                czele? Kto wygra ze sztuczną inteligencją?
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
            <img src={naksiezycuth} loading="lazy"></img>
            <div className="content">Na Księżycu</div>
          </div>
          <div className="item">
            <img src={urojeniath} loading="lazy"></img>
            <div className="content">Urojenia</div>
          </div>
          <div className="item">
            <img src={pozarth} loading="lazy"></img>
            <div className="content">Pożar</div>
          </div>
          <div className="item">
            <img src={wdymieth} loading="lazy"></img>
            <div className="content">W Dymie Jest Ogień</div>
          </div>
          <div className="item">
            <img src={dzikaswiniath} loading="lazy"></img>
            <div className="content">Dzika Świnia</div>
          </div>
          <div className="item">
            <img src={drapieznikth} loading="lazy"></img>
            <div className="content">Drapieżnik</div>
          </div>
          <div className="item">
            <img src={ciemnoscth} loading="lazy"></img>
            <div className="content">Ciemność</div>
          </div>
          <div className="item">
            <img src={ustath} loading="lazy"></img>
            <div className="content">Usta Szeroko Otwarte</div>
          </div>
          <div className="item">
            <img src={pieknoth} loading="lazy"></img>
            <div className="content">Piękno</div>
          </div>
          <div className="item">
            <img src={niewygramth} loading="lazy"></img>
            <div className="content">Nie Wygram</div>
          </div>
          <div className="item">
            <img src={nietrawieth} loading="lazy"></img>
            <div className="content">Nie Trawię</div>
          </div>
          <div className="item">
            <img src={zaczynath} loading="lazy"></img>
            <div className="content">Zaczyna Padać</div>
          </div>
          <div className="item">
            <img src={strachth} loading="lazy"></img>
            <div className="content">Strach</div>
          </div>
          <div className="item">
            <img src={pienth} loading="lazy"></img>
            <div className="content">Pień</div>
          </div>
          <div className="item">
            <img src={somath} loading="lazy"></img>
            <div className="content">SOMA</div>
          </div>
          <div className="item">
            <img src={pierwszyth} loading="lazy"></img>
            <div className="content">Pierwszy i Ostatni</div>
          </div>
        </div>
      </div>
    </div>
  );
};
