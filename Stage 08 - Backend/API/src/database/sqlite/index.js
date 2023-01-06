const sqLite3 = require("sqlite3");
const sqLite = require("sqlite");
const path = require('path')

async function sqLiteConnection() {
  const database = await sqLite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqLite3.Database
  }); 

  return database;
}

module.exports = sqLiteConnection;