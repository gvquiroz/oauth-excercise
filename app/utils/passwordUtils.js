const owasp = require('owasp-password-strength-test');
const bcrypt = require('bcrypt');

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

module.exports = {
  verifyPassword,
  hashPassword,
  comparePassword
};