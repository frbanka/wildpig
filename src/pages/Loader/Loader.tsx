import React, { useState, useEffect } from "react";
import "./Loader.css";
import img from "../../graphics/ciemnosc-th.png";
export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Symulacja ładowania - w prawdziwej aplikacji może pochodzić z API lub zdarzenia ładowania
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1; // Zwiększaj progress co 50ms
        } else {
          clearInterval(interval); // Zatrzymaj po osiągnięciu 100%
          return 100;
        }
      });
    }, 50); // Co 50ms aktualizuj progress

    return () => clearInterval(interval); // Czyszczenie po zakończeniu
  }, []);

  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={img} alt="Loading..." />
        <div className="progress">{progress}%</div>
      </div>
    </div>
  );
};
