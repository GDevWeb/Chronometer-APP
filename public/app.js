"use strict";
// 3. **Chronomètre :**
//    Implémentez un chronomètre simple en TypeScript. Utilisez le DOM pour afficher le temps écoulé et ajoutez des boutons pour démarrer, arrêter et réinitialiser le chronomètre.
// Variables :
//   Buttons :
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
//   Affichage :
const display = document.querySelector("#display");
let timer;
let isRunning = false;
let secondes = 0;
let minutes = 0;
let hours = 0;
// Mise en marche / pause du script :
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        if (startButton) {
            startButton.innerText = "Start";
            startButton.style.backgroundColor = "darkGreen";
        }
    }
    else {
        timer = setInterval(updateDisplay, 1000);
        if (startButton) {
            startButton.innerText = "Pause";
            startButton.style.backgroundColor = "darkOrange";
        }
    }
    isRunning = !isRunning;
}
// Mise à jour du temps, conversion H:m:s :
function updateDisplay() {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    //   Affichage du temps dans le DOM :
    const displayData = `${pad(hours)}:${pad(minutes)}:${pad(secondes)}`;
    if (display) {
        display.innerText = displayData;
    }
}
//Réinitialisation du chronomètre :
function reset() {
    clearInterval(timer);
    isRunning = false;
    secondes = 0;
    minutes = 0;
    hours = 0;
    if (display) {
        display.innerText = "00:00:00";
    }
    if (startButton) {
        startButton.innerText = "Start";
    }
}
function pad(value) {
    return value < 10 ? `0${value}` : value;
}
// Events :
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", startStop);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", reset);
//Date dynamique du footer :
const currentYearElement = document.getElementById("span#currentYear");
const currentYear = new Date().getFullYear();
if (currentYearElement) {
    currentYearElement.textContent = currentYear.toString();
}
