const express = require('express');

const championsControllers = require('../../controllers/championsControllers');

const router = express.Router();
/**
 * @openapi
 * /api/v1/champions:
 *   get:
 *     summary: Get all league of legends champions
 *     tags:
 *       - Champions
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   description: Array de objetos con todos los campeones
 *                      
 */
router.get("/", championsControllers.getAllChampions);
/**
 * @openapi
 * /api/v1/champions/{id}:
 *   get:
 *     summary: Get the league of legend champion identified by its id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: neeko
 *     tags:
 *       - Champions
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                      
 */
router.get("/:id", championsControllers.getChampionById);

/**
 * @openapi
 * /api/v1/champions/tag/{tag}:
 *   get:
 *     summary: Get the champions that belong to a specified tag
 *     parameters:
 *       - in: path
 *         name: tag
 *         schema:
 *           type: string
 *         required: true
 *         example: Support
 *     tags:
 *       - Champions
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                      
 */
router.get("/tag/:tag", championsControllers.getChampionsByTag);

module.exports = router;