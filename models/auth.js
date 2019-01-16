const { Users } = require("../lib/db");

function createUser(data) {
  return Users.forge(data).save();
}

function login(email) {
  return Users.query("where", "email", email).fetch();
}

function registerSession(email) {
  return Users.where("email", email).save(
    { session_id: true },
    { method: "update" }
  );
}
function getSecretPage(email) {
  return Users.query("where", "email", email).fetch();
}

function logaut(email) {
  return Users.where("email", email).save(
    { session_id: false },
    { method: "update" }
  );
}

module.exports = { createUser, login, registerSession, getSecretPage, logaut };
