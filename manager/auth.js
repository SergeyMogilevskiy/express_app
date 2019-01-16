const models = require("../models/auth");

const createUser = data => {
  return models.createUser(data);
};

const login = email => {
  return models.login(email);
};

const registerSession = email => {
  return models.registerSession(email);
};

const getSecretPage = email => {
  return models.getSecretPage(email);
};

const logaut = email => {
  return models.logaut(email);
};

module.exports = { createUser, login, registerSession, getSecretPage, logaut };
