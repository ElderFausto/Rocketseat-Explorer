let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let set = document.querySelector(".set");
let soundOn = document.querySelector(".sound-on");
let soundOff = document.querySelector(".sound-off");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let minutes;

const countDown = () => {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    if (minutes <= 0) {
      play.classList.remove("hide");
      pause.classList.add("hide");
      set.classList.remove("hide");
      stop.classList.add("hide");

      return;
    }

    if (seconds <= 0) {
      seconds = 60;

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    countDown();
  }, 1000);
};

play.addEventListener("click", function () {
  play.classList.add("hide");
  pause.classList.remove("hide");
  set.classList.add("hide");
  stop.classList.remove("hide");

  countDown();
});

pause.addEventListener("click", function () {
  play.classList.remove("hide");
  pause.classList.add("hide");
  set.classList.remove("hide");
  stop.classList.add("hide");
});

stop.addEventListener("click", function () {
  play.classList.remove("hide");
  pause.classList.add("hide");
  set.classList.remove("hide");
  stop.classList.add("hide");
});

soundOff.addEventListener("click", function () {
  soundOn.classList.remove("hide");
  soundOff.classList.add("hide");
});

soundOn.addEventListener("click", function () {
  soundOn.classList.add("hide");
  soundOff.classList.remove("hide");
});

set.addEventListener("click", function () {
  minutes = prompt("Quantos minutos ?");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
});
