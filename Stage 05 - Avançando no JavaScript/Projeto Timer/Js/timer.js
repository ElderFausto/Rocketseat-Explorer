import Sounds from "./sounds.js";

const Timer = ({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) => {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent);

  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

  };

  const reset = () => {
    updateDisplay(minutes, 0);
    clearInterval(timerTimeOut);
  };

  function countDown () {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0


      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay()
        Sounds().timeEnd()
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  };

  const updateMinutes = (newMinutes) => {
    minutes = newMinutes
  }

  const hold = () => {
    clearTimeout(timerTimeOut);
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  };
}

export default Timer
