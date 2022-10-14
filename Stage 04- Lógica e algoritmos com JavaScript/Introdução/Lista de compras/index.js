 /* 
  capture 10 itens para compor a lista de um supermercado
  apos capturar os 10 itens, imprima-os, separando por virgula
 */

let products = [];

for (let item = 0; item < 10; item++) {
  let itemName = prompt(`Digite um item ${item}`);

  products[item] = itemName
}

alert(products)