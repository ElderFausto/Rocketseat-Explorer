// switch

function calculate(number1, operator, number2) {
  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;

    default:
      console.log("operador nao encontrado");
      break;
  }

  return result;
}

console.log(calculate(4, '*' , 2));