var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ existing_routes: [
    "/",
    "highscores/"
  ] });
});

module.exports = router;
