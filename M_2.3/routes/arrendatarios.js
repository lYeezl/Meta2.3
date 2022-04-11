const express = require("express");
const router = express.Router();
const arrendatarios_controladores = require("../controladores/arrendatarios");

router.get("/", arrendatarios_controladores.read);
router.post("/", arrendatarios_controladores.create);
router.put("/:id", arrendatarios_controladores.update);
router.delete("/:id", arrendatarios_controladores.del);

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