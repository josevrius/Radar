// Sonar Beep
const BEEP = new Audio("media/beep.mp3");

function playBeep() {
  BEEP.play();
}

function repaeatBeep() {
  setInterval(playBeep, 4000);
}

// Radar Dot
const RADAR = document.querySelector(".radar");
const DOT = document.createElement("div");

function addDot() {
  var x = Math.floor(Math.random() * 100);
  var y;
  if (x < 10 || x > 90) {
    y = Math.floor(Math.random() * (60 - 40) + 40);
  } else if (x < 20 || x > 80) {
    y = Math.floor(Math.random() * (70 - 30) + 30);
  } else if (x < 30 || x > 70) {
    y = Math.floor(Math.random() * (80 - 20) + 20);
  } else if (x < 40 || x > 60) {
    y = Math.floor(Math.random() * (90 - 10) + 10);
  } else if (x < 50 || x >= 50) {
    y = Math.floor(Math.random() * 100);
  }
  RADAR.append(DOT);
  DOT.classList.add("dot");
  DOT.style.setProperty("--x", `${x}%`);
  DOT.style.setProperty("--y", `${y}%`);
}

function repaeatDot() {
  setInterval(addDot, 8000);
}

// Events
document.addEventListener("DOMContentLoaded", () => {
  repaeatBeep();
  repaeatDot();
});
