/* 
  Manioulando strings e arrays

  separe um texto que contem espaços, em um novo array
  onde cada texto é uma posição do array. Depois disso,
  transforme o array em um texto e onde eram espaços, coloque _

*/

let phrase = "Eu quero tomar sorvete e comer pizza!"
let myArray = phrase.split('')
let phraseWithUnderline = myArray.join('_')

console.log(phraseWithUnderline.toUpperCase());