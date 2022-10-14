// for in

let person = {
  name: 'elder',
  age: 26,
  weight: 70
}

for(let property in person) {
  console.log(property);
  console.log(person[property]);
}

