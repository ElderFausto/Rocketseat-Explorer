// operador condicional (ternario)

/* 
  dependendo da condição, nós recebemos valores diferentes

  condição entao valor 1 se nao valor 2
  condition ? value1 : value2
*/

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'

console.log(niceBreakfast);

let age = 25

const canDrive = age >= 18 ? 'pode dirigir' : 'nao pode dirigir';

console.log(canDrive);