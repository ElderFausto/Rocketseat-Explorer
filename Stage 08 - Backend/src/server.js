const express = require('express')
const app = express();
const PORT = 3333;

app.get('/message/:id/:user', (req, res) => {
  const {id, user} = req.params

  res.send(`
    id da mensagem:  ${id},
    para o usuario: ${user}
    `)
})

//query param
app.get("/users", (req, res) => {
  const {page, limit} = req.query
  // http://localhost:3333/users?page=5&limit=10
  res.send(`Pagina: ${page}, mostrar: ${limit}`)
})

app.listen(PORT, () => {
  console.log(`o servidor esta rodando na porta ${PORT}`);
})