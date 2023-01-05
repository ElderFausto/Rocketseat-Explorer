const AppError = require("../utils/AppError")

class UsersControllers {
  
    create(request, response) {
      const { name, email, password } = request.bodyaaaa;

      if(!name) {
        throw new AppError("Nome é obrigatorio")
      }

      response.status(201).json({ name, email, password });
    }
}

module.exports = UsersControllers;