const btnTry = document.querySelector(".btnTry");
const btnReset = document.querySelector(".btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let tentativas = 1;


// funções
const handleTryClick = (event) => {
  event.preventDefault();

  const inputNumber = document.querySelector(".inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    screen2.querySelector("h2").innerText = `acertou em ${tentativas} tentativas`;
  }

  inputNumber.value = "";
  tentativas++;
};

const handleResetClick = () => {
  toggleScreen();
  tentativas = 1;
};

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
