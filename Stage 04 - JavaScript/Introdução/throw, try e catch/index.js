// throw

function sayMyName(name = '') {
  if(name === '') {
    throw 'nome é obrigatorio'
  }

  console.log('depois do erro');
}

//try e catch

try {
  sayMyName()
} catch(e) {
  console.log(e);
}