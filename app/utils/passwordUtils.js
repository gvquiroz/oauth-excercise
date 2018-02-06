const owasp = require('owasp-password-strength-test');
const md5 = require('md5');

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
  return md5(password)
}

module.exports = {
  verifyPassword,
  hashPassword
};