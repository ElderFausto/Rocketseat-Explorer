const Controls = ({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) => {
  const play = () => {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  };

  const pause = () => {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  };

  const reset = () => {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  };

  const getMinutes = () => {
    let newMinutes = prompt("Quantos minutos ?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  };

  return {
    reset,
    play,
    pause,
    getMinutes
  };
};

export default Controls;
