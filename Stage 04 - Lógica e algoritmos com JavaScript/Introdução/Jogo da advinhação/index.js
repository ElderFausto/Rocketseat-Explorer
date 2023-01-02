let result = prompt('Advinhe o numero que estou pensando, entre 0 e 10')

const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

while (Number(result) != randomNumber) {
  result = prompt('Tente novamente')
  attempts++;
}

function imparOuPar() {
  if (result % 2 == 0) {
    alert('esse numero par')
  } else if(result % 2 == 1) {
    alert('esse numero é impar')
  }
} 

imparOuPar()

alert(`Parabéns voce acertou em ${attempts} tentativas.`)
console.log(result, randomNumber, match);



