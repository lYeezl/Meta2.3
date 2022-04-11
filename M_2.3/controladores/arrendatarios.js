const arrendatarios = require("../modelos/arrendatarios.json");
const _ = require("underscore");

const create = function(req,res)
{
    const id = arrendatarios.length + 1;
    const {nombre, rfc, propiedades} = req.body;
    if (nombre && propiedades && rfc) 
    {
        const newArrendatario = {...req.body, id}
        arrendatarios.push(newArrendatario);
        res.json(arrendatarios);
    }
    else
    {
        res.send("Error");
    }
}

const read = function(req, res)
{
    res.json(arrendatarios);
}

const update = function(req, res)
{
    const {id} = req.params;
    const {nombre, rfc, propiedades} = req.body;
    if (nombre && propiedades && rfc) 
    {
        _.each(arrendatarios, (arrendatario, i) =>
        {
            if (arrendatario.id == id) 
            {
                arrendatario.nombre = nombre;
                arrendatario.rfc = rfc;
                arrendatario.propiedades = propiedades;
            }
        });
        console.log(JSON.stringify(arrendatarios));
        res.json(arrendatarios);
    }
    else
    {
        res.send("Error");
    }
}

const del = function(req, res)
{
    let a = 0;
    const {id} = req.params;
    
    _.each(arrendatarios, (arrendatario, i) =>
    {
        if (arrendatario.id == id) 
        {
            a = i;
        }
    });
    arrendatarios.splice(a, 1);
    res.json(arrendatarios);
}

module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.del = del;