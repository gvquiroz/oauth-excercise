const md5 = require('md5');

function hashPassword (password) {
    return md5(password)
  }

  module.exports = {
    hashPassword
  }