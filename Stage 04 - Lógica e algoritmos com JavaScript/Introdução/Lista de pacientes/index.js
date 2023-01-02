let pacientes = [
  {
    name: "elder",
    age: 26,
    color: "white",
  },
  { name: "joao", age: 80, color: "black" },
  { name: "maria", age: 30, color: "white" },
];

let pacientesNames = []
let dadosGeraisPacientes = []

for (let paciente of pacientes) {
  pacientesNames.push(paciente.name);
}

for (const property in pacientes) {
  dadosGeraisPacientes.push(pacientes[property]);
}

alert(pacientesNames)
alert(dadosGeraisPacientes)

let pacientesAlert = []

for(let i = 0; i < pacientes.length; i++) {
  pacientesAlert = [JSON.stringify(pacientes[i]), ...pacientesAlert]
}

alert(pacientesAlert)