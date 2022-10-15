let option;
let itens = [];

while (option != 3) {
  option = Number(
    prompt(`
  Olá, digite o numero desejado!
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  );

  switch (option) {
    case 1:
      let item = prompt("Digite um numero");
      itens.push(item);
      break;
    case 2:
      if (itens.length == 0) {
        alert("Ainda nao existem itens na lista");
      } else {
        alert(itens);
      }
      break;
    case 3:
      alert("Programa encerrado");
      break;
    default:
      alert("opção invalida");
  }
}

console.log(option, itens);
