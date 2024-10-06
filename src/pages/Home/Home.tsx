import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Loader } from "../Loader/Loader";

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
import piekno from "../../graphics/piekno.webp";
import niewygram from "../../graphics/niewygram-min.webp";

import naksiezycuDemo from "./audio/naksiezycu_demo.mp3";
import urojeniaDemo from "./audio/urojenia_demo.mp3";
import pozarDemo from "./audio/pozar_demo.mp3";
import ciemnoscDemo from "./audio/ciemnosc_demo.mp3";
import drapieznikDemo from "./audio/drapieznik_demo.mp3";
import dymDemo from "./audio/dym_demo.mp3";
import dzikaDemo from "./audio/dzika_demo.mp3";
import niewygramDemo from "./audio/niewygram_demo.mp3";
import pieknoDemo from "./audio/piekno_demo.mp3";
import ustaDemo from "./audio/usta_demo.mp3";
import pierwszyDemo from "./audio/pierwszy_demo.mp3";
import somaDemo from "./audio/soma_demo.mp3";
import pienDemo from "./audio/pien_demo.mp3";
import zaczynaDemo from "./audio/zaczyna_demo.mp3";
import nietrawieDemo from "./audio/nietrawie_demo.mp3";
import strachDemo from "./audio/strach_demo.mp3";

const images = [
  {
    src: nietrawie,
    title: "Nie Trawię",
    track: "Track 1",
    description:
      "Ileż można tego słuchać? Wsciskają nam kit do uszu, oczu i cholera wie gdzie jeszcze. Aż do porzygu.",
    audio: nietrawieDemo,
  },
  {
    src: urojenia,
    title: "Urojenia",
    track: "Track 2",
    description:
      "Chcesz wierzyć w to, co jest Ci narzucane? Proszę bardzo. Szukaj szczęścia dalej.",
    audio: urojeniaDemo,
  },
  {
    src: pozar,
    title: "Pożar",
    track: "Track 3",
    description:
      "Z prochu powstałeś i w proch się obrócisz. Chyba, że to Ty trzymasz zapałki..!?",
    audio: pozarDemo,
  },
  {
    src: wdymie,
    title: "W Dymie Jest Ogień",
    track: "Track 4",
    description:
      "Co zacząłeś to dokończ. Nie zostawiaj za sobą niczego. Twoje czyny to Twój ciężar.",
    audio: dymDemo,
  },
  {
    src: dzikaswinia,
    title: "Dzika Świnia",
    track: "Track 5",
    description:
      "Czy wystarczy biec przed siebie, by dobiec do celu? Pamiętaj, że Ziemia jest okrągła.",
    audio: dzikaDemo,
  },
  {
    src: drapieznik,
    title: "Drapieżnik",
    track: "Track 6",
    description:
      "Uważaj, żeby i Ciebie ktoś nie zjadł. Każdy jest czyimś pożywieniem.",
    audio: drapieznikDemo,
  },
  {
    src: ciemnosc,
    title: "Ciemność",
    track: "Track 7",
    description:
      "Nigdy nie wiesz kiedy na Ciebie spadnie i pochłonie Cię całego.",
    audio: ciemnoscDemo,
  },
  {
    src: usta,
    title: "Usta Szeroko Otwarte (Live)",
    track: "Track 8",
    description: "W lesie ma być cisza! Szanuj przyrodę i innych. Ale śpiewaj z Nami!",
    audio: ustaDemo,
  },
  {
    src: piekno,
    title: "Piękno",
    track: "Track 9",
    description: "To nie jest ironia. To czyste piękno. Twoje piękno.",
    audio: pieknoDemo,
  },
  {
    src: niewygram,
    title: "Nie Wygram",
    track: "Track 10",
    description: "Cokolwiek nie zrobisz i tak jesteś skazany na porażkę. Jesteś swoim największym wrogiem.",
    audio: niewygramDemo,
  },
  {
    src: naksiezycu,
    title: "Na Księżycu",
    track: "Track 11",
    description:
      "Wybierzmy się do lasu - cisza, pustka, spokój. Albo może gdzieś dalej..?",
    audio: naksiezycuDemo,
  },
  {
    src: zaczyna,
    title: "Zaczyna Padać",
    track: "Track 12",
    description: "Nikomu niepotrzebny deszcz. Tak jak my sami.",
    audio: zaczynaDemo,
  },
  {
    src: strach,
    title: "Strach",
    track: "Track 13",
    description: "Wszystkiego się trzeba bać. Uwierz, że tak jest lepiej.",
    audio: strachDemo,
  },
  {
    src: pien,
    title: "Pień",
    track: "Track 14",
    description:
      "Podobno upadamy każdego dnia. Czy ktoś zechce nas podnieść?",
    audio: pienDemo,
  },
  {
    src: soma,
    title: "SOMA",
    track: "Track 15",
    description:
      "Kiedy wydaje Ci się, że w życiu masz nad wszystkim kontrolę.. Nad sobą.. Na pewno.",
    audio: somaDemo,
  },
  {
    src: pierwszy,
    title: "Pierwszy i Ostatni",
    track: "Track 16",
    description:
      "Czy w tym wyścigu szczurów (królików..?) naprawdę chcesz być na czele? Kto wygra ze sztucznością?",
    audio: pierwszyDemo,
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
