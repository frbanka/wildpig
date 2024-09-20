/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles.js loaded - callback");
});

export default function onClickButton() {
  const script = document.createElement("script");
  script.src = "Home.js";
  script.type = "text/javascript";
  document.getElementById("relative").remove();
  document.getElementById("root").classList.remove("root_disabled");
  document.getElementById("root").classList.add("root_enabled");
  document.getElementById("body").appendChild(script);
};
export default function changeBg() {
  document
    .getElementById("logo_hover")
    .classList.replace("logo_hover", "logo2");
  document.getElementById("background").id = "background2";
};
export default function changeBgBack() {
  document
    .getElementById("logo_hover")
    .classList.replace("logo2", "logo_hover");
  document.getElementById("background2").id = "background";
};
