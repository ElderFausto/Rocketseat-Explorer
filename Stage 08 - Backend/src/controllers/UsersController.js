const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;
    const database = await sqliConnection();
    const checkUserExist = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExist) {
      throw new AppError("Esse e-mail ja esta em uso");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email } = request.body;
    const { id } = request.params;

    const database = await sqliConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("Usuario nao encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("este email ja esta sendo usado");
    }

    user.name = name;
    user.email = email;

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    updated_at = ?,
    WHERE id = ?,
    [user.name, user.email, new Date(), id]
    `);
    return response.status(200).json();
  }
}

module.exports = UsersController;
