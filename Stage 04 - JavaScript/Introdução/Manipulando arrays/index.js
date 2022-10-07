/* 
  Manipulando arrays
*/

let techs = ['html', 'css', 'js'];

  // adicionar um item no fim
  techs.push('nodeJS')

  // adicionar no começo
  techs.unshift('sql')

  // remover do fim
  techs.pop()

  // temover do começo
  techs.shift()

  // pegar somente alguns elementos do array
  console.log(techs.slice(1, 3));

  // remover 1 ou mais itens em qualquer posição do array
  techs.splice(1, 2)

  // encontrar a posição de um elmento no array
  let indexof = techs.indexOf('html')
  console.log(indexof);


console.log(techs);


