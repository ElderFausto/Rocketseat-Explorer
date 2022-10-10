/* 
  type conversion (typecasting) vs type coersion
*/

/* 
  FALSY

  quando um valor é considerado false em contextos onde um booleano
  é obrigatorio (condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/

console.log( 0 ? 'verdadeiro' : 'falso');
// esses valores do FALSY sempre vao retornar falso

/* 
  TRUTHY
  quando um valor é considerado true em contextos onde um booleano
  é obrigatorio (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/

console.log( 3.23 ? 'verdadeiro' : 'falso');
// esses valores do TRUTHY sempre vao retornar verdadeiro