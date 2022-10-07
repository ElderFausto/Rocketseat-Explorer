function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + ' esta andando';
  }
}

const elder = new Person('elder')

console.log(elder.walk());