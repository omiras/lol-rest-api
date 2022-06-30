const express = require('express');

const championsControllers = require('../../controllers/championsControllers');

const router = express.Router();

router.get("/", championsControllers.getAllChampions);

module.exports = router;