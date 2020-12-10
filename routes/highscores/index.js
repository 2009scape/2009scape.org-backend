var express = require('express');
var router = express.Router();
let config = require("../../config");
let parsers = require("./parsers");
const rankedMap = require('./rankcalculator');

router.get('/', function (req, res, next) {
  res.json({
    existing_routes: [
      "/config",
      "/listPlayers",
      "/ignoredPlayers",
      "/playersByTotal",
      "/playersBySkill/:id",
      "/playerSkills/:playername",
      "/rankedMap"
    ]
  });
});

router.get('/config', function (req, res, next) {
  res.json(config);
});

router.get('/listPlayers', function (req, res, next) {
  res.json(parsers.playerSaves());
});

router.get('/ignoredPlayers', function (req, res, next) {
  res.json(parsers.ignoredPlayers());
});

router.get('/playersByTotal', function (req, res, next) {
  res.json(parsers.playersByTotal());
});

router.get('/playersBySkill/:id', function (req, res, next) {
  res.json(parsers.playersBySkill(req.params.id));
});

router.get('/playerSkills/:playername', function (req, res, next) {
  res.json(parsers.playerSkills(req.params.playername));
});

router.get('/rankedMap', function (req, res, next) {
  res.json(rankedMap);
});

module.exports = router;
