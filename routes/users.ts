import express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(_req, res: express.Response): void {
  res.send('respond with a resource');
});

module.exports = router;
