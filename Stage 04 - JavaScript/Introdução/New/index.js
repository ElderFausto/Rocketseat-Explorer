/* 
  new

  left-hand-side expression
  criar um novo objeto

*/

let name = new String('elder')
name.surName = 'fausto'
let age = new Number(25)
console.log(name, age);

let data = new Date('2022-07-10')
console.log(data.__proto__);