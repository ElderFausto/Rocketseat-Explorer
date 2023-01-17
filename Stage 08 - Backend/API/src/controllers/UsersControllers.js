const AppError = require("../utils/AppError");

const sqliteConnection = require('../database/sqlite')

class UsersControllers {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users")
  }
}

module.exports = UsersControllers;
