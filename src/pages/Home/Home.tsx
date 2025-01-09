import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Loader } from "../Loader/Loader";

import nietrawie from "../../graphics/nietrawie-min.webp";
import naprawo from "../../graphics/naprawo-min.webp";
import wdymie from "../../graphics/wdymie-min.webp";
import strach from "../../graphics/strach-min.webp";
import wladca from "../../graphics/wladca-min.webp";
import drapieznik from "../../graphics/drapieznik-min.webp";
import naksiezycu from "../../graphics/naksiezycu-min.webp";
import opowiesc from "../../graphics/opowiesc-min.webp";
import piekno from "../../graphics/piekno-min.webp";
import zabijam from "../../graphics/zabijam-min.webp";
import pien from "../../graphics/pien-min.webp";
import soma from "../../graphics/soma-min.webp";
import trzytrzy from "../../graphics/33-min.webp";
import niewygram from "../../graphics/niewygram-min.webp";
import usta from "../../graphics/usta-min.webp";
import dzikaswinia from "../../graphics/dzikaswinia-min.webp";

import nietrawieDemo from "./audio/nietrawie_demo.mp3";
/*na prawo*/
import dymDemo from "./audio/dym_demo.mp3";
import strachDemo from "./audio/strach_demo.mp3"; /*zmiana*/
/*wladca*/
import drapieznikDemo from "./audio/drapieznik_demo.mp3"; /*zmiana*/
import naksiezycuDemo from "./audio/naksiezycu_demo.mp3"; /*zmiana*/
/*opowiesc*/
import pieknoDemo from "./audio/piekno_demo.mp3"; /*zmiana*/
import zabijamDemo from "./audio/zabijam.mp3"; /*zmiana*/
import pienDemo from "./audio/pien_demo.mp3";
import somaDemo from "./audio/soma_demo.mp3"; /*zmiana*/
/*33*/
import niewygramDemo from "./audio/niewygram_demo.mp3"; /*zmiana*/
import dzikaDemo from "./audio/dzika_demo.mp3"; /*zmiana*/
import ustaDemo from "./audio/usta_demo.mp3"; /*zmiana*/
/*nieuzywane*/
import zaczynaDemo from "./audio/zaczyna_demo.mp3";

const images = [
  {
    src: nietrawie,
    title: "Nie Trawię",
    track: "Track 1",
    description: "Jestem głodny dziś jak wilk.",
    audio: nietrawieDemo,
  },
  {
    src: naprawo,
    title: "Na Prawo Ode Mnie",
    track: "Track 2",
    description: "Przestań ryczeć.",
    audio: dymDemo,
  },
  {
    src: wdymie,
    title: "W Dymie Jest Ogień",
    track: "Track 3",
    description: "A w duszy jest strach.",
    audio: dymDemo,
  },
  {
    src: strach,
    title: "Strach",
    track: "Track 4",
    description: "Niejeden kryje sekret.",
    audio: strachDemo,
  },
  {
    src: wladca,
    title: "Władca Much",
    track: "Track 5",
    description: "Wyznaj mi grzechy.",
    audio: wladca,
  },
  {
    src: drapieznik,
    title: "Drapieżnik",
    track: "Track 6",
    description: "Jesteś tylko drapieżnikiem.",
    audio: drapieznikDemo,
  },
  {
    src: naksiezycu,
    title: "Na Księżycu",
    track: "Track 7",
    description: "W ciemności wiecznej pustki.",
    audio: naksiezycuDemo,
  },
  {
    src: opowiesc,
    title: "Opowieść Bez Końca",
    track: "Track 8",
    description: "Wytrzymaj jeszcze kilka chwil",
    audio: zaczynaDemo,
  },
  {
    src: piekno,
    title: "Piękno",
    track: "Track 9",
    description: "Co kryje Twe spojrzenie?",
    audio: pieknoDemo,
  },
  {
    src: zabijam,
    title: "Zabijam Płomień",
    track: "Track 10",
    description: "Łamiesz obietnice swe.",
    audio: zabijamDemo,
  },
  {
    src: pien,
    title: "Pień",
    track: "Track 11",
    description: "Jesteś tylko pniem.",
    audio: pienDemo,
  },
  {
    src: soma,
    title: "SOMA",
    track: "Track 12",
    description: "Wszystko zaczyna i kończy się w głowie",
    audio: somaDemo,
  },
  {
    src: trzytrzy,
    title: "33",
    track: "Track 13",
    description: "Jeden, dwa, trzy.",
    audio: pienDemo,
  },
  {
    src: niewygram,
    title: "Nie Wygram",
    track: "Track 14",
    description: "Bo mam siebie.",
    audio: niewygramDemo,
  },
  {
    src: dzikaswinia,
    title: "Dzika Świnia",
    track: "Bonus Track",
    description: "Biegniesz gdzie biegną sny.",
    audio: dzikaDemo,
  },
  {
    src: usta,
    title: "Usta Szeroko Otwarte",
    track: "Bonus Track",
    description: "Idziesz ze mną wciąż w zaparte",
    audio: ustaDemo,
  },
];

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [itemActive, setItemActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(images[0].src);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [picOpacity, setPicOpacity] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); // Ekran powitalny jest widoczny na start
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Dodajemy klasę `animated` po krótkim opóźnieniu
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 700); // Opóźnienie, aby logo się "pojawiło" po otwarciu strony

    return () => clearTimeout(timer); // Czyszczenie timer'a przy odmontowaniu komponentu
  }, []);

  useEffect(() => {
    resetInterval(); // Ustaw interwał na początku

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Czyści interwał po unmount
      }
    };
  }, []);

  // Załaduj audio i zmień zdjęcie na aktywne
  useEffect(() => {
    const activeImage = images[itemActive];
    const audioFile = activeImage.audio;

    // Dodajemy warunek, że audio odtwarzamy tylko, jeśli slider jest widoczny i ekran powitalny jest ukryty
    if (isSliderVisible && !isWelcomeVisible && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = audioFile;
      audioRef.current
        .play()
        .catch((error) => console.log("Error playing audio:", error));
    }

    // Ustaw nowe tło z opacity na 0
    setBackgroundOpacity(0); // Fade out background
    setPicOpacity(0); // Pic visibility before transition

    // Timeout na czas przejścia tła
    const timeoutId = setTimeout(() => {
      setBackgroundImage(activeImage.src);
      setBackgroundOpacity(1); // Ustaw opacity na 1 po zmianie tła

      // Teraz czekaj, aż tło stanie się przezroczyste przed przełączeniem obrazu
      const picTimeoutId = setTimeout(() => {
        setPicOpacity(1); // Ustaw opacity obrazu na 1
      }, 50); // Ustaw opóźnienie, aby uniknąć natychmiastowego wyświetlenia

      return () => clearTimeout(picTimeoutId); // Czyszczenie timeoutu dla obrazu
    }, 500); // Opóźnienie na czas przejścia (500ms)

    return () => clearTimeout(timeoutId); // Upewnij się, że timeout jest czyszczony
  }, [itemActive, isSliderVisible, isWelcomeVisible]); // Dodajemy `isWelcomeVisible` jako zależność

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Czyści bieżący interwał
    }
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 16000); // Ustawia nowy interwał
  };

  const nextSlide = () => {
    setPicOpacity(0);
    setItemActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setPicOpacity(0);
    setItemActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    nextSlide();
    resetInterval(); // Resetuj interwał po ręcznej zmianie slajdu
  };

  const handlePrev = () => {
    prevSlide();
    resetInterval(); // Resetuj interwał po ręcznej zmianie slajdu
  };

  // Loader dla obrazków
  useEffect(() => {
    if (isLoading) {
      const handleLoad = () => {
        setIsLoading(false);
        setIsSliderVisible(true); // Po załadowaniu obrazków wyświetl slider
      };

      const imgs = document.querySelectorAll("img");
      const promises = Array.from(imgs).map((img) => {
        return new Promise<void>((resolve) => {
          if (img.complete) resolve();
          else {
            img.addEventListener("load", () => resolve());
            img.addEventListener("error", () => resolve());
          }
        });
      });

      Promise.all(promises).then(handleLoad);

      return () => {
        imgs.forEach((img) => {
          img.removeEventListener("load", handleLoad);
          img.removeEventListener("error", handleLoad);
        });
      };
    }
  }, [isLoading]);

  const startLoading = () => {
    setIsWelcomeVisible(false); // Ukryj ekran powitalny
    setIsLoading(true); // Uruchom loader
  };

  return (
    <div style={{ position: "relative" }}>
      {isWelcomeVisible ? (
        // Ekran powitalny
        <div className="welcome-screen">
          <button className="start-button" onClick={startLoading}>
            <h1 className={`logo ${isAnimated ? "animated" : ""}`}>
              dzika swinia
            </h1>
          </button>
          <div className="mail">
            <a href="mailto:fr.banka17@gmail.com">Napisz maila: click</a>
          </div>
        </div>
      ) : isLoading ? (
        // Loader po kliknięciu przycisku
        <Loader />
      ) : (
        // Slider po załadowaniu obrazków
        isSliderVisible && (
          <div>
            <div
              className="background"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                opacity: backgroundOpacity,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
            <div className="slider">
              <div className="list">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`item ${index === itemActive ? "active" : ""}`}
                  >
                    <img
                      className="pic"
                      src={image.src}
                      alt={image.title}
                      style={{
                        opacity: picOpacity,
                        transition: "opacity 0.5s ease-in-out", // Dodanie efektu przejścia
                      }}
                    />
                    <div className="content">
                      <p>{image.track}</p>
                      <h2>{image.title}</h2>
                      <p>{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="arrows">
                <button id="prev" onClick={handlePrev}>
                  poprzedni
                </button>
                <button id="next" onClick={handleNext}>
                  nastepny
                </button>
              </div>
            </div>
          </div>
        )
      )}
      <audio ref={audioRef} />
    </div>
  );
};
