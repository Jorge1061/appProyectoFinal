const express=require("express");
const router=express.Router();

//Controlador con las acciones de las rutas
const platilloController=require("../controllers/platilloController");
//Rutas de platillos

router.get("/",platilloController.get);

router.post("/",platilloController.create);

router.get("/:id",platilloController.getById);

router.put("/:id",platilloController.update);



module.exports=router;