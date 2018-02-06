const express = require('express');
const passwordUtils = require('../utils/passwordUtils');

const router = express.Router();

router.get('/verify', function(req, res, next) {
  let password = req.query.password;
  res.json(passwordUtils.verifyPassword(password));
});

router.get('/hash', function(req, res, next) {
  let password = req.query.password;
  res.json({
    'hash' : passwordUtils.hashPassword(password)
  });
});

router.get('/validate', function(req, res, next) {
  let password = req.query.password;
  let hash = req.query.hash;
  res.json({
    'isPassword' : passwordUtils.comparePassword(password,hash)
  });
});

router.get('/random', function(req, res, next) {
  res.json();
});

module.exports = router;