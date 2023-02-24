import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sound.bgAudio.pause();
  });

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOff.classList.remove("hide");
    buttonSoundOn.classList.add("hide");
    sound.bgAudio.play();
  });

  buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}
