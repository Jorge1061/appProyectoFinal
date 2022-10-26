//Express para agregar las rutas
const express = require("express");
const router = express.Router();

//Videojuego controller para los métodos definidos
const mesaController = require("../controllers/mesaController");

//Definición de rutas para generos
router.get("/", mesaController.get);

router.get("/:id", mesaController.getById);

module.exports = router;