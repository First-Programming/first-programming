const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Register');
});

router.get('/', (req, res) => {
  res.send('Get');
});
module.exports = router;
