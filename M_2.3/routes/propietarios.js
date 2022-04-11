const express = require("express");
const router = express.Router();
const modelos_controladores = require("../controladores/propietarios");

router.get("/", modelos_controladores.read);
router.post("/", modelos_controladores.create);
router.put("/:id", modelos_controladores.update);
router.delete("/:id", modelos_controladores.del);

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