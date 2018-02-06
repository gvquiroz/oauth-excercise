const owasp = require('owasp-password-strength-test');
const bcrypt = require('bcrypt');
const passwordGenerator = require('generate-password');

owasp.config({
  allowPassphrases       : false,
  maxLength              : 64,
  minLength              : 10,
  minOptionalTestsToPass : 4,
});

function verifyPassword(password) {
  return owasp.test(password);
}

function hashPassword(password) {
  return bcrypt.hashSync(password,8);
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password,hash);
}

function random() {
  let password;
  do {
    password = passwordGenerator.generate({
      length: 32,
      numbers: true,
      symbols: true,
      uppercase: true,
      strict: true
    });
  } while (verifyPassword(password).strong);

  return password;
}

module.exports = {
  verifyPassword,
  hashPassword,
  comparePassword,
  random
};