const express = require('express');
const os = require('os');

const router = express.Router();

router.get('*', function(req, res, next) {
  res.json(os.networkInterfaces());
});

module.exports = router;