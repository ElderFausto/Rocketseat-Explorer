const { Router } = require("express")

const UsersController = require("../controllers/UsersControllers")

const userRoutes = Router()

function myMiddleware(request, response, next) {
  console.log('Viva Cristo Rei');
  
  // if(request.body.isAdmin) {
  //   return response.json({message: "usuario nao autorizado"})
  // }

  next();
}

const usersController = new UsersController();

userRoutes.post("/", myMiddleware, usersController.create);

module.exports = userRoutes;