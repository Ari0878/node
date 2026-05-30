import express from "express";
const route = express.Router();
import { createUser } from "../controllers/userController.js";

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Brisset Hernandez
 *     responses:
 *       201:
 *         description: Usuario creado
 */

route.post('/', createUser);

export default route;
