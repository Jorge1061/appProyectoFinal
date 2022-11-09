//Express para agregar las rutas
const express = require("express");
const router = express.Router();

//Videojuego controller para los métodos definidos
const ingredienteController = require("../controllers/ingredienteController");

//Definición de rutas para generos
router.get("/", ingredienteController.get);

router.get("/:id", ingredienteController.getById);

module.exports = router;