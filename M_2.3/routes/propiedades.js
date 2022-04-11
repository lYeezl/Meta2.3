const express = require("express");
const router = express.Router();
const propiedades_controladores = require("../controladores/propiedades");

router.get("/", propiedades_controladores.read);
router.post("/", propiedades_controladores.create);
router.put("/:id", propiedades_controladores.update);
router.delete("/:id", propiedades_controladores.del);

router.get("/", (req,res) => 
{
    req.body.metodo = "GET";
    res.json(req.body);
});

router.post("/", (req,res) => 
{
    req.body.metodo = "POST";
    res.json(req.body);
});

router.put("/:id", (req,res) => 
{
    res.json(req.body);
});

router.delete("/:id", (req,res) => 
{
    req.body.metodo = "DELETE";
    res.json(req.body);
});

module.exports = router;