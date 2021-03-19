var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send([
    {
      name: "Ana",
      age: 5
    },
    {
      name: "Juan",
      age: 3
    },
    {
      name: "Claudia",
      age: 4
    }
  ]);
});

module.exports = router;
