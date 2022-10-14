let student = prompt('qual o nome do aluno ?')

let n1 = prompt('qual a nota da primeira prova ?')
let n2 = prompt('qual a nota da segunda prova ?')
let n3 = prompt('qual a nota da terceira prova ?')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
average = average.toFixed(2)

alert(`sua nota foi ${average}`)

let result = average > 6 ? alert('aluno aprovado') : alert('aluno reprovado')