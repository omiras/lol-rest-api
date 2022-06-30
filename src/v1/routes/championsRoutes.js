const express = require('express');

const championsControllers = require('../../controllers/championsControllers');

const router = express.Router();

router.get("/", championsControllers.getAllChampions);
router.get("/:id", championsControllers.getChampionById);
router.get("/tag/:tag", championsControllers.getChampionsByTag);

module.exports = router;